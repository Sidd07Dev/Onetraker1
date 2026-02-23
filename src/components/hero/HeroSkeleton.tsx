import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen overflow-hidden hero-bg">
      {/* Content Skeleton */}
      <div className="relative z-20 section-container flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen text-center px-4 py-20">
        {/* Badge Skeleton */}
        <Skeleton className="h-8 w-48 rounded-full mb-6" />
        
        {/* Headline Skeleton */}
        <div className="space-y-3 mb-6 w-full max-w-4xl">
          <Skeleton className="h-10 md:h-14 w-full" />
          <Skeleton className="h-10 md:h-14 w-4/5 mx-auto" />
          <Skeleton className="h-10 md:h-14 w-3/5 mx-auto" />
        </div>
        
        {/* Subheadline Skeleton */}
        <div className="space-y-2 mb-10 w-full max-w-2xl">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5 mx-auto" />
        </div>
        
        {/* CTA Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-12 w-36 rounded-lg" />
          <Skeleton className="h-12 w-36 rounded-lg" />
        </div>
        
        {/* Trust Indicators Skeleton */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-32 hidden sm:block" />
          <Skeleton className="h-6 w-32 hidden sm:block" />
        </div>
      </div>
      
      {/* Mobile Stats Carousel Skeleton */}
      <div className="absolute bottom-24 left-0 right-0 z-10 lg:hidden">
        <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="min-w-[160px] h-24 rounded-2xl flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
