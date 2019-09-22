import React from 'react';
import {DialogItem} from "../index";
import orderBy from 'lodash/orderBy';
import {Input, Empty} from "antd";


const Dialogs = ({items, userId, onSearch, inputValue}) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                value={inputValue}
                placeholder="Поиск среди контактов"
                onChange={e => onSearch(e.target.value)}
            />
        </div>
        {items.length > 0
            ? orderBy(items, ["created_at"], ["desc"])
                .map(item => (
                    <DialogItem
                        key={item._id}
                        isMe={item.user._id === userId}
                        {...item}
                    />
                ))
            : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"Диалога нет"} />
        }
    </div>
);

export default Dialogs;


