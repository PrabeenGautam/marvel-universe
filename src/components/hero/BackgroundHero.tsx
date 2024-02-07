import { cn } from "@/lib/utils";
import styled from "styled-components";

interface BackgroundHeroProps {
  url?: string;
  alt?: string;
  opacity?: number;
  scale?: number;
  position?: "center" | "top" | "bottom" | "left" | "right";
}

function BackgroundHero({
  alt,
  url,
  opacity = 0.5,
  scale = 1,
  position = "center",
}: BackgroundHeroProps) {
  const BackgroundContainer = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    &:after {
      content: "";
      inset: 0;
      background: rgba(21, 21, 21, ${opacity});
      position: absolute;
    }
  `;

  return (
    <BackgroundContainer>
      {url && (
        <img
          style={{ transform: `scale(${scale})` }}
          src={url}
          alt={alt ?? "background-banner"}
          className={cn("h-full w-full object-cover", {
            "object-top": position === "top",
            "object-bottom": position === "bottom",
            "object-left": position === "left",
            "object-right": position === "right",
            "object-center": position === "center",
          })}
        />
      )}
    </BackgroundContainer>
  );
}

export default BackgroundHero;
