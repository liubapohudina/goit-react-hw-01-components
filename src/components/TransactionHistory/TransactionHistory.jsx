import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => {
    const elements = items.map(({ id, type, amount, currency }) => 
      <tr id={id} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </tr>)
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   {elements}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
             amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    )
}

export default TransactionHistory;