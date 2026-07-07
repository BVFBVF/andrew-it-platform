export function PageHeader({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-2 mb-6">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>
      <p className="text-neutral-400 text-lg">
        {description}
      </p>
    </header>
  );
}
