import React, { useEffect, useState }  from "react";
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import logo from '../../assets/images/logo.svg'


const onImgLoad = ({ target: img }) => {
    const { offsetHeight } = img;
    console.log(offsetHeight);
  };


const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 0);
      });
    }, []); 






    return(
        <HeaderContainer>
            
            <div className="images">
                <div className="container">
                    <div className={scroll ? 'shrink logo' : 'logo'} >
                        <img onLoad={onImgLoad} src={logo} alt='Logo Minuta' />
                    </div>
                    <div className="image1 img">
                        <StaticImage
                            src="../../assets/images/loop/img_01.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={250}
                            height={248.7}
                        />
                    </div>
                    <div className="image2 img">
                        <StaticImage
                            src="../../assets/images/loop/img_02.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={284}
                            height={284}
                        />
                    </div>
                    <div className="image3 img">
                        <StaticImage
                            src="../../assets/images/loop/img_03.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={316}
                            height={399}
                        />
                    </div>
                    <div className="image4 img">
                        <StaticImage
                            src="../../assets/images/loop/img_04.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={356}
                            height={356}
                        />
                    </div>
                    <div className="image5 img">
                        <StaticImage
                            src="../../assets/images/loop/img_05.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={420}
                            height={278}
                        />
                    </div>
                    <div className="image6 img">
                        <StaticImage
                            src="../../assets/images/loop/img_06.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={323}
                            height={506}
                        />
                    </div>
                    <div className="image7 img">
                        <StaticImage
                            src="../../assets/images/loop/img_07.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={293}
                            height={437}
                        />
                    </div>
                    <div className="image8 img">
                        <StaticImage
                            src="../../assets/images/loop/img_08.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={314}
                            height={314}
                        />
                    </div>
                    <div className="image9 img">
                        <StaticImage
                            src="../../assets/images/loop/img_09.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={305}
                            height={317}
                        />
                    </div>
                    <div className="image10 img">
                        <StaticImage
                            src="../../assets/images/loop/img_10.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={258}
                            height={389.51}
                        />
                    </div>
                    <div className="image11 img">
                        <StaticImage
                            src="../../assets/images/loop/img_11.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={198}
                            height={261}
                        />
                    </div>
                    <div className="image12 img">
                        <StaticImage
                            src="../../assets/images/loop/img_12.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={460}
                            height={305}
                        />
                    </div>
                    <div className="image13 img">
                        <StaticImage
                            src="../../assets/images/loop/img_13.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={292}
                            height={410}
                        />
                    </div>
                    <div className="image14 img">
                        <StaticImage
                            src="../../assets/images/loop/img_14.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={436}
                            height={289}
                        />
                    </div>
                    <div className="image15 img">
                        <StaticImage
                            src="../../assets/images/loop/img_15.png"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={471}
                            height={216}
                        />
                    </div>
                    <div className="image16 img">
                        <StaticImage
                            src="../../assets/images/loop/img_16.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={457}
                            height={306}
                        />
                    </div>
                    <div className="image17 img">
                        <StaticImage
                            src="../../assets/images/loop/img_17.jpg"
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={351}
                            height={408}
                        />
                    </div>
                </div>
                
            </div>
            <div className={scroll ? 'change containerButton' : 'containerButton'} >
                <a  href='#bot' className="buttonScrollTop">
                    <span>Scroll</span>
                    <span>Down</span>
                    <span>to</span>
                    <span>Discover</span>
                    <span>More</span>
                </a>
                <a  href='#top' className="buttonScrollBot">
                    <span>Go</span>
                    <span>Back</span>
                    <span>Up</span>
                    <span>For</span>
                    <span>The</span>
                    <span>Fun</span>
                </a>
            </div>
            
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
.images {
    display: flex;
    position: relative;
    .container {
    }

    .img {
        position: absolute;
        z-index: 3 !important;
        animation: moveX 40s ease-in-out infinite forwards;
        overflow: hidden;
        img {
            transition: transform 350ms ease-in-out;
        }
        &:hover {
            img {
                transform: scale(1.2);
            }
        }
    }
    .image1 {
        left: 50px;
        top: 50px;
    }
    .image2 {
        top: 400px;
    }
    .image3 {
        left: 290px;
        top: 280px;
        z-index: -1 !important;
    }
    .image4 {
        left: 640px;
        top: 50px;
    }
    .image5 {
        left: 640px;
        top: 500px;
    }
    .image6 {
        left: 1000px;
        top: 50px;
    }
    .image7 {
        left: 1400px;
        top: 75px;
    }
    .image8 {
        left: 1750px;
        top: 50px;
    }
    .image9 {
        left: 1750px;
        top: 400px;
    }
    .image10 {
        left: 2150px;
        top: 50px;
    }
    .image11 {
        left: 2550px;
        top: 50px;
    }
    .image12 {
        left: 2300px;
        top: 320px;
        z-index: -1 !important;
    }
    .image13 {
        left: 2850px;
        top: 300px;
    }
    .image14 {
        left: 2950px;
        top: 50px;
    }
    .image15 {
        left: 3380px;
        top: 100px;
    }
    .image16 {
        left: 3550px;
        top: 350px;
        z-index: -1 !important;
    }
    .image17 {
        left: 3900px;
        top: 50px;
    }
}

@keyframes moveX {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(-3000px);
        }
        100% {
            transform: translateX(0px);
        }
    }
    .shrink {
        bottom: calc(100% - 430px) !important;
    }
    .logo {
        position: fixed;
        bottom: 10%;
        top: auto;
        width: 100%;
        padding: 0 50px;
        transition: all 350ms ease-in;
        z-index: 1;
    }
    .change {
        bottom: 94% !important;
    }
    .containerButton {
        z-index: 3;
        position: fixed;
        bottom: -70px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 350ms ease-in;
        .buttonScrollTop {
            position: relative;
            display: block;
            margin-bottom: 100px;
            text-align: center;
            span {
                text-transform: uppercase;
                position: relative;
                margin-right: 5px;
                margin-left: 5px;
                &:nth-child(1) {
                    left: 0;
                }
                &:nth-child(2) {
                    top: 15px;
                }
                &:nth-child(3) {
                    top: 30px;
                }
                &:nth-child(4) {
                    top: 15px;
                }
            }
        }
        .buttonScrollBot {
            position: relative;
            display: block;
            text-align: center;
            span {
                text-transform: uppercase;
                position: relative;
                margin-right: 5px;
                margin-left: 5px;
                &:nth-child(1) {
                    left: 0;
                }
                &:nth-child(2) {
                    top: -15px;
                }
                &:nth-child(3) {
                    top: -30px;
                }
                &:nth-child(4) {
                    top: -30px;
                }
                &:nth-child(5) {
                    top: -15px;
                }
            }
        }
    }
    
`

export default Header