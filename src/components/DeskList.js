import React, {useState, useEffect} from 'react';
import {CardGrid} from "@vkontakte/vkui";
import DeskItem from "./DeskItem";
import firebase from "firebase";


const DeskList = () => {

    const [desks, setDesks] = useState([]
    );

    //запрос в базу данных за досками
    useEffect(() => {
        const db = firebase.firestore();

        db.collection("desks").get().then((querySnapshot) => {
            const desks = [];
            querySnapshot.forEach((doc) => {
                desks.push({
                    id: doc.id,
                    name: doc.data.name
                })
            });
            setDesks(desks);
        });

    });

    if (!desks.length) {
        return null
    }
    return (
        <CardGrid>
            {desks.map(({name}) => <DeskItem key={name}>{name}</DeskItem>)}

        </CardGrid>
    )
};

export default DeskList;