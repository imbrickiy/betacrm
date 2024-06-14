const SidebarFull = () => {
  const active = false;
  return (
    <>{active && <div className='w-[340px] border-r-2'>SidebarFull</div>}</>
  );
};

export default SidebarFull;
