
import React from 'react';
import classes from '../Person/Person.module.css';

const Person = (props) => {
    return (
        <div className={classes.personWrapper} onClick={e => props.removeHandler(props.id)}>
            <h5>I am {props.name} and I am {props.age} old.</h5>
            <div className={classes.eventWrapper}><label>Change Name:</label> <input type="text" placeholder="Enter Your New Name" onChange={e => props.nameChangeEvent(e,props.id)}/></div>
        </div>
    );
}

export default Person;