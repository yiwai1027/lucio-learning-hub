import {
  BranchesOutlined,
  DatabaseOutlined,
  NodeIndexOutlined,
  RadarChartOutlined,
  SwapOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Timeline, Typography } from 'antd'
import styles from './index.module.less'

const bindingCode = `function show() {
  console.log(this)
}

show()`

const arrowCode = `const obj = {
  name: 'Lucio',
  say: () => {
    console.log(this.name)
  }
}`

const ragFlow = `用户提问
  ↓
先检索相关资料
  ↓
把资料交给模型
  ↓
模型基于资料生成答案`

const summaryCards = [
  {
    title: '前端主线',
    value: 'this 绑定规则',
    desc: '把默认绑定、隐式绑定、显式绑定、new 绑定和箭头函数的词法 this 串成一套完整判断逻辑。',
    icon: <BranchesOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: 'RAG 基础认知',
    desc: '理解为什么很多 AI 产品不会只靠模型裸答，而是先检索外部资料再生成答案。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '一个看调用，一个看资料',
    desc: '前端里看清 this 的判断路径，AI 里看清模型为什么需要外部知识补充。',
    icon: <ThunderboltOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '默认绑定',
    text: '普通函数独立调用时，如果没有其他规则介入，非严格模式下 this 通常指向全局对象，严格模式下是 undefined。',
    icon: <NodeIndexOutlined />,
  },
  {
    title: '隐式绑定',
    text: '通过对象调用函数时，谁调用函数，this 通常就指向谁，比如 obj.fn() 里的 this 一般就是 obj。',
    icon: <SwapOutlined />,
  },
  {
    title: '显式绑定',
    text: '通过 call、apply、bind 主动指定 this 指向，让 this 不再由调用位置隐式决定。',
    icon: <BranchesOutlined />,
  },
  {
    title: 'new 绑定',
    text: '构造函数通过 new 调用时，this 会绑定到新创建出来的实例对象上。',
    icon: <ThunderboltOutlined />,
  },
  {
    title: '箭头函数的 this',
    text: '箭头函数没有自己的 this，它的 this 在定义时从外层作用域继承而来，不受调用方式影响。',
    icon: <DatabaseOutlined />,
  },
]

const aiPoints = [
  {
    title: 'RAG 是什么',
    text: 'RAG 全称是 Retrieval-Augmented Generation，本质上就是先检索资料，再结合资料生成答案。',
  },
  {
    title: '为什么不只靠模型裸答',
    text: '因为大模型知识不是实时更新的，也不了解企业内部私有知识，只靠裸答容易信息过时或产生幻觉。',
  },
  {
    title: 'RAG 的价值',
    text: '通过把外部资料一并交给模型，RAG 可以让回答更准确、更贴近业务知识，也更容易控制结果。',
  },
]

const answerCards = [
  {
    question: 'this 指向怎么判断？',
    answer:
      '判断 this 指向时，普通函数主要看调用方式。常见有 4 种绑定规则：默认绑定、隐式绑定、显式绑定和 new 绑定。也就是说，要先看函数是独立调用、对象调用、通过 call/apply/bind 调用，还是通过 new 调用。箭头函数比较特殊，它没有自己的 this，不看调用方式，而是看定义时所在的外层作用域。',
  },
  {
    question: '箭头函数和普通函数在 this 上有什么区别？',
    answer:
      '普通函数和箭头函数在 this 上最大的区别是，普通函数的 this 主要取决于调用方式，而箭头函数没有自己的 this，它的 this 是在定义时从外层作用域继承来的。也就是说，普通函数要看是怎么调用的，箭头函数要看是写在哪里的，并且箭头函数的 this 不能再通过 call、apply、bind 去修改。',
  },
  {
    question: 'RAG 是什么？',
    answer:
      'RAG 本质上是一种让大模型先检索外部知识，再结合检索结果生成答案的方案。它的目标是减少模型裸答带来的幻觉问题，并让回答更贴近业务私有知识。',
  },
  {
    question: '为什么很多 AI 产品不会只靠模型裸答？',
    answer:
      '因为大模型本身的知识通常来自训练数据，不一定是实时更新的，而且它也不了解企业内部的私有知识。如果只靠模型裸答，容易出现信息过时、缺少业务上下文，甚至产生幻觉。加上 RAG 以后，系统可以先检索最新资料或私有知识，再让模型基于这些内容回答，这样结果通常会更准确、更可控。',
  },
]

const Learning20260330 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-03-30
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          this 绑定规则 × RAG 基础认知
          <br />
          一个看调用方式，一个看外部资料。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习主线一边补 JavaScript 里 this 的判断逻辑，一边补 AI 产品里 RAG
          的基础认知。前端重点是把普通函数和箭头函数的 this 区别讲清楚，AI
          重点是理解为什么模型回答常常需要先接外部资料。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="green">this</Tag>
          <Tag color="cyan">箭头函数</Tag>
          <Tag color="purple">RAG</Tag>
        </Space>
      </section>

      <Row gutter={[18, 18]}>
        {summaryCards.map((item) => (
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
        <Col xs={24} xl={14}>
          <Card
            title="JavaScript this 核心点"
            extra={<Tag color="blue">前端主线</Tag>}
            className={styles.panelCard}
          >
            <Timeline
              items={frontendPoints.map((item) => ({
                color: '#7fb0ff',
                dot: <span className={styles.timelineIcon}>{item.icon}</span>,
                children: (
                  <div className={styles.timelineItem}>
                    <Typography.Title level={4}>{item.title}</Typography.Title>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                ),
              }))}
            />

            <div className={styles.codeWrap}>
              <div>
                <Typography.Title level={5}>默认绑定示例</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{bindingCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>箭头函数 this 示例</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{arrowCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="RAG 基础认知"
            extra={<Tag color="purple">AI 主线</Tag>}
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
            <Typography.Title level={5} className={styles.schemaTitle}>
              一个最简单的 RAG 流程
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{ragFlow}</code>
            </pre>
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

      <Card className={styles.quoteCard} bordered={false}>
        <Typography.Text className={styles.quoteLabel}>ONE LINE TO REMEMBER</Typography.Text>
        <Typography.Title level={2} className={styles.quoteTitle}>
          this 的关键看调用方式，RAG 的关键看有没有先把资料找回来。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260330
