import {
  ApiOutlined,
  AuditOutlined,
  BugOutlined,
  CodeOutlined,
  EyeOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const tsconfigCode = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}`

const retryCode = `async function callToolWithRetry(runTool: () => Promise<any>) {
  try {
    return await runTool()
  } catch (error) {
    return await runTool()
  }
}`

const summaryCards = [
  {
    title: '前端主线',
    value: 'TS 工程配置认知',
    desc: '从 tsconfig、strict、模块解析和目标版本入手，建立“为什么配置会影响项目开发”的第一层理解。',
    icon: <CodeOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '可观测性与基础工程能力',
    desc: '理解日志、失败重试、工具结果展示为什么不是附加项，而是 AI 产品里的基础设施。',
    icon: <ApiOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '把配置和链路看清楚',
    desc: '前端看懂代码怎么被检查和编译，AI 产品看懂问题为什么发生、结果为什么可信。',
    icon: <SafetyOutlined />,
    tone: 'green',
  },
]

const tsPoints = [
  {
    title: 'tsconfig 是 TS 项目的核心入口',
    text: '它定义了代码怎么被编译、模块怎么被解析、类型检查要多严格，所以它直接影响开发体验和输出结果。',
    icon: <AuditOutlined />,
  },
  {
    title: 'strict 的意义',
    text: 'strict 会提高 TypeScript 的检查强度，把很多潜在类型问题提前暴露在开发阶段，而不是拖到运行时。',
    icon: <SafetyOutlined />,
  },
  {
    title: 'moduleResolution 影响什么',
    text: '模块解析方式决定 TS 怎么找到 import 的模块，关系到包能不能识别、路径别名是否生效，以及构建时会不会报找不到模块。',
    icon: <CodeOutlined />,
  },
  {
    title: 'target 影响什么',
    text: '目标版本决定最终输出的 JavaScript 语法级别，进而影响浏览器兼容性、新语法支持和构建后的体积与降级成本。',
    icon: <BugOutlined />,
  },
]

const aiPoints = [
  {
    title: '为什么 AI 产品需要可观测性',
    text: '因为模型输出和工具调用链路本来就不稳定，只有把输入、输出、日志、错误和重试过程记录下来，问题才有办法追踪。',
  },
  {
    title: '日志为什么重要',
    text: '日志的价值不是“记一下”，而是让问题能被回放、被定位、被分析，知道是提示词、模型、工具还是用户输入出了问题。',
  },
  {
    title: '失败重试为什么重要',
    text: '很多失败是偶发性的，比如超时、服务抖动或格式异常。合理重试可以兜住临时问题，但要有边界和策略。',
  },
  {
    title: '工具结果展示为什么重要',
    text: '用户不只想知道有没有结果，还想知道查了什么、失败在哪、当前是否在重试。展示清楚，结果才更可信。',
  },
]

const answerCards = [
  {
    question: 'tsconfig 是干嘛的？',
    answer:
      'tsconfig 是 TypeScript 项目的核心配置文件，主要用来定义项目的编译规则、模块解析方式以及类型检查策略。它不只是控制代码怎么被编译，也会影响开发时的报错提示、类型安全程度和最终输出结果，所以对项目开发体验和工程配置都很重要。',
  },
  {
    question: 'strict 模式为什么重要？',
    answer:
      'strict 模式的作用是让 TypeScript 用更严格的规则做类型检查，把很多潜在的类型问题提前暴露在开发阶段，而不是等到运行时再出 bug。这样不仅能提高代码的安全性和可维护性，也能让团队协作时的类型约束更统一，减少低级错误。',
  },
  {
    question: '为什么 AI 产品常需要可观测性？',
    answer:
      'AI 产品需要可观测性，是因为模型输出和工具调用链路通常是不稳定的。只有把输入、输出、日志、错误信息以及重试过程记录下来，开发者才能更准确地定位问题、分析效果波动的原因，并持续优化产品体验，最终保证结果质量和用户体验。',
  },
  {
    question: '为什么日志、失败重试、工具结果展示属于基础工程能力？',
    answer:
      '因为日志、失败重试和工具结果展示并不是可有可无的附加功能，它们分别对应 AI 产品中的问题定位、异常兜底和结果透明度这三个关键工程问题。只有把这些基础能力补齐，系统才更稳定，问题才更容易排查，用户也会更容易理解和信任最终结果，所以它们本质上属于 AI 产品的基础工程能力。',
  },
]

const Learning20260417 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-17
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          tsconfig × AI 可观测性
          <br />
          把工程配置和问题链路一起看清楚。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 TypeScript 工程配置认知，一边补 AI
          产品基础工程能力。前者关注代码怎么被检查、解析和输出，后者关注问题怎么被看见、被兜底、被解释给用户看。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">TypeScript</Tag>
          <Tag color="green">tsconfig</Tag>
          <Tag color="cyan">strict</Tag>
          <Tag color="purple">AI 可观测性</Tag>
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
            title="TypeScript 工程配置"
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
                <Typography.Title level={5}>一个常见的 tsconfig 片段</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{tsconfigCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="AI 可观测性"
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
              一个简单的失败重试示例
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{retryCode}</code>
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
          tsconfig 决定 TypeScript 项目怎么被检查和输出，可观测性决定 AI
          产品出了问题时能不能看清、兜住并解释清楚。
        </Typography.Title>
      </Card>

      <Card className={styles.observeCard}>
        <div className={styles.observeHeader}>
          <EyeOutlined className={styles.observeIcon} />
          <div>
            <Typography.Title level={4}>今天的工程视角</Typography.Title>
            <Typography.Paragraph>
              前端主线学的是“配置怎么影响项目”，AI
              主线学的是“链路怎么影响体验”，两边本质上都在补工程认知。
            </Typography.Paragraph>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Learning20260417
