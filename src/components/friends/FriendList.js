import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <section className="friends">
            <ul className={s.friend__list}>
                {friends.map(({ id, isOnline, avatar, name }) => {
                    return (
                        <li className={s.item} key={id}>
                            <FriendListItem
                                avatar={avatar}
                                name={name}
                                isOnline={isOnline}
                            />
                        </li>
                    )
                })}
            </ul>
        </section >
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
    id: PropTypes.number
}