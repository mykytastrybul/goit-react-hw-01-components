import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

export default function Statistics({ stats }) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.stat__list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={s.item} key={id} style={{
                            backgroundColor: `#${Math.floor(
                                Math.random() * 16777215
                            ).toString(16)}`,
                        }}>
                            <span className={s.label}>{label}</span>
                            <span className={s.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number
}