import React from 'react';
import './Dialogs.scss';
import {DialogItem} from "../index";
import orderBy from 'lodash/orderBy';


const Dialogs = ({items, userId}) => (
    <div className="dialogs">
        {orderBy(items, ["created_at"], ["desc"])
            .map(item => (
                <DialogItem
                    key={item._id}
                    user={item.user}
                    message={item}
                    unreaded={110}
                    isMe={item.user._id === userId}
                />
            ))}
    </div>
);

export default Dialogs;


