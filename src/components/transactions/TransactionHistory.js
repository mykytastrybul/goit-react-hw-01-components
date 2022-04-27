import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
    return (
        <section className="transaction">
            <table className={s.transaction__history}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
    })),
}