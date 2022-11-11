import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/shared/Layout'
import Register from './pages/Register'
import Dasboard from './pages/Dasboard'
import Product from './pages/Products'
import Orders from './pages/Orders'
import Customer from './pages/Customer'
import Transcation from './pages/Transcation'
import Nessages from './pages/Nessages'







function App() {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/register" element={<Register/>}/>  
              <Route path="" element={<Layout />}>
                    <Route index element={<Dasboard />} />
                    <Route path="todolist" element={<Product />} />
                    <Route path="Navigation" element={<Orders />} />
                    <Route path="Customers" element={<Customer />} />
                    <Route path="Transactions" element={<Transcation />} />
                    <Route path="Messages" element={<Nessages />} />
            

          </Route>   
         
     </Routes>
     </div>
     </Router>
  );
}

export default App;
