import scaleImg from '@public/scale.jpg';

import Hero from '@/components/Hero';

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel factory"
      title="Scale your app infinity"
    />
  );
}
