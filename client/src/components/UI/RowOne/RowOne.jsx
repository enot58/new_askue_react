import React from 'react';
import {Row} from "react-bootstrap";
import classes from "./RowOne.module.css"

const RowOne = (props) => {
    return (
        <Row className={classes.myRowOne}>
            {props.children}
        </Row>
    );
};

export default RowOne;