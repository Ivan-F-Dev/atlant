import { ChangeEventHandler, FC } from 'react'
import s from "./Intup.module.scss"

interface InputProps {
	value: string;
	type: string;
	placeholder: string;
	onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({ value, placeholder, onChange, type }) => {
	return <input value={value} placeholder={placeholder} className={s.searchInput} type={type} onChange={onChange} />

}

export default Input