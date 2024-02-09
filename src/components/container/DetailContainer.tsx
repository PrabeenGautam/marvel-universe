import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  to?: string;
}

function DetailContainer({ children, to }: Props) {
  if (to) {
    return (
      <Link className="group cursor-pointer" to={to}>
        {children}
      </Link>
    );
  }

  return <div className="group cursor-pointer">{children}</div>;
}

export default DetailContainer;
