// propTypes = a mechanism to validate the types of props passed to a component
//             age: PropTypes.number

// defaultProps = default values for props in case they r not
//                passed from the parent component
//                name: "Guest"

import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
};

export default Student;