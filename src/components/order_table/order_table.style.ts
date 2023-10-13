import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

type OrderInfoItemProps = {
  isLast?: boolean;
}

type TableColumn = {
  width?: string;
} & lastRow;

type lastRow = {
  isLast?: boolean;
}

export const OrderTableOuterConatiner = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding: 15px 5px;

  background: ${palette('background', 1)};
  border: 2px solid ${palette('border', 0)};
  border-radius: 10px;
`

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 40px;

`

export const SearchBar = styled.input<OrderInfoItemProps>`
  padding: 10px 15px;
  width: 400px;

  background: ${palette('background', 1)};
  border: 2px solid ${palette('border', 0)};
  border-radius: 18px;

  &:focus {
    border: 2px solid ${palette('primary', 0)};
    outline: none;
  }

  &::after{
    content: '*';
    position: absolute;
    top: 10px;
    right: 40px;
  }
`

export const RowRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`
export const PrintIcon = styled.img`
  height: 30px;
  width: 25px;
  cursor: pointer;
`

export const Table = styled.table`
  padding: 10px 40px;
  width: 95%;
  margin: auto;
  
  border-collapse: collapse;
  border-spacing: 20px;
`

export const Thead = styled.thead`
  width: 100%;
  border: 2px solid ${palette('border', 0)};
`

export const TableHead = styled.th<TableColumn>`
padding: 5px;
text-align: start;
${(props) =>
    props?.width ? css`
    width: ${props?.width}
  `: css``
  }
`

export const TableRow = styled.tr<lastRow>`
${(props) =>
    !props?.isLast ? css`
  border-bottom: 2px solid ${palette('border', 0)};
`: css``
  }
`

export const TableData = styled.td<TableColumn>`
padding: 15px 5px;

${(props) =>
    props?.width ? css`
  width: ${props?.width}
`: css``
  }

  ${(props) =>
    props?.isLast ? css`
  background: #f9f9f9
`: css``
  }
`

export const ProductImg = styled.img`
width: 50px;
height: 50px;
`

export const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const ActionImg = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
`
export const ActionImgClose = styled.img`
width: 12px;
height: 12px;
cursor: pointer;
`
export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`