import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";

export default function Subscriptions() {
    const [subs, setSubs] = useState([]);
    const [selectedSub, setSelectedSub] = useState();

    const { token } = useContext(UserContext);
    const navigate = useNavigate()

    const config = { headers: { Authorization: `Bearer ${token}` } };
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            .then(res => {
                setSubs(res.data)
            })
    })

    function handleClick(sub) {
        setSelectedSub(sub);
        console.log(selectedSub);
        navigate(`subscription/${sub.id}`);
    }

    return (
        <Container>
            <h1>Escolha seu Plano</h1>
            {subs.map((sub) => {
                return (
                    <Card onClick={() => handleClick(sub)}>
                        <img src={sub.image} alt="Subscription" />
                        <p>{sub.price}</p>
                    </Card>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        margin: 29px;
    }
`
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 290px;
    height: 180px;
    padding: 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    img {
        width: 140px;
    }
    p {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
`