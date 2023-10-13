import styled from 'styled-components';
import { palette } from 'styled-theme';

export const NavBarContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 100px;
  height: 60px;

  background: ${palette('primary', 0)};
  color: ${palette('background', 1)};
`

export const Logo = styled.img`
height: 70px;
width: 70px;
`

export const NavBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const NavBarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  width: 100%;
  
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;

  list-style-type: none;
  font-weight: 600;
`

export const NavItem = styled.li`
color: ${palette('text', 2)};
text-decoration:none;
cursor: pointer;
`
export const CartIcon = styled.img`
height: 20px;
width: 20px;

padding-top:5px;
`

export const DownArrow = styled.img`
height: 12px;
width: 12px;

padding-top:2px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`