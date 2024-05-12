import s from './HomeTable.module.scss'
import {HomeCard} from "../HomeCard/HomeCard";

type Props = {
    cards: any[]
};

export function HomeTable({cards}: Props) {
    return (
        <div className={s.HomeTable+' v-scroll'} >
            {cards && cards.length
                ? cards.map( card => <HomeCard key={card.id} id={card.id} name={card.name}/>)
                : 'Нет монет ((('
            }
        </div>
    );
};