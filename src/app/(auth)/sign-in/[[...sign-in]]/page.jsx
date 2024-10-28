import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import { background } from '@/assets';
export default function Page() {
  return (
    <div className='grid gird-cols-1 md:grid-cols-2'>
      <div>
        <Image src={background} width={500}   className='w-full object-contain h-screen'/>
      </div>
      <div className='flex justify-center items-center'>
        <SignIn />
      </div>
    </div>
  );
}
