type Props = {
    color: string;
    children: React.ReactNode;
};

export default function Saudacao({color,children}: Props) {
  return (
    <div style={{color: color}}>{children}</div>
  );
};