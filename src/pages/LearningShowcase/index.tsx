import {
  BranchesOutlined,
  BulbOutlined,
  NodeIndexOutlined,
  RadarChartOutlined,
  RiseOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, Flex, Row, Space, Tag, Timeline, Typography } from 'antd'
import styles from './index.module.less'

const summaryCards = [
  {
    title: '今日前端主题',
    value: 'Redux 最小闭环',
    desc: '从为什么需要状态管理，推进到 store / action / reducer 的完整理解。',
    icon: <BranchesOutlined />,
    tone: 'blue',
  },
  {
    title: '今日 AI 主题',
    value: 'Agent vs Tool Calling',
    desc: '理解能力点和执行系统的边界，而不是只停留在术语区分。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日输出目标',
    value: '可直接面试表达',
    desc: '把学习内容转成可以对面试官自然讲出来的口语化表达。',
    icon: <RiseOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: 'Redux 主要解决什么问题',
    text: '当共享状态变多、变化链路变复杂后，Redux 的价值在于把更新流程做成统一、可追踪、可预测的闭环。',
  },
  {
    title: 'store / action / reducer 的最小闭环',
    text: 'store 存状态，action 描述发生了什么，reducer 根据 action 计算新状态。整个过程就是 dispatch action → reducer 计算 → store 保存。',
  },
  {
    title: '为什么强调单向数据流',
    text: '因为状态变化路径固定后，排查问题更容易，也更容易解释“数据为什么变了”。',
  },
]

const aiPoints = [
  {
    title: 'Tool Calling 是什么',
    text: '更像模型在需要时调用一个具体工具去完成明确动作，比如查、算、执行、读取外部信息。',
  },
  {
    title: 'Agent 是什么',
    text: '更像围绕目标拆步骤、选工具、接结果、再继续推进的一整套执行方式。',
  },
  {
    title: '两者怎么区分',
    text: 'Tool Calling 是能力点，Agent 是把这些能力组织起来持续完成任务的执行系统。',
  },
]

const interviewAnswers = [
  {
    question: 'Redux 是什么？',
    answer:
      'Redux 是一个状态管理工具，它的核心价值不只是把状态集中起来，而是把状态怎么改、为什么改、改完会带来什么结果这条链路固定下来。这样项目一复杂，状态变化就更可控。',
  },
  {
    question: 'store / action / reducer 分别是什么？',
    answer:
      'store 是状态存储中心，action 是变化描述，reducer 是根据 action 计算新状态的函数。它们一起组成 Redux 最核心的更新闭环。',
  },
  {
    question: 'Agent 和 Tool Calling 的区别是什么？',
    answer:
      'Tool Calling 更像调用一个明确工具完成一个动作；Agent 更像为了达成目标，主动拆步骤、决定顺序并持续执行的系统。所以 Tool Calling 是能力点，Agent 是组织这些能力的执行方式。',
  },
]

const LearningShowcase = () => {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.heroHalo} />

        <Flex
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap={20}
          className={styles.heroHeader}
        >
          <div className={styles.heroCopy}>
            <Tag className={styles.heroTag} bordered={false}>
              LEARNING NOTES · 2026-03-26
            </Tag>
            <Typography.Title level={1} className={styles.heroTitle}>
              2026-03-26 学习内容，
              <br />
              用作品页方式重新展示。
            </Typography.Title>
            <Typography.Paragraph className={styles.heroDesc}>
              这一页聚焦 2026-03-26 的学习内容：Redux 主要解决什么问题、store / action / reducer
              最小闭环、单向数据流，以及 Agent 与 Tool Calling
              的区别，并整理成更适合复盘、汇报和面试表达的展示页面。
            </Typography.Paragraph>
          </div>

          <div className={styles.heroMetaPanel}>
            <div className={styles.metaEyebrow}>TODAY'S TRACK</div>
            <div className={styles.metaTitle}>2026-03-26 · Redux × Agent 学习专页</div>
            <div className={styles.metaDesc}>
              把 3 月 26 日这次学习，从任务内容整理成可复盘、可汇报、可面试表达的页面结构。
            </div>
            <Space size={10} wrap>
              <Tag color="blue">Redux</Tag>
              <Tag color="purple">Agent</Tag>
              <Tag color="cyan">面试表达</Tag>
            </Space>
          </div>
        </Flex>
      </section>

      <section className={styles.summarySection}>
        <Row gutter={[18, 18]}>
          {summaryCards.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card className={`${styles.metricCard} ${styles[item.tone]}`}>
                <div className={styles.metricTop}>
                  <div className={styles.metricIcon}>{item.icon}</div>
                  <div className={styles.metricLine} />
                </div>
                <Typography.Text className={styles.metricLabel}>{item.title}</Typography.Text>
                <div className={styles.metricValue}>{item.value}</div>
                <div className={styles.metricDesc}>{item.desc}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Row gutter={[20, 20]} className={styles.contentGrid}>
        <Col xs={24} xl={12}>
          <Card
            className={styles.panelCard}
            title="前端主线拆解"
            extra={<Tag color="blue">Redux</Tag>}
          >
            <Timeline
              items={frontendPoints.map((item) => ({
                color: '#7fb0ff',
                dot: <NodeIndexOutlined className={styles.timelineDot} />,
                children: (
                  <div className={styles.timelineItem}>
                    <Typography.Title level={5}>{item.title}</Typography.Title>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                ),
              }))}
            />
          </Card>
        </Col>

        <Col xs={24} xl={12}>
          <Card
            className={styles.panelCard}
            title="AI 主线拆解"
            extra={<Tag color="purple">Agent</Tag>}
          >
            <Timeline
              items={aiPoints.map((item) => ({
                color: '#b69cff',
                dot: <ThunderboltOutlined className={styles.timelineDot} />,
                children: (
                  <div className={styles.timelineItem}>
                    <Typography.Title level={5}>{item.title}</Typography.Title>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                ),
              }))}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            className={styles.panelCard}
            title="面试怎么说"
            extra={<Tag color="green">口语化输出</Tag>}
          >
            <div className={styles.answerGrid}>
              {interviewAnswers.map((item) => (
                <article key={item.question} className={styles.answerCard}>
                  <div className={styles.answerBadge}>
                    <BulbOutlined /> 高频表达
                  </div>
                  <Typography.Title level={4} className={styles.answerQuestion}>
                    {item.question}
                  </Typography.Title>
                  <Typography.Paragraph className={styles.answerText}>
                    {item.answer}
                  </Typography.Paragraph>
                </article>
              ))}
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card className={styles.quotePanel} bordered={false}>
            <Typography.Text className={styles.quoteEyebrow}>ONE LINE TO REMEMBER</Typography.Text>
            <Typography.Title level={2} className={styles.quoteText}>
              Redux 是把状态变化流程标准化；Agent 是把工具能力组织成可连续执行的过程。
            </Typography.Title>
            <Typography.Paragraph className={styles.quoteSubtext}>
              真正重要的不是“今天学了几个概念”，而是你能不能把它们整理成下一次面试里自然、稳定、清楚的表达。
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LearningShowcase
