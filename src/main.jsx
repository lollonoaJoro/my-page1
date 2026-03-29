import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from 'react-router-dom' // 추가 필요

import './index.css'
import App from './App.jsx'
import MovieDetail from './Review/MovieDetail'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)