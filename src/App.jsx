import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])

function App() {
  
	AOS.init({
    once: false
  });

  return (
    <>
      <Home />
    </>
  )
}
export default App;
