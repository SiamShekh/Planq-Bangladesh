import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav'
import Footer from './Components/Footer';

function App() {
  document.documentElement.classList.add("light");
  return (
    <>
      <div className='h-screen'>
        <Nav />

        <div className=' bg-white'>
          <div className='max-w-[1200px] mx-auto'>
            <Outlet />
          </div>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
