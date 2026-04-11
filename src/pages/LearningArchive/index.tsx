import { CalendarOutlined, FileTextOutlined, RocketOutlined } from '@ant-design/icons'
import { Card, Col, Row, Tag, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { learningArchiveData } from './data'
import styles from './index.module.less'

const LearningArchive = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Typography.Text className={styles.eyebrow}>LEARNING ARCHIVE</Typography.Text>
        <Typography.Title level={1} className={styles.title}>
          03-26 到 04-10 学习计划归档页
        </Typography.Title>
        <Typography.Paragraph className={styles.desc}>
          这里整理的是 2026-03-26 到 2026-04-10
          期间的每日学习计划页面。当前按“计划留档”的方式做成每天一个独立页面，方便后续继续补学习记录、复盘和作品展示。
        </Typography.Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        {learningArchiveData.map((item) => (
          <Col xs={24} md={12} xl={8} key={item.date}>
            <Card
              hoverable
              className={styles.card}
              onClick={() => navigate(`/learning-archive/${item.date}`)}
            >
              <div className={styles.topRow}>
                <Tag color="blue">{item.date}</Tag>
                <span className={styles.weekday}>{item.weekday}</span>
              </div>
              <Typography.Title level={4} className={styles.cardTitle}>
                {item.date} 学习页
              </Typography.Title>
              <div className={styles.meta}>
                <CalendarOutlined /> {item.duration}
              </div>
              <div className={styles.meta}>
                <RocketOutlined /> 前端 {item.frontend.length} 项 · AI {item.ai.length} 项
              </div>
              <div className={styles.meta}>
                <FileTextOutlined /> 输出目标 {item.outputs.length} 条
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default LearningArchive
