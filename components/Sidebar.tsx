'use client';
import { cn } from '@/lib/utils'
import { useStore } from '@/store'
import Image from 'next/image'
import ActiveElement from './ActiveElement'
import SidebarFull from './SidebarFull'

const nav = [
  // {
  //   link: '/',
  //   icon: 'las la-tachometer-alt',
  //   name: 'Clock',
  // },
  // {
  //   link: '/',
  //   icon: 'las la-suitcase',
  //   name: 'Case',
  // },
  {
    link: '/',
    icon: 'las la-calendar-check',
    name: 'Calendar',
  },
  {
    link: '/',
    icon: 'las la-images',
    name: 'Images',
  },
  {
    link: '/',
    icon: 'las la-calendar',
    name: 'Calendar',
  },
  // {
  //   link: '/',
  //   icon: 'las la-user-lock',
  //   name: 'User',
  // },
  {
    link: '/',
    icon: 'las la-comments',
    name: 'Comments',
  },
  // {
  //   link: '/',
  //   icon: 'las la-cube',
  //   name: 'Cube',
  // },
  // {
  //   link: '/',
  //   icon: 'las la-calculator',
  //   name: 'Calculate',
  // },
  {
    link: '/',
    icon: 'las la-folder-open',
    name: 'Folder',
  },
  // {
  //   link: '/',
  //   icon: 'las la-bullseye',
  //   name: 'Target',
  // },
  // {
  //   link: '/',
  //   icon: 'las la-chart-area',
  //   name: 'Chart',
  // },
  // {
  //   link: '/',
  //   icon: 'las la-question',
  //   name: 'Question',
  // },
];

const Sidebar = () => {
  const sidebar = useStore((state) => state.sidebar);
  const active = true;
  return (
    <>
      {sidebar === 'compact' ? (
        <div className='w-[82px] border-r-2 border-backgroundDark'>
          <div className='flex h-16 shrink-0 flex-col items-center '>
            <div className=''>
              <Image
                src='assets/Logo.svg'
                width={30}
                height={30}
                alt='logo'
                className='h-[30px] w-[30px] mb-[20px] mt-[26px]'
                priority
              />
            </div>

            <div className='mb-16 mt-[82px]'>
              {nav.map((item, index) => (
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
                    <div className='absolute inset-y-[12.5%] right-0 w-0.5 rounded-[1px] bg-primaryLight' />
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
              {/* {active && <ActiveElement />} */}
            </div>
          </div>
        </div>
      ) : (
        <SidebarFull nav={nav} />
      )}
    </>
  );
};

export default Sidebar;
