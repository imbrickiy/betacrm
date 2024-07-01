import { cn } from '@/lib/utils';
import Image from 'next/image';
import ActiveElement from './ActiveElement';
const SidebarFull = ({ nav }: any) => {
  const active = false;
  return (
    <div className='w-[242px] border-r-2'>
      <div className='flex h-16 flex-col'>
        <div className='flex h-[76px] w-full items-center justify-start bg-white'>
          <Image
            src='assets/Logo.svg'
            width={30}
            height={30}
            alt='logo'
            className='mb-[20px] ml-[29px] mt-[26px] h-[30px] w-[30px]'
            priority
          />
          <p className='ml-[25px] h-[15px] w-[91px] font-extrabold text-[#5E81F4]'>
            betaCRM
          </p>
        </div>

        <div className='mb-16 mt-[82px]'>
          {nav.map((item: any, index: number) => (
            <div
              className='flex flex-col items-start justify-center'
              key={index}
            >
              <div className='relative flex h-[64px] w-[83px]'>
                <button className='m-auto flex size-12 items-center justify-center rounded bg-primaryLight/10 hover:bg-primaryLight/30'>
                  <i
                    className={cn(
                      'text-center text-[22px] font-normal not-italic leading-[22px] text-[#5E81F4]',
                      item.icon
                    )}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='fixed bottom-[25px] flex h-10 w-10 items-center justify-center'>
          <Image
            src='assets/Imguser.svg'
            width={30}
            height={30}
            alt='logo'
            className='h-[30px] w-[30px]'
            priority
          />
          {active && <ActiveElement />}
        </div>
      </div>
    </div>
  );
};

export default SidebarFull;
