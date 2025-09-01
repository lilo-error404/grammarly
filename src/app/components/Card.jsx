export default function Card() {
    // const cards = [
    //     { id: 1, title: "IA chave", description: "El IA más braba del mundo!" },
    //     { id: 2, title: "IA marromeno", description: "El IA más broxa del pais" },
    //     { id: 3, title: "IA 👌", description: "Essa IA aqui é filé" },
    //     { id: 4, title: "IA 👌", description: "Essa IA aqui é filé" },
    //   ]
    return (
        <>
        <div key={id} className="bg-purple-800 w-150 h-100 flex flex-row">
            <img src="#" alt="#" className="h-400 w-600" />
            <h2 className="text-black font-bold text-lg md:text-base">{title}</h2>
            <p className="text-gray-700 text-base md:text-sm">{description}</p>
        </div>
        </>
    )
}