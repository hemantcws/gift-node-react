import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/layout.js';
import About from './pages/about.js';
import Home from './pages/home.js';
import Gifts from './pages/gifts.js';
import Single from './pages/single.js';

function Roots() {
  return (
	<Router>
    <Routes>
        <Route path='/' element={<Layout />} >
			<Route index path='/' element={<Home />} />
			<Route path='/about' element={<About/>} />
			<Route path='/gifts' element={<Gifts/>} />
			<Route path='/single' element={<Single/>} />
        </Route>
    </Routes>
    </Router>
  );
}

export default Roots;