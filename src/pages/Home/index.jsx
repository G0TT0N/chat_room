import React from 'react';
import {Icon, Button} from 'antd';
import './Home.scss'
import {ChatInput, Message, Status} from "../../components";
import {Dialogs} from "../../containers";

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
                        items={[
                            {
                                "_id": "c4ca4238a0b923820dcc509a6f75849b",
                                "index": 0,
                                "created_at": new Date("Thu Oct 23 2003 07:33:58 GMT+0000 (UTC)"),
                                "text": "Dolor ut occaecat anim adipisicing et non nostrud. Veniam officia esse laboris tempor. Eiusmod duis aliqua dolore non occaecat ipsum nostrud duis.",
                                "user": {
                                    "_id": "c4ca4238a0b923820dcc509a6f75849b",
                                    "fullname": "Francisca Walter",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "14a868bd531fc968ac789148630f8992",
                                "index": 1,
                                "created_at": new Date("Sat Apr 06 1991 04:06:37 GMT+0000 (UTC)"),
                                "text": "Proident irure sunt id tempor sit do Lorem ex non. Ut deserunt commodo eu ullamco sint est laboris. Cupidatat consectetur consectetur eu irure aute reprehenderit sint occaecat non.",
                                "user": {
                                    "_id": "14a868bd531fc968ac789148630f8992",
                                    "fullname": "Stout Berger",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "eccbc87e4b5ce2fe28308fd9f2a7baf3",
                                "index": 2,
                                "created_at": new Date("Sat Aug 27 2005 08:45:14 GMT+0000 (UTC)"),
                                "text": "Aliqua dolore Lorem exercitation nisi laborum in aute tempor et. Ullamco elit quis ea ad consectetur ex commodo deserunt duis enim id mollit. Cupidatat velit et mollit tempor sit sit aute eiusmod aliqua voluptate.",
                                "user": {
                                    "_id": "eccbc87e4b5ce2fe28308fd9f2a7baf3",
                                    "fullname": "Henrietta Sherman",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "7815696ecbf1c96e6894b779456d330e",
                                "index": 3,
                                "created_at": new Date("Fri Feb 06 1987 00:09:08 GMT+0000 (UTC)"),
                                "text": "Ea in reprehenderit consectetur ad sit eu Lorem aliquip pariatur dolore. Culpa velit sunt tempor irure magna nulla tempor. Esse qui ea reprehenderit ullamco excepteur officia qui eiusmod culpa sint exercitation sunt.",
                                "user": {
                                    "_id": "7815696ecbf1c96e6894b779456d330e",
                                    "fullname": "Higgins Blankenship",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "fe6890d3b7e45d8cf9c7a017337f392e",
                                "index": 4,
                                "created_at": new Date("Sun Sep 05 1999 11:16:44 GMT+0000 (UTC)"),
                                "text": "Irure velit proident pariatur anim fugiat. Eu nostrud mollit voluptate quis nisi consectetur enim duis nisi culpa est enim ex. Laboris exercitation ad laborum sit labore.",
                                "user": {
                                    "_id": "fe6890d3b7e45d8cf9c7a017337f392e",
                                    "fullname": "Luna Sears",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "26178767bb0eb3bcb547bbc1b9560d03",
                                "index": 5,
                                "created_at": new Date("Wed Oct 23 1974 19:00:54 GMT+0000 (UTC)"),
                                "text": "Aute irure ut exercitation elit fugiat in proident. Pariatur ad officia quis proident reprehenderit. Do culpa id anim culpa eu est.",
                                "user": {
                                    "_id": "26178767bb0eb3bcb547bbc1b9560d03",
                                    "fullname": "Collins Landry",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "67104d01f1c7635cb679329c4a90512c",
                                "index": 6,
                                "created_at": new Date("Sat Feb 07 1998 23:58:29 GMT+0000 (UTC)"),
                                "text": "Sit officia aute ea quis laboris est eiusmod aliqua amet culpa nisi labore. Consequat est labore adipisicing eu. Ipsum nostrud ad dolor culpa ex.",
                                "user": {
                                    "_id": "67104d01f1c7635cb679329c4a90512c",
                                    "fullname": "Mae Cannon",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "d59a542c6eae2806d941df4adb5c89c3",
                                "index": 7,
                                "created_at": new Date("Wed Jan 03 1996 22:16:00 GMT+0000 (UTC)"),
                                "text": "Do irure pariatur aliqua dolor eiusmod. Ut ad nostrud officia pariatur esse proident excepteur ad. Exercitation ex tempor minim non incididunt reprehenderit eiusmod.",
                                "user": {
                                    "_id": "d59a542c6eae2806d941df4adb5c89c3",
                                    "fullname": "Lorna Austin",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "1d13cc462a9e47e78be2e8922697b96a",
                                "index": 8,
                                "created_at": new Date("Mon Mar 29 1982 10:36:22 GMT+0000 (UTC)"),
                                "text": "Do officia incididunt sit adipisicing magna non commodo cupidatat fugiat anim pariatur mollit. Id aliquip do Lorem nisi consectetur Lorem non proident eiusmod est proident cupidatat proident. Tempor consequat magna do reprehenderit elit mollit ipsum ex dolore duis veniam enim.",
                                "user": {
                                    "_id": "1d13cc462a9e47e78be2e8922697b96a",
                                    "fullname": "Agnes Kent",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "cdefb319f2221fbceab11165f81b0801",
                                "index": 9,
                                "created_at": new Date("Wed Sep 25 1985 07:02:12 GMT+0000 (UTC)"),
                                "text": "Deserunt proident incididunt ullamco voluptate adipisicing adipisicing pariatur ea cupidatat. Excepteur incididunt labore mollit ad eu culpa do eu. Quis consectetur ut aliqua esse minim qui.",
                                "user": {
                                    "_id": "cdefb319f2221fbceab11165f81b0801",
                                    "fullname": "Estella Meadows",
                                    "avatar": null
                                }
                            }
                        ]}
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
                    <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                             isMe={false}
                             date={new Date()}
                             audio={'https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.wav'}
                    />
                    <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                             text={'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'}
                             date={new Date()}
                             attachments={[
                                 {
                                     falename: 'image.jpg',
                                     url: 'http://source.unsplash.com/100x100/?random-1&nature,water'
                                 },
                                 {
                                     falename: 'image.jpg',
                                     url: 'http://source.unsplash.com/100x100/?random-2&nature,water'
                                 },
                                 {
                                     falename: 'image.jpg',
                                     url: 'http://source.unsplash.com/100x100/?random-3&nature,water'
                                 }
                             ]}
                             isMe={false}

                    />
                    <Message avatar={'https://sun9-38.userapi.com/c846321/v846321172/10d6d6/eWA_JGAyu68.jpg?ava=1'}
                             text={'Салам, брат Цезарь!'}
                             date={new Date()}
                             isMe={true}
                             isReaded={false}
                    />
                    <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                             attachments={[
                                 {
                                     falename: 'image.jpg',
                                     url: 'http://source.unsplash.com/100x100/?random-1&nature,water'
                                 }
                             ]}
                             isMe={false}
                    />
                    <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                             isTyping
                             isMe={false}
                    />
                </div>
                <div className="chat__dialog-input">
                    <ChatInput/>
                </div>
            </div>
        </div>
    </section>
);

export default Home;



