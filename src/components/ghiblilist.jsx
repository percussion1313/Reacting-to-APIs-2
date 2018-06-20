import React from 'react';
import Filmcard from './filmcard.jsx';
import Peoplecard from './peoplecard.jsx';


const GhibliList = (props) => {

    let ghibliData = props.items.map((res, index) => {
        if (props.type === "film") {
            return <Filmcard key={res.id} siteDetails={res} />
        } else {
            return <Peoplecard  key={res.id} siteDetails={res}/>
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