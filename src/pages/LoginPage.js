import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import logo from "../assets/Logo.png"

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser, token, setAndPersistToken } = useContext(UserContext);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        let body = {
            email: email,
            password: password
        };

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)
            .then((res) => {
                setUser(res.data)
                setAndPersistToken(res.data.token);
            }).catch((err) => {
                console.log("ERR", err);
                alert("Erro no login");
            });
    }

    useEffect(() => {
        if (token) {
            user.membership ? navigate("/home")
                : navigate("/subscriptions")
        }
    }, [token, user, navigate]);

    return (
        <>
            <Container>
                <img src={logo} alt="Driven Plus" />
                <Form onSubmit={login}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button>ENTRAR</button>
                </Form>
                <Link to="/sign-up">
                    <p>Não possui uma conta? Cadastre-se</p>
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #000000;
    img {
        width: 300px;
        margin-bottom: 100px;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-top: 24px;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 300px;
        height: 52px;
        border-radius: 8px;
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
        width: 300px;
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
`