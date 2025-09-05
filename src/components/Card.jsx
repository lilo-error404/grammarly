export default function Card() {
    const cards = [
        {
            id: 1,
            title: "Chat Clients",
            description: "Responde clientes automaticamente com linguagem natural.",
            image: "",
            tags: ["atendimento", "chatbot", "clientes", "suporte"]
        },
        {
            id: 2,
            title: "Health IA",
            description: "Faz triagem de sintomas e ajuda médicos e pacientes.",
            image: "",
            tags: ["saúde", "medicina", "diagnóstico", "bem-estar"]
        },
        {
            id: 3,
            title: "OnlyStudents",
            description: "Cria planos de estudo adaptados ao aluno.",
            image: "",
            tags: ["educação", "estudos", "personalizado", "aprendizado"]
        },
        {
            id: 4,
            title: "MKDigital",
            description: "Gera posts para redes sociais com base em tendências.",
            image: "",
            tags: ["marketing", "redes sociais", "conteúdo", "publicidade"]
        },
        {
            id: 5,
            title: "SyberSec",
            description: "Detecta fraudes e ataques em tempo real.",
            image: "",
            tags: ["segurança", "cibersegurança", "fraude", "proteção"]
        },
        {
            id: 6,
            title: "HabitIA",
            description: "Gerencia hábitos e rotinas personalizadas.",
            image: "",
            tags: ["produtividade", "hábitos", "rotina", "bem-estar"]
        },
        {
            id: 7,
            title: "MetallIAca",
            description: "Recomenda rocks e metais com base no seu gosto.",
            image: "",
            tags: ["música", "rock", "metal", "recomendações"]
        },
        {
            id: 8,
            title: "GYMBRO",
            description: "Tenha um personal trainer virtual.",
            image: "",
            tags: ["fitness", "academia", "treino", "saúde"]
        },
        {
            id: 9,
            title: "InvestSmart",
            description: "Sempre receba notícias e dicas de investimentos.",
            image: "",
            tags: ["finanças", "investimentos", "dinheiro", "notícias"]
        },
    ]

    return (
        <>
            <div className="container mx-auto grid grid-cols-3 md:grid-cols-2 gap-2">
                {cards.map((card) => {
                    return(
                    <div key={card.id} className="bg-purple-950 w-xl">
                        <h3 className="font-bold text-lg">{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                )})}
            </div>
        </>

    )
}
