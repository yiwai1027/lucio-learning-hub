import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type TaskStatus = 'todo' | 'doing' | 'done'

export interface KpiTask {
  id: string
  title: string
  owner: string
  score: number
  status: TaskStatus
}

interface KpiReduxState {
  tasks: KpiTask[]
  keyword: string
}

const initialTasks: KpiTask[] = [
  { id: 'r-1', title: '跟进华东大区续费客户', owner: 'Luna', score: 30, status: 'doing' },
  { id: 'r-2', title: '整理本周投放转化复盘', owner: 'Ethan', score: 20, status: 'todo' },
  { id: 'r-3', title: '提交 3 月 KPI 周报', owner: 'Cindy', score: 40, status: 'done' },
]

const kpiReduxSlice = createSlice({
  name: 'kpiRedux',
  initialState: {
    tasks: initialTasks,
    keyword: '',
  } as KpiReduxState,
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    addTask(state, action: PayloadAction<Omit<KpiTask, 'id'>>) {
      console.log(action)
      state.tasks.unshift({
        ...action.payload,
        id: `r-${Date.now()}`,
      })
    },
    updateTaskStatus(state, action: PayloadAction<{ id: string; status: TaskStatus }>) {
      const target = state.tasks.find((item) => item.id === action.payload.id)
      if (target) {
        target.status = action.payload.status
      }
    },
  },
})

export const { setKeyword, addTask, updateTaskStatus } = kpiReduxSlice.actions

export const reduxStore = configureStore({
  reducer: {
    kpiRedux: kpiReduxSlice.reducer,
  },
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
