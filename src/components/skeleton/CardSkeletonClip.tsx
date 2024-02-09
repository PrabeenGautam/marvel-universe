import { Skeleton } from "../ui/skeleton";

function CardSkeletonClip() {
  return (
    <div className="grid gap-x-2 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <CardSkeletonBase />
    </div>
  );
}

/**
 * Base skeleton for card component with aspect ratio 2/3
 */
export function CardSkeletonBase() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="aspect-2/3" />
      ))}
    </>
  );
}

export default CardSkeletonClip;
