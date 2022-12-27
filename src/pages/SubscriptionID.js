import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import PopUp from "../components/PopUp";

export default function SubscriptionID() {
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [subData, setSubData] = useState({});
    const [perks, setPerks] = useState([]);
    const [popUp, setPopUp] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const { token } = useContext(UserContext);

    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)
            .then((res) => {
                setSubData(res.data);
                setPerks(res.data.perks);
            })
    }, [id, token])

    function subscribe(e) {
        e.preventDefault();
        let body = {
            membershipId: id,
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: securityNumber,
            expirationDate: expirationDate
        };
        console.log("here")
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, config)
            .then(navigate("/home", { state: { subData: subData } }))
            .catch((err) => alert("Erro no login"));
    }

    return (
        <Container>
            <iconify-icon icon="fa-solid:arrow-left" onClick={() => {
                navigate("/subscriptions")
            }} ></iconify-icon>
            <Header>
                <img src={subData.image} alt={subData.name} />
                <h1>{subData.name}</h1>
            </Header>
            <SubscriptionInfo>
                <div>
                    <iconify-icon className="task" icon="fluent:clipboard-task-list-rtl-20-regular"></iconify-icon>
                    <h2>Benefícios: </h2>
                </div>
                {
                    perks.map((perk, i) => {
                        return (
                            <p key={perk.title}>{`${i + 1}. ${perk.title}`}</p>
                        )
                    })
                }
                <div>
                    <iconify-icon icon="fa-solid:money-bill-wave"></iconify-icon>
                    <h2>Preço: </h2>
                </div>
                <p>{`R$ ${subData.price} cobrados mensalmente`}</p>
            </SubscriptionInfo>

            <Form onSubmit={() => subscribe()}>
                <input
                    type="text"
                    name="cardName"
                    placeholder="Nome impresso no cartão"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Dígitos do cartão"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
                <div>
                    <input
                        type="text"
                        name="securityNumber"
                        placeholder="Código de segurança"
                        value={securityNumber}
                        onChange={(e) => setSecurityNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="expirationDate"
                        placeholder="Validade"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">
                    {"ASSINAR"}
                </button>
            </Form>
            {popUp && (
                <PopUp
                    setPopUp={setPopUp}
                    subscribe={subscribe}
                    subData={subData}
                />
            )}
        </Container >
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
    iconify-icon {
        position: fixed;
        top: 22px;
        left: 22px;
        font-size: 28px;
        color: #FFFFFF;
    }
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
const SubscriptionInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    div {
        display: flex;
        margin-top: 10px;
        iconify-icon {
            position: static;
            font-size: 15px;
            color: #FF4791;
        }
        h2 {
            margin-left: 10px;
            margin-bottom: 7px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    }
    p {
        margin-bottom: 4px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    justify-content: center;
    margin: 34px 0;
    box-sizing: border-box;
    input {
        width: 100%;
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
    div {
        display: flex;
        flex-wrap: nowrap;
        width: 300px;
        width: 100%;
        justify-content: space-between;
        height: 52px;
        margin-bottom: 16px;
        input {
            width: 145px;
            border-radius: 8px;
            background: #FFFFFF;
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
`
