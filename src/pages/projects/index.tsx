import styled from "styled-components";
import { ButtonAlt } from "../../styles/styles";
import { ArrowLeft } from "phosphor-react";
import Link from "next/link";

const Styles404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 5rem;
  }
  
  img {
    width: 15rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: 20rem;
    }
    
    @media (min-width: 1100px) {
      width: 40rem;
    }
  }

`

const Content = styled.div`
  span {
    color: ${ props => props.theme.textSecondary};
    margin-bottom: 1rem;
    font-size: small;

    @media (min-width: 468px) {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

  }

  h1 {
    color: ${ props => props.theme.firstColor};
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1100px) {
      font-size: 3rem;
    }
  }
  
`

export default function Projects() {
  return (
      <Styles404>
        <img src="/vectors/404.svg" alt="404" />

        <Content>
          <span>Hey! it seems you are lost :(</span>
          <h1> 404 <br />Page not found</h1>
          <Link href={"/"}>
            <ButtonAlt>
              <ArrowLeft weight="bold" size={18} /> 
              Back
            </ButtonAlt>
          </Link>
        </Content>
      </Styles404>
  )
}