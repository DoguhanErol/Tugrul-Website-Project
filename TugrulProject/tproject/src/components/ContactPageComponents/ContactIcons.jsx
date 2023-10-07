import React, { useState } from 'react'


export default function ContactIcons() {
  const [numberToolTipText, setNumberToolTipText] = useState('Kopyalamak İçin Tıkla');

  function copyPhoneNumber() {
    const phoneNumber = '0533 647 6487'; // Telefon numarasını buraya yazın veya istediğiniz şekilde alın
    navigator.clipboard.writeText(phoneNumber) // Telefon numarasını panoya kopyalar
      .then(() => {
        console.log('Telefon numarası kopyalandı:', phoneNumber);
        setNumberToolTipText('Kopyalandı!');
        setTimeout(() => {
          setNumberToolTipText('Kopyalamak İçin Tıkla'); // 2 saniye sonra eski metni geri getirir
        }, 1000);

      })
      .catch((error) => {
        console.error('Telefon numarası kopyalanırken hata oluştu:', error);
      });
  }
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:items-start py-10 bg-[#4C8077] '>

          {/* Location */}
          <a href="https://goo.gl/maps/6bKMUecmgwu8q8Bp7" target="_blank" rel="noopener noreferrer">
            <div className='flex flex-col m-10 w-60  items-center text-center group'>
            <div className="relative h-0 -top-10">
              <div className='invisible group-hover:visible inline-flex flex-col justify-center items-center w-52 h-7 bg-gray-700 rounded-md'>
                <p className="text-white text-sm">Adres`e Gitmek İçin Tıkla</p>
                <div className='relative h-0 bottom-5'>
                  <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="52" width="52" viewBox="0 -960 960 960"><path d="M480-360 280-559h400L480-360Z"/></svg>
                </div>
              </div>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48 text-[#69564C] flex justify-center items-center rounded-[30%] p-7 bg-[#7D917E] group-hover:bg-[#8D9990]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <h2 className='flex justify-center font-semibold text-3xl items-center text-center my-3 group-hover:text-zinc-300'>Adres</h2>
              <p className='flex justify-center items-center text-center text-zinc-700 text-xl group-hover:text-black'>
                İstanbul/Hadımköy/Çınar Mahallesi/No:07
              </p>
            </div>
          </a>

          {/*Phone Number*/}
          <div className='flex flex-col m-10 w-60 cursor-pointer  items-center text-center group' onClick={copyPhoneNumber}>
          <div className="relative h-0 -top-10">
              <div className='invisible group-hover:visible inline-flex flex-col justify-center items-center w-52 h-7 bg-gray-700 rounded-md'>
                <p className="text-white text-sm">{numberToolTipText}</p>
                <div className='relative h-0 bottom-5'>
                  <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="52" width="52" viewBox="0 -960 960 960"><path d="M480-360 280-559h400L480-360Z"/></svg>
                </div>
              </div>
            </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48 text-[#69564C] flex justify-center items-center rounded-[30%] p-7 bg-[#7D917E] group-hover:bg-[#8D9990]">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
              <h2 className='flex justify-center font-semibold text-3xl items-center text-center my-3 group-hover:text-zinc-300'>Telefon</h2>
              <p className='flex justify-center items-center text-center text-zinc-700 text-xl group-hover:text-black'>
                0533 647 6487
              </p>
              <p className='flex justify-center items-center text-center text-zinc-700 text-xl group-hover:text-black'>
                0534 471 4243
              </p>

            </div>

          {/* Instagram  */}
          <a href='https://www.instagram.com/tugrulmobilyaa/' target={'_blank'}>
          <div className='flex flex-col m-10 w-60   items-center text-center group'>
          <div className="relative h-0 -top-10">
              <div className='invisible group-hover:visible inline-flex flex-col justify-center items-center w-52 h-7 bg-gray-700 rounded-md'>
                <p className="text-white text-sm">İnstagram`a Gitmek İçin Tıkla</p>
                <div className='relative h-0 bottom-5'>
                  <svg className='text-gray-700' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="52" width="52" viewBox="0 -960 960 960"><path d="M480-360 280-559h400L480-360Z"/></svg>
                </div>
              </div>
            </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-48 h-48 text-[#69564C] flex justify-center items-center rounded-[30%] p-7 bg-[#7D917E] group-hover:bg-[#8D9990]">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" id="mainIconPathAttribute"></path>
          </svg>
              <h2 className='flex justify-center font-semibold text-3xl items-center text-center my-3 group-hover:text-zinc-300'>Instagram</h2>
              <p className='flex justify-center items-center text-center text-zinc-700 text-xl group-hover:text-black'>
              @tugrulmobilyaa
              </p>
            </div>
            </a>
        </div>
  )
}
