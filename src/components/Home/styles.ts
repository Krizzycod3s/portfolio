import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 360px) {
    margin-left: 4rem;
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    padding-left: 2rem;
  }
`;

export const ImgHome = styled.div`
  img {
    display: none;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;

      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
  }
`;

export const HomeText = styled.div`
  h3 {
    color: var(--text-secondary);
    @media (max-width: 468px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--first-color);
    background: linear-gradient(to left, #1f1670, #9307f1, #7109e7, #00d9ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 350px) {
      font-size: 1.8rem;
    }
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  h2 {
    color: ${props => props.theme.firstColor};
    
    font-weight: 2000;
    @media (max-width: 350px) {
      font-size: 1.2rem;
      
      /* justify-content: center;
      align-items: center;
      text-indent: 5px; */
    }
    @media (min-width: 768px) {
      font-size: 1.2rem;
    
    }
    
  }

  
  .animation {
    position: absolute;
    width: 70px;
    height: 70px;
    
    @media (min-width: 468px) {
      width: 90px;
      height: 90px;
      top: 14%;
    }

    @media (min-width: 994px) {
      width: 120px;
      height: 120px;
      top: 15%;
    }

    top: 13%;
    left: 5%;
    animation: cubo 7s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }  
`


;
