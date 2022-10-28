import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { StaticImage } from "gatsby-plugin-image"

const Text = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const [who, showWho] = useState(false);

      const [scroll, setScroll] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 150);
        });
      }, []); 
      

    return(
        <TextContainer id='bot'>
            <h1 className={scroll ? 'fix' : ''} >Setting the scene, below the line.</h1>
            <h2 data-aos="fade-up" data-aos-offset="250" className="subtitle">Experience-focused creative studio that believes in 1:1 interactions, committed to close the gap between  people, products, events and happenings.</h2>
            <button data-aos="fade-up" onClick={() => showWho(!who)}>So, who are we?</button>
            {who ?
                <div className="who">
                    <h2>Miralda Sandoval,
                        <div className="img">
                            <StaticImage
                                src="../../assets/images/miralda.jpg"
                                alt="A dinosaur"
                                placeholder="blurred"
                                layout="fixed"
                                width={396}
                                height={594}
                            />
                        </div>
                    </h2>
                    <h2>Arturo Ramirez,
                        <div className="img">
                            <StaticImage
                                src="../../assets/images/arturo.jpg"
                                alt="A dinosaur"
                                placeholder="blurred"
                                layout="fixed"
                                width={396}
                                height={594}
                            />
                        </div>
                    </h2>
                    <h2>&    Medu Moreno
                        <div className="img">
                            <StaticImage
                                src="../../assets/images/medu.jpg"
                                alt="A dinosaur"
                                placeholder="blurred"
                                layout="fixed"
                                width={396}
                                height={594}
                            />
                        </div>
                    </h2>
                </div>
                :
                ''
            }
            <h3 data-aos="fade-up" >Ready to create amazing experiences together?</h3>
            <a href="mailto:mail@mail.com">ask for our portfolio</a>
        </TextContainer>
    )
}

const TextContainer = styled.section`
    margin-top: calc(120vh);
    color: white;
    position: relative;
    .fix {
        bottom: 40%;
        @media (max-width: 680px) {
            bottom: 58%; 
        }
    }
    h1 {
        font-size: 9vw;
        font-family: var(--italic);
        text-align: left;
        padding-left: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        position: fixed;
        bottom: -50%;
        transition: bottom 500ms ease-in-out;
        
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

export default Text