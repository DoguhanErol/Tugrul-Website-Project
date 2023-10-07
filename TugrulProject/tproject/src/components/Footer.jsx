import logo from '../assets/tugrulLogo.jpg';
import { Link } from 'react-router-dom';
const Footer = () =>{
    function copyPhoneNumber() {
        const phoneNumber = '0533 647 6487'; // Telefon numarasını buraya yazın veya istediğiniz şekilde alın
        navigator.clipboard.writeText(phoneNumber) // Telefon numarasını panoya kopyalar
      }
  return (
<footer className=" p-4 bg-[#69564c]  shadow md:px-6 md:py-8 ">
    <div className="flex flex-col items-center">
            <figure className='h-[80px]'>
                <img src={ logo } className="relative w-[150px] h-[150px]  bottom-20 rounded-full" alt="Logo" />
            </figure>

            <div className='flex flex-row w-full xl:w-1/3 justify-evenly'>

                <div className='flex flex-col text-xl text-zinc-400'>

                    {/*Phone Number*/}
                    <div className='hover:text-slate-300  hover:scale-105 cursor-pointer' onClick={copyPhoneNumber}>
                        <div className='flex flex-row my-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2">
                                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                            </svg>
                               <h4>0533 647 6487</h4>
                        </div>
                    </div>


                    {/*Map*/}
                    <a className='hover:text-slate-300  hover:scale-105' href="https://goo.gl/maps/6bKMUecmgwu8q8Bp7" target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-row my-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2">
                              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                            </svg>
                               <h4>Istanbul/Hadimkoy</h4>
                        </div>
                    </a>
                    {/* Mail*/}
                                        <a className='hover:text-slate-300  hover:scale-105' href='mailto:info@tugrulmobilya.com'>
                        <div className='flex flex-row  my-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2">
                                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                               <h4>info@tugrulmobilya.com</h4>
                        </div>
                    </a>
                    {/* Instagram*/}
                    <a className='hover:text-slate-300  hover:scale-105' target={'_blank'} href='https://www.instagram.com/tugrulmobilyaa/'>
                        <div className='flex flex-row my-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-7 h-7 mr-2">
                              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                            </svg>
                               <h4>@tugrulmobilyaa</h4>
                        </div>
                    </a>
                </div>

                    {/*Footer Navigation*/}
                <div className='flex flex-col text-xl text-zinc-400'>
                    <Link to={'/'} className='hover:text-slate-300  hover:scale-105 my-1'>Ana Sayfa</Link>
                    <Link to={'/galeri'} className='hover:text-slate-300  hover:scale-105 my-1'>Galeri</Link>
                    <Link to={'/hakkinda'} className='hover:text-slate-300 hover:scale-105 my-1'>Hakkında</Link>
                    <Link to={'/iletisim'} className='hover:text-slate-300 hover:scale-105 my-1'>İletişim</Link>
                </div>
            </div>

    </div>
    <hr className="my-6 mx-auto lg:my-8 w-72 sm:w-[34rem] border-gray-700 " />
    <span className="block text-lg  text-center text-zinc-300">© 2023 | Tüm Hakları Saklıdır | Tuğrul Mobilya
    </span>
    <a className='block text-sm mt-5 sm:text-lg w-fit text-zinc-400 hover:text-zinc-100' href="https://www.doguhanerol.dev/" target='blank'>Developer | Doğuhan Erol</a>
</footer>

  );
}

export default Footer;
