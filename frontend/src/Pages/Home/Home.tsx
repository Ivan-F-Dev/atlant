import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../../Hooks/storeHooks";
import {homeStart, setCards} from "../../Redux/HomeReducer";
import {useGetHeight} from "../../Hooks/getHeightHook";
import s from './Home.module.scss'
import {HomeTableHead} from "./components/HomeTableHead/HomeTableHead";
import {HomeTable} from "./components/HomeTable/HomeTable";

const Home: FC = () => {

	const {ref, heightStyle} = useGetHeight()
	const dispatch = useAppDispatch()
	const {cards} = useAppSelector( (state) => state.home )

	useEffect( () => {

		if (!cards) {
			console.log('homeStart')
			dispatch(homeStart())
		}
	},[])

	return (
		<div ref={ref} style={heightStyle} className={s.Home}>
			<HomeTableHead/>
			{cards && cards.length ? <HomeTable cards={cards.slice(0,100)}/> : 'Нет монет ((('}
		</div>
	)
}

export default Home