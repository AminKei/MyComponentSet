import React from "react";

interface CardProps {
  width?: number;
  height?: number;
  padding?: string;
  margin?: string;
  children: React.ReactNode;
  bgcolor?: string;
  color?: string;
  radius?: string;
  fontSize?: number;
  onClick?: () => void;
  className?: string;
  border?: string;
  fontFamily?: string;
  cursor?: string;
  boxShadow?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    bgcolor,
    border,
    boxShadow,
    className,
    color,
    cursor,
    fontFamily,
    fontSize,
    height,
    margin,
    onClick,
    padding,
    radius,
    width,
  } = props;

  return (
    <div
      style={{
        backgroundColor: bgcolor,
        border: border,
        fontFamily: fontFamily,
        fontSize: fontSize,
        height: height || 500,
        width: width ,
        margin: margin,
        padding: padding || 20,
        borderRadius: radius,
        cursor: cursor,
        boxShadow: boxShadow || "1px 1px 10px 1px #eeee",
        color: color,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
