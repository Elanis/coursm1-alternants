import { Link } from "react-router";

export default function Menu() {
	return (<ul>
		<li><Link to="/">Accueil</Link></li>
		<li><Link to="/contact">Contact</Link></li>
	</ul>);
}
