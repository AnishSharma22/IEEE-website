import React from 'react'
import { RecoilRoot } from "recoil";
import { HomePage } from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App: React.FC = () => {
  return (
    <Router>
        <RecoilRoot>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
          </Routes>
        </RecoilRoot>
      </Router>
    
  )
}

export default App