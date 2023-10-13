import styled from 'styled-components';
import { palette, key } from 'styled-theme';

export const HeaderBarConatiner = styled.div`

  display: flex;
  flex-direction: column;
  gap: ${key('size.gutter.normal')};

  padding: 10px 100px;

  background: ${palette('background', 1)};
  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1);
`
export const HeaderTopRow = styled.div`
  color: black;
  opacity: 0.6;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-between
`;

export const HeaderBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const HeaderBottomRowLeft = styled.div`
  color: ${palette('text', 0)};
  font-weight: 800;
  font-size: 28px !important;
`;

export const HeaderBottomRowRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${key('size.gutter.tiny')};

  color: ${palette('text', 0)};
  font-weight: 800;
  font-size: 25px !important;
`;