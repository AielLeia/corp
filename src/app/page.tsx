import homeImg from '@public/home.jpg';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="Car factory"
      title="Profesionnal cloud hosting"
    />
  );
}
