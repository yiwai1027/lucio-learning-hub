import { ArrowUpOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Area, Column, Line, Pie } from '@ant-design/charts'
import {
  Card,
  Col,
  DatePicker,
  Flex,
  Input,
  Layout,
  List,
  Progress,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd'
import styles from './index.module.less'

const { RangePicker } = DatePicker

const conversionData = [
  { month: '1月', value: 32 },
  { month: '2月', value: 41 },
  { month: '3月', value: 45 },
  { month: '4月', value: 52 },
  { month: '5月', value: 61 },
  { month: '6月', value: 66 },
]

const channelData = [
  { type: '官网投放', value: 38 },
  { type: '私域转化', value: 24 },
  { type: '内容营销', value: 21 },
  { type: '代理渠道', value: 17 },
]

const weeklyData = [
  { day: '周一', sales: 120 },
  { day: '周二', sales: 132 },
  { day: '周三', sales: 101 },
  { day: '周四', sales: 134 },
  { day: '周五', sales: 190 },
  { day: '周六', sales: 160 },
  { day: '周日', sales: 110 },
]

const performanceData = [
  { week: '第1周', leads: 120, conversion: 18 },
  { week: '第2周', leads: 145, conversion: 24 },
  { week: '第3周', leads: 168, conversion: 26 },
  { week: '第4周', leads: 188, conversion: 32 },
]

const performanceTrendData = performanceData.flatMap((item) => [
  { week: item.week, value: item.leads, type: '线索量' },
  { week: item.week, value: item.conversion, type: '转化率' },
])

const todoList = [
  { title: '补充华东大区周报', status: 'processing' },
  { title: '核对本周销售线索数据', status: 'warning' },
  { title: '确认 4 月投放预算', status: 'success' },
]

const rankingData = [
  { key: '1', name: '华东区', manager: 'Luna', amount: '¥ 286,000', rate: 82 },
  { key: '2', name: '华南区', manager: 'Ethan', amount: '¥ 214,000', rate: 76 },
  { key: '3', name: '华北区', manager: 'Cindy', amount: '¥ 198,000', rate: 71 },
]

const statCards = [
  { title: '本月营收', value: '¥286,000', extra: '+12.6%', tone: 'blue' },
  { title: '目标完成率', value: '82%', extra: '高于上周 6%', tone: 'violet' },
  { title: '新增客户', value: '128', extra: '新增线索 342', tone: 'green' },
  { title: '待处理事项', value: '9', extra: '2 项需今日确认', tone: 'orange' },
]

const Dashboard = () => {
  return (
    <Layout className={styles.dashboardPage}>
      <Layout.Content>
        <section className={styles.heroSection}>
          <div className={styles.heroGlow} />
          <Flex
            justify="space-between"
            align="flex-start"
            wrap="wrap"
            gap={16}
            className={styles.heroHeader}
          >
            <div>
              <Tag className={styles.heroTag} bordered={false}>
                KPI REPORT · DATA OVERVIEW
              </Tag>
              <Typography.Title level={2} className={styles.heroTitle}>
                经营数据总览
              </Typography.Title>
              <Typography.Paragraph className={styles.heroDesc}>
                聚合收入目标、渠道转化、团队执行和趋势变化，帮助你在一个页面里快速判断本周经营状态。
              </Typography.Paragraph>
            </div>

            <Space wrap className={styles.filterBar}>
              <Input.Search
                placeholder="搜索负责人 / 区域"
                allowClear
                className={styles.searchInput}
              />
              <Select
                defaultValue="all"
                className={styles.filterSelect}
                options={[
                  { value: 'all', label: '全部部门' },
                  { value: 'sales', label: '销售部' },
                  { value: 'ops', label: '运营部' },
                ]}
              />
              <RangePicker className={styles.rangePicker} />
            </Space>
          </Flex>

          <Row gutter={[16, 16]}>
            {statCards.map((item) => (
              <Col xs={24} sm={12} xl={6} key={item.title}>
                <Card className={`${styles.metricCard} ${styles[item.tone]}`}>
                  <Typography.Text className={styles.metricLabel}>{item.title}</Typography.Text>
                  <div className={styles.metricValue}>{item.value}</div>
                  <div className={styles.metricExtra}>{item.extra}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <Row gutter={[18, 18]}>
          <Col xs={24} xl={16}>
            <Card
              className={styles.panelCard}
              title="月度转化趋势"
              extra={<Tag color="blue">趋势向上</Tag>}
            >
              <Area data={conversionData} xField="month" yField="value" height={320} />
            </Card>
          </Col>

          <Col xs={24} xl={8}>
            <Card
              className={styles.panelCard}
              title="渠道占比"
              extra={<Tag color="geekblue">渠道结构</Tag>}
            >
              <Pie
                data={channelData}
                angleField="value"
                colorField="type"
                innerRadius={0.68}
                height={320}
                label={{ text: 'type', style: { fontSize: 12 } }}
                legend={{ color: { position: 'bottom' } }}
              />
            </Card>
          </Col>

          <Col xs={24} xl={14}>
            <Card
              className={styles.panelCard}
              title="近 7 日成交额"
              extra={<Tag color="purple">周度节奏</Tag>}
            >
              <Column data={weeklyData} xField="day" yField="sales" height={300} colorField="day" />
            </Card>
          </Col>

          <Col xs={24} xl={10}>
            <Card
              className={styles.panelCard}
              title="本周任务"
              extra={<Tag color="orange">执行清单</Tag>}
            >
              <List
                dataSource={todoList}
                renderItem={(item) => (
                  <List.Item className={styles.todoItem}>
                    <Space>
                      {item.status === 'success' ? (
                        <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      ) : item.status === 'warning' ? (
                        <ClockCircleOutlined style={{ color: '#faad14' }} />
                      ) : (
                        <ClockCircleOutlined style={{ color: '#1677ff' }} />
                      )}
                      <Typography.Text>{item.title}</Typography.Text>
                    </Space>
                    <Tag
                      color={
                        item.status === 'success'
                          ? 'success'
                          : item.status === 'warning'
                            ? 'warning'
                            : 'processing'
                      }
                    >
                      {item.status === 'success'
                        ? '已完成'
                        : item.status === 'warning'
                          ? '待处理'
                          : '进行中'}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} xl={12}>
            <Card
              className={styles.panelCard}
              title="线索与转化趋势"
              extra={<Tag color="cyan">趋势分析</Tag>}
            >
              <Line
                data={performanceTrendData}
                xField="week"
                yField="value"
                colorField="type"
                height={300}
                axis={{
                  y: {
                    title: '趋势值',
                  },
                }}
                scale={{
                  color: {
                    range: ['#91caff', '#1677ff'],
                  },
                }}
                style={{ lineWidth: 3 }}
                point={{
                  size: 4,
                  shape: 'circle',
                  style: { fill: '#fff', lineWidth: 2 },
                }}
                legend={{
                  color: { position: 'top-left', layout: { justifyContent: 'flex-start' } },
                }}
                tooltip={{ title: 'week' }}
              />
            </Card>
          </Col>

          <Col xs={24} xl={12}>
            <Card
              className={styles.panelCard}
              title="目标推进情况"
              extra={<Tag color="magenta">目标追踪</Tag>}
            >
              <Space direction="vertical" size={20} className={styles.progressList}>
                <div className={styles.progressItem}>
                  <Flex justify="space-between">
                    <Typography.Text>营收 KPI</Typography.Text>
                    <Typography.Text strong>82%</Typography.Text>
                  </Flex>
                  <Progress percent={82} strokeColor="#1677ff" />
                </div>
                <div className={styles.progressItem}>
                  <Flex justify="space-between">
                    <Typography.Text>客户新增</Typography.Text>
                    <Typography.Text strong>76%</Typography.Text>
                  </Flex>
                  <Progress percent={76} status="active" strokeColor="#52c41a" />
                </div>
                <div className={styles.progressItem}>
                  <Flex justify="space-between">
                    <Typography.Text>重点项目推进</Typography.Text>
                    <Typography.Text strong>68%</Typography.Text>
                  </Flex>
                  <Progress percent={68} strokeColor="#722ed1" />
                </div>
              </Space>
            </Card>
          </Col>

          <Col span={24}>
            <Card
              className={styles.panelCard}
              title="区域业绩排行"
              extra={<Tag color="gold">本月排名</Tag>}
            >
              <Table
                rowKey="key"
                dataSource={rankingData}
                pagination={false}
                columns={[
                  {
                    title: '区域',
                    dataIndex: 'name',
                  },
                  {
                    title: '负责人',
                    dataIndex: 'manager',
                  },
                  {
                    title: '成交金额',
                    dataIndex: 'amount',
                  },
                  {
                    title: '目标达成',
                    dataIndex: 'rate',
                    render: (value: number) => (
                      <Space>
                        <ArrowUpOutlined style={{ color: '#1677ff' }} />
                        <span>{value}%</span>
                      </Space>
                    ),
                  },
                ]}
              />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Dashboard
