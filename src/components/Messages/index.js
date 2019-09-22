import React from 'react';
import PropTypes from 'prop-types';
import {Message} from "../../components";
import {Empty} from "antd";


const Messages = ({items}) => {
    return items ? (
        <div>
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
    ) : <Empty description={"Начните чат"}/>
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;
