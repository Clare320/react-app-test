import VConsole from 'vconsole';
import { 
	BrowserRouter as Router,
	Switch,
	Link,
	Route,
} from 'react-router-dom'
import './App.css';
import routes from './routes/routes';

let vConsole;

(function () {
	if (!vConsole) {
		vConsole = new VConsole();
	}
})();


const configureRoutes = () => {
	let result = [];
	routes.forEach(route => {
		const { name, component} = route;
	});
}


function App() {
	return (
		<div className='container'>
			<Router>
				<div className='main'>
					<div className='left'>
						{
							routes.map((route, i) => {
								const { name, routes: s_routes } = route;
								return (
									<div>
										<div className='navi-title'>{name}</div>
										{ s_routes.map((s_route, i) => {
											const { name: s_name } = s_route;
											return (
												<div className='sub-navi-title'>{s_name}</div>
											);
										})}
									</div>
								);
							})
						}
					</div>
					<div className='content'>
						<Switch>
							{routes.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route} />
							))}
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

function RouteWithSubRoutes(route) {
	return (
		<Route 
			path={route.path}
			render={props => (
				<route.component { ...props} routes={route.routes} />
			)}
		/>
	);
}

export default App;
