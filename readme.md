# geojson-bounding-box

[![build](https://travis-ci.org/dpmcmlxxvi/geojson-bounding-box.svg?branch=master)](https://travis-ci.org/dpmcmlxxvi/geojson-bounding-box)
[![coverage](https://img.shields.io/coveralls/dpmcmlxxvi/geojson-bounding-box.svg)](https://coveralls.io/r/dpmcmlxxvi/geojson-bounding-box?branch=master)
[![npm](https://badge.fury.io/js/geojson-bounding-box.svg)](https://badge.fury.io/js/geojson-bounding-box)
[![codacy](https://app.codacy.com/project/badge/Grade/fcf1dc37cef2446da53b9fe31306aa51)](https://www.codacy.com/gh/dpmcmlxxvi/geojson-bounding-box/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dpmcmlxxvi/geojson-bounding-box&amp;utm_campaign=Badge_Grade)

Efficiently computes a GeoJSON's bounding box using a generator to traverse its
coordinates.

## GETTING STARTED

### Install

```bash
npm install --save geojson-bounding-box
```

### Example

```javascript
const toBBox = require('geojson-bounding-box');

const line = {
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [0, 1], [1, 2], [2, 1]
    ]
  },
  "properties": {}
};

const bbox = toBBox(line);
// = [0, 1, 2, 2]
```

## BUILD

To build and test the library locally:

```shell
npm install
npm test
```

## LICENSE

Copyright (c) 2019 Daniel Pulido <mailto:dpmcmlxxvi@gmail.com>

Source code is released under the [MIT License](http://opensource.org/licenses/ISC).
