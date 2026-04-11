export interface InterviewAnswerItem {
  question: string
  answer: string
}

export interface InterviewPack {
  summary: string
  answers: InterviewAnswerItem[]
}

export const learningInterviewBank: Record<string, InterviewPack> = {
  '2026-03-26': {
    summary:
      'Redux 负责把状态变化流程做成统一、可预测的闭环；Agent 则是围绕目标持续拆步骤和调用工具的执行系统。',
    answers: [
      {
        question: 'Redux 是什么？',
        answer:
          'Redux 是一个状态管理方案，它的核心价值不只是集中管理状态，而是把状态变化流程标准化。项目一复杂，大家就能清楚知道状态从哪里来、因为什么改、最后变成什么。',
      },
      {
        question: 'store / action / reducer 分别是什么？',
        answer:
          'store 是状态容器，action 是对变化的描述，reducer 是根据 action 计算新状态的函数。你可以把它理解成 dispatch 一个动作，reducer 负责算结果，store 再把结果存起来。',
      },
      {
        question: 'Agent 和 Tool Calling 的区别是什么？',
        answer:
          'Tool Calling 更像调用一个单独工具完成明确动作，Agent 更像为了达成目标主动拆步骤、选择工具并持续推进的执行者。所以 Tool Calling 是能力点，Agent 是把这些能力组织起来的系统。',
      },
    ],
  },
  '2026-03-27': {
    summary:
      'Redux 更适合复杂、可追踪的共享状态；Zustand 更轻量，适合中小型场景。MCP 则是模型和外部能力连接时的协议层。',
    answers: [
      {
        question: 'Redux 和 Zustand 最大差别是什么？',
        answer:
          'Redux 更强调流程标准化和可预测性，适合复杂共享状态；Zustand 更轻，写法更直接，适合中小型项目或者不想引入太多样板代码的场景。',
      },
      {
        question: '什么场景更适合轻量状态管理？',
        answer:
          '如果状态规模不大、团队更追求开发效率、业务逻辑没有特别复杂的状态流转，那 Zustand 这类轻量方案通常更合适。',
      },
      {
        question: 'MCP 是什么？',
        answer:
          'MCP 可以理解成模型和外部能力之间的协议层，它规定了模型怎么发现工具、怎么调用工具、怎么接收结果。',
      },
    ],
  },
  '2026-03-28': {
    summary:
      '项目表达的重点不是堆技术名词，而是讲清业务场景、难点、你的动作和结果。Skill、Tool、Agent、MCP 是一条协同链路。',
    answers: [
      {
        question: '项目经历在面试里怎么讲更好？',
        answer:
          '先讲项目背景和业务目标，再讲你负责的核心模块，然后突出一个技术难点和你怎么解决，最后补上效果和结果，这样结构更像真实项目复盘。',
      },
      {
        question: 'Skill、Tool、Agent、MCP 的关系怎么理解？',
        answer:
          'Tool 是能力点，Skill 是对工具使用方法的封装，Agent 是围绕目标组织这些能力的执行者，MCP 则是模型和外部能力通信时的协议层。',
      },
    ],
  },
  '2026-03-29': {
    summary: '复盘类问题的重点是把一周内容讲成结构化表达，而不是零散背知识点。',
    answers: [
      {
        question: '这一周前端部分你掌握了什么？',
        answer:
          '这一周我主要把组件通信、Context、状态管理和项目表达做了一轮整理，重点不是单点记忆，而是开始能把这些内容串成完整的面试表达。',
      },
      {
        question: '这一周 AI 部分的收获是什么？',
        answer:
          '我把 Prompt、Context、Tool Calling、Agent、MCP、Skill 这些概念重新串起来了，核心收获是开始能理解它们在一个 AI 产品工作流里分别扮演什么角色。',
      },
    ],
  },
  '2026-03-30': {
    summary:
      'this 的判断核心是看调用方式，不是看函数定义位置；RAG 的价值是让模型回答更贴近真实外部知识。',
    answers: [
      {
        question: 'this 指向怎么判断？',
        answer:
          '判断 this 最重要的是看调用方式。常见就是默认绑定、隐式绑定、显式绑定和 new 绑定，箭头函数则没有自己的 this，会继承外层作用域。',
      },
      {
        question: '箭头函数和普通函数在 this 上有什么区别？',
        answer:
          '普通函数的 this 取决于调用方式，箭头函数没有自己的 this，它会直接继承定义时外层作用域的 this。',
      },
      {
        question: 'RAG 是什么？',
        answer:
          'RAG 就是先检索相关资料，再把结果交给模型生成答案。这样做的价值是降低模型瞎编，提高回答和真实知识的对齐度。',
      },
    ],
  },
  '2026-03-31': {
    summary: '原型链是 JS 继承的底层机制；Embedding 则是把内容变成向量，便于做语义检索。',
    answers: [
      {
        question: '原型链是什么？',
        answer:
          '原型链本质上就是对象通过原型对象一层层向上查找属性和方法的机制。JS 里很多继承能力，本质上都依赖这条查找链路。',
      },
      {
        question: 'prototype 和 __proto__ 有什么区别？',
        answer:
          'prototype 是函数自带的原型对象，主要给实例共享方法；__proto__ 是对象实例指向其原型对象的隐式引用。一个在函数身上，一个在对象实例身上。',
      },
      {
        question: 'Embedding 是什么？',
        answer:
          'Embedding 可以理解成把文本、图片等信息转成向量表示，这样系统就能按语义相似度去做检索，而不只是按关键词匹配。',
      },
    ],
  },
  '2026-04-01': {
    summary: '浅拷贝只复制第一层引用，深拷贝才会继续递归复制；向量数据库的核心价值是做语义检索。',
    answers: [
      {
        question: '深拷贝和浅拷贝的区别是什么？',
        answer:
          '浅拷贝只复制第一层结构，引用类型内部还是共用原地址；深拷贝会继续递归复制内部引用，目标是让新对象和旧对象彻底分开。',
      },
      {
        question: '常见深拷贝方式有什么局限？',
        answer:
          '像 JSON 方案实现简单，但会丢失函数、undefined、Date、Map、Set 等特殊类型，所以它只能解决一部分场景。',
      },
      {
        question: '向量数据库是干嘛的？',
        answer:
          '向量数据库主要用来存储向量化后的内容，并支持相似度检索，所以它特别适合做 AI 里的知识召回和语义搜索。',
      },
    ],
  },
  '2026-04-02': {
    summary:
      '防抖和节流都是控制高频触发的手段；Function Calling 的重点是让模型能稳定调用外部能力。',
    answers: [
      {
        question: '防抖和节流的区别是什么？',
        answer:
          '防抖是只在最后一次触发后执行一次，适合输入框搜索；节流是规定一段时间内最多执行一次，适合滚动、resize 这类持续触发的场景。',
      },
      {
        question: '它们分别适合什么场景？',
        answer: '防抖更适合用户停下来之后再处理的场景，节流更适合持续操作中按固定频率反馈的场景。',
      },
      {
        question: 'Function Calling 的价值是什么？',
        answer:
          'Function Calling 的价值是让模型不只是生成文字，而是能按约定格式调用外部函数或工具，把回答能力变成执行能力。',
      },
    ],
  },
  '2026-04-03': {
    summary: 'Promise 解决的是异步流程的表达与串联问题，多模态则说明模型处理的不再只是文本。',
    answers: [
      {
        question: 'Promise 有哪些状态？',
        answer:
          'Promise 有 pending、fulfilled 和 rejected 三种核心状态，一旦从 pending 变成 fulfilled 或 rejected，就不会再变。',
      },
      {
        question: 'then 和 catch 的链式执行怎么理解？',
        answer:
          '你可以把它理解成每一步都返回一个新的 Promise，上一步的结果会进入下一步，所以链式调用能把异步流程写得更清晰。',
      },
      {
        question: '多模态是什么？',
        answer:
          '多模态就是模型不只处理文本，还能同时理解图片、音频甚至视频，让输入和输出形式更丰富。',
      },
    ],
  },
  '2026-04-04': {
    summary:
      'async/await 是 Promise 的语法糖，优势是把异步代码写得更像同步；上下文窗口则决定模型一次能记住多少内容。',
    answers: [
      {
        question: 'async / await 和 Promise 的关系是什么？',
        answer:
          'async / await 本质上是基于 Promise 的语法糖，它没有替代 Promise，而是让异步代码的写法更接近同步流程。',
      },
      {
        question: '为什么 await 看起来像同步代码？',
        answer:
          '因为 await 会暂停当前 async 函数内部后续代码的执行，等 Promise 结果回来再继续，所以阅读体验更像同步顺序代码。',
      },
      {
        question: '上下文窗口是什么？',
        answer:
          '上下文窗口就是模型一次能看到和处理的内容上限，超出这个范围后，前面的内容就可能被截断或压缩。',
      },
    ],
  },
  '2026-04-05': {
    summary: '周复盘类页面更适合拿来练综合表达，把零散知识点讲成一条完整叙事。',
    answers: [
      {
        question: '这周 JS 部分最大的收获是什么？',
        answer:
          '这周我重点把 this、原型链、拷贝、防抖节流、Promise、async / await 这些高频题重新串了一遍，现在更接近能稳定口述的状态。',
      },
      {
        question: '这周 AI 部分最大的收获是什么？',
        answer:
          '这周我把 RAG、Embedding、向量数据库、Function Calling、多模态、上下文窗口串起来了，开始能从产品和技术两边理解这些概念。',
      },
    ],
  },
  '2026-04-06': {
    summary: '缓存是浏览器性能优化高频点，推理模型和普通生成模型的区别在于是否更强调中间推理过程。',
    answers: [
      {
        question: '强缓存和协商缓存的区别是什么？',
        answer:
          '强缓存是浏览器直接本地命中，不发请求；协商缓存是浏览器会去问服务器资源有没有变，如果没变再复用缓存。',
      },
      {
        question: 'ETag 和 Last-Modified 有什么区别？',
        answer:
          'Last-Modified 基于文件最后修改时间判断，ETag 更像资源内容指纹，精度通常更高，也更适合避免时间粒度不准的问题。',
      },
      {
        question: '推理模型和普通生成模型有什么差别？',
        answer:
          '推理模型更强调中间思考和复杂问题拆解能力，普通生成模型更偏重直接给结果，所以两者在复杂任务体验上会有明显差别。',
      },
    ],
  },
  '2026-04-07': {
    summary:
      '跨域问题的本质是浏览器同源策略带来的限制，AI 产品延迟则直接影响用户是否愿意持续交互。',
    answers: [
      {
        question: '什么是跨域？',
        answer:
          '跨域本质上是请求的协议、域名或端口和当前页面来源不一致，因此被浏览器的同源策略限制。',
      },
      {
        question: '常见跨域方案有哪些？',
        answer:
          '常见方案有 CORS、反向代理、JSONP（历史方案）以及后端中转，其中 CORS 和代理是现在最常见的解决方式。',
      },
      {
        question: 'AI 产品里的延迟为什么重要？',
        answer:
          '因为延迟直接影响用户主观体验，首字时间决定是否感觉“有反应”，总耗时决定是否愿意等，流式输出则能缓解等待焦虑。',
      },
    ],
  },
  '2026-04-08': {
    summary:
      '重排比重绘成本更高，因为它会影响布局计算；AI 产品常用流式、历史记录、工具调用组合来保证体验和能力闭环。',
    answers: [
      {
        question: '重排和重绘的区别是什么？',
        answer:
          '重绘只影响元素外观，不改变布局；重排会影响元素几何信息和页面布局，所以通常成本更高。',
      },
      {
        question: '为什么重排成本通常更高？',
        answer:
          '因为一旦布局变化，浏览器可能需要重新计算相关节点的位置和尺寸，影响范围比单纯重绘颜色或背景更大。',
      },
      {
        question: '为什么 AI 产品常用流式 + 历史记录 + 工具调用组合？',
        answer:
          '流式负责体验，历史记录负责上下文连续性，工具调用负责让模型真正获取外部能力，这三者组合起来才能让产品既好用又能做事。',
      },
    ],
  },
  '2026-04-09': {
    summary:
      'Webpack 是传统工程化核心工具之一，loader 和 plugin 的区别是面试高频；AI Agent 产品里前端要承担状态、交互和结果承接。',
    answers: [
      {
        question: 'Webpack 是什么？',
        answer:
          'Webpack 本质上是一个模块打包工具，它会把项目里的各种资源和依赖按规则处理后，打成浏览器可以高效运行的产物。',
      },
      {
        question: 'loader 和 plugin 的区别是什么？',
        answer:
          'loader 主要负责把某一类文件转换成 Webpack 能处理的模块，plugin 更像扩展 Webpack 整个构建流程的能力，它能介入更完整的生命周期。',
      },
      {
        question: 'AI Agent 产品里前端为什么不只是做页面？',
        answer:
          '因为前端不仅要画界面，还要承接工具调用结果、维护多轮状态、设计流式反馈和错误处理，所以它实际上承担了交互编排和结果可视化的重要职责。',
      },
    ],
  },
  '2026-04-10': {
    summary:
      'Vite 优势在开发阶段，Webpack 优势在工程认知和历史生态；模型输出是否稳定，核心受提示词、上下文和采样参数影响。',
    answers: [
      {
        question: 'Webpack 和 Vite 最大差别是什么？',
        answer:
          '最大的差别在开发阶段的处理方式。Webpack 通常先打包再运行，Vite 则依赖浏览器原生 ESM 按需加载模块，所以启动和热更新体验通常更快。',
      },
      {
        question: '为什么 Vite 开发体验通常更快？',
        answer:
          '因为 Vite 不需要像传统 bundler 一样先把整个项目打成大包，它把源码直接按模块交给浏览器请求，并用 esbuild 预构建依赖，所以反馈速度更快。',
      },
      {
        question: '为什么模型输出会不稳定？',
        answer:
          '因为大模型本质上是概率生成，不是固定检索答案。提示词、上下文和 temperature 等采样参数一变，输出结果就可能变化。',
      },
    ],
  },
}
