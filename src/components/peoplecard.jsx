import React from 'react';

const Peoplecard = (props) => {
    return (
    
        <div className="card bg-light m-4 rounded-0 shadow">
            <div className="card-header bg-dark text-white rounded-0 shadow bottom-0">{props.siteDetails.name}</div>
            <div className="card-body shadow">
                <h5 className="card-title rounded-0 ">{props.siteDetails.gender}</h5>
                <h5 className="card-title rounded-0 ">{props.siteDetails.age}</h5>
                <a href={props.siteDetails.url} target="_blank">Link</a>
            </div>
        </div>
    )
   
}

export default Peoplecard