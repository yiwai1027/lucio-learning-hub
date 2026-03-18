import {
  LockOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  App,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import styles from './index.module.less';

const Login = () => {
  const navigate = useNavigate();
  const { message } = App.useApp();
  const login = useAppStore((state) => state.login);

  const onFinish = (values: { username: string; password: string }) => {
    login(values.username);
    message.success(`欢迎回来，${values.username}`);
    navigate('/dashboard');
  };

  return (
    <Row className={styles.loginPage}>
      <Col xs={0} lg={14}>
        <div className={styles.hero}>
          <div>
            <Tag className={styles.tag} bordered={false}>
              KPI 经营分析平台
            </Tag>
            <Typography.Title level={1} className={styles.title}>
              用数据看清业务增长
            </Typography.Title>
            <Typography.Paragraph className={styles.desc}>
              汇总销售目标、渠道转化、团队执行和趋势变化，让日报、周报和复盘更轻松。
            </Typography.Paragraph>
          </div>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card variant="borderless" className={styles.statCard}>
                <Statistic
                  title={<span className={styles.statTitle}>月度目标达成</span>}
                  value={82}
                  suffix="%"
                  valueStyle={{ color: '#fff' }}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card variant="borderless" className={styles.statCard}>
                <Statistic
                  title={<span className={styles.statTitle}>新增客户</span>}
                  value={128}
                  valueStyle={{ color: '#fff' }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Col>

      <Col xs={24} lg={10}>
        <div className={styles.formWrap}>
          <Card className={styles.formCard} styles={{ body: { padding: 36 } }}>
            <Space direction="vertical" size={8} className={styles.formHeader}>
              <Typography.Title level={2} style={{ margin: 0 }}>
                欢迎登录
              </Typography.Title>
              <Typography.Text type="secondary">
                登录后查看团队经营指标、转化趋势和任务完成情况。
              </Typography.Text>
            </Space>

            <Form
              layout="vertical"
              size="large"
              onFinish={onFinish}
              initialValues={{ remember: true, username: 'Lucio' }}
            >
              <Form.Item label="账号" name="username" rules={[{ required: true, message: '请输入账号' }]}>
                <Input prefix={<UserOutlined />} placeholder="请输入账号" />
              </Form.Item>

              <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
              </Form.Item>

              <Form.Item label="验证码" name="code" rules={[{ required: true, message: '请输入验证码' }]}>
                <Input prefix={<SafetyCertificateOutlined />} placeholder="请输入验证码" />
              </Form.Item>

              <div className={styles.formActions}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
                <Button type="link">忘记密码</Button>
              </div>

              <Button type="primary" htmlType="submit" block className={styles.submit}>
                登录系统
              </Button>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
