import { ReactNode } from 'react';
//tailwind classes for each component
// const cardClasses =
//   'bg-white min-w-[320px]  rounded-lg flex flex-col items-center justify-center p-5';
// const headerClasses = 'flex justify-between w-full mb-2';
// const nameClasses = 'text-2xl font-bold text-center text-gray-800';
// const roleClasses = 'text-md font-medium text-center text-gray-800';
// const socialsClasses = 'flex items-center justify-center gap-4 my-4';
// const socialButtonClasses = 'text text-gray-400';
// const actionsClasses = 'flex items-center justify-center w-full gap-2 mt-2';

// //Individual components
// const actionButtonClasses = (type: string) =>
//   twMerge(
//     'border-2 px-2 py-1.5 rounded text-sm font-bold w-full',
//     type === 'primary' ? 'bg-sky-700 text-white' : 'text-gray-400 bg-white'
//   );
// const Card = ({ children }: { children: ReactNode }) => (
//   <div className={cardClasses}> {children} </div>
// );
// const Header = ({ children }: { children: ReactNode }) => (
//   <div className={headerClasses}> {children} </div>
// );
// const ImageOwn = ({
//   src,
//   alt,
//   w = 150,
//   h = 150,
// }: {
//   src: string;
//   alt: string;
//   w: number;
//   h: number;
// }) =>
//   (
//     <Image
//       src={src}
//       alt={alt}
//       width={w}
//       height={h}
//       className='h-auto w-auto rounded-full'
//       priority
//     />
//   ) as ReactNode;
// const Name = ({ children }: { children: ReactNode }) => (
//   <h1 className={nameClasses}>{children}</h1>
// );
// const Role = ({ children }: { children: ReactNode }) => (
//   <h3 className={roleClasses}>{children}</h3>
// );
// const Socials = ({ children }: { children: ReactNode }) => (
//   <div className={socialsClasses}> {children} </div>
// );
// const SocialButton = ({ children }: { children: ReactNode }) => (
//   <button className={socialButtonClasses}> {children} </button>
// );
// const Actions = ({ children }: { children: ReactNode }) => (
//   <div className={actionsClasses}> {children} </div>
// );
const HeaderButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <button
    className='inline-flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#F0F0F3] hover:bg-[#ECECF1]'
    onClick={onClick}
  >
    {children}
  </button>
);
// const ActionButton = ({
//   children,
//   type,
//   onClick,
// }: {
//   children: ReactNode;
//   type: string;
//   onClick: () => void;
// }) => (
//   <button className={actionButtonClasses(type)} onClick={onClick}>
//     {children}
//   </button>
// );
export { HeaderButton };
