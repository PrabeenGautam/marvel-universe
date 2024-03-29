import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Component to render a container element with optional custom styling and attributes.
 */
function ContainerElement(
  { children, className = "", ...props }: ContainerProps,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <section
      ref={ref}
      {...props}
      className={cn(
        "relative mx-auto max-w-screen-xl px-4 py-5 text-white lg:py-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

const Container = forwardRef<HTMLElement, ContainerProps>(ContainerElement);
Container.displayName = "Container";

export default Container;
