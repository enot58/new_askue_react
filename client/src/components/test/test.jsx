/*
import React, {useState} from 'react';
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import OneItem from "./oneItem";

const Test = () => {
    return (
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const addNewHome = (e) => {
        e.preventDefault()
        axios.post('http://localhost:7777/api/test', {
            name: name,
            number: number
        }).then((res) => {
            console.log(res.data)
            getHome()
        })
    }

    const [home, setHome] = useState([])

    /!* useEffect(() => {
       getHome()
     }, [setName])*!/

    const getHome = () => {
        console.log("Вызвана getHome")
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
        <div className="App">

            <div>
                <Container className="mt-3">
                    <form method="POST">
                        <input type="text" name="name"
                               value={name}
                               onChange={e => setName(e.target.value)}
                               placeholder="Имя"/>
                        {/!*<input type="text"
                           name='name'
                           //value={name}
                           onChange={e => setNameHome(e.target.value)}
                           //onChange={e => useDispatch(setNameHome(e.target.value))}
                           placeholder="Наименование дома"/>*!/}
                        <input type="number"
                            //name="number"
                            //value={number}
                               onChange={e => setNumber(e.target.value)}
                               placeholder="Номер дома"/>
                        <button onClick={addNewHome} type="submit">Добавить</button>
                    </form>

                </Container>

            </div>

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

            {/!*<FormInput />
        <ListItem />*!/}
        </div>
    );
    );
};

export default Test;*/
