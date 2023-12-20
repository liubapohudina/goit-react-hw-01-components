import FriendListItem from './FriendListItem';
import css from '../FriendList/FriendList.module.css'

const FriendList = ({friends}) => {
    const element = friends.map(({ avatar, id, name, isOnline }) =>
        <FriendListItem
            key={id}
            id={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
    />)
     return <ul className={css.friendList}>{element}</ul>;
}

export default FriendList;

