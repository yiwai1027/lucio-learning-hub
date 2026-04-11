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
    value: 'Webpack × Vite',
    desc: '聚焦工程化高频题，理解两者的底层差异、开发体验和适用场景。',
    icon: <BranchesOutlined />,
    tone: 'blue',
  },
  {
    title: '今日 AI 主题',
    value: '模型输出稳定性',
    desc: '理解为什么同一个问题会出现不同答案，以及提示词和采样策略如何影响结果。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日输出目标',
    value: '工程化 + AI口语表达',
    desc: '把学习内容整理成可以直接复盘、汇报、面试表达的页面输出。',
    icon: <RiseOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: 'Webpack 和 Vite 最大差别是什么',
    text: 'Webpack 更像传统 bundler，开发时通常先打包再启动；Vite 则利用浏览器原生 ESM，在开发阶段按需加载模块，所以启动和热更新都更快。',
  },
  {
    title: '为什么 Vite 在开发阶段更快',
    text: '因为它不需要像 Webpack 那样先把整个应用打成一个大包，而是让浏览器直接请求当前需要的模块，再通过 esbuild 预构建依赖，所以冷启动和 HMR 都更轻。',
  },
  {
    title: '什么时候仍然需要理解 Webpack',
    text: '很多成熟项目和公司历史项目仍然基于 Webpack，面试里也会问 loader、plugin、构建流程、打包优化等核心概念，所以不能因为日常用 Vite 就完全跳过 Webpack。',
  },
]

const aiPoints = [
  {
    title: '为什么模型输出会不稳定',
    text: '大模型不是固定检索答案，而是按概率生成下一个 token，所以即使问题一样，只要上下文或采样策略变化，输出就可能不同。',
  },
  {
    title: '提示词和上下文怎么影响结果',
    text: '提示词越具体，约束越清楚，模型就越容易往目标答案靠；上下文越完整，模型越能保持一致，但无关信息太多也会干扰判断。',
  },
  {
    title: '采样策略为什么重要',
    text: 'temperature 越高，输出越发散；temperature 越低，输出越稳定。所以想要稳定结果时，通常会降低采样随机性并明确输出格式。',
  },
]

const interviewAnswers = [
  {
    question: 'Webpack 和 Vite 最大差别是什么？',
    answer:
      '最大的差别在于开发阶段的处理方式。Webpack 通常先打包再运行，Vite 则基于浏览器原生 ESM 按需加载模块，所以 Vite 的启动速度和热更新体验通常更好。',
  },
  {
    question: '为什么 Vite 开发体验通常更快？',
    answer:
      '因为 Vite 不需要在开发阶段先把整个项目完整打包，而是把源码直接交给浏览器按需请求，同时用 esbuild 预构建依赖，所以启动更快、修改后反馈也更快。',
  },
  {
    question: '为什么模型输出会不稳定？',
    answer:
      '因为大模型本质上是基于概率生成内容，不是死板地从数据库里拿固定答案。提示词、上下文、temperature 等因素一变，输出结果就可能跟着波动。',
  },
]

const Learning20260410 = () => {
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
              LEARNING NOTES · 2026-04-10
            </Tag>
            <Typography.Title level={1} className={styles.heroTitle}>
              2026-04-10 学习内容，
              <br />
              用页面形式新增展示。
            </Typography.Title>
            <Typography.Paragraph className={styles.heroDesc}>
              这一页聚焦 2026-04-10 的学习内容：Webpack 和 Vite 的差别、Vite
              为什么更快、为什么仍然要理解
              Webpack，以及模型输出为什么会不稳定，并整理成更适合复盘、汇报和面试表达的展示页面。
            </Typography.Paragraph>
          </div>

          <div className={styles.heroMetaPanel}>
            <div className={styles.metaEyebrow}>TODAY'S TRACK</div>
            <div className={styles.metaTitle}>2026-04-10 · Webpack × Vite × AI 输出稳定性</div>
            <div className={styles.metaDesc}>
              把 4 月 10 日这次学习，从任务内容整理成可复盘、可汇报、可面试表达的页面结构。
            </div>
            <Space size={10} wrap>
              <Tag color="blue">Webpack</Tag>
              <Tag color="purple">Vite</Tag>
              <Tag color="cyan">模型稳定性</Tag>
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
            extra={<Tag color="blue">工程化</Tag>}
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
            extra={<Tag color="purple">稳定性</Tag>}
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
              Vite 强在开发体验，Webpack
              强在工程认知；模型输出稳定性取决于提示词、上下文和采样策略。
            </Typography.Title>
            <Typography.Paragraph className={styles.quoteSubtext}>
              真正重要的不是“今天看了几个知识点”，而是你能不能把工程化理解和 AI
              概念整理成下一次面试里自然、稳定、清楚的表达。
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Learning20260410
