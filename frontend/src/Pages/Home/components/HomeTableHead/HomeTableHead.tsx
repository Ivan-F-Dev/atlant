import s from './HomeTableHead.module.scss'
import {HomeSearcher} from "../HomeSearcher/HomeSearcher";
import {HomePaginator} from "../HomePaginator/HomePaginator";

type Props = {

};

export function HomeTableHead(props: Props) {
    return (
        <div className={s.HomeTableHead}>
            <HomeSearcher/>
            <HomePaginator/>
        </div>
    );
};