import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
            <span className={isOnline ? `${s.online}` : `${s.offline}`}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};