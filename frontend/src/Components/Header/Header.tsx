import { FC } from 'react'
import { useState } from 'react';
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { ROUTES } from '../../utils/routes'
import ProfilePhoto from '../../Assets/header/profilePhoto.jpg'

const Header: FC = () => {
	const [search, setSearch] = useState<string>('')


	return <div className={styles.header}>
		<div className={styles.headerContainer}>
			<div className={styles.logo}>	<NavLink to={ROUTES.HOME}>Atlant Crypto</NavLink></div>
			<div className={styles.search}>
				<input type="text" className={styles.searchInput} value={search} placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)} />
			</div>
			<div className={styles.user}>
				<div className={styles.userAvatar}>
					<a><img className={styles.profilePhoto} src={ProfilePhoto} alt="аватар" /></a>
				</div>
				<div className={styles.userInfo}>
					<div className={styles.userName}>Владимир Владимирович Путин</div>
				</div>
			</div>
		</div>
	</div>
}

export default Header