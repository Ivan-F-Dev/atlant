import { FC } from 'react'
import s from "./SettingsWindow.module.scss";

interface SettingsWindowProps {
	active: boolean;
	setActive: () => void;
	setModal: () => void
}

const SettingsWindow: FC<SettingsWindowProps> = ({ active, setActive, setModal }) => {
	return <div className={active ? `${s.settings} ${s.active}` : `${s.settings}`} onClick={setActive}>
		<div className={s.settingsContent} onClick={(e) => e.stopPropagation()}>
			<ul className={s.settingsItems}>
				<li className={s.settingsItem}>Switch theme</li>
				<li className={s.settingsItem} onClick={setModal}>Login</li>
			</ul>
		</div>
	</div >
}

export default SettingsWindow