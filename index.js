/**
 * @description Generator that yields each GeoJSON coordinate.
 * @param {GeoJSON} geojson Input GeoJSON.
 * @return {Array} GeoJSON 2D or 3D coordinate.
 */
export default function(geojson) {
  const bbox = [
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ];
  for (const coordinate of coordEach(geojson)) {
    bbox[0] = Math.min(bbox[0], coordinate[0]);
    bbox[1] = Math.min(bbox[1], coordinate[1]);
    bbox[2] = Math.max(bbox[2], coordinate[0]);
    bbox[3] = Math.max(bbox[3], coordinate[1]);
  }
  return bbox;
};

/**
 * @description Generator that yields each GeoJSON coordinate.
 * @param {GeoJSON} geojson Input GeoJSON.
 * @yields [Array] GeoJSON 2D or 3D coordinate.
 */
function* coordEach(geojson) {
  switch (geojson.type) {
    case 'Point':
      yield geojson.coordinates;
      break;
    case 'LineString':
    case 'MultiPoint':
      yield* geojson.coordinates;
      break;
    case 'Polygon':
    case 'MultiLineString':
      for (const part of geojson.coordinates) {
        yield* part;
      }
      break;
    case 'MultiPolygon':
      for (const polygon of geojson.coordinates) {
        for (const ring of polygon) {
          yield* ring;
        }
      }
      break;
    case 'GeometryCollection':
      for (const geometry of geojson.geometries) {
        yield* coordEach(geometry);
      }
      break;
    case 'FeatureCollection':
      for (const feature of geojson.features) {
        yield* coordEach(feature);
      }
      break;
    default:
      yield* coordEach(geojson.geometry);
  }
}
