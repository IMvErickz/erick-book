import { CardProject } from "../../components/CardProject";

export function Projects() {

    const projects = [
        {
            name: 'Naif',
            img: '/projectImages/NaifLogo.svg',
            link: 'https://institutonaif.org/',
            description: 'Site para o Instituto Naif'
        },
        {
            name: 'ChatScript',
            img: '/projectImages/chat.png',
            link: 'https://chatscript-eosin.vercel.app/',
            description: 'Aplicação com o obejtivo de armazenar os scripts padrões'
        },
    ]

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900">
            <header className="w-full flex items-center justify-center py-12">
                <h1 className="text-white text-6xl">Projetos</h1>
            </header>
            <section className="w-full h-full flex flex-row gap-x-4 items-center justify-center">
                {projects.map(project => {
                    return (
                        <CardProject
                            Name={project.name}
                            src={project.img}
                            link={project.link}
                            description={project.description}
                        />
                    )
                })}
            </section>
        </main>
    )
}