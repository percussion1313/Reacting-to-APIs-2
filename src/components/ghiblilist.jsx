import React from 'react';
import Filmcard from './filmcard.jsx';
import Peoplecard from './peoplecard.jsx';


const GhibliList = (props) => {

    let ghibliData = props.items.map((obj, index) => {
        if (props.type === "film") {
            return <Filmcard key={obj.id} siteDetails={obj} />
        } else {
            return <Peoplecard  key={obj.id} siteDetails={obj}/>
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">{ghibliData}</div>
            </div>
        </div>

    );
};




export default GhibliList;