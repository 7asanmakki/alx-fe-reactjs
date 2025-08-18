import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile/*" element={<Profile />} />
      </Route>

      {/* Dynamic route */}
      <Route path="/post/:id" element={<Post />} />
    </Routes><Route path="/profile/*" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route></>

  )
}