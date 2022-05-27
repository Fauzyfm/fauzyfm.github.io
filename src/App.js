import './App.css';
import Profile from './profile.jpg';

function App() {
  return (

    <div className="container mx-auto">
      <div className="my-10 max-w-lg mx-auto rounded-lg border-2 font-serif p-5 shadow-lg">
        <img className='h-24 w-20 float-right ml-8 shadow-md mb-4 rounded-sm' src={Profile} alt="" />
        <p>Hallo nama saya Fachrul Fauzy Muzafar, saya seorang junior Front-end Developer. saya sangat menyukai tentang teknologi terutama ketika saya belajar bahasa pemograman itu sangat membuat saya terus bersemangat untuk mencari tahu lebih dalam tentang dunia pemograman. Selain pemograman saya juga suka dengan buku - buku yang bertema filosofi dan psikologi, saya sangat menikmati ketika saya membaca buku - buku seperti itu.</p>
      </div>
    </div>

  );
}

export default App;
