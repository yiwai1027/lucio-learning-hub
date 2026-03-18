import {
  ArrowUpOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Area, Column, DualAxes, Pie } from '@ant-design/charts';
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
  Statistic,
  Table,
  Tag,
  Typography,
} from 'antd';
import styles from './index.module.less';

const { RangePicker } = DatePicker;

const conversionData = [
  { month: '1月', value: 32 },
  { month: '2月', value: 41 },
  { month: '3月', value: 45 },
  { month: '4月', value: 52 },
  { month: '5月', value: 61 },
  { month: '6月', value: 66 },
];

const channelData = [
  { type: '官网投放', value: 38 },
  { type: '私域转化', value: 24 },
  { type: '内容营销', value: 21 },
  { type: '代理渠道', value: 17 },
];

const weeklyData = [
  { day: '周一', sales: 120 },
  { day: '周二', sales: 132 },
  { day: '周三', sales: 101 },
  { day: '周四', sales: 134 },
  { day: '周五', sales: 190 },
  { day: '周六', sales: 160 },
  { day: '周日', sales: 110 },
];

const performanceData = [
  { week: '第1周', leads: 120, conversion: 18 },
  { week: '第2周', leads: 145, conversion: 24 },
  { week: '第3周', leads: 168, conversion: 26 },
  { week: '第4周', leads: 188, conversion: 32 },
];

const todoList = [
  { title: '补充华东大区周报', status: 'processing' },
  { title: '核对本周销售线索数据', status: 'warning' },
  { title: '确认 4 月投放预算', status: 'success' },
];

const rankingData = [
  { key: '1', name: '华东区', manager: 'Luna', amount: '¥ 286,000', rate: 82 },
  { key: '2', name: '华南区', manager: 'Ethan', amount: '¥ 214,000', rate: 76 },
  { key: '3', name: '华北区', manager: 'Cindy', amount: '¥ 198,000', rate: 71 },
];

const Dashboard = () => {
  return (
    <Layout className={styles.dashboardPage}>
      <Layout.Content>
        <Flex justify="space-between" align="center" wrap="wrap" gap={16} className={styles.header}>
          <div>
            <Typography.Title level={2} style={{ margin: 0 }}>
              经营看板
            </Typography.Title>
            <Typography.Text type="secondary">
              实时查看 KPI 完成率、渠道转化和团队推进情况
            </Typography.Text>
          </div>
          <Space wrap>
            <Input.Search placeholder="搜索负责人 / 区域" allowClear style={{ width: 220 }} />
            <Select
              defaultValue="all"
              style={{ width: 140 }}
              options={[
                { value: 'all', label: '全部部门' },
                { value: 'sales', label: '销售部' },
                { value: 'ops', label: '运营部' },
              ]}
            />
            <RangePicker />
          </Space>
        </Flex>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic title="本月营收" value={286000} prefix="¥" precision={0} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic title="目标完成率" value={82} suffix="%" prefix={<ArrowUpOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic title="新增客户" value={128} prefix={<TeamOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic title="待处理事项" value={9} prefix={<ClockCircleOutlined />} />
            </Card>
          </Col>

          <Col xs={24} lg={16}>
            <Card title="月度转化趋势">
              <Area data={conversionData} xField="month" yField="value" height={300} />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card title="渠道占比">
              <Pie
                data={channelData}
                angleField="value"
                colorField="type"
                innerRadius={0.6}
                height={300}
                label={{ text: 'type', style: { fontSize: 12 } }}
                legend={{ color: { position: 'bottom' } }}
              />
            </Card>
          </Col>

          <Col xs={24} lg={14}>
            <Card title="近 7 日成交额">
              <Column data={weeklyData} xField="day" yField="sales" height={280} colorField="day" />
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <Card title="本周任务">
              <List
                dataSource={todoList}
                renderItem={(item) => (
                  <List.Item>
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
                    <Tag color={item.status === 'success' ? 'success' : item.status === 'warning' ? 'warning' : 'processing'}>
                      {item.status === 'success' ? '已完成' : item.status === 'warning' ? '待处理' : '进行中'}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card title="线索与转化复合趋势">
              <DualAxes
                data={[performanceData, performanceData]}
                xField="week"
                children={[
                  { type: 'interval', yField: 'leads', colorField: 'week' },
                  { type: 'line', yField: 'conversion', style: { lineWidth: 3 } },
                ]}
                height={280}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card title="目标推进情况">
              <Space direction="vertical" size={18} className={styles.progressList}>
                <div>
                  <Flex justify="space-between">
                    <Typography.Text>营收 KPI</Typography.Text>
                    <Typography.Text strong>82%</Typography.Text>
                  </Flex>
                  <Progress percent={82} />
                </div>
                <div>
                  <Flex justify="space-between">
                    <Typography.Text>客户新增</Typography.Text>
                    <Typography.Text strong>76%</Typography.Text>
                  </Flex>
                  <Progress percent={76} status="active" />
                </div>
                <div>
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
            <Card title="区域业绩排行">
              <Table
                rowKey="key"
                pagination={false}
                dataSource={rankingData}
                columns={[
                  { title: '区域', dataIndex: 'name' },
                  { title: '负责人', dataIndex: 'manager' },
                  { title: '成交金额', dataIndex: 'amount' },
                  {
                    title: '完成率',
                    dataIndex: 'rate',
                    render: (rate: number) => <Progress percent={rate} size="small" />,
                  },
                ]}
              />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Dashboard;
