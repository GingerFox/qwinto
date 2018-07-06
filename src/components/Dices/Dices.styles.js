import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto 25px;
  border: 2px solid silver;
  background-color: white;
  text-transform: uppercase;
  padding: 10px;
`;

export const Dice = styled.div`
  display: inline-block;
  margin-right: 25px;
`;

export const DiceSpan = styled.span`
  background: ${props => props.color};
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 15px;
  font-weight: bold;
`;
