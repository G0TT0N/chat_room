import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from "./../../assets/img/readed.svg";
import noReadedSvg from "./../../assets/img/noreaded.svg";


const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => (
    <div className={classNames("message", {"message--isme": isMe})}>
        <div className="message__content">
            {isMe && isReaded ? (
                <img className={'message__icon-readed'}
                     src={readedSvg}
                     alt="readedSvg"/>
            ) : (
                <img className={'message__icon-readed'}
                     src={noReadedSvg}
                     alt="noreadedSvg"/>)}
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__info">
                <div>
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>
                    <span className="message__date">
                        {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
};

export default Message;