import React, { useState } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from "./components/Desks";


const panel = {
    desks: 'desks',
    columns: 'columns',
};

const App = () => {
    const [activePanel, setActivePanel] = useState(panel.desks);

    return (
        <View activePanel={activePanel} header={false}>
            <Panel id={panel.desks} separator={false}>
                <Desks onChangePanel={() => setActivePanel(panel.columns)} />
            </Panel>

        </View>
    );
};

export default App;