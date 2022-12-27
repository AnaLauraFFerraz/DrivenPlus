import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";

export default function Home() {

    const navigate = useNavigate();
    const location = useLocation();
    const { token, user } = useContext(UserContext);
    const subscription = location.state.subData;

    const config = { headers: { Authorization: `Bearer ${token}` } };

    function cancelSub() {
        localStorage.removeItem("nome");
        axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)
            .then(() => navigate("/subscriptions"))
    }

    return (
        <Container>
            <img src={subscription.image} alt={subscription.name} />
            <iconify-icon
                icon="fa-solid:user-circle"
                onClick={() => navigate(`/users/${user.id}`)} ></iconify-icon>
            <h2>{`Olá, ${user.name}`}</h2>
            {
                subscription.perks.map((perk) => {
                    return (
                        <Button key={perk.id} onClick={() => window.open(perk.link)}>{perk.title}</Button>
                    )
                })
            }
            <footer>
                <Button onClick={() => navigate("/subscriptions")}>Mudar plano</Button>
                <Button className="cancelButton" onClick={() => cancelSub()}>Cancelar plano</Button>
            </footer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0 36px 0 36px;
    box-sizing: border-box;
    img {
        position: fixed;
        top: 32px;
        left: 38px;
        width: 75px;
    }
    iconify-icon {
        position: fixed;
        top: 22px;
        right: 22px;
        font-size: 34px;
        color: #FFFFFF;
    }
    h2 {
        margin: 95px 0 53px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
    footer {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        position: fixed;
        bottom: 4px;
        left: 0;
        padding: 0 36px 0 36px;
        box-sizing: border-box;
    }
`
const Button = styled.button`
    min-width: 300px;
    height: 52px;
    left: 38px;
    top: 427px;
    background: #FF4791;
    border: none;
    border-radius: 8px;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    &.cancelButton {
        background: #FF4747;
    }
    &:hover{
        cursor: pointer;
    }
`