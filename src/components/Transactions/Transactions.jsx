import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

const Transactions = ({ items }) => {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th className={styles.transaction_header}>Type</th>
          <th className={styles.transaction_header}>Amount</th>
          <th className={styles.transaction_header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={styles.transaction_row}>
            <td className={styles.transaction_data}>{item.type}</td>
            <td className={styles.transaction_data}>{item.amount}</td>
            <td className={styles.transaction_data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;
