import { Button, Card, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.aboutPage}>
      <Card>
        <Space direction="vertical" size={16}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            关于 KPI Report
          </Typography.Title>
          <Typography.Paragraph style={{ margin: 0 }}>
            这是一个基于 React、Ant Design 和 Ant Design Charts 构建的经营看板示例。
          </Typography.Paragraph>
          <Button type="primary" onClick={() => navigate('/dashboard')}>
            返回看板
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default About;
