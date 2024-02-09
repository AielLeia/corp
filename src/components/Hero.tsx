import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export default function Hero({ imgAlt, imgData, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className={'absolute -z-10 inset-0'}>
        <Image fill style={{ objectFit: 'cover' }} src={imgData} alt={imgAlt} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>

      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
