import { ChangeEventHandler, FC } from 'react'
import styles from "./Intup.module.scss"

interface InputProps {
	value: string;
	placeholder: string;
	onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
	return <input value={value} placeholder={placeholder} className={styles.searchInput} type="text" onChange={onChange} />

}

export default Input