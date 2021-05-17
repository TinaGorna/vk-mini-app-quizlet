import React, {Fragment} from 'react';
import {CardGrid, PanelHeaderContent} from "@vkontakte/vkui";
import PropTypes from 'prop-types';
import DeskItem from "./DeskItem";
import DeskList from "./DeskList";


const Desks = ({onChangePanel}) => {
    return (
        <Fragment>
            <PanelHeaderContent>My desks</PanelHeaderContent>

            <DeskList/>

            {/*<Button onClick={onChangePanel}>Switch to columns</Button>*/}
        </Fragment>
    )
};
Desks.propTypes = {
    onChangePanel: PropTypes.func.isRequired
};

export default Desks;