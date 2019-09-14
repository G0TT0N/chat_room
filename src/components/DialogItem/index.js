import React from 'react';
import ClassNames from 'classnames';
import './DialogItem.scss';
import {IconReaded} from './../index';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm")
    } else {
        return format(created_at, "dd.MM.yy")
    }

};

const getAvatar = (avatar) => {
    if (avatar) {
        return (
            <img src={avatar} alt=""/>
        )
    } else {
        // make ava
    }
};

const DialogItem = ({user, message, unreaded, isMe}) => (
    <div className={ClassNames('dialogs__item', {
        'dialogs__item--online': user.isOnline
    })}>
        <div className="dialogs__item-avatar">
            {/*<img src={user.avatar} alt={'user avatar'}/>*/}
            {getAvatar(user.avatar)}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullname}</b>
                <span>
                    {getMessageTime(message.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{message.text}</p>
                {isMe && <IconReaded isMe={true} isReaded={true}/>}
                {unreaded > 0 &&
                <div className="dialogs__item-info-bottom-count">
                    {unreaded}
                </div>}
            </div>
        </div>
    </div>
);

export default DialogItem;


