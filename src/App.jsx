// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// 导入页面组件
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'
import Home from './pages/Home'
import Memo from './pages/Memo'
import Me from './pages/Me'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route></Route>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }>
            <Route path="/" element={<Home />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/me" element={<Me />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
