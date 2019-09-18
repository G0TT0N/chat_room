import React from 'react';
import {DialogItem} from "../index";
import orderBy from 'lodash/orderBy';


const Dialogs = ({items, userId}) => (
    <div className="dialogs">
        {orderBy(items, ["created_at"], ["desc"])
            .map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                />
            ))}
    </div>
);

export default Dialogs;


