import Vue from 'vue'
import VePie from 'v-charts/lib/pie.common.min.js'
import VeWaterfall from 'v-charts/lib/waterfall.common.min.js'
import VeWrdcloud from 'v-charts/lib/wordcloud.common.min.js'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;
export default () => {
    Vue.component(VePie.name, VePie)
    Vue.component(VeWaterfall.name, VeWaterfall)
    Vue.component(VeWrdcloud.name, VeWrdcloud)

}