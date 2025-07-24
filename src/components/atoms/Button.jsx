import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",  
    accent: "btn-accent",
    outline: "bg-transparent hover:bg-primary-50 text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-500 transition-all duration-300 transform hover:scale-105"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;