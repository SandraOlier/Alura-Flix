import { styled } from 'styled-components';
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import logo from '../../assets/logo.png';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 4px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
    background-color: transparent;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-black);
        display: inline-block;
        //margin-right: 1.5rem;
        padding: 0.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: auto;
        background-color: var(--color-black);
        animation: 2s scale infinite alternate;
    }
    @keyframes scale {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
   animation-name:moverTexto;
  animation-duration: 1s  ; /* Duración de la animación */
  animation-direction: alternate; 
  animation-iteration-count: infinite; 

    @keyframes moverTexto {
  0% {
    transform: translateX(0); /* Posición inicial */
  }
  100% {
    transform: translateX(37px); /* Posición final */
  }
}

`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <IconContainer>
                <li>
                    <a href="https://www.facebook.com/sahndra.olier">
                    <FaSquareFacebook className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/olier_sand46772">
                    <FaXTwitter className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sahndraolier/">
                    <BsInstagram className='icons' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sandra-olier/">
                    <BsLinkedin className='icons' />
                    </a>
                </li>
            </IconContainer>
            <FooterText className='text'>
                Diseñado por Alura.<br />
                Desarrollado por Sandra OLier Junio 2024.<br />
                
            </FooterText>
        </StyledFooter>
    );
}

export default Footer
