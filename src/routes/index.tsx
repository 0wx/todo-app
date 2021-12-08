import { Routes, Route } from 'react-router-dom'
import { Home, Detail } from '../pages'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default Router