import { useMemo } from 'react'
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
import { useZustandKpiStore } from '../../store/zustandKpiStore'
import type { KpiTask, TaskStatus } from '../../store/reduxStore'
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

const KpiZustandPage = () => {
  const [form] = Form.useForm()
  const { tasks, keyword, setKeyword, addTask, updateTaskStatus } = useZustandKpiStore()

  const filteredTasks = useMemo(
    () => tasks.filter((item) => item.title.includes(keyword) || item.owner.includes(keyword)),
    [tasks, keyword]
  )

  const totalScore = filteredTasks.reduce((sum, item) => sum + item.score, 0)
  const doingCount = filteredTasks.filter((item) => item.status === 'doing').length

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
          <Button size="small" onClick={() => updateTaskStatus(record.id, 'doing')}>
            设为进行中
          </Button>
          <Button
            size="small"
            type="primary"
            ghost
            onClick={() => updateTaskStatus(record.id, 'done')}
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
    addTask(values)
    form.resetFields()
  }

  return (
    <div className={styles.page}>
      <Card className={styles.hero}>
        <Tag color="purple">Zustand Demo</Tag>
        <Typography.Title level={2}>KPI 任务页 · Zustand 版</Typography.Title>
        <Typography.Paragraph>
          适合想快速落地、样板代码更少的场景。组件可以直接通过 hook 读取和修改状态，开发体验更轻量。
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
            <Statistic title="进行中任务数" value={doingCount} />
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
                <Input placeholder="例如：整理转化漏斗分析" />
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
                <Input type="number" placeholder="例如：15" />
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
                提交到 Zustand Store
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
                onChange={(e) => setKeyword(e.target.value)}
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

export default KpiZustandPage
