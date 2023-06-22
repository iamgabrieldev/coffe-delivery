import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
