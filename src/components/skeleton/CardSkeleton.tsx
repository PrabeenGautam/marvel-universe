import GridContainer from "../container/GridContainer";
import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    <GridContainer>
      {/* Skeleton for the character hero */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={`skeleton-card-${index}`} className="aspect-[1/1.537]" />
      ))}
    </GridContainer>
  );
}

export default CardSkeleton;
