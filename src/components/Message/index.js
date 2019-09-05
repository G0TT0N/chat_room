import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';


const Message = ({avatar, user, text, date, isMe}) => (
    <div className={classNames("message", {"message--isme": isMe})}>
        <div className="message__content">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__info">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <div className="message__attachments">
                </div>
                <span className="message__date">
                {formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}
                </span>
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
};

export default Message;