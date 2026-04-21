import {
  BookOutlined,
  LogoutOutlined,
  MenuOutlined,
  RadarChartOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Breadcrumb, Button, Drawer, Dropdown, Layout, Menu, Space, Typography } from 'antd'
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
    { key: '/learning-archive', icon: <BookOutlined />, label: '学习归档' },
    { key: '/learning-showcase', icon: <RadarChartOutlined />, label: '03-26 学习展示' },
    { key: '/learning-20260330', icon: <RadarChartOutlined />, label: '03-30 学习展示' },
    { key: '/learning-20260331', icon: <RadarChartOutlined />, label: '03-31 学习展示' },
    { key: '/learning-20260410', icon: <RadarChartOutlined />, label: '04-10 学习展示' },
    { key: '/learning-20260411', icon: <RadarChartOutlined />, label: '04-11 学习展示' },
    { key: '/learning-20260414', icon: <RadarChartOutlined />, label: '04-14 学习展示' },
    { key: '/learning-20260415', icon: <RadarChartOutlined />, label: '04-15 学习展示' },
    { key: '/learning-20260416', icon: <RadarChartOutlined />, label: '04-16 学习展示' },
    { key: '/learning-20260417', icon: <RadarChartOutlined />, label: '04-17 学习展示' },
    { key: '/about', icon: <ReadOutlined />, label: '关于项目' },
  ]

  const pageMetaMap: Record<string, { title: string; desc: string }> = {
    '/learning-archive': {
      title: '学习归档',
      desc: '按日期查看学习计划、面试答案和阶段性学习沉淀。',
    },
    '/learning-showcase': {
      title: '03-26 学习展示',
      desc: '展示 2026-03-26 这一天的学习内容，包括 Redux、Agent 与 Tool Calling 的整理和面试表达。',
    },
    '/learning-20260330': {
      title: '03-30 学习展示',
      desc: '展示 2026-03-30 这一天的学习内容，包括 this 的绑定规则、箭头函数的 this，以及 RAG 的基础认知。',
    },
    '/learning-20260331': {
      title: '03-31 学习展示',
      desc: '展示 2026-03-31 这一天的学习内容，包括原型链、prototype 与 __proto__ 的关系，以及 Embedding 和向量化检索。',
    },
    '/learning-20260410': {
      title: '04-10 学习展示',
      desc: '展示 2026-04-10 这一天的学习内容，包括 Webpack、Vite 和模型输出稳定性的整理与表达。',
    },
    '/learning-20260411': {
      title: '04-11 学习展示',
      desc: '展示 2026-04-11 这一天的学习内容，包括项目表达、性能优化案例和 AI 产品链路拆解。',
    },
    '/learning-20260414': {
      title: '04-14 学习展示',
      desc: '展示 2026-04-14 这一天的学习内容：TypeScript 的 any / unknown / never，高频概念 + 代码写法 + 面试表达。',
    },
    '/learning-20260415': {
      title: '04-15 学习展示',
      desc: '展示 2026-04-15 这一天的学习内容：TypeScript 泛型与 AI 结构化输出，从前端视角理解复用、约束和数据稳定性。',
    },
    '/learning-20260416': {
      title: '04-16 学习展示',
      desc: '展示 2026-04-16 这一天的学习内容：联合类型、交叉类型、类型守卫，以及前端接 AI 输出时的校验与兜底。',
    },
    '/learning-20260417': {
      title: '04-17 学习展示',
      desc: '展示 2026-04-17 这一天的学习内容：tsconfig、strict、模块解析与目标版本，以及 AI 产品里的可观测性与基础工程能力。',
    },
    '/about': {
      title: '关于项目',
      desc: '查看 lucio-learning-hub 的定位、结构和使用方式。',
    },
  }

  const currentKey =
    menuItems.find((item) => location.pathname.startsWith(item.key))?.key || '/learning-archive'
  const currentTitle = pageMetaMap[currentKey]?.title ?? '学习归档'
  const currentDesc =
    pageMetaMap[currentKey]?.desc ?? '按日期查看学习计划、面试答案和阶段性学习沉淀。'

  return (
    <Layout className={styles.mainLayout}>
      <Sider width={248} theme="light" className={styles.sider}>
        <div className={styles.brand}>
          <Typography.Title level={4} className={styles.brandTitle}>
            Lucio Learning Hub
          </Typography.Title>
          <Typography.Text className={styles.brandDesc}>学习展示与面试归档项目</Typography.Text>
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
              <Breadcrumb items={[{ title: '学习项目' }, { title: currentTitle }]} />
            </div>
            <div className={styles.pageIntro}>
              <Typography.Title level={3} className={styles.pageTitle}>
                {currentTitle}
              </Typography.Title>
              <Typography.Text className={styles.pageDesc}>{currentDesc}</Typography.Text>
            </div>
          </div>

          <div className={styles.headerRight}>
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: () => {
                      logout()
                      navigate('/learning-archive')
                    },
                  },
                ],
              }}
            >
              <Space className={styles.user} size={12}>
                <Avatar icon={<UserOutlined />} />
                <div className={styles.userInfo}>
                  <Typography.Text strong className={styles.userName}>
                    {user?.name ?? 'Lucio'}
                  </Typography.Text>
                  <Typography.Text type="secondary" className={styles.userRole}>
                    前端学习中
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
