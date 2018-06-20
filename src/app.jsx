import React, { Component } from 'react';
import GhibliList from './components/ghiblilist';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';
const PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            type: "",
           
        }

        this.filmData = () => {
            fetch(`${BASE_URL}`)
                .then((results) => {
                    return results.json()
                }).then((res) => {
                    this.setState({
                        type: "film",
                        data: res
                    });
                })
        }

        this.peopleData = () => {
            fetch(`${PEOPLE_URL}`)
                .then((results) => {
                    return results.json()
                }).then((res) => {
                    this.setState({
                        type: "people",
                        data: res
                    });
                })
        }
    }

    
    hasLoaded = () => {
        this.setState({hasLoaded: this.state.hasLoaded});
    } 

    render() {


        return (
            <React.Fragment>
                <h1 className="text-center text-shadow">STUDIO GHIBLI</h1>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow m-2" onClick={this.filmData} onDoubleClick={this.hasLoaded}>Show Films</button>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow m-2" onClick={this.peopleData} onDoubleClick={this.hasLoaded}>Show Characters</button>
                <GhibliList items={this.state.data} type={this.state.type} />
            </React.Fragment>)


    }
}




export default App;
