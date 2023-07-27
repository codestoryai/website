type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} container mx-auto px-5`}>{children}</div>
  );
};

export default Container;
