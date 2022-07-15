import { ButtonStyles } from "./styles";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  textColor?: string;
  tabIndex?: number;
  height?: number;
  disabled?: boolean;
  backgroundColor?: string;
}

const Button = ({
  children,
  onClick,
  className = "",
  rounded,
  fullWidth,
  textColor,
  backgroundColor,
  tabIndex,
  disabled,
  height,
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
        height: height ? height : "auto",
        backgroundColor: backgroundColor ? backgroundColor : "#1E88E5",
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
