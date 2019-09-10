import React from 'react';
import ClassNames from 'classnames';
import './DialogItem.scss';
import {Time, IconReaded} from './../index'

const getAvatar = (avatar) => {
    if (avatar) {
        return (
            <img src={avatar} alt=""/>
        )
    } else {
        // make ava
    }
};

const DialogItem = ({user, message, unreaded}) => (
        <div className={ClassNames('dialogs__item', {
            'dialogs__item--online': user.isOnline})}>
            <div className="dialogs__item-avatar">
                {/*<img src={user.avatar} alt={'user avatar'}/>*/}
                {getAvatar('https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1')}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{'Lev Tolstoy'}</b>
                    <span>
                        {/*<Time date={new Date()}/>*/}
                        13:03
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam amet aspernatur atque,
                        beatae dignissimos, doloremque ducimus, exercitationem fugiat illum itaque natus numquam omnis
                        quam quia rerum suscipit tempore vero?</p>
                    <IconReaded isMe={true} isReaded={true}/>
                    {unreaded > 0 && <div className="dialogs__item-info-bottom-count">
                        {unreaded}
                    </div>}
                </div>
            </div>
        </div>
);

export default DialogItem;


