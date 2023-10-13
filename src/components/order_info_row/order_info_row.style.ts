import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

type OrderInfoItemProps = {
  isLast?: boolean;
}

export const OrderInfoRowConatiner = styled.div`

  display: grid;
  grid-template-columns: repeat(6, 1.5fr);
  
  padding: 15px 5px;

  background: ${palette('background', 1)};
  border: 2px solid ${palette('border', 0)};
  border-radius: 10px;
`

export const OrderInfoItem = styled.div<OrderInfoItemProps>`
  display: flex;
  flex-direction: column;
  gap: 7px;

  padding: 15px 40px;

  background: ${palette('background', 1)};
  ${(props) =>
    !props?.isLast ? css`
    border-right: 2px solid ${palette('border', 0)};
    `: css`
      
    `
  }
`