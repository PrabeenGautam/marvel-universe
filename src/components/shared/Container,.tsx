import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <section
      className={cn(
        "relative mx-auto max-w-screen-xl px-4 py-5 lg:py-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default Container;
