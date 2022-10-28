import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Text404 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      

    return(
        <TextContainer id='bot'>
            <h1 >Página no encontrada</h1>
        </TextContainer>
    )
}

const TextContainer = styled.section`
    color: white;
    position: relative;
    h1 {
        font-size: 9vw;
        font-family: var(--italic);
        text-align: center;
        padding-left: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        position: fixed;
        transition: bottom 500ms ease-in-out;
        bottom: 60%;
        @media (max-width: 680px) {
            bottom: 58%; 
        }
    }
    
    h2.subtitle {
        font-family: 'Trade Gothic Next LT Pro', sans-serif;
        font-weight: 300;
        font-style: italic;
        font-size: 3.6vw;
        text-align: center;
        padding-left: 100px;
        padding-right: 100px;
        padding-bottom: 250px;
        @media (max-width: 680px) {
            padding-bottom: 850px;
        }
    }


    h3 {
        font-size: 8vw;
        text-align: left;
        font-family: var(--italic);
        padding-left: 30px;
        margin-top: 650px;
        line-height: 1;
        @media (max-width: 680px) {
            margin-top: 100px;
        }
    }

    button {
        font-size: 8.5vw;
        font-family: var(--italic);
        color: white;
        text-align: center;
        text-decoration: underline;
        margin: 0 auto;
        display: block;
    }
    a {
        font-size: 6.5vw;
        text-transform: uppercase;
        text-align: left;
        padding-left: 30px;
        margin-top: 0px;
        display: block;
        margin-bottom: 15px;
        &:hover {
            text-decoration: underline;
        }
    }
    .who {
        @media (max-width: 680px) {
            margin-top: 50px;
        }
        h2 {
            font-family: 'Trade Gothic Next LT Pro', sans-serif;
            font-weight: 300;
            font-size: 5vw;
            text-decoration: underline;
            display: block;
            cursor: pointer;
            &:hover {
                .img {
                    display: block !important;
                }
            }
            &:nth-child(1) {
                float: left;
                margin-left: 50px;
            }
            &:nth-child(2) {
                float: right;
                margin-right: 50px;
            }
            &:nth-child(3) {
                text-align: center;
                padding: 100px 0 0 0;
            }
            .img {
                display: none;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
`

export default Text404