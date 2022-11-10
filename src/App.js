import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/shared/Layout'
import Register from './pages/Register'
import Dasboard from './pages/Dasboard'
import Product from './pages/Products'







function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
              <Route path="/" element={<Layout />}>
                    <Route index element={<Dasboard />} />
                    <Route path="products" element={<Product />} />
          </Route>   
      <Route path="login" element={<Register/>}/>     
     </Routes>
     </div>
     </Router>
  );
}

export default App;
