import {
  ApartmentOutlined,
  NodeIndexOutlined,
  RadarChartOutlined,
  ShareAltOutlined,
  StockOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const protoCode = `function Person() {}

Person.prototype.sayHi = function () {
  return 'hi'
}

const p = new Person()

console.log(p.__proto__ === Person.prototype) // true
console.log(p.sayHi()) // 'hi'`

const embeddingCode = `文本 A: 我想买一台便宜点的手机
文本 B: 推荐性价比高的手机

Embedding 之后
A -> [0.12, -0.31, 0.88, ...]
B -> [0.10, -0.28, 0.91, ...]

向量距离更近 => 语义更接近`

const summaryCards = [
  {
    title: '前端主线',
    value: '原型链与继承基础',
    desc: '把原型、原型链、__proto__、prototype、constructor 串成一套完整理解，能直接解释 JS 为什么靠原型链做复用。',
    icon: <ApartmentOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: 'Embedding 与向量化检索',
    desc: '理解 Embedding 为什么能保留语义信息，也理解为什么语义检索通常离不开向量化。',
    icon: <RadarChartOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '一个讲复用，一个讲相似度',
    desc: '前端看清对象如何沿原型链复用方法，AI 看清系统如何用向量表示语义接近。',
    icon: <ThunderboltOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '原型是什么',
    text: '可以把原型理解成对象共享能力的公共模板，很多实例会把公共方法放在原型对象上统一复用。',
    icon: <ApartmentOutlined />,
  },
  {
    title: '原型链是什么',
    text: '对象访问属性或方法时，如果自身没有，就会沿着原型对象逐级向上查找，这条查找路径就是原型链。',
    icon: <ShareAltOutlined />,
  },
  {
    title: '__proto__、prototype、constructor 的关系',
    text: '实例对象的 __proto__ 通常指向构造函数的 prototype，而 prototype 上一般又有 constructor 指回构造函数本身。',
    icon: <NodeIndexOutlined />,
  },
  {
    title: '为什么 JS 继承离不开原型链',
    text: '因为方法共享和对象复用都依赖原型链。公共方法放在原型对象上，实例自身没有时就沿链查找，从而避免每个对象都复制一份方法。',
    icon: <StockOutlined />,
  },
]

const aiPoints = [
  {
    title: 'Embedding 是什么',
    text: 'Embedding 是把文本、图片等内容转换成稠密向量表示的过程，目标是尽量保留语义信息。',
  },
  {
    title: '为什么语义检索要先做 Embedding',
    text: '因为语义检索关注的是“意思是否接近”，不是只看关键词是否相同。转成向量后，系统更容易比较语义距离。',
  },
  {
    title: '为什么检索通常需要向量化',
    text: '机器更擅长数值计算。把内容向量化后，就可以通过距离和相似度计算找出 Top K 的语义相关结果。',
  },
]

const answerCards = [
  {
    question: '原型链是什么？',
    answer:
      '原型链是 JavaScript 在对象查找属性和方法时，沿着对象的原型逐级向上查找形成的链式关系。对象本身没有某个属性时，不会立刻报错，而是会继续去它的原型对象上查找，再找不到就继续往上，直到 null 为止。',
  },
  {
    question: 'prototype 和 __proto__ 有什么区别？',
    answer:
      'prototype 是函数身上的属性，主要用于存放实例共享的属性和方法；__proto__ 是对象身上的隐式原型，指向该对象的原型对象。实例在访问属性或方法时，如果自身没有，就会沿着 __proto__ 对应的原型链向上查找。在通过 new 创建实例时，实例的 __proto__ 通常会指向构造函数的 prototype。',
  },
  {
    question: '为什么 JavaScript 的继承本质上是基于原型链的？',
    answer:
      '因为对象之间的方法复用和属性访问，都是通过原型链向上查找实现的。公共方法可以定义在原型对象上，多个实例共享同一份方法，既减少了重复创建，也节省了内存。',
  },
  {
    question: 'Embedding 是什么？',
    answer:
      'Embedding 是把文本、图片等内容转换为稠密向量表示的过程，这种向量会尽量保留语义信息，方便系统做相似度计算、语义检索、推荐和聚类。',
  },
  {
    question: '为什么做语义检索时通常要先做 Embedding？',
    answer:
      '因为语义检索的目标不是只看关键词是否一致，而是判断内容意思是否接近。先做 Embedding，把内容转成向量后，就可以通过向量距离来衡量语义相似度，从而更准确地找到意思接近的内容。',
  },
]

const Learning20260331 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-03-31
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          原型链 × Embedding
          <br />
          一个讲对象复用，一个讲语义相似度。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 JavaScript 里原型链和继承的基础认知，一边补 AI 检索里 Embedding
          和向量化的核心概念。前端重点是讲清实例、原型对象和构造函数之间的关系，AI
          重点是理解为什么系统需要把内容转成向量后再做语义检索。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="green">原型链</Tag>
          <Tag color="cyan">prototype</Tag>
          <Tag color="purple">Embedding</Tag>
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
            title="原型链核心点"
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

            <div className={styles.codeWrap}>
              <div>
                <Typography.Title level={5}>实例、原型和构造函数的关系</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{protoCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="Embedding 与检索"
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
              一个最简单的向量化理解
            </Typography.Title>
            <pre className={styles.codeBlock}>
              <code>{embeddingCode}</code>
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
          JS 靠原型链做复用，AI 靠向量化做语义计算，它们本质上都是在解决如何高效复用和匹配信息。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260331
