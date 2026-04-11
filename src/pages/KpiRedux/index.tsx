import { useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Typography,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  addTask,
  reduxStore,
  setKeyword,
  updateTaskStatus,
  type AppDispatch,
  type KpiTask,
  type RootState,
  type TaskStatus,
} from '../../store/reduxStore'
import styles from './index.module.less'

const statusColorMap: Record<TaskStatus, string> = {
  todo: 'default',
  doing: 'processing',
  done: 'success',
}

const statusTextMap: Record<TaskStatus, string> = {
  todo: '待开始',
  doing: '进行中',
  done: '已完成',
}

const KpiReduxInner = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()
  const { tasks, keyword } = useSelector((state: RootState) => state.kpiRedux)

  const filteredTasks = useMemo(
    () => tasks.filter((item) => item.title.includes(keyword) || item.owner.includes(keyword)),
    [tasks, keyword]
  )

  const totalScore = filteredTasks.reduce((sum, item) => sum + item.score, 0)
  const doneCount = filteredTasks.filter((item) => item.status === 'done').length

  const columns: ColumnsType<KpiTask> = [
    { title: '任务', dataIndex: 'title' },
    { title: '负责人', dataIndex: 'owner', width: 120 },
    { title: '分值', dataIndex: 'score', width: 100 },
    {
      title: '状态',
      dataIndex: 'status',
      width: 120,
      render: (status: TaskStatus) => (
        <Tag color={statusColorMap[status]}>{statusTextMap[status]}</Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 220,
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => dispatch(updateTaskStatus({ id: record.id, status: 'todo' }))}
          >
            设为待开始
          </Button>
          <Button
            size="small"
            type="primary"
            ghost
            onClick={() => dispatch(updateTaskStatus({ id: record.id, status: 'done' }))}
          >
            标记完成
          </Button>
        </Space>
      ),
    },
  ]

  const handleFinish = (values: {
    title: string
    owner: string
    score: number
    status: TaskStatus
  }) => {
    dispatch(addTask(values))
    form.resetFields()
  }

  return (
    <div className={styles.page}>
      <Card className={styles.hero}>
        <Tag color="blue">Redux Toolkit Demo</Tag>
        <Typography.Title level={2}>KPI 任务页 · Redux 版</Typography.Title>
        <Typography.Paragraph>
          适合状态流转更规范、多人协作更强的场景。所有状态更新都通过 action 进入
          reducer，便于追踪和统一维护。
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="当前任务数" value={filteredTasks.length} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="完成任务数" value={doneCount} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="总 KPI 分值" value={totalScore} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className={styles.contentRow}>
        <Col xs={24} xl={8}>
          <Card title="新增任务">
            <Form form={form} layout="vertical" onFinish={handleFinish}>
              <Form.Item
                label="任务名称"
                name="title"
                rules={[{ required: true, message: '请输入任务名称' }]}
              >
                <Input placeholder="例如：跟进重点客户续费" />
              </Form.Item>
              <Form.Item
                label="负责人"
                name="owner"
                rules={[{ required: true, message: '请输入负责人' }]}
              >
                <Input placeholder="例如：Lucio" />
              </Form.Item>
              <Form.Item
                label="KPI 分值"
                name="score"
                rules={[{ required: true, message: '请输入分值' }]}
              >
                <Input type="number" placeholder="例如：20" />
              </Form.Item>
              <Form.Item label="初始状态" name="status" initialValue="todo">
                <Select
                  options={[
                    { value: 'todo', label: '待开始' },
                    { value: 'doing', label: '进行中' },
                    { value: 'done', label: '已完成' },
                  ]}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" block>
                提交到 Redux Store
              </Button>
            </Form>
          </Card>
        </Col>

        <Col xs={24} xl={16}>
          <Card
            title="任务列表"
            extra={
              <Input
                allowClear
                placeholder="搜索任务 / 负责人"
                value={keyword}
                onChange={(e) => dispatch(setKeyword(e.target.value))}
                className={styles.search}
              />
            }
          >
            <Table rowKey="id" columns={columns} dataSource={filteredTasks} pagination={false} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

const KpiReduxPage = () => (
  <Provider store={reduxStore}>
    <KpiReduxInner />
  </Provider>
)

export default KpiReduxPage
