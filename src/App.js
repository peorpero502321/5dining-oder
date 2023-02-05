import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

import Home from './pages/Home';
import Food from './pages/Food';
import Drink from './pages/Drink';
import Beer from './pages/Beer';
import Coktail from './pages/Coktail';
import Wine from './pages/Wine';

const Center = styled.div`
	height: 92vh;
	display: flex;
	flex-direction: row;
`;

function App() {
	return (
		<>
			<Center>
				<Sidebar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/food' component={Food} />
					<Route path='/drink' component={Drink} />
					<Route path='/beer' component={Beer} />
					<Route path='/coktail' component={Coktail} />
					<Route path='/wine' component={Wine} />
				</Switch>
			</Center>
		</>
	);
}

export default App;
