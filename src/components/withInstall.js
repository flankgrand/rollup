import capitalize from "lodash-es/capitalize";

export function withInsatll(comp, dep) {
    const c = comp;
    const name = c?.options?.name || c.name;
    c.install = function (Vue,config) {
        const defaults = { prefix: 'excise' };
        const installConfig = { ...defaults, ...config };
        const defaultPrefix = capitalize(defaults.prefix);
        let componentName = name.replace(defaultPrefix, '').replace(defaults.prefix, '').replace('-mapprops', '');
        componentName = installConfig.prefix + componentName;
        Vue.component(componentName, comp);
        if (dep && Vue?._installedPlugins?.indexOf(dep) === -1) {
            Vue.use(dep);
        }
    }
    return comp;
}