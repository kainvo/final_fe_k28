
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import PrivateRoute from './routes/PrivateRoute'
import HomePage from './pages/movie/HomePage'
import MovieDetailPage from './pages/movie/MovieDetailPage'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
        <Route index element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/movies/:id" element={<PrivateRoute element={<MovieDetailPage />} />} />
4    </Routes>
      
    </BrowserRouter>
  )
}

export default App
