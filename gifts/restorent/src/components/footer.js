
import vectorarrow from '../images/Vector_arrow.png';
function Footer() {
  return (
	<div className="Footer">
		<div className="container">
			<div className="footer-main">
				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 foot-menu">
					<li>Need Help? </li>
					<li><a href="#"> Go to FAQ's <img src={vectorarrow} className="arrow-icon" alt="arrow" /></a></li>
				</ul>
			</div>
		</div>
	</div>
 );
}

export default Footer;