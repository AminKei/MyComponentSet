import * as React from "react";

interface InputProps {
  children?: React.ReactNode;
  bgcolor?: string;
  color?: string;
  radius?: string;
  margin?: string;
  padding?: string;
  fontSize?: number;
  onChange?: () => void;
  value?: number;
  className?: string;
  width?: number;
  height?: number;
  border?: string;
  fontFamily?: string;
  cursor?: string;
  placholder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    bgcolor,
    color,
    fontSize,
    margin,
    padding,
    radius,
    onChange,
    className,
    height,
    width,
    border,
    fontFamily,
    cursor,
    placholder,
    value
  } = props;

  return (
    <input
      style={{
        width: width || 300,
        height: height || 40,
        backgroundColor: bgcolor || "transparent",
        color: color || "black",
        borderRadius: radius,
        border: border || "black solid 1px",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        outline: "none",
        fontSize: fontSize,
        margin: margin,
        padding: padding || "10px",
        fontFamily: fontFamily,
        cursor: cursor || "pointer",
      }}
      onChange={onChange}
      className={className}
      placeholder={placholder}
      value={value}
    />
  );
};
