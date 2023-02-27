import PropTypes from "prop-types";
import css from './FriendList.module.css'; 

export default function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={css.item}>
                    <span className={css.status} 
                    style={{ backgroundColor: (isOnline ? 'green' : 'red') }}>{isOnline}
                     </span>
                    <img src={avatar}
                        alt={name}
                        width="48"
                        className={css.avatar} />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
      
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        }) 
    )  
};