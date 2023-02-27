import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
<table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({type, amount, currency, id}) => (
    <tr className={css.tr} key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
                ))}
   
    
  </tbody>
</table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({      
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};