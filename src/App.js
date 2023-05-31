import React, { Component } from 'react'
import CardList from './components/CardList';
import Search from './components/Search';
import Scroll from "./components/Scroll"
import './container/index.css'
import './container/App.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfields: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(user => this.setState({robots: user}))
    }

    onSearchChange = (e) => {
        this.setState({ searchfields: e.target.value})
    }
    
    render() {
        const { robots, searchfields } = this.state;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfields.toLowerCase())
        })
        
        return (!robots.length) ?
             <h1 className='f1 tc pt4'>Loading...</h1> :

            (
            <div>
                <h1 className='f1 tc ttu' >RoboFriends</h1>
                <Search searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div> 
            )
    }
}

export default App;