import React from 'react';
import './Home.scss'
import {Dialogs, Message} from "../../components";


const Home = () => (
    <section className={'home'}>
        <Dialogs
            userId={0}
            items={[
                {
                    text: 'Hello 1',
                    isReaded: false,
                    created_at: new Date(2019, 8, 10, 11, 11),
                    user: {
                        _id: 1,
                        fullname: 'Name 1',
                        avatar: null,
                    }
                },
                {
                    text: 'Hello 2',
                    isReaded: true,
                    created_at: new Date(),
                    user: {
                        _id: 2,
                        fullname: 'Name 2',
                        avatar: null,
                    }
                }
            ]}
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



