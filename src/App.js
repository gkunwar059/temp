import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CryptoInfo from './pages/CryptoInfo';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            {/* <Route path="/coins/:id" component={CoinPage} exact /> */}
            <Route path="/info/:id" element={ <CryptoInfo />} />
            {/* <Route path="/info" element={ <CryptoInfo />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
