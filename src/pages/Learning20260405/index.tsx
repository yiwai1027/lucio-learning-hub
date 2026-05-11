import {
  CheckCircleOutlined,
  CompassOutlined,
  LinkOutlined,
  RadarChartOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const reviewMap = [
  {
    title: 'JavaScript 周复盘',
    value: 'this × 原型链 × 拷贝',
    desc: '把 this、原型链、深浅拷贝这些高频基础题重新压成可稳定复述的答案。',
    icon: <CompassOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 周复盘',
    value: 'RAG × Function Calling × 多模态',
    desc: '把 RAG、Embedding、向量数据库、Function Calling、多模态和上下文窗口串成一条完整理解链路。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '从“知道概念”推进到“能讲清区别”',
    desc: '不只是背定义，而是说清它解决什么问题、和谁的区别是什么。',
    icon: <CheckCircleOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: 'this 的判断核心是看调用方式',
    text: '普通函数的 this 通常由调用方式决定，对象调用、显式绑定和 new 调用都可能让 this 指向不同对象；箭头函数没有自己的 this，会继承外层作用域的 this。',
    icon: <CompassOutlined />,
  },
  {
    title: '原型链解决的是属性查找',
    text: '访问对象属性时会先查对象本身，找不到再沿着原型对象逐级向上查找，直到原型链尽头 null 为止。JS 的继承和很多内置方法复用都依赖这套机制。',
    icon: <LinkOutlined />,
  },
  {
    title: '浅拷贝和深拷贝的边界',
    text: '浅拷贝只复制第一层结构，遇到引用类型仍然共享同一份地址；深拷贝会继续递归复制，目标是生成彼此独立的新对象。展开运算符和 Object.assign 都属于浅拷贝。',
    icon: <SyncOutlined />,
  },
]

const aiPoints = [
  {
    title: 'RAG 更像外挂资料库',
    text: 'RAG 的本质不是重新训练模型，而是在生成答案前先检索外部资料，再把结果作为上下文提供给模型，用来解决知识过时、私有数据接入和幻觉控制问题。',
  },
  {
    title: 'Embedding 和向量数据库是配套关系',
    text: 'Embedding 负责把文本等内容转换成能表达语义关系的向量，向量数据库负责存储这些向量并做相似检索，它们是 RAG 检索链路里的核心基础能力。',
  },
  {
    title: 'Function Calling 负责调工具做事',
    text: 'Function Calling 让模型按预定义格式选择外部函数或工具，由系统根据函数名和参数完成真实调用。RAG 解决的是“回答依据不够”，Function Calling 解决的是“模型没有行动能力”。',
  },
  {
    title: '多模态和上下文窗口分别补的是输入与容量',
    text: '多模态让模型能够处理文本、图片、音频、视频等多种信息形式，上下文窗口则决定模型一次能处理的信息总量上限，两者分别影响产品交互形态和模型承载能力。',
  },
]

const answerCards = [
  {
    question: 'this 的指向是怎么确定的？普通函数和箭头函数有什么区别？',
    answer:
      'this 本质上是函数执行时的上下文。对于普通函数来说，this 由调用方式决定，比如对象调用时通常指向这个对象，也可以通过 call、apply、bind 显式指定。箭头函数没有自己的 this，它会继承外层作用域的 this，所以它的 this 不是在调用时动态改变的。',
  },
  {
    question: '什么是原型链？它的核心作用是什么？',
    answer:
      '原型链是 JavaScript 对象的属性查找机制。访问一个对象属性时，会先查对象本身，如果没有，就沿着原型对象逐级向上查找，直到原型链尽头 null 为止；如果整个链路都没找到，就返回 undefined。JavaScript 的继承能力以及很多内置方法的复用，本质上都依赖这套原型链机制。',
  },
  {
    question: '深拷贝和浅拷贝的核心区别是什么？为什么展开运算符不算深拷贝？',
    answer:
      '浅拷贝只会复制对象的第一层属性，如果某个属性值是引用类型，那么复制过去的仍然是同一个内存地址，所以修改嵌套对象时会互相影响。深拷贝会递归复制各层数据，生成一份彼此独立的新对象。像展开运算符和 Object.assign 都只处理第一层属性，对嵌套对象不会继续拷贝，所以它们本质上是浅拷贝，不是深拷贝。',
  },
  {
    question: 'RAG 是什么？它和微调最大的区别是什么？',
    answer:
      'RAG 是检索增强生成，它不是重新训练大模型，而是在回答前先从外部知识库检索相关内容，再把检索结果连同问题一起作为上下文交给模型生成答案。它主要解决模型知识过时、无法直接使用私有数据，以及幻觉控制的问题。和微调相比，RAG 更像是给模型外挂一个可更新的资料库，而微调是直接调整模型本身的参数和能力。',
  },
  {
    question: 'Embedding 和向量数据库分别是干什么的？它们之间是什么关系？',
    answer:
      'Embedding 的作用是把文本等内容转换成能表达语义关系的向量表示，而向量数据库的作用是存储这些向量并支持相似度检索。二者通常配合使用，是 RAG 检索链路里的核心基础能力。',
  },
  {
    question: 'Function Calling 是什么？它和 RAG 的核心区别是什么？',
    answer:
      'Function Calling 是让大模型根据用户意图，按预定义的结构化格式选择并请求调用外部函数或工具。模型本身不直接执行函数，而是由系统根据模型给出的函数名和参数完成真实调用，再把结果返回给模型生成最终答复。和 RAG 相比，RAG 主要解决的是模型回答时缺少外部知识依据的问题，而 Function Calling 主要解决的是模型本身没有行动能力、无法直接操作外部系统的问题。',
  },
  {
    question: '什么是多模态？为什么它对 AI 产品很重要？',
    answer:
      '多模态是指模型能够处理、理解，甚至生成多种类型的数据，比如文本、图片、音频、视频等，而不再局限于单一文本。它的重要性在于，真实世界的信息本身就是多种形式的，所以多模态可以让模型更贴近真实业务场景，也能让 AI 产品从纯文本问答，扩展到看图、听语音、识别视频、截图问答等更丰富的交互方式。',
  },
]

const weeklySummary = [
  '这周我主要复盘了 JavaScript 和 AI 应用里的几个高频基础点。前端部分，我重点梳理了 this、原型链、深浅拷贝这些常见面试题，核心是把“会用”往“能解释原理、能口述表达”推进。',
  'AI 部分，我复盘了 RAG、Embedding 和向量数据库之间的关系，并补上了 Function Calling、多模态和上下文窗口，重点理解了它们在实际检索增强链路和产品交互里的分工。',
  '整体来看，我现在最清楚的是这些概念之间的主干关系已经能串起来了，但还需要继续加强的是把零散知识点压缩成更自然、更稳定的面试表达。下周建议继续沿着高频题复盘 + 口述训练推进，把知识理解进一步转成可输出能力。',
]

const Learning20260405 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-05
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          周复盘总串联
          <br />把 JS 高频题和 AI 关键概念讲成一条完整叙事。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天不是加新知识点，而是把这一周前端和 AI 里的高频概念重新串起来。前端重点从
          this、原型链、深浅拷贝里练口述，AI 重点从 RAG、Embedding、向量数据库、Function
          Calling、多模态和上下文窗口里练关系表达。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="blue">this</Tag>
          <Tag color="cyan">Prototype</Tag>
          <Tag color="purple">RAG</Tag>
          <Tag color="magenta">Function Calling</Tag>
        </Space>
      </section>

      <Row gutter={[18, 18]}>
        {reviewMap.map((item) => (
          <Col xs={24} md={8} key={item.title}>
            <Card className={`${styles.metricCard} ${styles[item.tone]}`}>
              <div className={styles.metricIcon}>{item.icon}</div>
              <Typography.Text className={styles.metricLabel}>{item.title}</Typography.Text>
              <div className={styles.metricValue}>{item.value}</div>
              <div className={styles.metricDesc}>{item.desc}</div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[20, 20]}>
        <Col xs={24} xl={12}>
          <Card
            title="前端复盘主线"
            extra={<Tag color="blue">Frontend</Tag>}
            className={styles.panelCard}
          >
            <div className={styles.pointList}>
              {frontendPoints.map((item) => (
                <div key={item.title} className={styles.pointItem}>
                  <div className={styles.pointIcon}>{item.icon}</div>
                  <div>
                    <Typography.Title level={4}>{item.title}</Typography.Title>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={12}>
          <Card
            title="AI 复盘主线"
            extra={<Tag color="purple">AI</Tag>}
            className={styles.panelCard}
          >
            <div className={styles.aiList}>
              {aiPoints.map((item) => (
                <article key={item.title} className={styles.aiCard}>
                  <Typography.Title level={5}>{item.title}</Typography.Title>
                  <Typography.Paragraph>{item.text}</Typography.Paragraph>
                </article>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <section>
        <Typography.Title level={2} className={styles.sectionTitle}>
          今晚可以直接复述的答案
        </Typography.Title>
        <Row gutter={[18, 18]}>
          {answerCards.map((item) => (
            <Col xs={24} md={12} key={item.question}>
              <Card className={styles.answerCard}>
                <div className={styles.answerBadge}>高频表达</div>
                <Typography.Title level={4} className={styles.answerQuestion}>
                  {item.question}
                </Typography.Title>
                <Typography.Paragraph className={styles.answerText}>
                  {item.answer}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Card className={styles.summaryPanel}>
        <Typography.Title level={3}>本周总结</Typography.Title>
        <div className={styles.summaryList}>
          {weeklySummary.map((item) => (
            <Typography.Paragraph key={item}>{item}</Typography.Paragraph>
          ))}
        </div>
        <div className={styles.tagRow}>
          <Tag color="blue">最清楚：this、原型链、RAG 链路</Tag>
          <Tag color="gold">最模糊：细节完整度与口述稳定性</Tag>
          <Tag color="green">下周承接：高频题复盘 + 口述训练</Tag>
        </div>
      </Card>

      <Card className={styles.quoteCard} bordered={false}>
        <Typography.Text className={styles.quoteLabel}>ONE LINE TO REMEMBER</Typography.Text>
        <Typography.Title level={2} className={styles.quoteTitle}>
          这周不是在加新知识点，而是在把高频概念从“知道”推进到“能稳定讲出来”。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260405
