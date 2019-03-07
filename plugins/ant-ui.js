import Vue from 'vue'
// import Antd from 'ant-design-vue'
import Menu from 'ant-design-vue/lib/menu';
import Col from 'ant-design-vue/lib/grid/Col';
import Row from 'ant-design-vue/lib/grid/Row';
import Layout from 'ant-design-vue/lib/layout';
import Pagination from 'ant-design-vue/lib/pagination';
import Card from 'ant-design-vue/lib/card';
import Tabs from 'ant-design-vue/lib/tabs';
import Button from 'ant-design-vue/lib/button';
import Input from 'ant-design-vue/lib/input';
import 'ant-design-vue/lib/tabs/style/index.css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import 'ant-design-vue/lib/input/style/index.css'; 
import 'ant-design-vue/lib/button/style/index.css'; 
import 'ant-design-vue/lib/layout/style/index.css'; 
import 'ant-design-vue/lib/card/style/index.css'; 
import 'ant-design-vue/lib/pagination/style/index.css'; 
import 'ant-design-vue/lib/grid/style/index.css'; 
import 'ant-design-vue/lib/menu/style/index.css'; 
import VueLocalStorage from 'vue-localstorage';

export default () => {
    // Vue.use(Antd);
    Vue.use(Menu);
    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Tabs);
    Vue.use(Input);
    Vue.use(Button);
    Vue.use(Layout);
    Vue.use(Card);
    Vue.use(Pagination);
    Vue.use(VueLocalStorage);
  }