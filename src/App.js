import {BrowserRouter as Router,

  Route,
  Routes
} from 'react-router-dom'
import Layout from "./component/dasboard/Layout";
import Dasboard from './component/Dasboard';
import Product from './component/Product';
import Loginnn from './component/Loginnn'


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
    <Route index path="login" element={<Layout/>}/>
     <Route path="/" element={<Loginnn/>}>
     <Route  element={<Dasboard/>}/>
     <Route path="products" element={<Product/>}/>
     </Route>
     
     </Routes>

     </div>
     </Router>
  );
}

export default App;
