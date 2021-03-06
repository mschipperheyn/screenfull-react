import fs from 'fs';
import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';
import replace from '@rollup/plugin-replace';

const prod = process.env.NODE_ENV === 'production';
const mode = prod ? 'production' : 'development';

console.log(`Creating ${mode} bundle...`);

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, './.babelrc')));

const plugins = [
  babel(
    Object.assign({}, babelrc, {
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['@babel/react'],
      plugins: babelrc.plugins.concat(['@babel/plugin-external-helpers'])
    })
  ),
  nodeResolve({
    jsnext: true
  }),
  commonjs({
    // exclude: ['node_modules/**']
    namedExports: {
      'node_modules/prop-types/index.js': ['PropTypes']
    }
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

if (prod)
  plugins.push(terser(), visualizer({ filename: './bundle-stats.html' }));

const input = 'src/index.js';
const outputName = 'screenfull-react';
const external = ['react', 'react-dom'];
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

export default {
  input,
  output: [
    {
      name: outputName,
      file: 'dist/screenfull-react.js',
      format: 'cjs',
      globals,
      sourcemap: true,
      exports: 'named'
    },
    {
      name: outputName,
      file: 'dist/screenfull-react.umd.js',
      format: 'umd',
      globals,
      exports: 'named'
    },
    {
      name: outputName,
      file: 'dist/screenfull-react.es.js',
      format: 'es',
      globals,
      sourcemap: true,
      exports: 'named'
    }
  ],
  external,
  plugins
};
