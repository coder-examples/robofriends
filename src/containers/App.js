import React from 'react';
import Cardlist from '../components/Cardlist';
import Search from '../components/Search';
import 'tachyons';
import './App.css';
import GoodScroll from '../components/GoodScroll.js';

class App extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	robots: [],
			searchfield: ''
	  };
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(res => {
			return res.json();
		}).then(data => {
			this.setState({ robots: data })
		})
	}

	render() {
		const { searchfield, robots } = this.state;
		const { onSearchChange } = this;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
		<h1>Loading Robots...</h1>:
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<Search searchChange={onSearchChange} searchfield={searchfield}/>
				<GoodScroll>
					<Cardlist robots={filteredRobots}/>
				</GoodScroll>
			</div>
		);
		}
	}

export default App;