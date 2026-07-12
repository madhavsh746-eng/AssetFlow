import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
