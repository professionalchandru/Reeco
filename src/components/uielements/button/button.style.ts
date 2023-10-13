import styled, { css } from 'styled-components';
import { key, palette } from 'styled-theme';

export type background = 'transparent' | 'fill' | 'custom';

type ButtonElementProps = {
  bgColor?: background;
}

export const ButtonElement = styled.button<ButtonElementProps>`
padding: 10px 20px;
border-radius: 18px;
border: 1.5px solid ${palette('primary', 0)};
font-weight: 600;
font-family: Inter;
cursor: pointer;

${(props) =>
    props.bgColor === 'transparent' ? css`
    background: ${palette('background', 1)};
    color: ${palette('primary', 0)};
  `: props.bgColor === 'fill' ? css`
    background: ${palette('primary', 0)};
    color: ${palette('background', 0)};
    ` : css`
    font-size: ${key('size.xxlFont.normal')};
    `
  }
`