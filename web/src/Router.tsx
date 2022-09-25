import { Routes, Route } from 'react-router-dom'
import { Game } from './pages/Game'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Game />} />
    </Routes>
  )
}
