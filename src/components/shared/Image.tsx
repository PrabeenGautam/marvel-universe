import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  webpSrc?: string;
}

function Image({ src, alt, className = "", webpSrc, ...props }: ImageProps) {
  return (
    <picture>
      {/* If webpSrc is provided, render a source element with the webpSrc */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} alt={alt} className={className} {...props} />
    </picture>
  );
}

export default Image;
