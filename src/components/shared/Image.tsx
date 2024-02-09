import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

interface ImageProps extends LazyLoadImageProps {
  webpSrc?: string;
}

function Image({ src, alt, className = "", webpSrc, ...props }: ImageProps) {
  return (
    <picture>
      {/* If webpSrc is provided, render a source element with the webpSrc */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <LazyLoadImage src={src} alt={alt} className={className} {...props} />
    </picture>
  );
}

export default Image;
