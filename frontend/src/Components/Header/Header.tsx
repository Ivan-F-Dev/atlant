import { ChangeEvent, ChangeEventHandler, FC } from 'react'
import { useState } from 'react';
import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { ROUTES } from '../../utils/routes'
import ProfilePhoto from '../../Assets/header/profilePhoto.jpg'
import Input from '../UI/Input/Input';
import settingsButton from '../../Assets/header/settingsIcon.svg'
import Navbar from "../Navbar/Navbar";

interface HeaderProps {
	active: boolean;
	setActive: () => void;
}

const Header: FC<HeaderProps> = ({ active, setActive }) => {
	// const [search, setSearch] = useState<string>('')
	//
	// const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
	// 	setSearch(e.target.value)
	// }

	return <div className={styles.header}>
		<div className={styles.headerContainer}>
			<div className={styles.logo}>	<NavLink to={ROUTES.HOME}>Atlant Crypto</NavLink></div>
			<Navbar/>
			{/*<div className={styles.search}>*/}
			{/*	<Input value={search} placeholder="Поиск..." onChange={handleChange} type="text" />*/}
			{/*</div>*/}
			<div className={styles.settingsButton} onClick={setActive}>
				<svg className={styles.settingsIcon} fill="#32BEA6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64px" height="64px">
					<path d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z" />
					<svg fill="#FFF">
						<path d="M416.2,275.3v-38.6l-36.6-11.5c-3.1-12.4-8-24.1-14.5-34.8l17.8-34.1L355.6,129l-34.2,17.8c-10.6-6.4-22.2-11.2-34.6-14.3l-11.6-36.8h-38.7l-11.6,36.8c-12.3,3.1-24,7.9-34.6,14.3L156.4,129L129,156.4l17.8,34.1c-6.4,10.7-11.4,22.3-14.5,34.8l-36.6,11.5v38.6l36.4,11.5c3.1,12.5,8,24.3,14.5,35.1L129,355.6l27.3,27.3l33.7-17.6c10.8,6.5,22.7,11.5,35.3,14.6l11.4,36.2h38.7l11.4-36.2c12.6-3.1,24.4-8.1,35.3-14.6l33.7,17.6l27.3-27.3l-17.6-33.8c6.5-10.8,11.4-22.6,14.5-35.1L416.2,275.3z M256,340.8c-46.7,0-84.6-37.9-84.6-84.6c0-46.7,37.9-84.6,84.6-84.6c46.7,0,84.5,37.9,84.5,84.6C340.5,303,302.7,340.8,256,340.8z" />
					</svg>
				</svg>
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