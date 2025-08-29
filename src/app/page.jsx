import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <section className='bg-[#0E1019] container mx-auto font-sans flex flex-row'>
        <div>
        <h1 className="text-4xl text-white font-bold">
        AI Your Business Can Run With
        </h1>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam! Possimus, ipsa suscipit. Consequatur amet, iste assumenda fuga veritatis nobis itaque quos eius nulla doloribus quas eaque. Quidem, facilis molestias?</p>
        </div>
      <img src="guy.png" alt="guy" />
      </section>

 {/* <Footer /> */}
    </>
  );
}
