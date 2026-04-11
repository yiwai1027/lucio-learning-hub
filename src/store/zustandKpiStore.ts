import { create } from 'zustand'
import type { KpiTask, TaskStatus } from './reduxStore'

interface ZustandKpiState {
  tasks: KpiTask[]
  keyword: string
  setKeyword: (keyword: string) => void
  addTask: (task: Omit<KpiTask, 'id'>) => void
  updateTaskStatus: (id: string, status: TaskStatus) => void
}

const initialTasks: KpiTask[] = [
  { id: 'z-1', title: '跟进华南客户续约机会', owner: 'Mia', score: 25, status: 'doing' },
  { id: 'z-2', title: '同步本月目标拆解给销售团队', owner: 'Ryan', score: 35, status: 'todo' },
  { id: 'z-3', title: '补齐渠道 ROI 汇总表', owner: 'Iris', score: 20, status: 'done' },
]

export const useZustandKpiStore = create<ZustandKpiState>((set) => ({
  tasks: initialTasks,
  keyword: '',
  setKeyword: (keyword) => set({ keyword }),
  addTask: (task) =>
    set((state) => ({
      tasks: [{ ...task, id: `z-${Date.now()}` }, ...state.tasks],
    })),
  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((item) => (item.id === id ? { ...item, status } : item)),
    })),
}))
