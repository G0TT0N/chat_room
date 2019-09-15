import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import classNames from 'classnames';
import {IconReaded, Time} from './../index'
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';

const Message = ({
                     avatar,
                     user,
                     text,
                     date,
                     audio,
                     isMe,
                     isReaded,
                     attachments,
                     isTyping
                 }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className={classNames("message", {
            "message--isme": isMe,
            'message--is-typing': isTyping,
            'message--is-audio': audio,
            'message--image': attachments && attachments.length === 1
        })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            )}
                            {audio &&
                            (<div className="message__audio">
                                    <div className="message__audio-progress"/>
                                    <div className="message__audio-info">
                                        <div className="message__audio-btn">
                                            <button>
                                                {isPlaying ? <img src={pauseSvg} alt="pause"/>
                                                    : <img src={playSvg} alt="play"/>}
                                            </button>
                                        </div>
                                        <div className="message__audio-wave">
                                            <img src={waveSvg} alt="wave"/>
                                        </div>
                                        <span className='message__audio-duration'>00:11</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {attachments &&
                    <div className="message__attachments">
                        {attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>
                    }

                    {date && <span className="message__date">
                        <Time date={date}/>
                    </span>}
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string,
};

export default Message;