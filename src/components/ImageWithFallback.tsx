// components/ImageWithFallback.tsx
import React, { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "my-4 mx-auto w-32 h-32",
  fallbackClassName = "my-4 italic text-neon-pink-dark text-center",
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className={fallbackClassName}>{alt}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
