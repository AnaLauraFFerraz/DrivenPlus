import React from "react";
import styled from "styled-components"

export default function PopUp({ setPopUp, subscribe, subData }) {

    return (
        <DarkScreen>
            <iconify-icon
                onClick={() => setPopUp(false)}
                icon="fa-solid:window-close"></iconify-icon>
            <PopUpContainer>
                <p>
                    {`Tem certeza que deseja assinar o plano ${subData.name} (R$ ${subData.price})?`}
                </p>
                <div>
                    <button
                        className="noButton"
                        onClick={() => setPopUp(false)}
                    >Não</button>
                    <button onClick={() => subscribe()}>Sim</button>
                </div>
            </PopUpContainer>
        </DarkScreen>
    )
}

const DarkScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
    iconify-icon {
        position: fixed;
        top: 25px;
        right: 20px;
        font-size: 28px;
    }
`
const PopUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 248px;
    height: 210px;
    justify-content: space-between;
    z-index: 2;
    padding: 33px 22px 11px 22px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 12px;
    p {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
    }
    div {
        display: flex;
        width: 100%;
        height: 52px;
        justify-content: space-between;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 95px;
            height: 100%;
            background: #FF4791;
            border-radius: 8px;
            border: none;
            &.noButton {
                background: #CECECE;
            }
        }
    }

`