
import './App.css';
import Navsec from './components/Navsec';
import Features from './components/Features';
import Footersec from './components/Footersec';
import Tabsec from './components/Tabsec';
import Newsec from './components/Newsec';
import Memories from './components/Memories';
import Popular from './components/Popular';
import Travel from './components/Travel';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Backtop from './components/Backtotop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Preloader from './components/Preloder';



function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 3000,
      }
    );
  }, [])

  return (
    <div className="App overflow-hidden">
      <Preloader />
      <div className='bg-[url(./assets/images/png/headerbg.png)] bg-cover bg-center bg-no-repeat sm:min-h-[95vh] min-h-[75vh] '>
        <Navsec />
      </div>
      <Tabsec />
      <Section2 />
      <Features />
      <Popular />
      <Travel />
      <Section3 />
      <Memories />
      <Newsec />
      <div className='bg-[url(./assets/images/png/footerbg.png)] bg-cover bg-center bg-no-repeat'>
        <Footersec />
      </div >
      <Backtop />
    </div >
  );
}

export default App;
