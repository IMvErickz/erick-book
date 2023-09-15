import { CardProject } from "../../components/CardProject";

export function Projects() {

    const projects = [
        {
            name: 'Naif',
            img: '/projectImages/NaifLogo.svg',
            link: 'https://naif-rose.vercel.app',
            description: 'Site para o Instituto Naif'
        }
    ]

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900">
            <header className="w-full flex items-center justify-center py-12">
                <h1 className="text-white text-6xl">Projetos</h1>
            </header>
            <section className="w-full h-full flex items-center justify-center">
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