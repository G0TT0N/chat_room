import React from 'react';
import './DialogItem.scss';
import {Time, IconReaded} from './../index'

const DialogItem = ({user, message}) => {
    return (
        <div className="dialogs__item">
            <div className="dialogs__item-avatar">
                {/*<img src={user.avatar} alt={'user avatar'}/>*/}
                <img src="https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1" alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{'Lev Tolstoy'}</b>
                    <span>
                        <Time date={new Date()}/>
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam amet aspernatur atque,
                        beatae dignissimos, doloremque ducimus, exercitationem fugiat illum itaque natus numquam omnis
                        quam quia rerum suscipit tempore vero?</p>
                    <IconReaded isMe={true} isReaded={false}/>
                </div>
            </div>
        </div>
    );
};

export default DialogItem;


