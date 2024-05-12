import s from './HomePaginator.module.scss'

type Props = {
};

export function HomePaginator({}: Props) {
    return (
        <div className={s.HomePaginator}>
            <input type="text" value={100}/>
            <div>
                <button>leftArrow</button>
                <input type="text" value={1}/>
                <button>rightArrow</button>
            </div>
        </div>
    );
};