interface PageHeaderProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className="max-w-xl space-y-2">
      <h1 className="text-2xl leading-display font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h1>
      <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </header>
  );
}
