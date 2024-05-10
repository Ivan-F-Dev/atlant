import s from './HomeCard.module.scss'

type Props = {
    id: string
    name: string
};

export function HomeCard({name, id}: Props) {
    return (
        <div className={s.HomeCard} title={id}>
            {name}
        </div>
    );
};