import React from 'react'
import './index.css';
import Header from './components/Header';
import DisplaySection from './pages/home/DisplaySection';
import Tech from './pages/home/Tech';

const App = () => {
  return (
    <div>
        <Header />
        <DisplaySection />
        <Tech />
    </div>
  )
}

export default App;