import React , {Component} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './app.css';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/errorBoundary';


class App extends Component {
	
	constructor() {
		super()	
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}

	render() {

		//Destructure input
		const {robots , searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) { //0 = false in JS
			return <h1 className='tc'>Loading</h1>
		}
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}

}


export default App;