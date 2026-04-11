import {
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
    value: '项目表达 + 性能优化案例',
    desc: '把项目介绍讲得更像面试回答，同时补一份能直接讲的性能优化案例。',
    icon: <RiseOutlined />,
    tone: 'blue',
  },
  {
    title: '今日 AI 主题',
    value: 'AI 产品链路拆解',
    desc: '拆输入、上下文、流式、工具调用和结果展示这一整条产品链路。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日输出目标',
    value: '可直接面试表达',
    desc: '输出项目介绍、性能优化案例和 AI 产品拆解三份可复述内容。',
    icon: <BulbOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '项目表达强化',
    text: '把项目从“我做了什么”升级成“业务背景、职责、难点、方案、结果”这条完整叙事链路。',
  },
  {
    title: '性能优化案例 1：首屏加载优化',
    text: '重点讲请求优先级拆分、图表懒加载、缓存稳定数据，以及如何缩短白屏和提升首屏可见速度。',
  },
  {
    title: '性能优化案例 2：React 重复渲染优化',
    text: '重点讲组件拆分、React.memo、useMemo/useCallback、状态下沉，以及如何减少无意义渲染。',
  },
]

const aiPoints = [
  {
    title: '输入链路',
    text: '先明确用户输入是什么，是否需要结构化、是否需要上下文补充。',
  },
  {
    title: '上下文与流式输出',
    text: 'AI 产品一般会保留会话历史，并用流式响应降低等待焦虑，提升首字体验。',
  },
  {
    title: '工具调用与结果展示',
    text: '模型需要时会调用工具拿外部能力，前端再把过程状态、结果和错误做可视化承接。',
  },
]

const interviewAnswers = [
  {
    question: '项目介绍在面试里怎么讲更好？',
    answer:
      '我一般会按业务背景、我的职责、核心功能、技术难点和最终结果这条线去讲，而不是一上来就堆技术名词。这样面试官能更快理解项目价值，也更容易继续追问。',
  },
  {
    question: '项目难点应该怎么表达？',
    answer:
      '项目难点不要只说难，而是要讲清楚为什么难、你当时怎么分析、最后用了什么方案、结果怎么样。这样它才更像真实经历，而不是背模板。',
  },
  {
    question: '技术选型怎么讲更像面试回答？',
    answer:
      '技术选型最好不是说“我用了什么”，而是说为什么在当时那个业务场景下选择这个方案。比如更看重开发效率、团队熟悉度、生态成熟度，还是后续维护成本。',
  },
  {
    question: '你做过哪些前端性能优化？',
    answer:
      '我做过两类比较典型的性能优化，一类是首屏加载优化，重点是拆请求优先级、懒加载非核心模块、缓存稳定数据；另一类是 React 渲染优化，重点是拆分组件、减少重复渲染、稳定 props 和回调引用。我的思路一般都是先定位瓶颈，再做针对性优化。',
  },
  {
    question: 'React 页面卡顿你会怎么排查？',
    answer:
      '我会先看是接口慢、数据量大，还是组件重复渲染。然后通过 React DevTools 和浏览器 Performance 去看哪些组件频繁刷新，再判断要不要拆组件、下沉状态、加 memo，或者稳定函数和对象引用。',
  },
  {
    question: 'AI 产品链路怎么拆？',
    answer:
      '我通常会从输入、上下文、流式输出、工具调用和结果展示五个环节去拆。这样既能看清产品体验，也能看出前端在状态承接和结果可视化上的职责。',
  },
]

const Learning20260411 = () => {
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
              LEARNING NOTES · 2026-04-11
            </Tag>
            <Typography.Title level={1} className={styles.heroTitle}>
              2026-04-11 学习内容，
              <br />
              聚焦项目表达与性能优化案例。
            </Typography.Title>
            <Typography.Paragraph className={styles.heroDesc}>
              这一页整理 2026-04-11 的学习重点，包括项目表达强化、两类性能优化案例，以及 AI
              产品链路拆解，并补成可直接面试表达的答案版本。
            </Typography.Paragraph>
          </div>

          <div className={styles.heroMetaPanel}>
            <div className={styles.metaEyebrow}>TODAY'S TRACK</div>
            <div className={styles.metaTitle}>2026-04-11 · 项目表达 × 性能优化 × AI 产品链路</div>
            <div className={styles.metaDesc}>
              把今天的学习内容整理成可复盘、可汇报、可面试表达的页面输出。
            </div>
            <Space size={10} wrap>
              <Tag color="blue">项目表达</Tag>
              <Tag color="purple">性能优化</Tag>
              <Tag color="cyan">AI 产品链路</Tag>
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
            extra={<Tag color="blue">Frontend</Tag>}
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
            extra={<Tag color="purple">AI</Tag>}
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
            title="面试版本答案"
            extra={<Tag color="green">可直接复述</Tag>}
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
              项目表达要讲清背景、职责、难点和结果；性能优化要讲清瓶颈、动作和收益。
            </Typography.Title>
            <Typography.Paragraph className={styles.quoteSubtext}>
              今天最重要的不是多背几个术语，而是把“项目怎么讲”“优化怎么讲”“AI
              产品怎么拆”三件事整理成真正能说出口的表达。
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Learning20260411
