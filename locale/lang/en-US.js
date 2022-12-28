import { module } from '@/utils/module'
import antLocal from "ant-design-vue/es/locale/en_US";

//const modulesFiles = import.meta.globEager("./en-US/*.js")

const requireComponent  = require.context('./en-US',false,/\.js$/);
const modulesFiles = [];
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    //modulesFiles.push(...componentConfig.default);
    
    modulesFiles.push(componentConfig);
  });


const enUS = module(modulesFiles)

export default {
  ...enUS,
  antLocal
}
