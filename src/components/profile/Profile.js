import PropTypes from "prop-types";
import css from './Profile.module.css';

export default function Profile(props) {
    const {
        username,
        tag,
        location,
        avatar,
        followers,
        views,
        likes } = props;

   return (
<div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
           alt={username}
           className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
           
    <ul className={css.stats}>
        <li className={css.stats_item}>
            <span className={css.location}>Followers</span>
            <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats_item}>
            <span className={css.location}>Views</span>
            <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats_item}>
            <span className={css.location}>Likes</span>
            <span className={css.quantity}>{likes}</span>
        </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
};