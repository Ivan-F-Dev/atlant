import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { useState } from 'react';
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { ROUTES } from '../../utils/routes'
import ProfilePhoto from '../../Assets/header/profilePhoto.jpg'
import Input from '../Input/Input';

const Header: FC = () => {
	const [search, setSearch] = useState<string>('')

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearch(e.target.value)
	}
	console.log(search);


	return <div className={styles.header}>
		<div className={styles.headerContainer}>
			<div className={styles.logo}>	<NavLink to={ROUTES.HOME}>Atlant Crypto</NavLink></div>
			<div className={styles.search}>
				<Input value={search} placeholder="Поиск..." onChange={handleChange} />
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