import styled, { css } from 'styled-components';
import { key, palette } from 'styled-theme';

export type fontSize = 'normal' | 'tiny' | 'small';
export type color = 'text-normal' | 'text-strong' | 'text-primary'

type TextElementProps = {
  size?: fontSize;
  color?: color;
  fontWeight?: string;
}

export const TextElement = styled.p<TextElementProps>`
${(props) =>
    props.size === 'normal' ? css`
    font-size: ${key('size.xxlFont.normal')};
  `: props.size === 'tiny' ? css`
    font-size: ${key('size.xxlFont.tiny')};
    ` : props.size === 'small' ? css`
    font-size: ${key('size.xxlFont.small')};
    ` :
      css`
    font-size: ${key('size.xxlFont.normal')};
    `
  }

  ${(props) =>
    props.color === 'text-normal' ? css`
    color: ${palette("text", 1)};
  `: props.color === 'text-strong' ? css`
  color: ${palette("text", 0)};
`: props.color === 'text-primary' ? css`
color: ${palette("primary", 0)};
`: css``
  }

  ${(props) =>
    props.fontWeight && css`
    font-weight: ${props.fontWeight};
  `
  }
`