import styled, { css } from "styled-components";
import { tagType } from ".";
import { palette } from 'styled-theme'

type TagElementProps = {
  type: tagType | string
}

export const TagElement = styled.div<TagElementProps>`

padding: 8px 20px;
margin: 0 5px;
border-radius: 18px;
text-align: center;
width: fit-content;

${(props) =>
    props?.type === 'approved' ? css`
  background: ${palette('background', 3)};
  color: ${palette('background', 1)};
  `: props?.type === 'missing' ? css`
  background: ${palette('background', 4)};
  color: ${palette('background', 1)};
  `: props?.type === 'missing-urgent' ? css`
  background: ${palette('background', 2)};
  color: ${palette('background', 1)};
  `: css`
  `
  }
`