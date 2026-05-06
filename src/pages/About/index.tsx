import { Button, Card, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.aboutPage}>
      <Card>
        <Space direction="vertical" size={16}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            关于 Lucio Learning Hub
          </Typography.Title>
          <Typography.Paragraph style={{ margin: 0 }}>
            这是一个基于 React
            构建的学习展示与面试归档项目，用来沉淀每日学习内容、项目表达、性能优化案例和前端求职相关输出。
          </Typography.Paragraph>
          <Button type="primary" onClick={() => navigate('/learning-archive')}>
            返回学习归档
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default About
