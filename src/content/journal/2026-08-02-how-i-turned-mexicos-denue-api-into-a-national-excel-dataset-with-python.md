---
title: How I Turned Mexico’s DENUE API Into a National Excel Dataset With Python
description: How I used INEGI’s DENUE API, SCIAN codes, pagination, retries and
  a bronze-layer design to build a nationwide Excel dataset in Python.
pubDate: 2026-08-02
tags:
  - APIs
  - Python
  - Data Engineering
  - Open Data
  - Mexico
draft: false
---
An API request can be very small.

You send a URL, receive some JSON, print the response, and it looks like the work is finished.

But one successful request is not the same thing as having a complete dataset.

What happens when the API has thousands of records? What happens when one state has no results? What happens when the server returns an unusual response? How do I know where each row came from? How do I save all the information without changing identifiers or losing fields?

Those were the actual problems I wanted to solve.

I built a Python program that connects to Mexico’s DENUE API, checks how many establishments exist for a given economic activity, downloads them state by state, and writes the results into one Excel workbook.

The program can be used for many industries. It could collect bakeries, grocery stores, hotels, restaurants, manufacturers, schools, repair shops, or other types of establishments classified by INEGI.

The industry is a configuration.

The main engineering problem is moving reliably from an API to a structured dataset.

## What is DENUE?

DENUE stands for **Directorio Estadístico Nacional de Unidades Económicas**.

It is maintained by INEGI, Mexico’s national statistics and geography institute.

A simple way to understand DENUE is to think of it as a large official directory of economic establishments in Mexico.

An establishment could be:

```
A bakery
A supermarket
A hotel
A restaurant
A factory
A repair shop
A private school
A warehouse
```

DENUE does not only store the name of an establishment. It also organizes information about what that establishment does, where it is located, and approximately how large it is.

A record can contain fields such as:

```
CLEE
Establishment ID
Commercial name
Legal name
Economic activity
Employee-size range
State
Municipality
Locality
Postal code
Establishment type
Longitude
Latitude
```

For example, a simplified record could look like this:

```
{
  "Id": "1234567",
  "Nombre": "PANADERIA EJEMPLO",
  "Clase_actividad": "Panificación tradicional",
  "Estrato": "6 a 10 personas",
  "Ubicacion": "PUEBLA, Puebla",
  "Longitud": "-98.20",
  "Latitud": "19.04"
}
```

The API normally returns much more information, but this simplified example shows the basic idea.

Each JSON object represents one establishment.

That distinction matters. DENUE is mainly a directory of establishments or locations. It is not necessarily a perfectly consolidated list of parent companies.

A hotel chain with ten locations may appear ten times. A manufacturer with separate offices and production facilities may also appear in multiple records.

## What is an API endpoint?

An API endpoint is a specific operation offered by an API.

You can think of an API as a service with several different doors.

One door lets you search by name. Another door retrieves one record. Another counts records. Another retrieves records for a geographic area and economic activity.

Each door has a different URL structure and expects different parameters.

DENUE provides several endpoints.

## The `Buscar` endpoint

`Buscar` is useful for general searches.

It can use:

```
Search words
Latitude
Longitude
Distance radius
```

A possible use would be:

> Find establishments containing the word “hotel” within five kilometres of a geographic point.

This can be useful for local exploration.

However, it is not the best method for creating a complete national dataset because keyword searches can be inconsistent.

One establishment may use “hotel” in its name. Another may use “hostería,” “posada,” or a brand name that does not mention accommodation at all.

## The `Nombre` endpoint

`Nombre` searches commercial and legal names.

It is useful when I already know the name of an organization and want to locate matching establishments.

For example:

```
Search for establishments whose name contains “Ejemplo”
```

This is useful for investigation, but again, it is not ideal for downloading an entire industry.

## The `Ficha` endpoint

`Ficha` retrieves the details of one establishment using its DENUE ID.

The logic is:

```
I already have the establishment ID
→
I request the establishment’s record
```

This is useful when inspecting one known record.

It is not designed to download thousands of establishments.

## The `BuscarEntidad` endpoint

`BuscarEntidad` retrieves establishments inside one state.

This is useful when geography is the main filter.

For example:

```
Retrieve establishments in Jalisco
```

But a state may contain hundreds of thousands of economic establishments from many unrelated industries.

I needed more control over the economic activity.

## The `BuscarAreaAct` endpoint

`BuscarAreaAct` means, approximately:

> Search by geographic area and economic activity.

This became the main endpoint for retrieving the dataset.

It supports several levels of geographic detail:

```
State
Municipality
Locality
AGEB
Block
```

It also supports several levels of economic classification:

```
Sector
Subsector
Branch
Class
```

This means I can construct a query such as:

> Retrieve establishments classified as traditional bakeries in Puebla.

Or:

> Retrieve hotels with integrated services in Quintana Roo.

Or:

> Retrieve grocery stores in Jalisco.

The endpoint also accepts a start record and an end record. Those two values are how pagination works.

## The `BuscarAreaActEstr` endpoint

`BuscarAreaActEstr` works similarly to `BuscarAreaAct`, but it also supports filtering by establishment-size range.

That makes it possible to request something more specific, such as:

> Retrieve hotels in a particular state with a selected employee-size range.

I did not need this restriction for the initial bronze dataset because I wanted to preserve the complete set of matching establishments.

## The `Cuantificar` endpoint

`Cuantificar` does not return the full establishments.

It returns a count.

It answers a question such as:

> How many traditional bakeries are registered in this state?

A simplified response looks like this:

```
[
  {
    "AE": "311812",
    "AG": "21",
    "Total": "1243"
  }
]
```

The fields mean:

```
AE = economic activity
AG = geographic area
Total = number of matching establishments
```

This endpoint became essential to the design.

Before downloading a dataset, I first ask how many records exist.

## What is SCIAN?

DENUE uses the **Sistema de Clasificación Industrial de América del Norte**, or SCIAN.

SCIAN is a classification system for economic activities.

Instead of relying only on words, it assigns numeric codes to industries.

The system is hierarchical. It begins with broad categories and becomes increasingly specific.

A simplified example might look like this:

```
31       Manufacturing
311      Food manufacturing
3118     Bakeries and tortilla manufacturing
31181    Bread and bakery product manufacturing
311812   Traditional bakeries
```

The six-digit code represents a specific economic class.

This is useful because searching for a word is not the same as requesting an official classification.

Consider a keyword search for:

```
bakery
```

It may find businesses whose name includes that word.

But some bakeries may have names such as:

```
La Espiga
El Trigal
Dulce Hogar
San José
```

Their names do not necessarily contain the word “bakery.”

A SCIAN query does not depend on the commercial name. It depends on the economic activity assigned to the establishment.

## Examples from different industries

The same extractor can use different SCIAN classes:

```
SCIAN_CLASSES = {
    "311812": "Traditional bakeries",
    "461110": "Grocery and miscellaneous food retail stores",
    "721111": "Hotels with other integrated services",
    "722511": "À la carte and multi-course restaurants",
}
```

The program does not need a different architecture for every industry.

I can change the configuration:

```
classes = ["311812", "461110"]
```

and collect bakeries and grocery stores.

Or:

```
classes = ["721111", "722511"]
```

and collect hotels and restaurants.

The code that handles requests, pagination, retries, metadata, and Excel stays the same.

## How the complete flow works

The extraction process works one state and one SCIAN class at a time.

Suppose I want to collect traditional bakeries across Mexico.

The class is:

```
311812
```

The program starts with the first state:

```
01 = Aguascalientes
```

The first question is not:

> Give me all the bakeries.

The first question is:

> How many bakeries are available?

The program calls `Cuantificar`.

Suppose the API responds:

```
[
  {
    "AE": "311812",
    "AG": "01",
    "Total": "87"
  }
]
```

Now the program knows there are 87 records.

If the selected page size is 500, it only needs one request:

```
Records 1–87
```

It then calls `BuscarAreaAct` and writes those 87 records to Excel.

After that, it moves to the next state:

```
02 = Baja California
```

The same process happens again:

```
Count records
Calculate pages
Download pages
Write rows
Continue
```

This continues across all requested states and classes.

## Why I count before downloading

My first version did not use `Cuantificar`.

It called `BuscarAreaAct` directly.

The idea was simple:

```
Request records 1–500
Request records 501–1000
Keep going until the API returns an empty list
```

This approach sounds reasonable.

But I discovered an edge case.

For one valid combination of state and economic activity, there were zero records.

Instead of returning:

```
[]
```

the server returned a malformed HTTP response:

```
HTTP/1.1 000
```

`000` is not a standard HTTP status code.

Python did not interpret it as “zero records.” It interpreted it as a broken HTTP response.

At first, this looked like a temporary server problem.

The program retried:

```
Attempt 1
Attempt 2
Attempt 3
```

But every attempt failed in the same way.

The important question was:

> Is the server temporarily unavailable, or does this query simply have no data?

I used `Cuantificar` for the same state and class.

The response was:

```
[
  {
    "AE": "EXAMPLE_CLASS",
    "AG": "EXAMPLE_STATE",
    "Total": "0"
  }
]
```

That explained the problem.

There were no records to download.

The correct logic became:

```
Call Cuantificar
Read Total
If Total is 0, skip the query
If Total is greater than 0, call BuscarAreaAct
```

In Python:

```
total_available = fetch_total(
    token=args.token,
    state_code=state_code,
    scian_class=scian_class,
    timeout=args.request_timeout,
    max_retries=args.max_retries,
)

if total_available == 0:
    print("No records — skipping")
    continue
```

This stopped the program from sending requests that were known to have no results.

It also made the process easier to understand.

## How the `BuscarAreaAct` URL is constructed

The `BuscarAreaAct` endpoint receives several parameters in a fixed order.

Conceptually, the URL looks like this:

```
BuscarAreaAct/
state/
municipality/
locality/
ageb/
block/
sector/
subsector/
branch/
class/
establishment_name/
start/
end/
establishment_id/
token
```

For a state-level query, I do not want to restrict municipality, locality, AGEB, or block.

DENUE uses `0` in many positions to mean:

```
Do not apply a restriction here
```

The parameters in Python look like this:

```
params = [
    state_code,
    "0",          # all municipalities
    "0",          # all localities
    "0",          # all AGEBs
    "0",          # all blocks
    "0",          # all sectors
    "0",          # all subsectors
    "0",          # all branches
    scian_class,
    "0",          # all establishment names
    str(start),
    str(end),
    "0",          # all establishment IDs
    token,
]
```

Suppose the query is:

```
State: Puebla
Class: Traditional bakeries
Records: 1–500
```

The program inserts the state code, SCIAN class, start record, and end record into the correct positions.

All other geographic and activity levels remain unrestricted.

## Why the token is kept outside the code

DENUE requires an API token.

A bad approach would be:

```
TOKEN = "my-real-secret-token"
```

If the code is uploaded to GitHub, copied into an article, or shown in a screenshot, the token becomes public.

Instead, I keep it in an environment variable:

```
export DENUE_TOKEN="my-token"
```

Python reads it with:

```
os.environ.get("DENUE_TOKEN")
```

The real token is never written into the script.

The request URL is also stored in redacted form when I create extraction metadata:

```
.../1/500/0/[REDACTED]
```

This lets me understand how the request was constructed without exposing the credential.

## How pagination works

An API may limit how many records it returns in one response.

Even when the API accepts large ranges, dividing the extraction into pages is safer and easier to manage.

Suppose `Cuantificar` returns:

```
Total: 1,243
```

And I select:

```
Page size: 500
```

The program calculates:

```
Page 1: records 1–500
Page 2: records 501–1000
Page 3: records 1001–1243
```

The last page is smaller.

The calculation is:

```
page_end = min(
    page_start + page_size - 1,
    total_available,
)
```

For the first page:

```
page_start = 1
page_end = min(500, 1243)
page_end = 500
```

For the second page:

```
page_start = 501
page_end = min(1000, 1243)
page_end = 1000
```

For the final page:

```
page_start = 1001
page_end = min(1500, 1243)
page_end = 1243
```

Because the total is already known, the program does not need to request another empty page.

## What the API returns

`BuscarAreaAct` returns a JSON list.

A simplified response could look like this:

```
[
  {
    "Id": "100001",
    "CLEE": "EXAMPLE_CLEE_1",
    "Nombre": "ESTABLECIMIENTO A",
    "Clase_actividad": "Panificación tradicional",
    "Estrato": "0 a 5 personas",
    "Ubicacion": "PUEBLA, Puebla",
    "Longitud": "-98.20",
    "Latitud": "19.04"
  },
  {
    "Id": "100002",
    "CLEE": "EXAMPLE_CLEE_2",
    "Nombre": "ESTABLECIMIENTO B",
    "Clase_actividad": "Panificación tradicional",
    "Estrato": "6 a 10 personas",
    "Ubicacion": "TEHUACÁN, Puebla",
    "Longitud": "-97.39",
    "Latitud": "18.46"
  }
]
```

Python parses this JSON into:

```
list[dict[str, Any]]
```

That means:

```
A list
containing dictionaries
where each dictionary represents one establishment
```

The program loops through the list:

```
for item in payload:
    ...
```

Each `item` becomes one Excel row.

## Why API requests need retries

A national extraction can involve hundreds of requests.

Even when the code is correct, one request may fail because of:

```
A temporary server problem
A slow connection
A timeout
A TLS interruption
A connection reset
Malformed JSON
Malformed HTTP
A local network interruption
```

Stopping the entire process after one temporary failure would make the extractor fragile.

The program catches several types of exceptions:

```
urllib.error.HTTPError
urllib.error.URLError
http.client.HTTPException
socket.timeout
ssl.SSLError
ConnectionError
OSError
TimeoutError
json.JSONDecodeError
```

When a request fails, the program waits before trying again.

The delay increases after every attempt:

```
delay = min(
    (2 ** attempt) + random.random(),
    60.0,
)
```

A possible sequence is:

```
First failure: wait about 1 second
Second failure: wait about 2 seconds
Third failure: wait about 4 seconds
Fourth failure: wait about 8 seconds
```

The random part adds a small variation.

This technique is called exponential backoff.

## Retries and zero results are not the same thing

This distinction was one of the most important lessons from the project.

A temporary error may succeed after waiting:

```
Timeout
→
Wait
→
Retry
→
Success
```

A zero-result query will not succeed after waiting:

```
Total = 0
→
Retry
→
Still Total = 0
```

Retries are useful for technical failures.

`Cuantificar` is useful for deciding whether the data exists in the first place.

The extractor needs both.

## Why the program continues after one failure

Suppose the program processes:

```
32 states
×
4 economic classes
=
128 state–class tasks
```

Imagine that task 74 fails temporarily.

It would be wasteful to discard the results of the previous 73 tasks.

Instead, the program records the failed task:

```
State code
State name
SCIAN class
Page start
Page end
Error
```

Then it continues.

At the end, the workbook reports:

```
Completed tasks
Failed tasks
Total records written
Final status
```

This makes it possible to inspect the error and rerun only what failed.

## What is a bronze layer?

I describe the resulting dataset as a **bronze layer**.

The idea comes from data engineering architectures where information moves through stages.

A simple version is:

```
Bronze
→
Silver
→
Gold
```

The bronze layer is the closest version to the original source.

It is raw or nearly raw.

The silver layer is cleaned and standardized.

The gold layer is organized for analysis, reporting, or a specific application.

## What the bronze layer does not do

The bronze process does not try to fix the data.

It does not:

```
Correct establishment names
Remove extra spaces
Standardize capitalization
Merge similar establishments
Remove duplicates
Reclassify activities
Infer missing values
Create analytical scores
```

For example, DENUE could contain:

```
PANADERIA LA ESTRELLA
PANADERIA LA ESTRELLA 
Panaderia La Estrella
```

The bronze layer preserves those values.

It does not decide whether they represent the same establishment.

That decision belongs later.

## What metadata I add to each row

Although I preserve the source fields, I also add technical fields describing the extraction.

Examples include:

```
bronze_run_id
bronze_source
bronze_endpoint
bronze_retrieved_at_utc
bronze_state_code_requested
bronze_state_name_requested
bronze_scian_class_requested
bronze_page_number
bronze_page_start
bronze_page_end
bronze_record_index_in_batch
bronze_batch_key
bronze_record_hash
bronze_request_url_redacted
```

These fields are not provided directly by DENUE.

They are created by my extraction program.

They answer questions such as:

```
When did I retrieve this row?
Which state did I request?
Which economic class did I request?
Which API page contained this record?
Which execution produced the row?
What request range was used?
```

Without this metadata, I would only have the final values.

With it, I also have the history of how those values entered the dataset.

## Preserving the original JSON

Excel is tabular.

JSON is more flexible.

When I convert JSON into columns, there is a risk that a future field will not be included in my predefined column list.

To avoid losing information, I save the full original JSON object in:

```
bronze_raw_json
```

A row may therefore contain normal columns such as:

```
Id
Nombre
Clase_actividad
Estrato
Ubicacion
Latitud
Longitud
```

And also the complete source object serialized as text.

I also store unrecognized fields in:

```
bronze_extra_fields_json
```

Suppose INEGI adds a new property tomorrow:

```
{
  "Nueva_propiedad": "example"
}
```

Even if my Python script does not yet have a dedicated Excel column for it, the value remains inside the raw JSON.

## Why I generate a hash

Each raw JSON object receives a SHA-256 hash.

First, I serialize the object consistently:

```
raw_json = json.dumps(
    item,
    ensure_ascii=False,
    separators=(",", ":"),
    sort_keys=True,
)
```

Sorting the keys is important.

These two objects contain the same information:

```
{
  "Id": "1",
  "Nombre": "Example"
}
```

```
{
  "Nombre": "Example",
  "Id": "1"
}
```

But their text order is different.

Canonical serialization creates a predictable representation.

Then I generate the hash:

```
record_hash = hashlib.sha256(
    raw_json.encode("utf-8")
).hexdigest()
```

The result looks like a long string:

```
4f6d9e...
```

The hash acts as a fingerprint.

Suppose I extract the same DENUE record in August and again in September.

If the hashes are equal:

```
August:   4f6d9e...
September: 4f6d9e...
```

the complete serialized records are equal.

If the hashes are different:

```
August:   4f6d9e...
September: 981ae2...
```

something changed.

The hash does not tell me which field changed. It tells me which records should be compared.

## Why I used Excel

A database would be more suitable for a large recurring production system.

But Excel was useful for the first version because it is easy to open, inspect, filter, and share.

The program uses XlsxWriter:

```
xlsxwriter.Workbook(
    output_path,
    {
        "constant_memory": True,
        "strings_to_urls": False,
        "strings_to_formulas": False,
    },
)
```

`constant_memory` means the library writes rows progressively instead of keeping the entire workbook in memory.

This is important when the dataset contains many rows.

I also disable automatic URL and formula detection.

In a bronze layer, I do not want Excel to reinterpret the source.

## Why values are written as text

Excel often tries to guess the type of a value.

That can damage raw data.

For example:

```
State code "01"
```

could become:

```
1
```

A postal code such as:

```
01234
```

could become:

```
1234
```

A long identifier could become scientific notation:

```
1.23457E+18
```

Text beginning with `=` could be interpreted as a formula.

To avoid this, the program writes source values as text.

The goal is not to make the bronze workbook visually perfect.

The goal is to preserve the source representation.

## What happens if the dataset exceeds one Excel sheet?

An Excel worksheet supports a maximum of:

```
1,048,576 rows
```

The first row is used for headers.

That leaves:

```
1,048,575 data rows
```

The writer checks the current row.

If the sheet becomes full, it creates another one:

```
bronze_denue
bronze_denue_2
bronze_denue_3
```

The program can therefore continue writing without crashing at the worksheet limit.

## The `bronze_run` sheet

The workbook also contains a summary sheet called:

```
bronze_run
```

This sheet describes the execution rather than the establishments.

It contains information such as:

```
Run ID
Status
Start time
Finish time
States requested
SCIAN classes requested
Page size
Records written
Completed tasks
Failed tasks
Output filename
```

This means the Excel file contains two kinds of information:

```
The data
The context explaining how the data was produced
```

## The complete process in one example

Suppose I want to build a bronze dataset of traditional bakeries in three states:

```
01 = Aguascalientes
02 = Baja California
03 = Baja California Sur
```

The SCIAN class is:

```
311812
```

The page size is:

```
500
```

The program starts with Aguascalientes.

### Step 1: Count

It calls `Cuantificar`.

```
State: 01
Class: 311812
```

Suppose the result is:

```
Total: 87
```

### Step 2: Calculate pages

There are fewer than 500 records.

The only range is:

```
1–87
```

### Step 3: Download

It calls `BuscarAreaAct` for records 1–87.

### Step 4: Write

Each JSON object becomes one Excel row.

### Step 5: Add metadata

Each row also receives:

```
Run ID
Retrieval time
State requested
Class requested
Page number
Page range
Record hash
```

### Step 6: Continue

The program moves to Baja California.

Suppose `Cuantificar` returns:

```
Total: 1,243
```

The program requests:

```
1–500
501–1000
1001–1243
```

It writes every response into the same workbook.

Then it moves to Baja California Sur.

Suppose the total is:

```
0
```

The program prints:

```
No records — skipping
```

It does not call `BuscarAreaAct`.

The extraction then finishes and writes the `bronze_run` summary.

That is the whole flow.

## What value this creates

The useful result is not only a Python script that makes HTTP requests.

The value comes from making the process understandable and dependable.

The program knows:

```
What economic category it is requesting
What geographic area it is requesting
How many records should exist
Which pages are required
How to respond to temporary failures
When not to retry
How to preserve the original object
How to trace every Excel row back to a request
How to avoid exposing the API token
How to produce a workbook that can be inspected immediately
```

A one-line API request does not provide these guarantees.

The pipeline does.

## What comes after bronze?

The bronze workbook is not the final analytical dataset.

A later silver layer could:

```
Standardize names
Normalize geographic fields
Validate coordinates
Identify exact duplicates
Compare records between runs
Separate address components
Connect likely related establishments
```

For example:

```
PANADERIA LA ESTRELLA
PANADERIA LA ESTRELLA 
Panaderia La Estrella
```

could become:

```
Panadería La Estrella
```

But that transformation should not overwrite the original bronze values.

A gold layer could then produce:

```
Number of bakeries by state
Hotels by municipality
Restaurants by employee-size range
Industry density by geographic area
Changes between monthly extraction runs
Coverage reports
Maps and dashboards
```

Bronze preserves.

Silver cleans.

Gold answers questions.

## Conclusion

DENUE provides a large amount of structured economic information through a public API.

But downloading it reliably requires more than sending one request.

I needed to understand the difference between endpoints, use SCIAN codes to define industries, count records before downloading them, calculate pagination, distinguish zero results from temporary errors, retry unstable requests, preserve the original JSON, add lineage metadata, protect the token, and generate an Excel workbook without changing the source values.

The final output is one `.xlsx` file.

Behind that file is a complete extraction process:

```
Choose states and industries
Count available records
Skip empty combinations
Calculate pages
Download JSON
Preserve original values
Add extraction metadata
Write rows to Excel
Record errors and execution details
```

That is how a small API request becomes a reusable data pipeline.