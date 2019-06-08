import tap from 'tap';
import toBBox from '../index';

tap.test('Point', (t) => {
  const geojson = {
    type: 'Point',
    coordinates: [0, 0],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 0, 0]);
  t.end();
});

tap.test('LineString', (t) => {
  const geojson = {
    type: 'LineString',
    coordinates: [[0, 0], [1, 1], [2, 0]],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 2, 1]);
  t.end();
});

tap.test('MultiPoint', (t) => {
  const geojson = {
    type: 'MultiPoint',
    coordinates: [[0, 0, -1], [1, 1, 0], [2, 0, 1]],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, -1, 2, 1, 1]);
  t.end();
});

tap.test('Polygon', (t) => {
  const geojson = {
    type: 'Polygon',
    coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 1, 1]);
  t.end();
});

tap.test('MultiLineString', (t) => {
  const geojson = {
    type: 'MultiLineString',
    coordinates: [[[0, 0], [2, 0], [2, 1], [0, 1], [0, 0]]],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 2, 1]);
  t.end();
});

tap.test('MultiPolygon', (t) => {
  const geojson = {
    type: 'MultiPolygon',
    coordinates: [[[[0, 0, -1], [3, 0, 0], [3, 1, 1], [0, 1, 2], [0, 0, -1]]]],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, -1, 3, 1, 2]);
  t.end();
});

tap.test('Feature', (t) => {
  const geojson = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: null,
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 0, 0]);
  t.end();
});

tap.test('GeometryCollection', (t) => {
  const geojson = {
    type: 'GeometryCollection',
    geometries: [{
      type: 'Point',
      coordinates: [0, 0],
    }],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, 0, 0]);
  t.end();
});

tap.test('Featurecollection', (t) => {
  const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0, -1],
      },
      properties: null,
    }],
  };
  const bbox = toBBox(geojson);
  t.strictSame(bbox, [0, 0, -1, 0, 0, -1]);
  t.end();
});
