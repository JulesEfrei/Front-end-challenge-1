import React from "react";
import "./styles/button.scss";

interface Props {
  value?: {
    basic: string;
    span: string;
  };
  link?: string;
}

const Button: React.FC<Props> = ({
  value = { basic: "Get started", span: "- it's free" },
  link = "#",
}) => {
  return (
    <div className="atom-button">
      <a href={link}>
        {value.basic} <span>{value.span}</span>{" "}
      </a>
    </div>
  );
};

export default Button;
