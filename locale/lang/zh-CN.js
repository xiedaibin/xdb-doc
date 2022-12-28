import { module } from '@/utils/module.js'
import antLocal from "ant-design-vue/es/locale/zh_CN";

//const modulesFiles = import.meta.globEager("./zh-CN/*.js")
const requireComponent  = require.context('./zh-CN',false,/\.js$/);
const modulesFiles = [];
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    // console.log(componentConfig);
    // modulesFiles.push(...componentConfig.default);
    modulesFiles.push(componentConfig);
  });
const zhCN = module(modulesFiles)

export default {
  ...zhCN,
  antLocal
}
