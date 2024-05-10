import {FC, useEffect, useRef, useState} from 'react'
import {useGetHeight} from "../../Hooks/getHeightHook";

const Home: FC = () => {

	const {ref, heightStyle} = useGetHeight()


	return <div ref={ref} style={heightStyle} className='HOME'>
		HOME
	</div>
}

export default Home