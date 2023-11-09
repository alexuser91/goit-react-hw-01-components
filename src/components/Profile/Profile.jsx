import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={styles.profile}>
      <img src={avatar} alt={username} />
      <h2>{username}</h2>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
      <div className={styles.stats}>
        <div className={styles.followers}>
          <p className={styles.followers_title}>Followers</p>
          {stats.followers}
        </div>
        <div className={styles.views}>
          <p className={styles.views_title}>Views</p>
          {stats.views}
        </div>
        <div className={styles.likes}>
          <p className={styles.likes_title}>Likes</p>
          {stats.likes}
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
