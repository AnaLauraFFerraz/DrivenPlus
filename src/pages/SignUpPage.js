import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";

export default function SignUpPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const { token, setAndPersistToken } = useContext(UserContext);
    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        let body = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        };
        console.log(body);

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)
            .then((res) => {
                console.log(res)
                // setAndPersistToken()
            }).catch((err) => {
                console.log("ERR", err);
                alert("Erro no login");
            });
    }

    useEffect(() => {
        if (token !== null) {
            //console.log("TOKEN: ", token);
            //setAndPersistToken()
            navigate("/");
        }
    }, [token, navigate, setAndPersistToken]);

    return (
        <Container>
            <Form onSubmit={signUp}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
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
                <button>CADASTRAR</button>
            </Form>
            <Link to="/">
                <p>Já possuí uma conta? Entre</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 0 36px 0 36px;
    box-sizing: border-box;
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