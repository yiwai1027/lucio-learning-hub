import { Button, Card, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <Card>
        <Space direction="vertical" size={16}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            欢迎来到 KPI Report
          </Typography.Title>
          <Typography.Text type="secondary">
            这是一个经营分析后台示例项目。
          </Typography.Text>
          <Button type="primary" onClick={() => navigate('/dashboard')}>
            进入看板
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default Home;
