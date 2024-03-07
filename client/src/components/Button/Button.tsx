interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => any;
}

const Button = ({ handleClick, children }: ButtonProps) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
