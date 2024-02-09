import homeImg from '@public/home.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className={'absolute -z-10 inset-0'}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={homeImg}
          alt={'Car factory'}
        />
      </div>
      Home page
    </div>
  );
}
