import React from 'react';
import {CardGrid} from "@vkontakte/vkui";
import DeskItem from "./DeskItem";


const desks = [
    {name: 'Desk 1'},
    {name: 'Desk 2'}
]
const DeskList = () => {
    if (!desks.length) {
        return null
    }
    return (
        <CardGrid>
            {desks.map(({name}) => <DeskItem>{name}</DeskItem>)}

        </CardGrid>
    )
};

export default DeskList;