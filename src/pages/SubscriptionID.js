import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import driven1 from "../assets/Logo.png"

export default function SubscriptionID() {
    const navigate = useNavigate()
    const { id } = useParams();
    const { token } = useContext(UserContext);
    const [subData , setSubData] = useState()

    const config = { headers: { Authorization: `Bearer ${token}` } };
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)
            .then(res => {
                setSubData(res.data)
            })
    })

    return (
        <Container>
            <Header>
                <img src={driven1} alt="Driven Plus" />
                <h1>Driven Plus</h1>
            </Header>
            <h2>Benefícios:</h2>
            <p>Brindes exclusivos</p>
            <p>Materiais de bônus de web</p>
            <h2>Preço</h2>
            <p>R$ 39,99 cobrados mensalmente</p>
            <Form>
                <input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    required
                />
                <input
                    type="text"
                    placeholder="Dígitos do cartão"
                    required
                />
                <div>
                    <input
                        type="text"
                        placeholder="Código de segurança"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Validade"
                        required
                    />
                </div>
                <button type="submit">
                    {"ASSINAR"}
                </button>
            </Form>
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
`
const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 87px;
    margin-bottom: 10px;
    img {
        width: 140px;
        margin-bottom: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        min-width: 300px;
        height: 52px;
        border-radius: 8px;
        background: #FFFFFF;
        margin-bottom: 16px;
        padding: 14px;
        box-sizing: border-box;
        border: none;
        &::placeholder{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #7E7E7E;
        }
    }
    button {
        min-width: 300px;
        height: 52px;
        left: 38px;
        top: 427px;
        background: #FF4791;
        border: none;
        border-radius: 8px;
        margin-top: 8px;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
        }
    }
    div > input {
        width: 145px;
    }
`
