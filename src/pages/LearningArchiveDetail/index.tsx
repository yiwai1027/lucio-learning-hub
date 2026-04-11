import { BulbOutlined, NodeIndexOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { Card, Col, Empty, Row, Tag, Timeline, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { learningArchiveMap } from '../LearningArchive/data'
import { learningInterviewBank } from '../LearningArchive/answerBank'
import styles from './index.module.less'

const LearningArchiveDetail = () => {
  const { date = '' } = useParams()
  const record = learningArchiveMap[date]
  const interviewPack = learningInterviewBank[date]

  if (!record) {
    return <Empty description="没有找到这一天的学习页面" />
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Tag color="blue">LEARNING PLAN · {record.date}</Tag>
        <Typography.Title level={1} className={styles.title}>
          {record.date} 学习计划页面
        </Typography.Title>
        <Typography.Paragraph className={styles.desc}>
          这是按照当日学习计划整理出来的独立页面。目前按“计划留档”方式展示，后续如果补上真实学习记录，还可以继续扩展成复盘页或作品页。
        </Typography.Paragraph>
        <div className={styles.metaRow}>
          <Tag>{record.weekday}</Tag>
          <Tag>{record.duration}</Tag>
          <Tag color="purple">{record.status}</Tag>
        </div>
      </div>

      <Card className={styles.summaryCard}>
        <Typography.Title level={4}>主线</Typography.Title>
        <Typography.Paragraph>{record.track}</Typography.Paragraph>
      </Card>

      <Row gutter={[20, 20]}>
        <Col xs={24} xl={12}>
          <Card
            className={styles.panelCard}
            title="前端任务"
            extra={<Tag color="blue">Frontend</Tag>}
          >
            <Timeline
              items={record.frontend.map((item) => ({
                color: '#7fb0ff',
                dot: <NodeIndexOutlined className={styles.dot} />,
                children: <Typography.Paragraph>{item}</Typography.Paragraph>,
              }))}
            />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card className={styles.panelCard} title="AI 任务" extra={<Tag color="purple">AI</Tag>}>
            <Timeline
              items={record.ai.map((item) => ({
                color: '#b69cff',
                dot: <ThunderboltOutlined className={styles.dot} />,
                children: <Typography.Paragraph>{item}</Typography.Paragraph>,
              }))}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card
            className={styles.panelCard}
            title="最低完成标准"
            extra={<Tag color="green">Minimum</Tag>}
          >
            <div className={styles.grid}>
              {record.minimum.map((item) => (
                <div key={item} className={styles.itemCard}>
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            className={styles.panelCard}
            title="输出目标"
            extra={<Tag color="gold">Output</Tag>}
          >
            <div className={styles.grid}>
              {record.outputs.length ? (
                record.outputs.map((item) => (
                  <div key={item} className={styles.itemCard}>
                    <BulbOutlined /> {item}
                  </div>
                ))
              ) : (
                <Typography.Text type="secondary">
                  这一天的计划文件没有单独列出输出目标，主要以任务完成和复述训练为主。
                </Typography.Text>
              )}
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            className={styles.panelCard}
            title="面试版本答案"
            extra={<Tag color="magenta">Interview</Tag>}
          >
            <div className={styles.answerList}>
              {interviewPack?.answers.map((item) => (
                <div key={item.question} className={styles.answerCard}>
                  <Typography.Title level={4}>{item.question}</Typography.Title>
                  <Typography.Paragraph>{item.answer}</Typography.Paragraph>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            className={styles.panelCard}
            title="一句话总结"
            extra={<Tag color="cyan">Summary</Tag>}
          >
            <Typography.Paragraph className={styles.summaryText}>
              {interviewPack?.summary}
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LearningArchiveDetail
