import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import ProfileSettings from './pages/ProfileSettings'
import Post from './pages/Post'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Parent Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        {/* 🧩 Nested Routes */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic Route */}
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  )
}
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>
