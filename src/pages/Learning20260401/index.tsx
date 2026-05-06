import {
  BgColorsOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  NodeIndexOutlined,
  SearchOutlined,
  SwapOutlined,
} from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './index.module.less'

const shallowCopyCode = `const source = {
  name: 'lucio',
  profile: { age: 24 }
}

const copy = { ...source }
copy.profile.age = 25

console.log(source.profile.age) // 25`

const structuredCloneCode = `const source = {
  name: 'lucio',
  profile: { age: 24 },
  tags: ['frontend', 'ai']
}

const deepCopy = structuredClone(source)
deepCopy.profile.age = 25

console.log(source.profile.age) // 24`

const summaryCards = [
  {
    title: '前端主线',
    value: '拷贝与引用类型',
    desc: '把深拷贝、浅拷贝和引用地址的关系讲清楚，顺手补上 React 里为什么强调不可变数据。',
    icon: <SwapOutlined />,
    tone: 'blue',
  },
  {
    title: 'AI 主线',
    value: '向量数据库认知',
    desc: '理解向量数据库为什么适合语义搜索，以及它和普通数据库在 AI 场景里的分工差别。',
    icon: <DatabaseOutlined />,
    tone: 'violet',
  },
  {
    title: '今日关键目标',
    value: '把“引用”和“相似度”串起来',
    desc: '前端看清共享引用为什么容易出问题，AI 看清语义检索为什么不能只靠关键词匹配。',
    icon: <DeploymentUnitOutlined />,
    tone: 'green',
  },
]

const frontendPoints = [
  {
    title: '浅拷贝只复制第一层',
    text: '如果属性值是基本类型，就复制值；如果属性值还是对象或数组，复制的其实还是引用地址，所以嵌套数据会互相影响。',
    icon: <BgColorsOutlined />,
  },
  {
    title: '深拷贝会继续递归复制',
    text: '深拷贝的目标是把嵌套引用也复制成新的结构，让新旧对象之间互不影响，而不是只复制表面一层。',
    icon: <SwapOutlined />,
  },
  {
    title: 'JSON 方案不是通用深拷贝',
    text: 'JSON.parse(JSON.stringify(obj)) 虽然简单，但会丢失 undefined、function、Symbol，也不能正常处理 Date、RegExp 和循环引用。',
    icon: <NodeIndexOutlined />,
  },
  {
    title: 'React 为什么强调新引用',
    text: 'React 常通过引用是否变化来判断状态有没有更新。如果只是直接改对象属性，引用没变，组件就可能不会重新渲染。',
    icon: <DeploymentUnitOutlined />,
  },
]

const aiPoints = [
  {
    title: '向量数据库存的是什么',
    text: '它存的是经过 embedding 模型处理后的向量数据，本质上是在保存内容在语义空间里的位置。',
  },
  {
    title: '为什么它适合 AI 场景',
    text: '因为很多 AI 应用要做的是语义搜索和知识召回，不是按关键词完全匹配，而是按意思接近去找内容。',
  },
  {
    title: '普通数据库和它的差别',
    text: '普通数据库更擅长结构化数据的精确查询，向量数据库更擅长做相似度检索和语义匹配。',
  },
  {
    title: '真实产品里通常怎么配合',
    text: '普通数据库负责用户、订单、业务字段等结构化信息，向量数据库负责知识片段、文档 embedding 和检索索引。',
  },
]

const answerCards = [
  {
    question: '深拷贝和浅拷贝的区别是什么？',
    answer:
      '浅拷贝只会复制对象的第一层属性，如果属性值是引用类型，复制的其实还是引用地址，所以修改嵌套数据时会互相影响。深拷贝会把对象的每一层都复制一份，生成全新的引用关系，因此新对象和原对象之间互不影响。',
  },
  {
    question: '常见深拷贝方式有什么局限？',
    answer:
      '常见方式里，展开运算符和 Object.assign 本质上都是浅拷贝；JSON.parse(JSON.stringify(obj)) 虽然能做简单深拷贝，但会丢失 undefined、function、Symbol，Date 会变成字符串，RegExp 也无法正常保留，还不能处理循环引用，所以它不能算通用方案。',
  },
  {
    question: '为什么 React 里修改对象属性后，页面有时候不会更新？',
    answer:
      '因为 React 在判断状态是否变化时，通常看的是引用地址有没有变化，而不是深度比较对象内部每个属性。如果只是直接修改对象里的某个属性，但对象本身的引用没变，React 可能会认为状态还是原来的那份数据，从而不触发重新渲染。',
  },
  {
    question: '普通数据库和向量数据库在 AI 应用里最大的区别是什么？',
    answer:
      '普通数据库更适合管理结构化数据，擅长做精确查询、条件过滤和业务数据管理；向量数据库更适合 AI 场景下的语义检索和相似度匹配，主要用来处理 embedding 后的向量数据。简单来说，一个偏按条件查，一个偏按相似度找，两者通常会结合使用。',
  },
]

const Learning20260401 = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <Tag color="blue" className={styles.heroTag}>
          LEARNING NOTES · 2026-04-01
        </Tag>
        <Typography.Title level={1} className={styles.heroTitle}>
          深拷贝 × 向量数据库
          <br />
          把“引用”和“相似度”一起补明白。
        </Typography.Title>
        <Typography.Paragraph className={styles.heroDesc}>
          今天的学习一边补 JavaScript 里拷贝与引用类型的底层逻辑，一边补 AI
          场景里的向量数据库认知。前者回答“为什么对象会互相影响”，后者回答“为什么 AI
          检索不能只靠关键词”。
        </Typography.Paragraph>
        <Space wrap>
          <Tag color="gold">JavaScript</Tag>
          <Tag color="cyan">引用类型</Tag>
          <Tag color="blue">深拷贝 / 浅拷贝</Tag>
          <Tag color="purple">向量数据库</Tag>
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
            title="拷贝与引用类型"
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

            <div className={styles.codeGrid}>
              <div>
                <Typography.Title level={5}>浅拷贝导致嵌套对象共用引用</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{shallowCopyCode}</code>
                </pre>
              </div>
              <div>
                <Typography.Title level={5}>用 structuredClone 做原生深拷贝</Typography.Title>
                <pre className={styles.codeBlock}>
                  <code>{structuredCloneCode}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} xl={10}>
          <Card
            title="向量数据库"
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
            <Card className={styles.compareCard} bordered={false}>
              <Typography.Title level={5}>一句话区分</Typography.Title>
              <Typography.Paragraph>
                普通数据库回答的是“条件上符不符合”，向量数据库回答的是“语义上像不像”。
              </Typography.Paragraph>
              <div className={styles.compareRow}>
                <div>
                  <SearchOutlined /> 普通数据库
                </div>
                <span>按条件查</span>
              </div>
              <div className={styles.compareRow}>
                <div>
                  <DatabaseOutlined /> 向量数据库
                </div>
                <span>按相似度找</span>
              </div>
            </Card>
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
          前端要理解“引用地址为什么会共享”，AI 要理解“语义相似度为什么能帮模型找对资料”。
        </Typography.Title>
      </Card>
    </div>
  )
}

export default Learning20260401
