import React, {useState} from 'react';
import {Button, Input} from "antd";
import "./Chatinput.scss";

const ChatInput = () => {
    const [value, setValue] = useState("");

    return (
        <div className={'chat-input'}>
            <div className="chat-input__smile-btn">
                <Button type={"link"} shape={"circle"} icon="smile"/>
            </div>
            <Input
                placeholder="Введите текст сообщения..."
                onSearch={value => console.log(value)}
                size={"large"}
                onChange={event => setValue(event.target.value)}
            />
            <div className="chat-input__actions">
                <Button type={"link"} shape={"circle"} icon={"camera"}/>
                {value
                    ? <Button type={"link"} shape={"circle"} icon="check-circle"/>
                    : <Button type={"link"} shape={"circle"} icon="audio"/>
                }
            </div>
        </div>
    );
};

export default ChatInput;
