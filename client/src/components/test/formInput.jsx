import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
//import {useDispatch, useSelector} from "react-redux";
//import { setNameHome } from "../features/home/homeSlice.js";

const FormInput = () => {

    const [name, setName] = useState('')

    const [number, setNumber] = useState('')

    /*useEffect(() => {

        console.log("Dызвана")

    })*/

    const addNewHome = (e) => {
        e.preventDefault()

        axios.post('http://localhost:7777/api/test', {
            name: name,
            number: number
        }).then((res) => {
            console.log(res.data)
        })
    }




    return (
        <div>
            <Container className="mt-3">
                <form method="POST">
                    <input type="text" name="name"
                           value={name}
                           onChange={e => setName(e.target.value)}
                           placeholder="Имя"/>
                    {/*<input type="text"
                           name='name'
                           //value={name}
                           onChange={e => setNameHome(e.target.value)}
                           //onChange={e => useDispatch(setNameHome(e.target.value))}
                           placeholder="Наименование дома"/>*/}
                    <input type="number"
                           //name="number"
                           //value={number}
                           onChange={e => setNumber(e.target.value)}
                           placeholder="Номер дома"/>
                    <button onClick={addNewHome} type="submit">Добавить</button>
                </form>

            </Container>

        </div>
    );
};

export default FormInput;