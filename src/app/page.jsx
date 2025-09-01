import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

export default function Home() {
  const cards = [
    { id: 1, title: "IA chave", description: "El IA más braba del mundo!" },
    { id: 2, title: "IA marromeno", description: "El IA más broxa del pais" },
    { id: 3, title: "IA 👌", description: "Essa IA aqui é filé" },
    { id: 4, title: "IA 👌", description: "Essa IA aqui é filé" },
  ]
  return (
    <>
      <Header />
      <main className='bg-[#0E1019] font-sans '>
        <section className='container mx-auto flex flex-row'>
          <div className=''>
            <h1 className="text-4xl text-white font-bold w-100">
              AI Your Business Can Run With
            </h1>
            <p className="text-white mt-9 text-xl w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laborum incidunt quisquam architecto ducimus quam, impedit autem earum voluptas vel explicabo laboriosam nobis quia tempora et modi blanditiis, sit similique.corporis atque temporibus porro enim nulla at magni, suscipit doloremque assumenda provident modi numquam aliquam minus quidem tempore est natus cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nam! Possimus, ipsa suscipit. Consequatur amet, iste assumenda fuga veritatis nobis itaque quos eius nulla doloribus quas eaque. Quidem, facilis molestias?</p>
          </div>
          <img src="guy.png" alt="guy" className='w-200 h-150 ' />
        </section>

          <h2 className=''>Confira nossas IA's</h2>

        <section className="container mx-auto">
          {cards.map()}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
