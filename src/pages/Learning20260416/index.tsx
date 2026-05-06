import {
  ApiOutlined,
  BorderOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  SafetyOutlined,
  SwapOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const unionCode = `let value: string | number

value = 'hello'
value = 123`

const intersectionCode = `type A = { name: string }
type B = { age: number }

type C = A & B`

const guardCode = `function printValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }

  return value.toFixed(2)
}`

const aiCode = `type AiPlan = {
  title?: string
  list?: string[]
}

function normalizePlan(data: AiPlan) {
  return {
    title: data.title ?? '默认标题',
    list: Array.isArray(data.list) ? data.list : [],
  }
}`

const summaryCards = [
  {
    title: '前端主线',
    value: '联合类型 × 交叉类型 × 类型守卫',
    desc: '把 TS 里的“或者、并且、缩小范围”真正串成一套能讲出来的理解。',
    icon: <CodeOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '输出校验与兜底',
    desc: '理解前端为什么不能直接信任 AI 返回结果，而要先校验、转换、再渲染。',
    icon: <ApiOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '把不确定变可控',
    desc: 'TS 负责提前收紧代码边界，前端接 AI 时负责把不稳定输出整理成可展示数据。',
    icon: <SafetyOutlined />,
    tone: 'green',
  },
]

const tsPoints = [
  {
    title: '联合类型 `|`',
    text: '表示一个值可以是多个类型中的一种，本质是“或者”，重点在于扩大候选范围。',
    icon: <SwapOutlined />,
  },
  {
    title: '交叉类型 `&`',
    text: '表示一个值要同时满足多个类型，本质是“并且”，重点在于把多个能力合并到一起。',
    icon: <BorderOutlined />,
  },
  {
    title: '类型守卫',
    text: '先通过 typeof、in 等方式做判断，再让 TypeScript 缩小类型范围，从而安全访问对应类型独有的属性和方法。',
    icon: <CheckCircleOutlined />,
  },
  {
    title: 'TS 不只是标类型',
    text: '它还在描述数据结构、约束代码边界、提前暴露修改风险，所以真正提升的是可维护性，而不只是可读性。',
    icon: <SafetyOutlined />,
  },
]

const aiPoints = [
  {
    title: '为什么 AI 输出不能直接信任',
    text: '因为 AI 返回值不是强约束接口，可能会出现字段缺失、结构不一致、类型错误，甚至夹带额外解释文本。',
  },
  {
    title: '什么叫校验',
    text: '校验就是先判断返回的数据结构对不对，比如字段是否存在、类型是否正确、数组是否真的是数组。',
  },
  {
    title: '什么叫兜底',
    text: '兜底就是当数据不符合预期时，给默认值、做格式转换、展示错误提示，避免页面直接报错。',
  },
  {
    title: '前端工程意义',
    text: '只有先把不稳定输出转换成可控数据，页面渲染、状态管理和后续业务处理才会更稳。',
  },
]

const answerCards = [
  {
    question: '联合类型和交叉类型的区别是什么？',
    answer:
      '联合类型表示一个值可以是多个类型中的一种，所以重点是“候选范围”；交叉类型表示把多个类型合并在一起，要求同时满足，所以重点是“能力叠加”。`|` 更像或者，`&` 更像并且。',
  },
  {
    question: '类型守卫是干嘛的？',
    answer:
      '类型守卫的本质就是先做类型判断，再让 TypeScript 缩小类型范围，从而安全地访问对应类型的属性和方法。',
  },
  {
    question: '为什么说 TypeScript 提高的是可维护性，而不只是可读性？',
    answer:
      'TypeScript 提高的不只是代码可读性，更重要的是可维护性。因为它能通过类型系统约束数据结构、函数参数和返回值，在代码修改、多人协作、接口变更时，提前暴露受影响的地方。这样问题会在开发阶段被发现，而不是上线后才出现运行时错误。',
  },
  {
    question: '为什么 AI 输出不能像普通后端接口那样被前端直接信任？',
    answer:
      '因为 AI 输出本质上是不稳定的，它可能出现字段缺失、字段类型错误、结构不一致，甚至夹杂额外文本说明，所以不能像普通后端那种强约束接口一样被前端直接信任。前端必须先做结构校验、异常处理和默认值兜底，才能把不稳定输出转换成可安全渲染、可继续处理的数据。',
  },
]

const Learning20260416 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-16
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          TypeScript 类型系统 × AI 输出校验
          <br />
          把“不确定”整理成“可控”。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习内容分成两条主线，一条是 TypeScript 里的联合类型、交叉类型、类型守卫和工程价值，
          另一条是前端接 AI
          输出时为什么必须做结构校验和默认值兜底。核心目标只有一个，就是把不确定边界提前收紧。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">TypeScript</Tag>
          <Tag color="green">联合类型</Tag>
          <Tag color="cyan">类型守卫</Tag>
          <Tag color="purple">AI 输出校验</Tag>
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
            title="TypeScript 核心点"
            extra={<Tag color="blue">前端主线</Tag>}
            className={styles.panelCard}
          >
            <div className={styles.pointList}>
              {tsPoints.map((item) => (
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
                <Typography.Title level={5}>联合类型</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{unionCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>交叉类型</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{intersectionCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>类型守卫</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{guardCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="AI 输出为什么要校验"
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
              一个简单的兜底示例
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{aiCode}</code>
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
          TypeScript 负责把不确定的代码边界提前收紧，前端接 AI
          时则要把不稳定的输出重新校验成可控数据。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260416
