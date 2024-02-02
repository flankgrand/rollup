/* eslint-disable */
import * as components from "./components"
function install(Vue, config) {
    Object.keys(components).forEach((key) => {
        if (components[key]) {
            /plugin/i.test(key) ? Vue.use(components[key]) : Vue.use(components[key], config)
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.vue)
}

export * from "./components"
export default {
    install,
    version: typeof __VERSION__ === 'undefined' ? '' : __VERSION__
}