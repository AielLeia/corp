import reliabilityImg from '@public/reliability.jpg';

import Hero from '@/components/Hero';

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="Welding"
      title="Super high reliability hosting"
    />
  );
}
