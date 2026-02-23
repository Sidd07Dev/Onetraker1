import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroLottieVisual() {
  return (
    <div className="w-full aspect-square">
      <DotLottieReact
        src="/hero.lottie"
        loop
        autoplay
      />
    </div>
  );
}
