import styled, { keyframes } from "styled-components";
import { palette } from 'styled-theme';

const animatetop = keyframes`
from {top:0px; opacity:0;}
to {top:50%; opacity:1;}
`;

export const BackgroundOverLay = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
top:0;
bottom: 0;
right: 0;
left: 0;
z-index: 10;
width: 100%;
height: 100%;
overflow: hidden;
`

export const Loading = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
color: ${palette('background', 1)};
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  width: 450px;
  height: 180px;

  background: ${palette('background', 1)};
  box-shadow: 0 0 1px 2px #999;

  -webkit-animation-name: ${animatetop};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animatetop};
  animation-duration: 0.4s;

  border: 1px solid ${palette('border', 0)};
  border-radius: 5px;
`
export const ModalHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 30px 25px 20px 25px;
`

export const ModalBodyRow = styled.div`
  padding: 0px 25px;
`

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 30px;
  cursor: pointer;

  padding: 40px 40px 20px 25px;
`
