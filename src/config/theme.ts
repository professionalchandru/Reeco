export type Palette = {
  primary: string[];
  secondary: string[];
  text: string[];
  background: string[];
  border: string[];
}

export type ThemeSize = {
  gutter: {
    tiny: string;
    normal: string;
  },
  xlFont: {
    tiny: string;
    normal: string;
  },
  xxlFont: {
    tiny: string;
    normal: string;
    small: string;
  }
}

export type Theme = {
  palette: Palette;
  size: ThemeSize;
}

export const LightTheme: Theme = {
  palette: {
    primary: ['#1e633f'],
    secondary: [],
    text: ['#4d5059', '#a09e9e', '#97b9a9'],
    background: ['#fbfbfb', '#fff', '#db2114', '#3dca72', '#f66d44'],
    border: ['#f1f1f1']
  },
  size: {
    gutter: {
      normal: '30px',
      tiny: '20px'
    },
    xlFont: {
      normal: '16px',
      tiny: '14px'
    },
    xxlFont: {
      normal: '18px',
      tiny: '16px',
      small: '15px'

      // normal: '16px',
      // tiny: '14px',
      // small: '13px'
    }
  }
}

export default LightTheme