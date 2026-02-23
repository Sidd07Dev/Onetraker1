import { lazy, Suspense, useEffect, useState } from 'react';
import { HeroSkeleton } from './HeroSkeleton';

// Dynamically import the 3D scene only when needed
const WarehouseHeroScene = lazy(() => 
  import('@/components/three/WarehouseScene').then(module => ({
    default: module.WarehouseHeroScene
  }))
);

interface Props {
  onLoad?: () => void;
}

/**
 * Desktop-only 3D warehouse loader
 * Uses requestIdleCallback / setTimeout to defer heavy WebGL loading
 */
export function DesktopWarehouseLoader({ onLoad }: Props) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Defer 3D scene loading until after first paint
    const loadScene = () => {
      setShouldRender(true);
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(loadScene, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(loadScene, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && onLoad) {
      onLoad();
    }
  }, [isLoaded, onLoad]);

  if (!shouldRender) {
    return (
      <div className="absolute inset-0 z-0 hero-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 z-0 hero-bg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        </div>
      }
    >
      <div onLoad={() => setIsLoaded(true)}>
        <WarehouseHeroScene />
      </div>
    </Suspense>
  );
}
