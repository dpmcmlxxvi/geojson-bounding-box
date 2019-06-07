import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

const banner = `\
/**
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 *
 * @author ${pkg.author}
 * @license ${pkg.license}
 * @preserve
 */
`;

const build = (filename, plugins) => ({
  input: pkg.module,
  output: {
    banner: banner,
    file: filename,
    format: 'umd',
    name: 'GeojsonBoundingBox',
  },
  plugins,
});

export default [
  build(`${pkg.name}.js`, [commonjs(), resolve()]),
  build(`${pkg.name}.min.js`, [commonjs(), resolve(), terser()]),
];
