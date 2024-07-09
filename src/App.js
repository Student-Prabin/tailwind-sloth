import React from 'react'
import './index.css';
import Header from './components/Header';
import DisplaySection from './pages/home/DisplaySection';
import Tech from './pages/home/Tech';
import Intro from './pages/home/Intro';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <DisplaySection />
        <Tech />
        <Intro />
        <Footer />
    </div>
  )
}

export default App;