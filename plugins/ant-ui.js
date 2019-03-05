import Vue from 'vue'
import Antd from 'ant-design-vue'

import VueLocalStorage from 'vue-localstorage';

export default () => {
    Vue.use(Antd);
    
    Vue.use(VueLocalStorage);
  }