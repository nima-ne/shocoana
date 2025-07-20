import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Products from './components/products'
import Form from './components/Form'
import CallUs from './components/CallUs'
import FAQ from './components/FAQ'
import ProductPages from './components/ProductPages'

function App() {
  return (
    <BrowserRouter basename="/shocoana">
      <Routes>


        <Route path="/login" element={<Form />} />


        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
          <Route path="/contact" element={<CallUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path='/product/:id' element={<ProductPages/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
