import React, {useState} from 'react';
import "../styles/Main.css"
import { Container, Row, Col } from "react-bootstrap";
import ColOne from "../components/UI/colOne/ColOne"
import RowOne from "../components/UI/RowOne/RowOne";

const Main = () => {
    const [home, setHome] = useState([
        {id: 1, title: "Дом 1"},
        {id: 2, title: "Дом 2"},
        {id: 3, title: "Дом 3"},
    ])

    const [homeOneSections, setHomeOneSections] = useState([
        {id: 1, title: "Секция №1"},
        {id: 2, title: "Секция №1"},
        {id: 3, title: "Секция №1"},
    ])

    const [homeTwoSections, setHomeTwoSections] = useState([
        {id: 1, title: "Секция №2"},
        {id: 2, title: "Секция №2"},
        {id: 3, title: "Секция №2"},
    ])

    const alertNewMessage = (obj) => {

        /*if (obj.id === 1) {
            return homeOneSections
        }*/

        console.log(obj.title)
        return obj
    }


    return (

        <Container>
            <RowOne>
                <ColOne>
                    <h6>Дома</h6>
                    {home.map((data) => (
                        <div onClick={() => alertNewMessage({data})} key={data.id} className="testOne">
                            {data.title}
                        </div>
                    ))}
                </ColOne>
                <ColOne>

                </ColOne>
                <ColOne>
                    {/*{
                        newSec.map((data) => (
                            <div key={data.id} className="testOne">
                                {data.title}
                            </div>
                        ))
                    }*/}
                </ColOne>
                <ColOne>
                    sadfdsf
                </ColOne>
                <ColOne>
                    sadfdsf
                </ColOne>
            </RowOne>
        </Container>

    );
};

export default Main;