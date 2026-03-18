export const env = {
  mode: import.meta.env.MODE,
  dev: import.meta.env.DEV,
  prod: import.meta.env.PROD,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  port: Number(import.meta.env.VITE_PORT || 5173),
}

export const isDev = env.dev
export const isProd = env.prod
