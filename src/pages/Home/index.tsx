import { Header } from "../../components/Header";

export function Home() {

    const icons = [
        { icon: '/src/assets/javascript.png' },
        { icon: '/src/assets/Typescript.png' },
        { icon: '/src/assets/React.png' },
        { icon: '/src/assets/native.png' },
        { icon: '/src/assets/node.png' },
        { icon: '/src/assets/prisma.png' },

    ]

    return (
        <main className="w-screen h-screen bg-zinc-900 flex flex-col">
            <Header />
            <section className="w-full flex flex-row items-center justify-center gap-x-60 pt-24">
                <p className="text-white font-JetBrains text-5xl text-center">
                    Seja bem vindo ao meu <br />
                    espaço dedicado aos <br />
                    meus projetos
                </p>

                <p className="text-white font-JetBrains text-5xl text-center">
                    Me chamo Erick. Sou <br />
                    Desenvolvedor Web <br />
                    Full-Stack
                </p>
            </section>
            <section className="w-full flex flex-col items-center justify-center pt-36">
                <p className="text-white font-JetBrains text-4xl text-center">
                    Tecnologias Usadas: <br />
                    (em meus projetos pessoais)
                </p>
            </section>
            <section className="w-full flex flex-row items-center justify-center gap-x-40 pt-14">
                {icons.map(e => {
                    return (
                        <img src={e.icon} alt="Não" />
                    )
                })}
            </section>
            {/* <section className="w-full flex flex-row items-center justify-center">
                <Button
                    text="Contato"
                    backgroundColor="bg-green-600"
                    icon={<User size={48} color="black" />}
                />

            </section> */}
        </main>
    )
}