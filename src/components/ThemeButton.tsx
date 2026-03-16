import { motion, type HTMLMotionProps } from "framer-motion";
import { NavLink } from "react-router-dom";

type ThemeButtonProps = {
  children: React.ReactNode;
  href?: string;
  to?: string;
} & HTMLMotionProps<"button"> & any;

export default function ThemeButton({ 
  children, 
  className = "", 
  href, 
  to, 
  ...props 
}: ThemeButtonProps) {
  
  const Component = to ? motion(NavLink) : href ? motion.a : motion.button;
  const navProps = to ? { to } : href ? { href } : {};

  return (
    <Component
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px 2px var(--btn-shadow)" }}
      whileTap={{ scale: 0.98 }}
      {...navProps}
      {...props}
      className={`
        inline-flex items-center justify-center
        w-full sm:w-auto px-10 py-4 rounded-full text-white font-medium text-lg 
        cursor-pointer transition-all duration-500 bg-size-300 bg-pos-0 hover:bg-pos-100
        disabled:opacity-50 disabled:cursor-not-allowed no-underline
        ${className}
      `}
      style={{
        backgroundImage: `linear-gradient(to right, var(--btn-grad-from), var(--btn-grad-via), var(--btn-grad-to), var(--btn-grad-from))`,
        backgroundSize: '300% 100%',
        ...props.style,
      }}
    >
      {children}
    </Component>
  );
}
