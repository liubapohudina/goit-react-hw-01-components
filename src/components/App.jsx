
import React from 'react';
import user from './user.json';
import css from '../components/Profile.module.css';
//console.log(css)

export const Profile = () => {
  return (<div className={css.profile}>
    <div className= {css.descr}>
      <img
        src={user.avatar}
        alt="User avatar"
        className= {css.avatar}
      />
      <p className={css.userName}>{user.username}</p>
      <p className={css.tag}>@{user.tag}</p>
      <p className={css.location}>{user.location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
  );
};

