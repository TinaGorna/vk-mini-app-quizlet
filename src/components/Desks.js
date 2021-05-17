import React, {Fragment} from 'react';
import {Button} from "@vkontakte/vkui";
import PropTypes from 'prop-types';

const Desks = ({onChangePanel}) => {
    return (
        <Fragment>
            <Button onClick={onChangePanel}>Перейти к колонкам</Button>
        </Fragment>
    )
};
Desks.propTypes = {
    onChangePanel: PropTypes.func.isRequired
};

export default Desks;