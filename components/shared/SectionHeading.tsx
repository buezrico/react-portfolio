interface SectionHeadingProps {
  subtitle: string;
  title: string;
}

export function SectionHeading({ subtitle, title }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h5 className="text-light text-sm mb-2">{subtitle}</h5>
      <h2 className="text-primary text-3xl font-medium">{title}</h2>
    </div>
  );
}
