import {
  CloudServerOutlined,
  CheckCircleOutlined,
  FireOutlined,
  RadarChartOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const metricCards = [
  {
    title: '前端核心主题',
    value: '浏览器缓存',
    desc: '把强缓存、协商缓存以及常见缓存字段串成一个完整的性能优化知识点。',
    icon: <CloudServerOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 核心主题',
    value: '推理模型',
    desc: '区分推理模型和普通生成模型，理解推理能力为什么会影响实际用户体验。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '从概念理解推进到可稳定复述',
    desc: '不只记名词，而是讲清楚缓存机制和模型能力为什么会影响真实产品体验。',
    icon: <CheckCircleOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '强缓存优先，本地直接复用',
    text: '强缓存命中时，浏览器会直接使用本地缓存资源，不会向服务器发送请求，所以它的性能收益最高。只有强缓存失效后，浏览器才会进一步进入协商缓存判断。',
    icon: <FireOutlined />,
  },
  {
    title: '协商缓存是“带着标识去确认”',
    text: '协商缓存命中时，请求仍然会发到服务器，但服务器会根据资源标识或修改时间判断资源有没有变化。如果资源没变，就返回 304，让浏览器继续使用本地缓存。',
    icon: <SyncOutlined />,
  },
  {
    title: '缓存字段要分清强缓存和协商缓存',
    text: 'Cache-Control 和 Expires 主要控制强缓存；ETag 和 Last-Modified 主要用于协商缓存。面试里不仅要记住字段作用，还要知道现在更常用 Cache-Control 和 ETag 这种组合。',
    icon: <CloudServerOutlined />,
  },
]

const aiPoints = [
  {
    title: '推理模型更擅长多步分析',
    text: '推理模型更适合处理复杂判断、链式推导和多步骤拆解的问题，比如代码排查、需求拆分、问题定位这种不是一句话就能答完的任务。',
  },
  {
    title: '普通生成模型更偏快速输出',
    text: '普通生成模型更偏向基于已有模式直接生成内容，在文案润色、标题改写、固定格式内容生成这类任务里通常已经够用。',
  },
  {
    title: '推理能力会直接影响体验质量',
    text: '用户真正感受到的是答案准不准、有没有条理、能不能解决问题。推理能力越强，模型越容易把复杂问题拆清楚，所以会直接影响体验和结果可用性。',
  },
]

const answerCards = [
  {
    question: '强缓存和协商缓存的区别是什么？',
    answer:
      '强缓存和协商缓存的区别在于，强缓存命中时浏览器会直接使用本地缓存，不会向服务器发送请求；协商缓存命中时，浏览器会先向服务器发送请求，由服务器判断资源是否发生变化，如果没有变化，就返回 304，浏览器继续使用本地缓存。强缓存优先级更高，只有强缓存失效后，才会进入协商缓存。',
  },
  {
    question: 'ETag 和 Last-Modified 有什么区别？',
    answer:
      'ETag 和 Last-Modified 都是用于协商缓存的字段。区别在于，ETag 记录的是资源的唯一标识，像资源的版本号或内容指纹，服务器会根据这个标识精确判断资源是否发生变化；Last-Modified 记录的是资源最后修改时间，服务器是通过时间来判断资源有没有更新。相比 Last-Modified，ETag 判断通常更准确。',
  },
  {
    question: '为什么缓存是前端性能优化里的高频点？',
    answer:
      '缓存之所以是前端性能优化里的高频点，是因为它可以减少不必要的网络请求、加快资源加载速度、降低服务器压力和带宽消耗。对于 JS、CSS、图片这类静态资源来说，合理使用缓存能明显提升首屏加载速度、二次访问速度以及整体用户体验。缓存本质上是在提升资源复用率。',
  },
  {
    question: '推理模型和普通生成模型有什么差别？',
    answer:
      '推理模型和普通生成模型的主要区别在于，推理模型更擅长处理多步骤分析、复杂判断和链式推导的问题，适合解决需要一步一步拆解的问题；而普通生成模型更偏向基于已有模式快速生成结果，更适合文案生成、润色、改写这类直接输出型任务。',
  },
  {
    question: '为什么说模型会不会推理，会直接影响用户体验？',
    answer:
      '模型会不会推理，会直接影响它对复杂问题的理解、拆解和判断能力。推理能力更强的模型，通常给出的答案会更准确、更有条理，也更有可执行性，所以能更真实地帮助用户解决问题，这些都会直接影响用户体验。',
  },
]

const summaryList = [
  '今天前端部分主要补的是浏览器缓存。重点不是只记住强缓存和协商缓存的定义，而是要能说清楚两者的触发顺序、是否发请求，以及 Cache-Control、ETag 这些字段在真实请求流程里分别扮演什么角色。',
  'AI 部分则重点区分了推理模型和普通生成模型的能力差异。核心不是模型名字，而是理解“会不会推理”为什么会影响复杂问题处理质量，进而影响用户最终感受到的答案质量和产品体验。',
  '整体看，今天这轮学习把一条前端性能线和一条 AI 产品体验线都补齐了，核心提升点是从“知道概念”推进到“能解释为什么重要、为什么高频、为什么会影响体验”。',
]

const Learning20260406 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-06
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          浏览器缓存 × 推理模型
          <br />
          从性能优化到用户体验，把“为什么重要”讲清楚。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天前端主线聚焦浏览器缓存，重点串联强缓存、协商缓存以及 Cache-Control、ETag 等字段；AI
          主线聚焦推理模型，重点理解推理能力为什么会影响复杂问题处理质量和产品体验。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">Frontend</Tag>
          <Tag color="blue">Cache</Tag>
          <Tag color="cyan">ETag</Tag>
          <Tag color="purple">Reasoning Model</Tag>
          <Tag color="magenta">User Experience</Tag>
        </Space>
      </section>

      <Row gutter={[18, 18]}>
        {metricCards.map((item) => (
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
        <Typography.Title level={3}>今日总结</Typography.Title>
        <div className={styles.summaryList}>
          {summaryList.map((item) => (
            <Typography.Paragraph key={item}>{item}</Typography.Paragraph>
          ))}
        </div>
        <div className={styles.tagRow}>
          <Tag color="blue">最清楚：强缓存 / 协商缓存</Tag>
          <Tag color="purple">补齐：推理模型与普通生成模型区别</Tag>
          <Tag color="green">今日一句：前端优化看资源复用，AI体验看问题拆解</Tag>
        </div>
      </Card>

      <Card className={styles.quoteCard} bordered={false}>
        <Typography.Text className={styles.quoteLabel}>ONE LINE TO REMEMBER</Typography.Text>
        <Typography.Title level={2} className={styles.quoteTitle}>
          前端优化看资源复用，AI 体验看问题拆解。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260406
