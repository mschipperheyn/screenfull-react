import fs from 'fs';
import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';
import replace from 'rollup-plugin-replace';

const prod = process.env.NODE_ENV === 'production';
const mode = prod ? 'production' : 'development';

console.log(`Creating ${mode} bundle...`);

const targets = prod
  ? [{ dest: 'dist/mm-loaders.min.js', format: 'umd' }]
  : [
      { dest: 'dist/mm-loaders.js', format: 'umd' },
      { dest: 'dist/mm-loaders.es.js', format: 'es' }
    ];

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, './.babelrc')));

const plugins = [
  babel(
    Object.assign({}, babelrc, {
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'react'],
      plugins: babelrc.plugins.concat(['external-helpers'])
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
  }) /*,
  uglify({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    output: {
      comments: false
    },
    sourceMap: false
  })*/
];

if (prod)
  plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }));

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/mm-loaders.js',
    format: 'cjs'
  },
  moduleName: 'styled',
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled'
  },
  exports: 'named',
  targets,
  plugins
};
