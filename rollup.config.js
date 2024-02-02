import json from "@rollup/plugin-json"
import nodeResolove from "@rollup/plugin-node-resolve"
import vuePlugin from "rollup-plugin-vue"
import postcss from "rollup-plugin-postcss"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
// import terser from "@rollup/plugin-terser"
// import packageJson from "./package.json" assert { type: "json" }
// console.log(packageJson)
const inputList = ['src/index.js', 'src/index-lib.js']
export default [{
    input: inputList,
    output: [
        // {
        //     format: 'cjs',
        //     dir: 'dist/cjs'
        // },
        {
            dir: 'dist/esm',
            format: 'esm',
            // plugins: [terser()]
        }
    ],
    plugins: [
        json(),
        nodeResolove(),
        vuePlugin({
            compileTemplate: true
        }),
        postcss({
            extensions: ['.less']
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs()
    ],
    external: ['vue']
}]