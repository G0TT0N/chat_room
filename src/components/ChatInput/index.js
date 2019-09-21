import React from 'react';
import {Icon, Input} from "antd";

const ChatInput = () => {
    return (
        <div className={'chat-input'}>
            <div className="chat-input__smile-bnt">
                <Icon type="smile"/>
            </div>
            <Input
                placeholder="Введите текст сообщения..."
                onSearch={value => console.log(value)}
            />
            <div className="chat-input__actions">
                <Icon type="camera" />
                <Icon type="audio" />
                <Icon type="right-circle" />
            </div>
        </div>
    );
};

export default ChatInput;
