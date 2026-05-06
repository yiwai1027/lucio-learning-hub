import {
  ApiOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  FieldTimeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const debounceCode = `function debounce(fn, delay) {
  let timer = null

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}`

const throttleCode = `function throttle(fn, delay) {
  let lastTime = 0

  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= delay) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}`

const functionCallingCode = `{
  name: 'getWeather',
  description: '查询天气',
  parameters: {
    city: '上海',
    date: '明天'
  }
}`

const summaryCards = [
  {
    title: '前端主线',
    value: '防抖 × 节流 × 手写思路',
    desc: '把高频事件优化从“会背定义”推进到“能区分场景、能口述手写思路”。',
    icon: <CodeOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: 'Function Calling',
    desc: '理解模型负责意图整理，外部系统负责真实执行，这才是工具调用闭环。',
    icon: <ApiOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '区分最后结果和持续过程',
    desc: '前端事件优化看“关心最后一次还是持续反馈”，AI 工具调用看“谁理解、谁执行”。',
    icon: <ThunderboltOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '防抖的核心',
    text: '防抖是把多次触发合并成最后一次执行，适合输入框搜索、resize 结束后处理这类只关心最终结果的场景。',
    icon: <ClockCircleOutlined />,
  },
  {
    title: '节流的核心',
    text: '节流是让高频事件按照固定频率执行，适合滚动、拖拽、鼠标移动这类需要持续响应的场景。',
    icon: <FieldTimeOutlined />,
  },
  {
    title: '手写防抖思路',
    text: '先定义 timer，每次触发先 clearTimeout，再重新 setTimeout，这样可以保证只执行最后一次。',
    icon: <CodeOutlined />,
  },
  {
    title: '手写节流思路',
    text: '记录上一次执行时间，每次触发时判断是否超过指定间隔，只有达到时机才执行下一次。',
    icon: <ThunderboltOutlined />,
  },
]

const aiPoints = [
  {
    title: '传统接口调用',
    text: '通常由开发者在前端代码里写死调用目标、调用时机和参数，所以调用流程是固定的。',
  },
  {
    title: 'Function Calling',
    text: '先把可用工具和参数规则告诉模型，再由模型根据上下文生成结构化调用意图，最后由外部系统真正执行。',
  },
  {
    title: '为什么适合接外部能力',
    text: '因为模型擅长理解自然语言和整理参数，外部系统擅长真实执行，所以两者结合后既灵活又可控。',
  },
  {
    title: '工程价值',
    text: '它让模型不只是“会说”，而是能把用户自然语言请求稳定地接到天气、提醒、查询等真实工具能力上。',
  },
]

const answerCards = [
  {
    question: '防抖和节流的区别是什么？',
    answer:
      '防抖和节流都是用来优化高频事件触发的。防抖是把多次触发合并成最后一次执行，适合输入搜索、resize 结束后处理这类只关心最终结果的场景。节流是让高频事件按照固定频率执行，适合滚动、拖拽、鼠标移动这类需要持续响应的场景。',
  },
  {
    question: '它们分别适合什么场景？',
    answer:
      '防抖更适合用户停下来之后再处理的场景，比如输入框搜索、窗口 resize 结束后的重新计算。节流更适合在持续操作过程中按固定频率反馈的场景，比如页面滚动监听、拖拽和鼠标移动。',
  },
  {
    question: 'Function Calling 和传统接口调用的最大区别是什么？',
    answer:
      'Function Calling 和传统接口调用的最大区别在于，传统接口调用通常是开发者在代码里把调用时机、调用目标和参数写死；而 Function Calling 是先把可用工具和参数规则告诉模型，再由模型根据用户上下文生成结构化调用意图，最后由外部程序去真正执行对应的函数或接口。',
  },
  {
    question: '为什么 Function Calling 适合接外部能力？',
    answer:
      'Function Calling 适合接外部能力，因为它可以让模型先负责理解用户意图、提取参数并生成结构化调用信息，再由外部系统去真正执行函数或接口。这样既能发挥模型在自然语言理解上的优势，也能保证外部调用过程的安全性、确定性和可控性。',
  },
]

const Learning20260402 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-02
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          防抖节流 × Function Calling
          <br />
          把高频事件优化和工具调用闭环一起讲清楚。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 JavaScript 高频题里的防抖和节流，一边补 AI 产品里 Function Calling
          的基础认知。前者核心是分清“只关心最后结果”还是“需要持续响应”，后者核心是分清“模型负责理解”与“外部系统负责执行”。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="green">防抖</Tag>
          <Tag color="cyan">节流</Tag>
          <Tag color="purple">Function Calling</Tag>
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
            title="前端核心点"
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

            <div className={styles.codeWrap}>
              <div>
                <Typography.Title level={5}>手写防抖</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{debounceCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>手写节流</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{throttleCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="AI 工具调用理解"
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
            <Typography.Title level={5} className={styles.schemaTitle}>
              一个结构化调用意图示例
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{functionCallingCode}</code>
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
          防抖看最后一次，节流控执行频率，Function Calling 负责把自然语言意图接到真实工具能力上。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260402
