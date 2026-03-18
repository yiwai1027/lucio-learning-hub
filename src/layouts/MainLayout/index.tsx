import {
  BarChartOutlined,
  DashboardOutlined,
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space,
  Tag,
  Typography,
} from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import styles from './index.module.less';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAppStore();

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: '经营看板' },
    { key: '/about', icon: <BarChartOutlined />, label: '关于系统' },
  ];

  const currentKey = menuItems.find((item) => location.pathname.startsWith(item.key))?.key || '/dashboard';
  const currentTitle = currentKey === '/dashboard' ? '经营看板' : '关于系统';
  const currentDesc =
    currentKey === '/dashboard'
      ? '聚合核心 KPI、转化趋势和团队执行数据，快速查看经营情况。'
      : '查看项目说明、技术栈和当前系统能力。';

  return (
    <Layout className={styles.mainLayout}>
      <Sider width={248} theme="light" className={styles.sider}>
        <div className={styles.brand}>
          <Typography.Title level={4} className={styles.brandTitle}>
            KPI Report
          </Typography.Title>
          <Typography.Text className={styles.brandDesc}>经营分析后台</Typography.Text>
        </div>

        <div className={styles.menuWrap}>
          <Menu
            mode="inline"
            selectedKeys={[currentKey]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
          />
        </div>
      </Sider>

      <Layout className={styles.mainContent}>
        <Header className={styles.header}>
          <div className={styles.headerLeft}>
            <Breadcrumb
              items={[
                { title: '首页' },
                { title: currentTitle },
              ]}
            />
            <div className={styles.pageIntro}>
              <Typography.Title level={3} className={styles.pageTitle}>
                {currentTitle}
              </Typography.Title>
              <Typography.Text className={styles.pageDesc}>{currentDesc}</Typography.Text>
            </div>
          </div>

          <div className={styles.headerRight}>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              placeholder="搜索指标 / 区域 / 负责人"
              className={styles.search}
            />

            <Tag color="blue" className={styles.statusTag}>
              今日数据已同步
            </Tag>

            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: () => {
                      logout();
                      navigate('/login');
                    },
                  },
                ],
              }}
            >
              <Space className={styles.user} size={12}>
                <Avatar icon={<UserOutlined />} />
                <div className={styles.userInfo}>
                  <Typography.Text strong className={styles.userName}>
                    {user?.name ?? '未登录'}
                  </Typography.Text>
                  <Typography.Text type="secondary" className={styles.userRole}>
                    {user?.role ?? '-'}
                  </Typography.Text>
                </div>
              </Space>
            </Dropdown>
          </div>
        </Header>

        <Content className={styles.content}>
          <div className={styles.contentInner}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
