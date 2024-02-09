import { cn } from "@/lib/utils";
import styled from "styled-components";

interface BackgroundHeroProps {
  url?: string;
  alt?: string;
  opacity?: number;
  scale?: number;
  position?: "center" | "top" | "bottom" | "left" | "right";
}

interface Props {
  opacity?: number;
}

/**
 * Container for the background image with overlay.
 */
const BackgroundContainer = styled.div<Props>`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  &:after {
    content: "";
    inset: 0;
    background: rgba(21, 21, 21, ${(props) => props.opacity ?? 0.5});
    position: absolute;
  }
`;

/**
 * Component for displaying a background hero image with overlay.
 */
function BackgroundHero({
  alt,
  url,
  opacity = 0.5,
  scale = 1,
  position = "center",
}: BackgroundHeroProps) {
  return (
    <BackgroundContainer opacity={opacity}>
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
