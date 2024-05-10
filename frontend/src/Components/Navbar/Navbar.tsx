import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.scss"

const Navbar: FC = () => {
	return <nav className={styles.navigation}>
		<ul className={styles.navItems}>
			<li className={styles.navItem}><NavLink to={`/test`}>test</NavLink></li>
		</ul>
	</nav>
}

export default Navbar