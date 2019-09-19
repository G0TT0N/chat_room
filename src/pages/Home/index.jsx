import React from 'react';
import './Home.scss'
import {Dialogs, Message} from "../../components";


const Home = () => (
    <section className={'home'}>
        <Dialogs
            userId={0}
            items={[
                {
                    _id: "d95b2b8d45j3ldj9e;gj33jfk2j3jdvyr",
                    text: 'Hello 1',
                    isReaded: false,
                    created_at: new Date(2019, 8, 10, 11, 11),
                    user: {
                        _id: "d95b2b8d45j3ldj9e;gj33jfk2j3jdvyr",
                        fullname: 'Andrew',
                        avatar: null,
                    }
                },
                {
                    _id: "nr0b2b8d45j3ldj9e;gj33jfk2j3jdvyr",
                    text: 'Hello 2',
                    isReaded: true,
                    created_at: new Date(),
                    user: {
                        _id: "nr0b2b8d45j3ldj9e;gj33jfk2j3jdvyr",
                        fullname: 'John',
                        avatar: null,
                    }
                }
            ]}
        />
        <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                 isMe={false}
                 date={new Date()}
                 audio={'https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.wav'}
        />
        {/*<Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
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
                 isMe={''}

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
                 isMe={''}
        />
        <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                 isTyping
                 isMe={''}
        />*/}
    </section>
);


export default Home;



