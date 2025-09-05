import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card';
import Cola from '../components/Cola';

export default function Home() {

  return (
    <>
      <Header />
      <main className='bg-[#0E1019] font-sans '>
        <section className='container mx-auto flex flex-col xl:flex-row'>
          <div >
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">AI Your Business Can Run With</h1>
            <p className="text-lg md:text-xl xl:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque doloribus itaque iure ratione dolorem natus. Sapiente non, pariatur repellat adipisci iste tempora, consequuntur est totam porro laudantium architecto, autem temporibus</p>
          </div>
          <img src="guy.png" alt="guy" className='w-100 md:w-200 xl:w-700' />
        </section>

          <h2 className=''>Confira nossas IA's</h2>

        <section>
        <Card />
        </section> 
      </main>
      <Footer />
      <Cola />
    </>
  );
}
