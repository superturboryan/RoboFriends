import React , {Component} from 'react';

import { connect } from 'react-redux';

import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import './app.css'; 
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/errorBoundary';

import { searchRobots } from '../reducers';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: searchRobots(state.searchField)
	}
}

//Send the actions using
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}


class App extends Component {
	
	constructor() {
		super()	
		this.state = {
			robots: [],
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	render() {

		//Destructure input
		const { robots } = this.state;
		const { searchField , onSearchChange } = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if (!robots.length) { //0 = false in JS
			return <h1 className='tc'>Loading</h1>
		}
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
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


export default connect(mapStateToProps , mapDispatchToProps)(App);




