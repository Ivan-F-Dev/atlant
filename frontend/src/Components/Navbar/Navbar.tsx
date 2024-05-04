import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.scss"
const Navbar: FC = () => {
	return <nav className={styles.navigation}>
		<ul className={styles.navItems}>
			<li className={styles.navItem}><NavLink to={`/category/${1}`}>Стр 1</NavLink></li>
			<li className={styles.navItem}><NavLink to={`/category/${2}`}>Стр 2</NavLink></li>
			<li className={styles.navItem}><NavLink to={`/category/${3}`}>Стр 3</NavLink></li>
			<li className={styles.navItem}><NavLink to={`/category/${4}`}>Стр 4</NavLink></li>
		</ul>
	</nav>
}

export default Navbar