<template>
  <main id="site-main" class="site-main outer" style="background: #f2f2f2f2;">
    <transition appear name="slide-fade" v-show="show">
      <div class="inner">
        <article
          class="post-full post no-image resume"
          style="max-width: 1200px;background: #ffffff;min-height: 1200px;"
        >
          <header class="post-full-header" style="text-align: center;">
            <section class="post-full-meta">
              <!-- <time class="post-full-meta-date">{{resume.dateCreated | formatDate}}</time> -->
            </section>
            <h1 class="post-full-title" style="font-size: 30px;">简历</h1>
          </header>
          <section class="post-full-content">
            
            <div class="markdown-body" v-html="resume">
              
            </div>
          </section>
        </article>
        <div class="detail-info data-charts" v-show="userInfoAtive">
          <h3 class="title">个人信息</h3>
          <div class="content">
            <item-content title="个人技能">
              <div class="charts-list">
                <a-tabs defaultActiveKey="1">
                  <a-tab-pane tab="语言" key="1">
                    <ve-pie :data="langCharts"></ve-pie>
                  </a-tab-pane>
                  <a-tab-pane tab="框架" key="2">
                    <ve-pie :data="frameCharts"></ve-pie>
                  </a-tab-pane>
                  <a-tab-pane tab="工具" key="3">
                    <ve-pie :data="utilCharts"></ve-pie>
                  </a-tab-pane>
                  <a-tab-pane tab="开源组件" key="4">
                    <ve-pie :data="openCharts"></ve-pie>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </item-content>
            <item-content title="期望工作">
              <div class="charts-list" style="margin: -24px;">
                <ve-pie :data="workCharts" :settings="workChartsSet"></ve-pie>
              </div>
            </item-content>
            <item-content title="工作经历">
              <div class="charts-list" style="margin: -28px;">
                <ve-waterfall :data="historyCharts" :settings="historyChartsSet"></ve-waterfall>
              </div>
            </item-content>
            <item-content title="项目关键词">
              <div class="charts-list" style="margin: 0;transform:unset;">
                <ve-wordcloud :data="keyCharts"></ve-wordcloud>
              </div>
            </item-content>
          </div>
        </div>
        <div class="detail-info project-detail" v-show="projectAtive">
          <h3 class="title">项目经验</h3>
          <div class="content">
            <item-content title="苏宁星河流星雨">
              <a-tabs defaultActiveKey="1">
                <a-tab-pane tab="数据表1" key="1">
                  <info-detail imgUrl="/xinghe/1.jpg" :portrait="true">
                    <div>用户可直接在数据模型页面选择模型文件夹并创建数据模型，输入数据模型名称后进入模型编辑页面。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="数据表2" key="2" forceRender>
                  <info-detail imgUrl="/xinghe/2.jpg" :portrait="true">
                    <div>或者通过模型列表右上角的【+】按钮直接创建模型，选择模型归属的文件夹并输入模型名称即可进入模型创建页面。</div>
                    <div>在模型编辑页面将需要使用的数据表(可通过预览操作查看数据表的结构和数据)拖入模型配置区域，即可将数据表与数据模型进行关联</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="重命名" key="3">
                  <info-detail imgUrl="/xinghe/3.jpg" :portrait="true">
                    <div>用户可对数据模型中的字段进行重命名操作，重命名后数据模型及关联的数据报告中使用的字段名均为重命名后的字段名。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="隐藏/批量隐藏" key="4">
                  <info-detail imgUrl="/xinghe/4.jpg" :portrait="true">
                    <div>允许用户隐藏模型中的字段，隐藏维度字段将改变数据模型中数据汇集的结果，数据模型将按照未被隐藏的维度进行度量数据的聚合操作。同时隐藏后关联该模型的报告无法再次使用被隐藏的字段，已使用该字段的图表将恢复至初始状态。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="手动筛选" key="5">
                  <info-detail imgUrl="/xinghe/5.jpg" :portrait="true">
                    <div>
                      流星雨支持对数据模型中的任意维度字段进行数据筛选。筛选后数据模型会将不符合筛选条件的数据进行过滤，仅保留符合筛选条件的数据信息。
                      点击模型筛选器，可查看当前模型已配置的字段筛选信息。点击添加可新增筛选条件，在弹出的维度列表中选择需要筛选的字段，点击【确定】进入筛选条件配置区域。流星雨会根据当前维度的数据类型自动匹配不同的筛选方式。字符串类型支持进行列表筛选及文本筛选，日期及日期时间类型仅支持日期筛选。
                    </div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="列表筛选" key="6">
                  <info-detail imgUrl="/xinghe/6.jpg" :portrait="true">
                    <div>支持对字段中的数据列表值进行筛选，选择需要剔除/使用的数据。支持选定列表值或输入关键字的方式进行筛选。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="文本筛选" key="7">
                  <info-detail imgUrl="/xinghe/7.jpg" :portrait="true">
                    <div>支持对字段的数据文本进行筛选。支持按照不同的组合方式、关联条件及关键字进行筛选。</div>
                    <div>组合方式：包含以下所有条件(且)及包含以下任一条件(或)；</div>
                    <div>关联条件：包含、不包含、开头是、结尾是及等于；</div>
                    <div>支持配置多个文本筛选条件，多个条件之间按照组合方式进行组合筛选。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="动态时间段筛选" key="8">
                  <info-detail imgUrl="/xinghe/8.jpg" :portrait="true">
                    <div>动态时间段筛选：根据当前时间对动态时间段内的数据进行筛选。动态时间段可配置相对的日期及指定的时间范围。</div>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="静态时间段筛选" key="9">
                  <info-detail imgUrl="/xinghe/9.jpg" :portrait="true">
                    <div>静态时间段筛选</div>
                  </info-detail>
                </a-tab-pane>
              </a-tabs>
            </item-content>
          </div>
          <div class="content">
            <item-content title="苏宁小店订货 （移动端h5）">
              <a-tabs defaultActiveKey="1">
                <a-tab-pane tab="首页" key="1">
                  <info-detail imgUrl="/xiaodian/1.shouye.png" :portrait="false">
                    <ul>
                      <li>左侧切换类目条件</li>
                      <li>右侧顶部筛选条件</li>
                      <li>商品列表上拉加载，下拉刷新</li>
                      <li>实货库存异步拉取</li>
                      <li>建议要货物根据拉取的实货库存计算</li>
                      <li>添加数量（根据箱规向下取整）</li>
                      <li>顶部扫码或输入商品名搜索</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="首页筛选" key="2">
                  <info-detail imgUrl="/xiaodian/2.shouyeshaixuan.png" :portrait="false">
                    <ul>
                      <li>筛选条件选择</li>
                      <li>细化类目图片懒加载</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="零星订货" key="3">
                  <info-detail imgUrl="/xiaodian/3.lingxingdinghuo.png" :portrait="false">
                    <ul>
                      <li>精确搜索单个商品</li>
                      <li>异步拉去实货数据</li>
                      <li>在规定的时间内可提交补货</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="仓配购物车" key="4">
                  <info-detail imgUrl="/xiaodian/4.cangpeigouwuche.png" :portrait="false">
                    <ul>
                      <li>实时修改购物车数量</li>
                      <li>到时间自动提交</li>
                      <li>编辑删除功能</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="日配购物车" key="5">
                  <info-detail imgUrl="/xiaodian/5.ripeigouwuche.png" :portrait="false">
                    <ul>
                      <li>手动添加数量</li>
                      <li>编辑删除</li>
                      <li>手动提交</li>
                      <li>联动选择</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="订单列表" key="6">
                  <info-detail imgUrl="/xiaodian/6.dingdanliebiao.png" :portrait="false">
                    <ul>
                      <li>展示订单列表</li>
                      <li>电话号码点击可调出拨号盘</li>
                      <li>手动搜索订单</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="订单筛选" key="7">
                  <info-detail imgUrl="/xiaodian/7.dingdanshaixuan.png" :portrait="false">
                    <ul>
                      <li>订单列表筛选条件</li>
                      <li>类型筛选条件</li>
                      <li>时间选择控件</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="状态详情" key="8">
                  <info-detail imgUrl="/xiaodian/8.zhuangtai.png" :portrait="false">
                    <div>展示对应订单的状态信息</div>
                  </info-detail>
                </a-tab-pane>
              </a-tabs>
            </item-content>
          </div>
          <div class="content">
            <item-content title="问医">
              <a-tabs defaultActiveKey="1">
                <a-tab-pane tab="问题列表" key="1">
                  <info-detail imgUrl="/wenyi/1.questionlist.png" :portrait="true">
                    <ul>
                      <li>用户问题列表</li>
                      <li>点击之后有问题详情并能选择医生发表回复</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="频道列表" key="2">
                  <info-detail imgUrl="/wenyi/2.pingdaolist.png" :portrait="true">
                    <ul>
                      <li>聊天室列表</li>
                      <li>点击之后是详细的聊天室信息</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="频道详情" key="3">
                  <info-detail imgUrl="/wenyi/4.pingdaodetail.png" :portrait="true">
                    <ul>
                      <li>主办人，关联用户，持续时间等等</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
                <a-tab-pane tab="热词" key="4">
                  <info-detail imgUrl="/wenyi/3.hotword.png" :portrait="true">
                    <ul>
                      <li>用户搜索频率高的词</li>
                    </ul>
                  </info-detail>
                </a-tab-pane>
              </a-tabs>
            </item-content>
          </div>
        </div>

        <div class="resume-markdown">
          <textarea>
## 个人信息

| 姓名   | 毕业院校     | 专业             | 毕业时间 | 工作经验 |
| ------ | ------------ | ---------------- | -------- | -------- |
| 冯旭明 | 南京林业大学 | 计算机科学与技术 | `2017.6` | 2年      |

| 邮箱                    | 联系电话      | 期望职位    | 期望城市 |
| ----------------------- | ------------- | ----------- | -------- |
| `fxm31415926@gmail.com` | `18652953627` | web前端开发 | 上海     |

## 链接

> 详细简历：https://berlindiary.info/sp/resume/。 查看码：271828
>
> 个人博客（koa+mongodb+nuxt+antd）：https://berlindiary.info/
>
> 业余项目（koa+mongodb+nuxt+elementUI）：https://berlindiary.info/resolve/
>
> github：https://github.com/fengxuming

## 主要技能

`nodejs`：熟悉express和koa，常用的nodejs模块，编写过web服务器提供restful接口，模拟前端接口数据。

`javascript`：熟悉原生js，ES6，有用原生js实现复杂交互项目的经验。熟练使用vue全家桶（vuex，nuxt.js等）,了解vue的基本实现原理（数据绑定，模板编译）。能使用react编写项目（react，redux），了解vue和react实现差异和各自的特点。

`java`：了解java的基本知识，能够编写业务逻辑。

其他：webpack配置打包，能从零开始构建一个reat项目，熟悉git使用，熟悉http协议，熟悉restful风格接口，能定义良好的接口数据格式。mongodb基本使用（orm框架使用，数据结构定义，基本的查询优化）。

## 工作经历

| 时间           | 公司                     | 职位           |
| -------------- | ------------------------ | -------------- |
| 2018.03-今     | 南京苏宁软件技术有限公司 | 前端开发工程师 |
| 2017.06-2018.1 | 南京信大气象科技有限公司 | 前端开发工程师 |

##项目经历 

| 项目时间                                           | 项目名称       | 技术栈                                           |
| -------------------------------------------------- | :------------- | :----------------------------------------------- |
| 2018.04-2018.06   2018.07-2018.08  2019.04-2019.06 | 苏宁星河流星雨 | `原生js` `artTemplate` `ES6` `webpack` `echarts` |

地址：`http://gcdap.suning.com/gcdap/index.htm`（可申请试用）

项目简介：提供海量数据资源的自助式建模，生成数据报表，多终端分享

技术方案：用es6 的Class描述一个页面组件，配合artTemplate模版引擎加载一段html片段。组件之间使用自定义的事件机制进行通信。

个人责任： 

1. 模型和报表模块的文件夹功能模块，文件夹的树状展示每次更新后获取最新的数据重新渲染。对文件夹和文件的操作全部抽象到弹框中。通过每次传入的对象区分。
2. 数据模型生成模块（包含数据模型构建和数据筛选），用一个大的json对象描述数据模型，弹窗修改的数据每次深拷贝一份，进行操作，确认修改之后合并到主json对象。每个展示模块和一个属性对应，属性变化时，此模块重新渲染。
3. 报表部分图表（柱状图，折线图）模块
4. 报表编辑的联动筛选，单位切换模块
5. 后期迭代时，使用Object.defineProperty实现简易的数据绑定，逻辑层只需要修改页面绑定的对应的对象的值，然后可以自动调用模版引擎渲染对应的页面。

------

| 项目时间        | 项目名称                  | 技术栈                                 |
| --------------- | :------------------------ | :------------------------------------- |
| 2018.07-2018.12 | 苏宁小店订货 （移动端h5） | `vue.js` `vuex` `Echarts.js` `Mint Ui` |

项目简介：提供苏宁小店门店智能订货功能，包括扫码查询，要货数推荐，倒计时自动提交，订货单查询，销售报表等功能

个人责任：

1. 在移动端vue体积小，性能好，又有很多实践因此选择vue框架，和后台定义接口报文，并独立完成前端代码的开发。
2. 使用nodejs搭建反向代理的功能，前端本地的先发送给node服务器然后再通过node转发给实际的后台地址，在后台接口没有添加cors的情况下，方便前后端的联调
3. 使用rem配合vm单位编写适应移动端的页面，在大部分手机上都是一致良好的体验
4. 用async await函数编写请求 方便订货页面数据异步获取，计算推荐要货数。
5. 添加防抖函数，避免频繁提交修改订单数量。
6. 订货报表（echarts）展示，本来想使用v-charts，但是项目的图表功能不多，且移动设备性能有限，最后用原始方法引入echarts，监听data变动并setOption的方式使用echarts展示图表。
7. 后期迭代时，推动更新为restful风格接口，前端加入ts，使用ts的接口和继承特性封装axios的请求。封装成类似orm框架式的调用方式比如：请求用户列表（原来：axios.get("/users/",{params:{username:"feng"}}) ;现在：user.find({username:"feng"})）
8. 后期迭代时，推动首页数据通过websoket的方式获取，用户可以在首页看到实时的数据变化，比如剩余货物和推荐要货数。

------

| 项目时间        | 项目名称 | 技术栈                                   |
| --------------- | :------- | :--------------------------------------- |
| 2016.07-2016.10 | 问医     | `nodejs` `express` `angularJs` `mongodb` |

项目简介：给医生和用户提供的问答平台

个人责任：

1. 定义项目数据结构，搭建基于express后台服务提供restful接口
2. 用node-rsa和json-web-token的方式实现登录模块。node-rsa在服务启动时生成一对公钥和私钥，登录页面返回公钥，js根据公钥加密密码发送给服务端，服务端根据私钥解密。登录成功后用设置的key和用户名加密生成token返回给前端存储。之后的前端请求头中带有token，可以对每个接口进行权限管理。
3. 使用angularJs 搭建pc端的单页应用并完成功能逻辑，统计用户搜索的热词频率，管理员创建一个定时聊天室，医生和用户可以在聊天室内中沟通。医生可以对其中一个问题进行详细解答，并保存下来。成为已回答问题，首页会根据此回答的查看次数排序和推荐。
4. 封装ajax请求，统一根据响应状态码进行错误处理。比如401跳转登录，404跳转404页面。
5. 其中聊天室功能利用websocket，实现后台数据主动推送到客户端

------

| 项目时间        | 项目名称   | 技术栈                                      |
| --------------- | :--------- | :------------------------------------------ |
| 2017.06-2017.11 | 大城市项目 | `nodejs` `koa` `vue` `element ui` `echarts` |

项目简介：展示城市气象数据

个人责任：

1. nodejs和node-schedule定时读取气象设备的中数据文件将其发送给我们的ftp服务器，ftp上根据天进行文件夹分类。当一个定时任务执行完，文件保存成功之后，通过http唤起python脚本开始处理数据文件。
2. vue和element ui 搭建了一个展示前台，根据站点，事件筛选展示相关的气象数据（可以使用echarts进行展示的是echart，特别的气象图是用python生成的图片展示）
            </textarea>
        </div>
      </div>
    </transition>
  </main>
</template>
<script>
//时间格式化
import { formatDate } from "../util/formatTime.js";
import ItemContent from "~/components/ItemContent.vue";
import InfoDetail from "~/components/InfoDetail.vue";
import marked from "marked";


export default {
  middleware: "stats",
  loading: false,
  components: {
    ItemContent,
    InfoDetail
  },
  data() {
    this.workChartsSet = {
      roseType: "radius"
    };
    this.historyChartsSet = {
      // yAxisName: ['月']
    };

    return {
      resume: "",
      userInfoAtive: true,
      projectAtive: true,
      show: false,
      detailInfo: {
        title: "xx",
        itemTitle: "xxx"
      },
      isCompleted: false,
      langCharts: {
        columns: ["语言", "程度"],
        rows: [
          { 语言: "JavaScript", 程度: 100 },
          { 语言: "Nodejs", 程度: 100 },
          { 语言: "Java", 程度: 50 }
        ]
      },
      frameCharts: {
        columns: ["框架", "程度"],
        rows: [
          { 框架: "Koa", 程度: 100 },
          { 框架: "Express", 程度: 100 },
          { 框架: "Vue", 程度: 100 },
          { 框架: "React", 程度: 70 }
        ]
      },
      utilCharts: {
        columns: ["工具", "程度"],
        rows: [
          { 工具: "Webpack", 程度: 100 },
          { 工具: "Gulp", 程度: 50 },
          { 工具: "Google", 程度: 120 },
          { 工具: "stackoverflow", 程度: 120 },
          { 工具: "vscode", 程度: 100 }
        ]
      },
      openCharts: {
        columns: ["开源组件", "程度"],
        rows: [
          { 开源组件: "Element UI", 程度: 100 },
          { 开源组件: "Antd", 程度: 100 },
          { 开源组件: "Echarts", 程度: 100 },
          { 开源组件: "V-charts", 程度: 100 },
          { 开源组件: "artTemplate", 程度: 80 }
        ]
      },
      workCharts: {
        columns: ["方向", "程度"],
        rows: [
          { 方向: "数据可视化", 程度: 100 },
          { 方向: "SSR", 程度: 80 },
          { 方向: "前后分离", 程度: 100 },
          { 方向: "页面性能优化", 程度: 56 },
          { 方向: "复杂交互", 程度: 30 },
          { 方向: "移动端", 程度: 56 },
          { 方向: "websocket", 程度: 70 }
        ]
      },
      historyCharts: {
        columns: ["公司", "月数"],
        rows: [
          { 公司: "南京信大气象", 月数: 6 },
          { 公司: "南京苏宁软件", 月数: 12 }
        ]
      },
      keyCharts: {
        columns: ["word", "count"],
        rows: getRows()
      }
    };
    function getRows() {
      return [
        {
          word: "前后分离",
          count: 1700
        },
        {
          word: "Vue",
          count: 2500
        },
        {
          word: "React",
          count: 1200
        },
        {
          word: "页面功能组件",
          count: 1600
        },
        {
          word: "restful接口",
          count: 1500
        },
        {
          word: "Echarts图表",
          count: 1200
        },
        {
          word: "H5移动端",
          count: 2000
        },

        {
          word: "ES6",
          count: 1700
        },
        {
          word: "页面交互逻辑",
          count: 1600
        },
        {
          word: "业务逻辑",
          count: 1600
        },
        {
          word: "Nodejs",
          count: 1600
        },
        {
          word: "Mongodb",
          count: 1600
        },
        {
          word: "移动端适配",
          count: 1600
        },
        {
          word: "图表",
          count: 1600
        }
      ];
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  computed: {},
  async asyncData(context) {
    // await context.store.dispatch("getResume");
    return { project: "nuxt" };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500);

    let markdown = document.querySelector(".resume-markdown textarea").value;

    this.resume = marked(markdown);
  }
};
</script>
<style>
.code-toolbar {
  width: 100%;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all 2.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.inner {
  display: flex;
}
.resume {
  width: 50%;
  padding: 50px;
}
.detail-info {
  width: 50%;
  margin-left: 20px;
  background: #fff;
}
.detail-info .title {
  text-align: center;
}
.charts-list {
  /* max-width: 800px; */
  transform: scale(0.8, 0.8);
  margin: -46px;
}
.resume-markdown {
  display: none;
}
.data-charts {
  max-width: 400px;
}
.project-detail {
  max-width: 600px;
}
.project-detail .content:first-child {
  margin-top: 0;
}
.project-detail .content {
  margin-top: 20px;
}
</style>
