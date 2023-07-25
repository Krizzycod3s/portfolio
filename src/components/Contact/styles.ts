import styled from 'styled-components'

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {

    @media (max-width: 468px) {
      font-size: 1.2rem;
      padding: 0 2rem;
      // text-align: start;
    
      //  text-indent: 0%;
      
      
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
      padding: 0 40rem;
    }

    // @media (min-width: 1200px) {
    //   font-size: 1.3rem;
    //   padding: 0 10rem;
    // }
    
    text-indent: 5px; 
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .contact-content {
    border-radius: 10px;
    background-color: ${props => props.theme.border};
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 8px;
    }

    span {
      color: ${props => props.theme.textSecondary};
      &:hover {
        color: ${props => props.theme.firstColor};
      }
    }
  }
  margin-bottom: 3rem;
`

export const FormContent = styled.form`
  text-align: center;
  display: flex;
  gap: 2px;
  flex-direction: column;

  .input-group {
    position: relative;
    margin: 10px 0;
    width: 90vw;
    max-width: 650px;
  }
  .input-group textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 150px;
  }

  .input {
    width: 100%;
    border: solid 2px ${props => props.theme.border};
    border-radius: 10px;
    background: ${props => props.theme.border};
    padding: 1rem;
    font-size: 1rem;
    color: ${props => props.theme.textPrimary};
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .user-label {
    position: absolute;
    text-align: center;
    left: 15px;
    color: ${props => props.theme.white};
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus,
  input:valid,
  textarea:valid {
    outline: none;
    border: 2px solid ${props => props.theme.secondColor};
    background: ${props => props.theme.background};
  }

  .input:focus ~ label,
  input:valid ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: ${props => props.theme.background};
    padding: 0 0.8em;
    color: ${props => props.theme.firstColor};
  }
`
