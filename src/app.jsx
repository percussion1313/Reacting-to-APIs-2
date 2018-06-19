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
                }).then((obj) => {
                    this.setState({
                        type: "film",
                        data: obj
                    });
                })
        }

        this.peopleData = () => {
            fetch(`${PEOPLE_URL}`)
                .then((results) => {
                    return results.json()
                }).then((obj) => {
                    this.setState({
                        type: "people",
                        data: obj
                    });
                })
        }
    }



    render() {


        return (
            <React.Fragment>
                <h1 className="text-center text-shadow">STUDIO GHIBLI</h1>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow m-2" onClick={this.filmData}>Show Films</button>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow m-2" onClick={this.peopleData}>Show People</button>
                <GhibliList items={this.state.data} type={this.state.type} />
            </React.Fragment>)


    }
}




export default App;
