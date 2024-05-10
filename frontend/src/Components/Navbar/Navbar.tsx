import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navbar.module.scss"

const Navbar: FC = () => {
	return <nav className={s.navigation}>
		<ul className={s.navItems}>
			<li className={s.navItem}><NavLink to={`/test`}>test</NavLink></li>
		</ul>
	</nav>
}

export default Navbar