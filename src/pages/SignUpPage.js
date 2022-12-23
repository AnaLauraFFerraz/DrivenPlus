import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import { UserContext } from "../context/UserContext";

export default function SignUpPage() {

    return (
        <Container>
            <Form>
                <input
                    type="text"
                    placeholder="Nome"
                    required
                />
                <input
                    type="text"
                    placeholder="CPF"
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                />
                <button>
                    {"CADASTRAR"}
                </button>
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
    background: #000000;
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