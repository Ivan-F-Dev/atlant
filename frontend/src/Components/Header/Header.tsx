import { FC } from 'react'
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { ROUTES } from '../../utils/routes'
import ProfilePhoto from '../../Assets/header/profilePhoto.jpg'

const Header: FC = () => {
	return <div className={styles.header}>
		<div className={styles.headerContainer}>
			<NavLink to={ROUTES.HOME}>Atlant Crypto</NavLink>
			<nav className={styles.navigation}>
				<ul className={styles.navItems}>
					<li className={styles.navItem}><NavLink to={`/category/${1}`}>Стр 1</NavLink></li>
					<li className={styles.navItem}><NavLink to={`/category/${2}`}>Стр 2</NavLink></li>
					<li className={styles.navItem}><NavLink to={`/category/${3}`}>Стр 3</NavLink></li>
					<li className={styles.navItem}><NavLink to={`/category/${4}`}>Стр 4</NavLink></li>
				</ul>
			</nav>
			<div className={styles.user}>
				<div className={styles.userBlock}>
					<div className={styles.userAvatar}>
						<a><img className={styles.profilePhoto} src={ProfilePhoto} alt="аватар" /></a>
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userName}>Владимир</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default Header