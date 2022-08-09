
import Header from './header.js';
import Footer from './footer.js';
import {Outlet} from 'react-router-dom';

export default function Layout() {
	return (
	<>
		<Header />
		
		<Outlet />
		
		<Footer />
	</>
	);
}
