import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px 10px;
`;

export const StyledLink = styled(Link)`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #c2fbd7;
  box-shadow: rgba(0, 44, 97, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #07ac07;

  display: inherit;

  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 30px;
  width: 300px;

  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  :hover {
    background-color: #c2fbd7;
    transform: translateY(-2px);
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border: 2px solid #07ac07;
  box-sizing: border-box;
  color: #07ac07;
  font-size: 12px;
  font-weight: 600;
  height: 30px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 500px;
  border-radius: 5px;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  :focus {
    color: #171e29;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #c2fbd7;
  border: 2px solid #07ac07;

  color: #07ac07;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  height: 30px;

  line-height: 24px;
  min-width: 80px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;

  touch-action: manipulation;

  :focus,
  :hover {
    border-color: #057205;
    color: #057205;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 20px;

  -webkit-box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);
  -moz-box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);
  box-shadow: 0px 6px 5px 0px rgba(184, 178, 184, 1);
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 40px;
`;

export const BackLink = styled(Link)`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;

  height: 35px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const ContainerAdditionalInfo = styled.div`
  padding: 20px;
`;
export const AdditionalLabel = styled.h2`
  margin-bottom: 20px;
`;
export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AdditionalLink = styled(Link)`
  text-decoration: underline;
  :hover,
  :focus {
    color: green;
  }
`;
