import React, {Component} from 'react';
import './Home.scss'
import {Message, DialogItem} from "../../components";

class Home extends Component {
    render() {
        const date = new Date(2016, 0, 1);
        return (
            <section className={'home'}>
                <DialogItem/>

                {/*<Dialogs
                    items={[
                        {
                            user: {
                                fullname: 'Лев Толстой',
                                avatar: null,
                            },
                            message: {
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores eligendi eos facilis fuga ipsum iusto magni natus neque officiis quos, repellat soluta tempore ullam vel veritatis voluptate. Iure, voluptate!'
                                isReaded: false,
                                created_at: date
                            }
                        }
                    ]}
                />*/}

                {/*<Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                         text={'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'}
                         date={date}
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
                />
                <Message avatar={'https://sun9-38.userapi.com/c846321/v846321172/10d6d6/eWA_JGAyu68.jpg?ava=1'}
                         text={'Салам, брат Цезарь!'}
                         date={date}
                         isMe={true}
                         isReaded={false}

                />
                <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                         isTyping/>
                <Message avatar={'https://sun1-87.userapi.com/c852016/v852016997/1b674f/ybYJetYzEIk.jpg?ava=1'}
                         attachments={[
                             {
                                 falename: 'image.jpg',
                                 url: 'http://source.unsplash.com/100x100/?random-1&nature,water'
                             }
                         ]}
                />*/}
            </section>
        )
    }
}

export default Home;



