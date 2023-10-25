import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  bgcolor?: string;
  color?: string;
  radius?: string;
  margin?: string;
  padding?: string;
  fontSize?: number;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  border?: string;
  fontFamily?: string;
  cursor?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    bgcolor,
    color,
    fontSize,
    margin,
    padding,
    radius,
    onClick,
    className,
    height,
    width,
    border,
    fontFamily,
    cursor
  } = props;

  return (
    <button
      style={{
        width: width || 200,
        height: height,
        backgroundColor: bgcolor || "black",
        color: color || "#fff",
        borderRadius: radius,
        border: border || "none",
        fontSize: fontSize,
        margin: margin,
        padding: padding || "20px",
        fontFamily: fontFamily,
        cursor:cursor || "pointer"
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
