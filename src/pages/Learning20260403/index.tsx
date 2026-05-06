import {
  ApartmentOutlined,
  CheckCircleOutlined,
  LinkOutlined,
  PictureOutlined,
  QuestionCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const promiseChainCode = `Promise.resolve(1)
  .then((res) => {
    return res + 1
  })
  .then((res) => {
    throw new Error('出错了')
  })
  .catch((err) => {
    console.log(err.message)
    return 100
  })
  .finally(() => {
    console.log('收尾逻辑')
  })`

const summaryCards = [
  {
    title: '前端主线',
    value: 'Promise × 异步流程',
    desc: '把 Promise 的状态、链式调用、错误传递和 finally 的定位讲清楚，形成一套更稳的异步表达。',
    icon: <LinkOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '多模态认知',
    desc: '理解模型为什么不再只处理文本，以及多模态为什么更贴近真实产品场景。',
    icon: <PictureOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '把“未来结果”和“真实输入”讲明白',
    desc: '前端看 Promise 如何管理未来结果，AI 看多模态如何覆盖真实世界的多种信息形式。',
    icon: <CheckCircleOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: 'Promise 有三种状态',
    text: 'Promise 初始化时是 pending，成功后变成 fulfilled，失败后变成 rejected，而且状态一旦确定就不能再次修改。',
    icon: <SyncOutlined />,
  },
  {
    title: 'then 为什么能链式调用',
    text: '因为 then 每次执行后都会返回一个新的 Promise，当前 return 的结果会成为下一个 then 的输入，所以异步流程可以被拆成一段一段继续往下传。',
    icon: <LinkOutlined />,
  },
  {
    title: 'catch 和 finally 的定位',
    text: 'catch 负责捕获前面链路中的错误，并且处理后还可以把链继续接下去；finally 不关心成功还是失败，更适合做统一收尾。',
    icon: <ApartmentOutlined />,
  },
  {
    title: '为什么异步编程离不开 Promise',
    text: '因为异步结果不是立刻可得的，Promise 可以把未来结果封装起来，并提供统一的状态管理、链式调用和错误传递机制。',
    icon: <QuestionCircleOutlined />,
  },
]

const aiPoints = [
  {
    title: '多模态是什么',
    text: '多模态就是模型不只处理文本，而是能够同时理解图片、音频、视频等多种信息形式，并在不同模态之间做理解、关联和生成。',
  },
  {
    title: '为什么图片加文本也算多模态',
    text: '因为图片和文本本来就是两种不同的信息形式，模型如果既要理解图片内容，又要结合文本指令完成任务，本质上就是在同时处理两种模态。',
  },
  {
    title: '为什么模型不再只处理文本',
    text: '因为真实世界的信息本来就是多样的，很多需求天然需要结合图片、语音、视频等内容，单靠文本很难覆盖全部场景。',
  },
  {
    title: '从产品视角为什么更有价值',
    text: '支持多模态后，用户可以直接发截图、语音、视频来完成任务，不必先手动转成文字，这本质上是在降低表达成本、缩短交互链路。',
  },
]

const answerCards = [
  {
    question: 'Promise 有哪些状态？',
    answer:
      'Promise 有 pending、fulfilled 和 rejected 三种核心状态。初始化时是 pending，异步成功后会变成 fulfilled，失败后会变成 rejected，而且状态一旦从 pending 变成另外两种之一，就不能再次修改。',
  },
  {
    question: 'then 和 catch 的链式执行怎么理解？',
    answer:
      'then 之所以能链式调用，是因为它每次执行后都会返回一个新的 Promise。当前 then 里 return 的结果会成为下一个 then 的输入；如果 return 的是 Promise，后面的 then 会等待它完成。catch 本身也会返回新的 Promise，所以它处理完错误并返回正常值后，后面的 then 仍然可以继续执行。',
  },
  {
    question: '为什么 Promise 能缓解回调地狱？',
    answer:
      '因为 Promise 把异步操作的结果封装成对象，并通过 then、catch 这种链式方式组织流程，而不是把一个回调继续嵌套到另一个回调函数里。这样代码结构更扁平，错误也能统一传递，所以整体可读性和可维护性都更好。',
  },
  {
    question: '为什么模型支持多模态对产品更有价值？',
    answer:
      '因为真实世界的信息本来就是多样的，很多任务天然需要结合图片、语音、视频等内容。支持多模态后，产品可以覆盖更真实的输入方式，降低用户表达成本，同时提升理解准确度和可用性，让 AI 能落到更多实际场景里。',
  },
]

const Learning20260403 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-03
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          Promise × 多模态
          <br />
          把异步流程和 AI 输入方式一起补明白。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 Promise
          的状态、链式调用和错误处理，一边补多模态的基础认知。前者回答“异步结果怎么被稳定地组织起来”，后者回答“为什么模型不再只处理文本”。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="blue">Promise</Tag>
          <Tag color="cyan">异步编程</Tag>
          <Tag color="purple">多模态</Tag>
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
            title="Promise 主线"
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
              <Typography.Title level={5}>Promise 链式执行示例</Typography.Title>
              <pre className={styles.codeBlock}>
                <code>{promiseChainCode}</code>
              </pre>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="多模态理解"
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
          Promise 让异步流程更可控，多模态让 AI 产品更接近真实用户场景。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260403
