import React, { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/cardlist/cardlist.comp';
import { SearchBox } from './components/searchBox/searcBox.component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monisters: [],
			filterMonisters: [],
			searchVal: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
			console.log('data >>> ', data);
			this.setState({
				monisters: data,
				filterMonisters: data
			});
		});
	}

	searchHandeler = (e) => {
		const searchVal = e.target.value;
		const filterMonisters = this.filterResults(searchVal);
		this.setState({
			searchVal,
			filterMonisters
		});
	};

	filterResults = (searchVal) => {
		const { monisters } = this.state;
		let filterVal;
		filterVal = monisters.filter((e) => {
			return e.name.toLowerCase().includes(searchVal.toLowerCase());
		});
		return filterVal;
	};

	render() {
		const { monisters, searchVal, filterMonisters } = this.state;

		return (
			<div className="App">
				<h1>Monister Rolodex</h1>
				<SearchBox placeholder="Monister Search" onChaneHandeler={this.searchHandeler} />
				<CardList monisters={filterMonisters} />
			</div>
		);
	}
}

export default App;
