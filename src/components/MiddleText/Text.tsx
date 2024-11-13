type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return (
    <h2 className="text-2xl font-semibold text-center text-stone-900 m-4">
      {children}
    </h2>
  );
}
