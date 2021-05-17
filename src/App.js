import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Panel, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const panel = {
	desks: 'desks',
	columns: 'columns'
}
const App = () => {
const [activePanel, setActivePanel] = useState(panel.desks)
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Panel id={panel.desks}>
						<div>
							<Button onClick = {() => setActivePanel(panel.columns)}>Перейти к колонкам</Button>
						</div>
					</Panel>
					<Panel id={panel.columns}>
						<div>
							<Button onClick = {() => setActivePanel(panel.desks)}>Перейти к доскам</Button>
						</div>
					</Panel>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
