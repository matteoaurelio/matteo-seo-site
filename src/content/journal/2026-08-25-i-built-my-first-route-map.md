---
title: I built my first route map
description: I built my first route map using QGIS, OpenStreetMap and
  openrouteservice, and explored how geospatial data can create value across
  different industries.
pubDate: 2026-08-25
tags:
  - GIS
  - Geospatial data
  - Data visualization
  - QGIS
  - Business applications
draft: false
---
Today I built my first route map from geographic data.

I started with a couple of coordinates and used **QGIS**, **OpenStreetMap** and **openrouteservice** to turn them into a real road route. Then I worked on the visual side: simplifying the background, styling the route, creating stop markers, positioning labels and exporting the final map.

What I enjoyed most was discovering how useful geospatial data can be outside the obvious “map” use case.

Maps are really a way of giving physical context to business data.

Transport companies can visualize routes and networks. Logistics companies can show corridors, depots and distribution coverage. Tourism companies can turn an itinerary into something people can understand immediately. Real-estate businesses can visualize properties in relation to infrastructure, services or neighborhoods.

There are many other applications too.

Retailers can study where customers, stores and competitors are concentrated. Utilities can map infrastructure and service areas. Field-service companies can organize technicians and jobs geographically. Agricultural businesses can work with fields, suppliers and production areas. Insurers can visualize exposure to floods, fires or other geographic risks. Cities and infrastructure companies can combine transport, population and land-use data.

Even fairly ordinary business datasets often contain geography somewhere: an address, coordinates, a postcode, a route, a branch, a warehouse or a customer location.

That geographic dimension can reveal patterns that are difficult to notice in a spreadsheet.

For my small experiment, the interesting technical detail was routing. Connecting a couple of coordinates with a straight line is trivial. Generating the road geometry between them requires a routing engine and an underlying road network. Once I had that geometry, I could treat the route as data and style it independently from the basemap.

I also started understanding why GIS tools use layers. The road map, route, stops and labels are separate objects. Each can be filtered, styled, replaced or combined with other datasets.

That opens up much more interesting possibilities than the static map I created today.

A company could combine routes with sales data. A logistics operation could compare delivery volumes by area. A tourism business could generate maps automatically for different itineraries. A network business could visualize gaps in geographic coverage. A retailer could compare store locations against population or accessibility.

My first map only has two points, but it gave me a much clearer idea of what geospatial analysis can add to business and product work.

I want to explore more of it.