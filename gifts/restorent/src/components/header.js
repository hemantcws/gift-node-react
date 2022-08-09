import sitelogo from '../images/react-logo.png';
import vectoricon from '../images/Group.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
					<img src={sitelogo} className="logo" alt="logo" />
				</Link>
				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 top-menu">
					<li className=""><Link to="/about" className="nav-link px-2 link-secondary">How does it work?</Link></li>
					<li className="open-gift"><Link to="/gifts" className="nav-link px-2 link-red">Open my gift <img src={vectoricon} className="gift-icon" alt="gift" /></Link>
					</li>
				</ul>
				<div className="col-md-3 text-left2">
					<button type="button" className="btn btn-outline-primary me-2">My Account</button>
					<button type="button" className="btn btn-primary">Cart</button>
				</div>
			</header>
		</div>
    </div>
  );
}

export default Header;
