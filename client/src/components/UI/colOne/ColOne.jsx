import React from 'react';
import {Col, Row} from "react-bootstrap";
import classes from "./MyColOne.module.css"

const ColOne = (props) => {
    return (
        <Col sm={2} className={classes.myColOne }>
            {props.children}
        </Col>
    );
};

export default ColOne;