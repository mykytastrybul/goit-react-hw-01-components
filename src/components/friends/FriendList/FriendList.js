import FriendListItem from '../friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <section className="friends">
            <ul className={s.friend__list}>
                {friends.map(({ id, isOnline, avatar, name }) => {
                    return (
                        <FriendListItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    )
                })}
            </ul>
        </section >
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ),
};