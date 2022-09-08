import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import OneItem from "./oneItem";
import data from "bootstrap/js/src/dom/data";
//import {useSelector} from "react-redux";
const ListItem = () => {
    const [home, setHome] = useState([])
    console.log(home)
    useEffect(() => {

        getHome()

    }, [])

    const getHome = () => {
        axios.get('http://localhost:7777/api/test')
            .then((res) => {
                console.log({
                    home: home.length,
                    homeData: res.data.length
                })

                setHome(res.data)
                console.log(res.data)
            }).catch((err) => {
            if (err)  console.log(err)
        })
    }

    return (
        <Container className="mt-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Наименование</th>
                    <th>Номер</th>
                </tr>
                </thead>
                <tbody>

                    {
                        home.map((data) =>
                            <OneItem key={data.id} home={data}/>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ListItem;