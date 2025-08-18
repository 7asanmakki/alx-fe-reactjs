import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes><Route path="/profile/*" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route></>

  )
}

export default App
