import React from "react";

interface TypographyProps {
  fontSize?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
  fontFamily?: string;
  children?: React.ReactNode;
  textAlign?: string;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    color,
    fontFamily,
    fontSize,
    onClick,
    textAlign,
  } = props;

  return (
    <text
      style={{
        color: color,
        fontFamily: fontFamily,
        fontSize: fontSize,
        // textAlign:textAlign,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </text>
  );
};
