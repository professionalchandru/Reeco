import { TextElement, color, fontSize } from "./text.style";

type TextProps = {
  size?: fontSize;
  children: React.ReactNode;
  color?: color;
  fontWeight?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  onClick?: () => void;
};

const Text = (props: TextProps) => {
  const { size, children, color, fontWeight, style, onClick } = props;
  return (
    <TextElement
      style={style}
      color={color}
      fontWeight={fontWeight}
      size={size}
      onClick={onClick}
    >
      {children}
    </TextElement>
  );
};

export default Text;
