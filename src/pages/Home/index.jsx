import React from 'react';
import {Icon, Button} from 'antd';
import './Home.scss'
import {ChatInput, Messages, Status} from "../../components";
import {Dialogs} from "../../containers";
import dialogsJSON from '../../utils/dialogs';

const Home = () => (
    <section className={'home'}>
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div>
                        <Icon type="usergroup-add"/>
                        <span>Список диалогов</span>
                    </div>
                    <Button type={"link"} shape={"circle"} icon="form"/>
                </div>
                <div className="chat__sidebar-dialogs">
                    <Dialogs
                        userId={0}
                        items={dialogsJSON}
                    />
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div/>
                    <div className="chat__dialog-header-center">
                        <p className="chat__dialog-username">John Marchetty</p>
                        <div className="chat__dialog-header-status">
                            <Status online={true}/>
                        </div>
                    </div>
                    <Button type={"link"} shape={"circle"} icon="ellipsis"/>
                </div>
                <div className="chat__dialog-messages">
                    <Messages />
                </div>
                <div className="chat__dialog-input">
                    <ChatInput/>
                </div>
            </div>
        </div>
    </section>
);

export default Home;



