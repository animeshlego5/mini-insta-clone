import React from 'react'
import CreatePost from './pages/CreatePost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //react-router-dom is a library that provides routing functionality to the app
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App

//we require axios to connect the frontend to the backend
