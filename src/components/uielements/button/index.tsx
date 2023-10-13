import { ButtonElement, background } from "./button.style";

type ButtonProps = {
  bgColor: background;
  onClick?: () => void;
  // fontColor: string;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { bgColor, children, onClick } = props;
  return (
    <ButtonElement bgColor={bgColor} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

export default Button;
