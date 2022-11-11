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

      const [imgMi, showImgMi] = useState(false);
      const [imgAr, showImgAr] = useState(false);
      const [imgMe, showImgMe] = useState(false);

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
                    <h2 onMouseDown={() => showImgMi(!imgMi)}>Miralda Sandoval,
                        <div className={imgMi ? 'img showw' : 'img'}>
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
                    <h2 onMouseDown={() => showImgAr(!imgAr)}>Arturo Ramirez,
                        <div className={imgAr ? 'img showw' : 'img'}>
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
                    <h2 onMouseDown={() => showImgMe(!imgMe)}>&    Medu Moreno
                        <div className={imgMe ? 'img showw' : 'img'}>
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
            <h3>Ready to create amazing experiences together?</h3>
            <a href="mailto:info@minuta.design">ask for our portfolio</a>
        </TextContainer>
    )
}

const TextContainer = styled.section`
    margin-top: calc(120vh);
    color: white;
    position: relative;
    @media (max-width: 680px) {
        margin-top: 0vh;
    }
    .fix {
        bottom: 40%;
        @media (max-width: 680px) {
            bottom: auto;
            top: 26%;
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
        @media (max-width: 680px) {
            font-size: 30px;
            bottom: auto;
            top: 126%;
            transition: top 500ms ease-in-out;
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
            padding-bottom: 400px;
            font-size: 26px;
            line-height: 36px;
            padding-left: 30px;
            padding-right: 30px;
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
        @media (max-width: 680px) {
            font-size: 55px;
        }
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
        @media (max-width: 680px) {
            margin-bottom: 150px;
            margin-top: 100px;
        }
    }
    .who {
        @media (max-width: 680px) {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h2 {
            font-family: 'Trade Gothic Next LT Pro', sans-serif;
            font-weight: 300;
            font-size: 5vw;
            text-decoration: underline;
            display: block;
            cursor: pointer;
            padding-bottom: 20px;
            @media (max-width: 680px) {
                font-size: 32px;
            }
            .showw {
                display: block !important;
            }
            &:hover {
                .img {
                    display: block;
                }
            }
            &:nth-child(1) {
                float: left;
                margin-left: 50px;
                @media (max-width: 680px) {
                    float: none;
                    margin: 0;
                }
            }
            &:nth-child(2) {
                float: right;
                margin-right: 50px;
                @media (max-width: 680px) {
                    float: none;
                    margin: 0;
                }
            }
            &:nth-child(3) {
                text-align: center;
                padding: 130px 0 0 0;
                @media (max-width: 680px) {
                    padding-top: 0;
                }
            }
            .img {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 5;
                @media (max-width: 680px) {
                    transform: scale(0.8) translate(-62%, -62%);

                }
            }
        }
    }
`

export default Text