import { HeaderButton } from './OwnComponents';

export default function Header() {
  return (
    <header className=''>
      <nav className='flex max-w-7xl items-center justify-between py-6'>
        <div className='flex items-center'>
          <HeaderButton>
            <span className='sr-only'>Open main menu</span>
            <i className='las la-bars h-[14px] w-[14px] text-[#8181A5]' />
          </HeaderButton>
          <h1 className='ml-[20px] text-xl font-bold not-italic leading-[30px]'>
            Dashboard
          </h1>
        </div>

        <div className='flex items-center justify-center gap-x-[6px]'>
          <HeaderButton>
            <span className='sr-only'>Search</span>
            <i className='las la-search h-[14px] w-[14px] text-[#8181A5]'></i>
          </HeaderButton>
          <HeaderButton>
            <span className='sr-only'>Add menu</span>
            <i className='las la-plus-circle h-[14px] w-[14px] text-[#8181A5]'></i>
          </HeaderButton>
        </div>
      </nav>
    </header>
  );
}
