import Image from "next/image";

export default function Cola() {
  return (
    <>
      <div className="container mx-auto bg-red-500 px-2 py-8">
        <div className="bg-black">
          <h2 className="text-bas ms-4 bg-amber-400">VOLTA PUDIM.COM.BR</h2>
          <p className="text-xs">Texto minusculo</p>
          <p className="text-sm text-right">Texto pequeno</p>
          <p className="text-base text-center">Texto normal</p>
          <p className="text-lg">Texto maior</p>
          <p className="text-xl text-purple-400">Texto grande</p>
          <p className="text-2xl">Texto <span className="font-bold">muito</span> grande</p>
          <p className="text-9xl">Texto <span className="font-bold">muito</span> grande</p>
        </div>
      </div>

      <h2>Testando Cores</h2>
      <div className="bg-blue-600 hover:bg-[#FF45]/50 w-auto h-96"></div>
      <div className="bg-[var(--color-error)] hover:bg-[#FF45]/50 w-96 h-96"></div>

      <section className="container mx-auto">
        <h2 className="text-5xl font-bold text-red-500"></h2>
        {/* FLEX */}
         <div className=" flex flex-row gap-2 justify-center items-center">
          <div className="h-10 w-10 bg-blue-400 rounded xl"></div>
          <div className="h-14 w-10 bg-blue-400 rounded xl"></div>
          <div className="h-10 w-10 bg-blue-400 rounded xl"></div>
          <div className="h-14 w-10 bg-blue-400 rounded xl"></div>
        </div> 

        {/**GRID */}
        <div className=" grid gap-2 grid-cols-2">
          <div className="h-10 w-auto bg-blue-400 rounded xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded xl col-span-2"></div>
        </div>
      </section>

    <div className="container mx-auto">
      <h2 className="text-lg md:text-xl xl:text-3xl">Titulo muito bom</h2>
      <p className="text-sm md:text-4xl xl:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt facere id ad eaque eveniet, unde provident recusandae perferendis, officiis eius quod iusto repellat dolore iure! Hic tempora consectetur totam natus?</p>
    </div>

    <button className="bg-red-400 hover:bg-red-600 active:bg-green-400 text-white font-bold">
      CLIQUE ME
    </button>
    <button className="bg-primary">AAAAAAAAAAAA</button>

    <section className="container mx-auto grid-cols-2">
      <div className="">a</div>
      <div className="">a</div>
      </section>
    </>
  );
}