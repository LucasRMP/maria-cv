export const Section: React.FC<
  React.PropsWithChildren<{ breakLayout?: boolean; [key: string]: any }>
> = ({ children, breakLayout = false, className = '', ...props }) => {
  const paddingClasses = breakLayout ? '' : 'px-36 py-10';

  return (
    <section
      className={`flex flex-col items-center justify-center ${paddingClasses}`}
      {...props}
    >
      {children}
    </section>
  );
};
