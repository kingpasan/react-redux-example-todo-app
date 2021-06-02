import React from 'react';
import {useSelector} from 'react-redux';

export default function NavBar() {

    const taskObject = useSelector(store => store);

    return (
        <div>
            <h1>Total Task : {taskObject.taskitems.length}</h1>
        </div>
    )
}