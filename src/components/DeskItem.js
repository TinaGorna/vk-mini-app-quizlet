import React from 'react';
import PropTypes from 'prop-types';
import {Card, Div} from "@vkontakte/vkui";

const DeskItem = ({children}) => {
    return (
        <Card size='L'>
            <Div>
                {children}
            </Div>
        </Card>
    )
};

DeskItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired  //noda и строка, и JSX компонент, может быть массив JSX компонентов
};

export default DeskItem;