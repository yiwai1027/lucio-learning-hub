import {
  ClockCircleOutlined,
  MessageOutlined,
  NodeIndexOutlined,
  RadarChartOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const asyncCode = `async function test() {
  console.log(1)
  const res = await Promise.resolve(2)
  console.log(res)
  console.log(3)
}

test()
console.log(4)`

const summaryCards = [
  {
    title: '前端主线',
    value: 'async / await × Promise',
    desc: '把异步流程从 Promise 链式写法，过渡到更接近同步顺序的表达方式。',
    icon: <NodeIndexOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '上下文窗口',
    desc: '理解模型一次能处理多少信息，以及为什么这个上限不可能无限扩大。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '把“异步可读性”和“模型容量上限”讲明白',
    desc: '前端强调写法可读性，AI 强调上下文容量与成本约束。',
    icon: <ClockCircleOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: 'async / await 本质还是 Promise',
    text: 'async / await 不是替代 Promise，而是基于 Promise 的语法糖。async 函数执行后仍然会返回 Promise，await 等待的也是 Promise 结果。',
    icon: <NodeIndexOutlined />,
  },
  {
    title: '为什么它看起来像同步代码',
    text: '因为它把原本 then 链式组织的异步流程，改成了从上到下的顺序写法，所以更符合人的阅读习惯。',
    icon: <MessageOutlined />,
  },
  {
    title: 'await 不会阻塞整个线程',
    text: 'await 只会暂停当前 async 函数内部后续代码，外部同步代码依然会继续执行，所以不能把它理解成真正同步。',
    icon: <ThunderboltOutlined />,
  },
]

const aiPoints = [
  {
    title: '上下文窗口是什么',
    text: '上下文窗口就是模型一次推理时能看到和处理的信息总量上限，通常按 Token 计算。输入、历史对话和输出都会占用它。',
  },
  {
    title: '为什么会有限制',
    text: '因为处理内容越长，模型的计算开销和注意力计算成本就越高，所以窗口不可能无限扩展。',
  },
  {
    title: '产品层面的影响',
    text: '窗口越大，模型一次能处理的上下文越多，但资源消耗也越高，实际设计里需要在效果、速度和成本之间做平衡。',
  },
]

const answerCards = [
  {
    question: 'async / await 和 Promise 的关系是什么？',
    answer:
      'async / await 本质上是基于 Promise 的语法糖，它并没有替代 Promise，只是把异步代码的写法改成了更接近同步流程的顺序结构，因此可读性更强，也更方便维护。',
  },
  {
    question: '为什么 await 看起来像同步代码？',
    answer:
      '因为 await 把原本通过 then 链式处理的异步逻辑改成了从上到下的顺序写法，所以阅读体验更像同步代码。但它并没有把异步变成同步，底层仍然是 Promise。',
  },
  {
    question: '模型上下文窗口是什么？',
    answer:
      '上下文窗口就是大模型一次处理信息的容量上限，通常按 Token 计算，输入内容、历史记录和模型输出都会一起占用这个上限。',
  },
  {
    question: '为什么大模型的上下文窗口不能无限大？',
    answer:
      '因为文本越长，模型处理时的计算开销和注意力成本就越高，推理速度也会变慢，所以实际设计里必须在能力、速度和资源成本之间做平衡。',
  },
]

const Learning20260404 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-04
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          async / await × 上下文窗口
          <br />
          把异步写法和模型容量上限一起补明白。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 async / await 和 Promise
          的关系，一边补模型上下文窗口的基础认知。前者回答“异步流程为什么能写得更好读”，后者回答“模型一次为什么只能处理有限信息”。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="blue">async / await</Tag>
          <Tag color="cyan">Promise</Tag>
          <Tag color="purple">Context Window</Tag>
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
            title="async / await 主线"
            extra={<Tag color="blue">前端主线</Tag>}
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

            <div>
              <Typography.Title level={5}>执行顺序练习</Typography.Title>
              <pre className={styles.codeBlock}>
                <code>{asyncCode}</code>
              </pre>
              <Typography.Paragraph className={styles.codeExplain}>
                这段代码最终输出顺序是 1、4、2、3，因为 await 只会暂停当前 async
                函数内部后续代码，不会阻塞外部同步代码继续执行。
              </Typography.Paragraph>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="上下文窗口理解"
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
          async / await 解决的是异步代码可读性，上下文窗口解决的是模型一次能处理多少信息。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260404
