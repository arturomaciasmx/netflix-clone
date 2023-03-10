import React from "react";

interface Props {
  label: string;
}

const NavigationItem: React.FC<Props> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavigationItem;
