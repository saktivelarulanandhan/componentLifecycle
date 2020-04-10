import React from 'react';
import classes from '../Persons/Persons.module.css';

import Person from './Person/Person';

const Persons = (props) => {
    console.log(props.persons);
    let personsDOM = null;
    personsDOM = props.persons.map((person,index) => {
        return (<div key={index}><Person id={index} name={person.name} age={person.age} nameChangeEvent={props.nameChangeEvent } removeHandler={props.removeHandler}></Person></div>);
    });
    console.log(personsDOM);

    return (
        <div className={classes.personsWrapper}>
            {personsDOM}
        </div>
    )
}

export default Persons;