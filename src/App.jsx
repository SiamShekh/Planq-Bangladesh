import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav'

function App() {
  document.documentElement.classList.add("light");
  return (
    <>
      <div className='h-screen'>
        <Nav />

        <div className=' bg-gray-200'>
          <div className='max-w-[1200px] mx-auto'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
