import json from '@rollup/plugin-json'; // json
import terser from '@rollup/plugin-terser'; // minify 
import { nodeResolve } from '@rollup/plugin-node-resolve'; // resolve node_modules
import typescript from '@rollup/plugin-typescript'; // typescript (includes jsx)

export default {
    input: 'src/main.js',
    output: [{
        file: 'dist/bundle.js',
        format: 'es'
    },
    {
        file: 'dist/bundle.min.js',
        format: 'es',
        plugins: [terser()]
    }],
    plugins: [json(), nodeResolve(), typescript()],
    external: ['react']
};