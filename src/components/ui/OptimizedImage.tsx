import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  showSkeleton?: boolean;
}

const aspectRatioClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
};

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  aspectRatio,
  showSkeleton = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', aspectRatio && aspectRatioClasses[aspectRatio], className)}>
      {isLoading && showSkeleton && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        {...props}
      />
    </div>
  );
}
