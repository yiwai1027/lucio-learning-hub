import {
  ApiOutlined,
  ArrowRightOutlined,
  BorderOutlined,
  CodeOutlined,
  DatabaseOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const genericCode = `function identity<T>(value: T): T {
  return value
}

const text = identity<string>('hello')
const count = identity(123)`

const extendsCode = `function getLength<T extends { length: number }>(value: T) {
  return value.length
}

getLength('hello')
getLength([1, 2, 3])`

const schemaCode = `{
  "title": "React 泛型",
  "summary": "把类型当参数传入",
  "level": "basic"
}`

const summaryCards = [
  {
    title: '前端主线',
    value: 'TypeScript 泛型',
    desc: '从类型参数、复用性、类型关联到 extends 约束，建立泛型的完整第一层理解。',
    icon: <CodeOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '结构化输出',
    desc: '理解为什么 AI 结果不能只像自然语言，还要像一个可被程序消费的数据接口。',
    icon: <ApiOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '复用 + 安全',
    desc: '一边理解代码为什么能复用，一边理解为什么前端会特别在意数据结构稳定。',
    icon: <SafetyOutlined />,
    tone: 'green',
  },
]

const genericPoints = [
  {
    title: '泛型是什么',
    text: '泛型本质上就是把类型当成参数传进去，先用类型变量占位，等真正使用的时候再确定具体类型。',
    icon: <BorderOutlined />,
  },
  {
    title: '为什么泛型比 any 更好',
    text: 'any 是放弃类型检查，泛型不是放弃类型，而是延迟确定类型，所以能在复用代码时保留类型信息。',
    icon: <SafetyOutlined />,
  },
  {
    title: '泛型解决了什么问题',
    text: '它解决的是代码复用和类型安全之间的平衡问题，让同一套逻辑适配多种类型时，不需要把类型写死。',
    icon: <ArrowRightOutlined />,
  },
  {
    title: '为什么要配合 extends',
    text: 'extends 是给泛型加约束，让它在保持灵活的同时也有边界，这样某些属性和方法才能安全使用。',
    icon: <DatabaseOutlined />,
  },
]

const aiPoints = [
  {
    title: '什么是结构化输出',
    text: '结构化输出，本质上是在给 AI 的结果加上数据结构和字段约定，让回答更像程序可消费的接口。',
  },
  {
    title: '为什么前端在意它',
    text: '因为前端不是只看懂一段内容，而是要把数据真正接入渲染、校验、状态判断和业务流程里。',
  },
  {
    title: 'JSON Schema / 字段约束的意义',
    text: '它能把不确定的数据尽量变成可约定、可验证、可消费的数据，减少兜底和容错成本。',
  },
  {
    title: '和 TypeScript 的关系',
    text: '当结构稳定后，前端更容易把返回结果和 TypeScript 类型系统对齐，页面逻辑也会更稳。',
  },
]

const answerCards = [
  {
    question: '泛型是什么？',
    answer:
      '泛型本质上就是把类型当成参数传进去，先用类型变量占位，等真正使用的时候再确定具体类型。',
  },
  {
    question: '泛型解决了什么问题？',
    answer:
      '它解决的核心问题是，在抽象和复用代码时不把类型写死，同时尽量保留类型信息，从而兼顾代码复用和类型安全。',
  },
  {
    question: '什么叫结构化输出？',
    answer:
      '结构化输出就是给 AI 的结果加上明确的数据结构和字段约定，让它的输出不只是自然语言，更像一个可被程序直接消费的接口。',
  },
  {
    question: '它对前端有什么意义？',
    answer: '它能让数据更稳定，更容易校验、渲染、存储和联动，也更方便和 TypeScript 类型系统对齐。',
  },
]

const Learning20260415 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-15
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          泛型 × 结构化输出
          <br />
          用前端视角把“复用”和“稳定”串起来。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习主题分成两条主线，一条是 TypeScript 泛型，一条是 AI 结构化输出。前者解决
          “同一套逻辑如何复用且不丢类型信息”，后者解决“AI 结果如何稳定进入前端页面和业务流程”。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">TypeScript</Tag>
          <Tag color="green">泛型</Tag>
          <Tag color="purple">结构化输出</Tag>
          <Tag color="cyan">前端视角</Tag>
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
            title="TypeScript 泛型"
            extra={<Tag color="blue">前端主线</Tag>}
            className={styles.panelCard}
          >
            <div className={styles.pointList}>
              {genericPoints.map((item) => (
                <div key={item.title} className={styles.pointItem}>
                  <div className={styles.pointIcon}>{item.icon}</div>
                  <div>
                    <Typography.Title level={4}>{item.title}</Typography.Title>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.codeWrap}>
              <div>
                <Typography.Title level={5}>泛型函数示例</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{genericCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>泛型约束示例</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{extendsCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="AI 结构化输出"
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
              结构化返回示例
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{schemaCode}</code>
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
          泛型让代码在复用时不丢类型，结构化输出让 AI 结果在接入页面时不丢稳定性。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260415
