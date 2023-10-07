import logo from '../assets/tugrulLogo.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
{/*Header*/}
    <header className='flex flex-col-reverse sm:flex-row  justify-evenly min-w-[100%] min-h-[5.5rem] shadow-2xl py-3 bg-[#69564c] '>
      {/*Header Logo*/}
      <figure className='flex items-start justify-center h-[20px] sm:h-[80px]'>
                <img src={ logo } className="relative w-24 h-24 sm:w-36 sm:h-36 sm:bottom-0 sm:-top-3 z-50 rounded-full" alt="Logo" />
            </figure>
      {/*Header Navigations*/}
        <nav className='flex flex-row items-center justify-between  text-2xl sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 '>
            <Link to={'/'} className='hover:text-slate-300 hover:overline hover:scale-105 active:text-black mx-1 sm:mx-5'>Ana Sayfa</Link>
            <Link to={'/galeri'} className='hover:text-slate-300 hover:overline hover:scale-105 active:text-black mx-1 sm:mx-5'>Galeri</Link>
            <Link to={'/hakkinda'} className='hover:text-slate-300 hover:overline hover:scale-105 active:text-black mx-1 sm:mx-5'>Hakkında</Link>
            <Link to={'/iletisim'} className='hover:text-slate-300 hover:overline hover:scale-105 active:text-black mx-1 sm:mx-5'>İletişim</Link>

        </nav>
    </header>
    </>
  );
}
export default Header;