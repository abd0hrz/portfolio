import React from "react";

interface Props {
  name: string;
  icon?: React.ReactNode;
}

const Title: React.FC<Props> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 text-3xl font-bold text-center justify-center mb-6">
      {icon && <span>{icon}</span>}
      <span className="capitalize">{name}</span>
    </div>
  );
};

export default Title;
