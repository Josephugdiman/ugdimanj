import {Routes, Route} from 'react-router'
import Homepage from '../pages/Homepage';
import Products from '../pages/Products';
import About from '../pages/about';
import Contact from '../pages/contact';
function router() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
  )
}

export default router