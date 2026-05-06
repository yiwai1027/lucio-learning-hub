import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const anyCode = `let anyValue: any = 'hello'

anyValue = 123
anyValue = true

// TypeScript 不会严格拦截
anyValue.toUpperCase()
anyValue.user.profile.name`

const unknownCode = `let unknownValue: unknown = 'hello'

// unknownValue.toUpperCase() // 直接使用会报错

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase())
}`

const neverCode = `function throwError(message: string): never {
  throw new Error(message)
}

type Status = 'success' | 'error'

function handleStatus(status: Status) {
  if (status === 'success') return '成功'
  if (status === 'error') return '失败'

  const exhaustiveCheck: never = status
  return exhaustiveCheck
}`

const summaryCards = [
  {
    title: '今日 TS 主题',
    value: 'any / unknown / never',
    desc: '重点理解关闭检查、类型收窄和不可能出现的值这三层差异。',
    tone: 'blue',
  },
  {
    title: '今日 AI 主题',
    value: '温度 / 采样',
    desc: '重点理解为什么模型输出会在稳定性和创造性之间变化。',
    tone: 'violet',
  },
  {
    title: '今日输出目标',
    value: '可直接复述',
    desc: '把 TS 和 AI 的核心概念整理成可以看页面直接讲出来的内容。',
    tone: 'green',
  },
]

const tsCards = [
  {
    title: 'any',
    tag: '关闭类型检查',
    desc: '可以赋值任意类型，也可以随意访问属性和调用方法，但很多问题会被拖到运行时。',
    code: anyCode,
    summary: '关键词：任意类型、随便调用、运行时风险。',
  },
  {
    title: 'unknown',
    tag: '先判断再使用',
    desc: '也是未知类型，但不能直接操作，必须先做 typeof 或其它类型收窄。',
    code: unknownCode,
    summary: '关键词：未知、收窄、安全。',
  },
  {
    title: 'never',
    tag: '理论上不该有值',
    desc: '常见在抛异常函数、死循环、联合类型穷尽判断里。',
    code: neverCode,
    summary: '关键词：不可能出现、穷尽检查。',
  },
]

const aiPoints = [
  {
    title: '温度是什么',
    text: '温度决定模型回答时更保守还是更发散。温度低时更稳，温度高时更多样。',
  },
  {
    title: '为什么温度会影响风格',
    text: '模型不是直接背答案，而是在多个候选词里按概率选下一个词。温度会影响这些概率分布。',
  },
  {
    title: '采样是什么',
    text: '采样是模型从候选词里怎么挑词的过程，采样范围越小越稳，范围越大越活。',
  },
  {
    title: '温度和采样的区别',
    text: '温度偏向影响概率分布，采样偏向影响挑选范围和方式。一个更像胆子大小，一个更像可选范围大小。',
  },
  {
    title: '稳定性 vs 创造性',
    text: '低温度、小采样更稳定；高温度、大采样更有创造性，但也更容易发散。',
  },
]

const interviewAnswers = [
  {
    question: 'any、unknown、never 的区别是什么？',
    answer:
      'any 表示任意类型，基本会放宽 TypeScript 的类型检查；unknown 表示当前类型未知，但使用前必须先做类型收窄；never 表示理论上不可能出现的值，常见在抛异常函数、死循环和穷尽判断里。',
  },
  {
    question: '为什么 unknown 比 any 更安全？',
    answer:
      '因为 any 会直接跳过类型检查，很多问题会留到运行时才暴露；而 unknown 在使用前必须先做 typeof、instanceof 等类型收窄，可以把很多错误提前拦在编译阶段。',
  },
  {
    question: '温度和采样为什么会影响输出风格？',
    answer:
      '因为模型生成内容时是在多个候选词里按概率选择下一个词。温度会影响概率分布，采样会影响挑选范围和方式，所以它们会共同决定输出更稳定，还是更有创造性。',
  },
]

const Learning20260414 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <Tag color="blue">LEARNING NOTES · 2026-04-14</Tag>
        <Typography.Title level={1}>TS + AI 学习整理页</Typography.Title>
        <Typography.Paragraph>
          今天的学习主题分成两条线：TypeScript 里的 any / unknown / never，和 AI 里的温度 /
          采样。目标不是只记概念，而是能讲清区别、原理和实际含义。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">TypeScript</Tag>
          <Tag color="green">类型安全</Tag>
          <Tag color="purple">AI 参数</Tag>
          <Tag color="cyan">面试表达</Tag>
        </Space>
      </section>

      <Row gutter={[16, 16]}>
        {summaryCards.map((item) => (
          <Col xs={24} md={8} key={item.title}>
            <Card className={`${styles.metricCard} ${styles[item.tone]}`}>
              <Typography.Text className={styles.metricLabel}>{item.title}</Typography.Text>
              <div className={styles.metricValue}>{item.value}</div>
              <div className={styles.metricDesc}>{item.desc}</div>
            </Card>
          </Col>
        ))}
      </Row>

      <section>
        <Typography.Title level={2} className={styles.sectionTitle}>
          TypeScript 代码示例
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {tsCards.map((item) => (
            <Col xs={24} key={item.title}>
              <Card title={item.title} extra={<Tag>{item.tag}</Tag>} className={styles.card}>
                <Typography.Paragraph className={styles.desc}>{item.desc}</Typography.Paragraph>
                <pre className={styles.codeBlock}>
                  <code>{item.code}</code>
                </pre>
                <Typography.Text className={styles.summary}>{item.summary}</Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <Typography.Title level={2} className={styles.sectionTitle}>
          AI 核心知识点
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {aiPoints.map((item) => (
            <Col xs={24} md={12} key={item.title}>
              <Card className={styles.card} title={item.title}>
                <Typography.Paragraph className={styles.desc}>{item.text}</Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <Typography.Title level={2} className={styles.sectionTitle}>
          今日可直接复述的答案
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {interviewAnswers.map((item) => (
            <Col xs={24} md={8} key={item.question}>
              <Card className={styles.answerCard}>
                <div className={styles.answerBadge}>高频题</div>
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
    </div>
  )
}

export default Learning20260414
