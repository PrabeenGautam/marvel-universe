import { PropsWithChildren } from "react";

/**
 * Component to render a grid container with specified column counts for different screen sizes.
 */
function GridContainer({ children }: PropsWithChildren) {
  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  );
}

export default GridContainer;
