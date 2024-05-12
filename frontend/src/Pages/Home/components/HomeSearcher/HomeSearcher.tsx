import s from './HomeSearcher.module.scss'

type Props = {
};

export function HomeSearcher({}: Props) {
    return (
        <div className={s.HomeSearcher}>
            <input type="text"/>
            <input type="checkbox"/>
        </div>
    );
};