import { ButtonStyles } from "./styles";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  textColor?: string;
  tabIndex?: number;
  disabled?: boolean;
  backgroundColor?: string;
}

const Button = ({
  children,
  onClick,
  className="",
  rounded,
  fullWidth,
  textColor,
  backgroundColor,
  tabIndex,
  disabled,
  ...props
}: IButtonProps) => {
  return (
    <ButtonStyles
      className={`${disabled ? "disabled" : ""} ${className}`}
      tabIndex={0}
      style={{
        borderRadius: rounded ? "25px" : "8",
        width: fullWidth ? "100%" : "auto",
        color: textColor ? textColor : "white",
        backgroundColor: backgroundColor ? backgroundColor : "#1C575E",
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
