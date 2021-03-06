import './App.css';
import Profile from './img/profile.jpg';
import Project1 from './img/project_1.png';
import Project2 from './img/project_2.png';
import Sertificate_1 from './img/sertificate_1.png'
import Sertificate_2 from './img/certificate_javascript.png'
import React from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // hamburger button 
  const HamClick = () => {
    const Hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')                           
  };

  // navbar

  window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
      header.classList.add('navbar-fixed')
    } else {
      header.classList.remove('navbar-fixed')
    }
  }

  return (
    <div>

      <header className='bg-transparent fixed top-0 left-0 w-full flex items-center z-20'>
        <div class="container">
          <div className='flex item-center justify-between relative'>
            <div className='px-4'>
              <a href="#data-diri" className='py-6 font-bold text-sky-500 block'>FachrulFM</a>
            </div>
            <div className='flex item-center'>
              <button id='hamburger' onClick={HamClick} type='button' className='block absolute top-5 right-4 lg:hidden'>
                <span className='hamburger-line origin-top-right transition duration-300 ease-in-out'></span>
                <span className='hamburger-line transition duration-300 ease-in-out'></span>
                <span className='hamburger-line origin-bottom-right transition duration-300 ease-in-out'></span>
              </button>

              <nav id='nav-menu' className='hidden absolute top-full right-5 bg-white py-5 w-full rounded-lg shadow-lg max-w-[250px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none' >
                <ul className='block lg:flex'>
                  <li className='group'>
                    <a href="#data-diri" className='text-base text-slate-700 py-2 mx-8 group-hover:text-sky-600 flex'>Home</a>
                  </li>
                  <li className='group'>
                    <a href="#about" className='text-base text-slate-700 py-2 mx-8 group-hover:text-sky-600 flex'>About</a>
                  </li>
                  <li className='group'>
                    <a href="#project" className='text-base text-slate-700 py-2 mx-8 group-hover:text-sky-600 flex'>Project</a>
                  </li>
                  <li className='group'>
                    <a href="#sertificate" className='text-base text-slate-700 py-2 mx-8 group-hover:text-sky-600 flex'>Certificate</a>
                  </li>
                  <li className='group'>
                    <a href="#contact" className='text-base text-slate-700 py-2 mx-8 group-hover:text-sky-600 flex'>Contact</a>
                  </li>
                </ul>
            
              </nav>
            </div>
          </div>
        </div>
      </header>
    


      {/* Home Section start */}
      <section id='data-diri' className='pt-14 mt-5 px-5 '>
        <div className="container ">
          <div className='flex flex-wrap justify-between'>
            <div className="my-10 w-full self-center rounded-lg px-14 font-serif p-5 shadow-lg sm:w-1/2" data-aos="fade-up">
             <h3 className='font-sans from-neutral-500'>Hallo nama saya, <span className='text-sky-500 font-semibold '>Fachrul Fauzy Muzafar.</span></h3>
             <p className='font-sans text-slate-400 font'>Programer</p>
            </div>
            <div className='my-10 w-full flex lg:justify-center sm:justify-center lg:w-1/2' data-aos='zoom-in'>
            <img className='lg:w-1/2 ml-8 shadow-lg mb-4 rounded-l-full sm:rounded-full sm:w-1/2 lg:rounded-full ' src={Profile} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Home section End */}

      {/* About Start */}
      <section id='about' className='mt-5 mb-20 px-5 py-40 pt-20'>
        <div class="container">
          <div class="flex flex-wrap" data-aos="fade-up">
            <div className='w-full mb-8 px-8 lg:w-1/2'>  
            <h3 className='text-sky-500 uppercase block mb-2'>Tentang Saya</h3>
            <p>Sedari saya kecil saya sangat menyukai dengan hal yang berhubungan dengan teknologi, saya sangat menyukai sesuatu yang berhubungan dengan perhitungan dan logika sama halnya ketika saya belajar Bahasa pemograman itu selalu membuat saya ingin terus mencoba belajar sesuatu yang baru, dan saya sangat bersemangat untuk terus belajar sesuatu yang baru terutama jika itu berhubungan dengan IT dan Pemograman.</p>
            </div>
            <div class="w-full mb-20 px-8 lg:w-1/2">
              <h3 className='uppercase text-sky-500 mb-2'>Contact</h3>
              <p>Jika ada sesuatu yang ingin ditanyakan bisa hubungi contact berikut.</p>
              <div className='flex items-center mt-4'>
                {/* instagram */}
                <a href="https://www.instagram.com/fauzyfm_/" target='_blank'  rel="noopener noreferrer" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-300'>
                <svg role="img" width='20' className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>

                {/* github */}
                <a href="https://github.com/Fauzyfm" target='_blank'  rel="noopener noreferrer" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-300'>
                <svg role="img" width='20' className='fill-current'  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>

                {/* linkedin */}
                <a href="https://www.linkedin.com/in/fachrul-fauzy-18451923a/" target='_blank'  rel="noopener noreferrer" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-300'>
                <svg role="img" width='20' className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Project start */}
      <section id='project' className='pt-20 pb-10 bg-slate-400'>
          <div class="container text-center w-full mb-8">
            <h2 className='font-semibold text-sky-500 text-xl py-5 '>MY PROJECT</h2>
            <p className='text-slate-300'>Project Terbaru</p>
          </div>

          <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 mx-auto'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div class=" overflow-hidden " data-aos='fade-right'>
                <img src={Project1} alt="" className='mx-auto' />
              </div>
              <h3 className='font-semibold py-3 text-lg ' data-aos='fade-up'>Website (SPA)</h3>
              <p data-aos='fade-up'>Website yang menyediakan sebuah program untuk membantu user menemukan sebuah masalah dalam mengerjakan soal matematika, dan menemukan rumus - rumus yang dibutuhkan. <a className='text-sky-600' target='_blank' rel="noopener noreferrer" href="https://rumusmatematika.vercel.app/">Kunjungi Website.</a> </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div class=" overflow-hidden" data-aos='fade-right'>
                <img src={Project2} alt="" className='mx-auto w-[280px] h-[567px]' />
              </div>
              <h3 className='font-semibold py-3 text-lg' data-aos='fade-up'>Website (API)</h3>
              <p data-aos='fade-up' >Website yang menyediakan sebuah program dengan Rest API untuk mencari data cuaca dari berbagai kota/negara yang di inginkan. <a className='text-sky-600' target='_blank' rel="noopener noreferrer" href="https://weather-api-app.vercel.app/">Kunjungi Website.</a> </p>
            </div>
          </div>
      </section>
      {/* Project end */}

      {/* Sertificate start */}

      <section id='sertificate' className='pt-20 pb-10'>
          <div class="container text-center w-full mb-8 " >
            <h2 className='font-semibold text-sky-500 text-xl py-5 '>SERTIFICATE</h2>
          </div>
          <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 mx-auto'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div class="rounded-md shadow-lg overflow-hidden " data-aos='fade-right'>
                <img src={Sertificate_1} className='mx-auto' />
              </div>
              <h3 className='font-semibold py-3 text-lg ' data-aos='fade-up'>Responsive Web Design</h3>
              <p className='text-slate-500' data-aos='fade-up'>Berhasil menyelesaikan test yang diberikan dari platform <a href="https://www.freecodecamp.org/certification/fauzyfm_/responsive-web-design" target='_blank' rel="noopener noreferrer" className='text-sky-600'> freecodecamp.org. </a></p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div class="rounded-md shadow-lg overflow-hidden " data-aos='fade-right'>
                <img src={Sertificate_2} className='mx-auto' />
              </div>
              <h3 className='font-semibold py-3 text-lg mt-10 ' data-aos='fade-up'>JavaScript</h3>
              <p className='text-slate-500' data-aos='fade-up'>Berhasil menyelesaikan test yang diberikan dari platform <a href="https://www.sololearn.com/certificates/course/en/26238842/1024/landscape/png" target='_blank' rel="noopener noreferrer" className='text-sky-600'>sololearn.com </a></p>
            </div>
          </div>
      </section> 

      {/* Sertificate end */}


      {/* Contact start */}
        <section id='contact' className='pt-36 pb-32'>
          <div className='container'>
            <div class="w-full px-4">
              <div class="max-w-xl mx-auto text-center mb-16">
                <h4 className='font-semibold text-lg text-sky-500 mb-2'>Contact</h4>
                <h2 >Hubungi Kami</h2>
              </div>
            </div>

            <form>
              <div className='w-full lg:w-2/3 lg:mx-auto'>
              <div className='w-full px-4 mb-8' data-aos='fade-up'>
                <label for="name" className='text-base text-sky-500 font-bold uppercase'>Name</label>
                <input type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 '/>
              </div>
              <div className='w-full px-4 mb-8' data-aos='fade-up'>
                <label for="email" className='text-base text-sky-500 font-bold uppercase'>Email</label>
                <input type="text" id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 '/>
              </div>
              <div className='w-full px-4 mb-8' data-aos='fade-up'>
                <label for="pesan" className='text-base text-sky-500 font-bold uppercase'>Pesan</label>
                <textarea type="text" id='pesan' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500  h-32'></textarea>
              </div>
              <div className='w-full px-5' data-aos='fade-up'>
                <button className='text-base font-semibold text-white bg-sky-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-md transition duration-500 uppercase'>Kirim</button>
              </div>
              </div>

            </form>
          </div>
        </section>


      {/* Contact end */}

    </div>

  );
}

export default App;
