import {
  BarChartOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MenuOutlined,
  RadarChartOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Breadcrumb,
  Button,
  Drawer,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space,
  Tag,
  Typography,
} from 'antd'
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from '../../store'
import styles from './index.module.less'

const { Header, Sider, Content } = Layout

const MainLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAppStore()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: '经营看板' },
    { key: '/kpi-redux', icon: <BarChartOutlined />, label: 'KPI · Redux' },
    { key: '/kpi-zustand', icon: <BarChartOutlined />, label: 'KPI · Zustand' },
    { key: '/learning-showcase', icon: <RadarChartOutlined />, label: '03-26 学习展示' },
    { key: '/learning-20260410', icon: <RadarChartOutlined />, label: '04-10 学习展示' },
    { key: '/learning-20260411', icon: <RadarChartOutlined />, label: '04-11 学习展示' },
    { key: '/learning-archive', icon: <RadarChartOutlined />, label: '03-26~04-10 学习归档' },
    { key: '/about', icon: <BarChartOutlined />, label: '关于系统' },
  ]

  const pageMetaMap: Record<string, { title: string; desc: string }> = {
    '/dashboard': {
      title: '经营看板',
      desc: '聚合核心 KPI、转化趋势和团队执行数据，快速查看经营情况。',
    },
    '/kpi-redux': {
      title: 'KPI · Redux',
      desc: '演示在 KPI 场景下如何用 Redux Toolkit 统一管理任务状态与操作流。',
    },
    '/kpi-zustand': {
      title: 'KPI · Zustand',
      desc: '演示在 KPI 场景下如何用 Zustand 以更轻量的方式完成任务状态管理。',
    },
    '/learning-showcase': {
      title: '03-26 学习展示',
      desc: '展示 2026-03-26 这一天的学习内容，包括 Redux、Agent 与 Tool Calling 的整理和面试表达。',
    },
    '/learning-20260410': {
      title: '04-10 学习展示',
      desc: '展示 2026-04-10 这一天的学习内容，包括 Webpack、Vite 和模型输出稳定性的整理与表达。',
    },
    '/learning-20260411': {
      title: '04-11 学习展示',
      desc: '展示 2026-04-11 这一天的学习内容，包括项目表达、性能优化案例和 AI 产品链路拆解。',
    },
    '/learning-archive': {
      title: '03-26~04-10 学习归档',
      desc: '按天查看 2026-03-26 到 2026-04-10 期间的每日学习计划页面。',
    },
    '/about': {
      title: '关于系统',
      desc: '查看项目说明、技术栈和当前系统能力。',
    },
  }

  const currentKey =
    menuItems.find((item) => location.pathname.startsWith(item.key))?.key || '/dashboard'
  const currentTitle = pageMetaMap[currentKey]?.title ?? '经营看板'
  const currentDesc =
    pageMetaMap[currentKey]?.desc ?? '聚合核心 KPI、转化趋势和团队执行数据，快速查看经营情况。'

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

      <Drawer
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="页面导航"
        className={styles.mobileDrawer}
      >
        <Menu
          mode="inline"
          selectedKeys={[currentKey]}
          items={menuItems}
          onClick={({ key }) => {
            navigate(key)
            setDrawerOpen(false)
          }}
        />
      </Drawer>

      <Layout className={styles.mainContent}>
        <Header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.mobileTopBar}>
              <Button
                type="default"
                icon={<MenuOutlined />}
                className={styles.mobileMenuButton}
                onClick={() => setDrawerOpen(true)}
              >
                菜单
              </Button>
              <Breadcrumb items={[{ title: '首页' }, { title: currentTitle }]} />
            </div>
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
                      logout()
                      navigate('/login')
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
  )
}

export default MainLayout
