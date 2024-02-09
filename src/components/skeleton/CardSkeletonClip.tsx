import { Skeleton } from "../ui/skeleton";

function CardSkeletonClip() {
  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="clip-border aspect-2/3" />
      ))}
    </div>
  );
}

export default CardSkeletonClip;
