import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(item => (
        <FriendItem key={item.id} friend={item} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;
