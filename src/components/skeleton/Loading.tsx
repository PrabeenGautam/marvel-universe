import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface Props {
  className?: string;
  contentClassName?: string;
}

function Loading({ className = "", contentClassName = "" }: Props) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <Loader2
        className={cn("mr-2 aspect-square w-10 animate-spin", contentClassName)}
      />
    </div>
  );
}

export default Loading;
