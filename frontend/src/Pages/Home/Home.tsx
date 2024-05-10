import {FC, useEffect, useRef, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../Hooks/storeHooks";
import {homeStart, setCards} from "../../Redux/HomeReducer";
import {useGetHeight} from "../../Hooks/getHeightHook";
import s from './Home.module.scss'
import {HomeCard} from "../../Components/HomeCard/HomeCard";

const Home: FC = () => {

	const {ref, heightStyle} = useGetHeight()
	const dispatch = useAppDispatch()
	const {cards} = useAppSelector( (state) => state.home )
	// useEffect( () => {
	// 	dispatch(setCards([{name: '1',id: '1'},{name: '2',id: '2'}]))
	// },[])

	return (
		<div ref={ref} style={heightStyle} className={s.Home}>
			<div onClick={ () => dispatch(homeStart()) } className={s.Head}>
				request
			</div>
			<div className={s.Table}>
				{cards && cards.length
					? cards.map( card => <HomeCard key={card.id} id={card.id} name={card.name}/>)
					: 'Нет монет ((('
				}
			</div>
		</div>
	)
}

export default Home