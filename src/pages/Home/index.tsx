import { Header } from "../../components/Header";
import JavascriptIcon from '../../assets/javascript.svg'
import TypescriptIcon from '../../assets/Typescript.svg'
import ReactIcon from '/src/assets/rc.svg'
import NativeIcon from '../../assets/Native.svg'
import NodeIcon from '../../assets/Node.svg'
import PrismaIcon from '../../assets/Prisma.svg'



export function Home() {

    const url = window.location.href

    console.log(url)

    const icons = [
        { icon: JavascriptIcon },
        { icon: TypescriptIcon },
        { icon: NodeIcon },
        { icon: PrismaIcon },
    ]

    const reactIcons = [
        { icon: ReactIcon },
        { icon: NativeIcon },
    ]

    return (
        <main className="w-screen bg-zinc-900 flex flex-col gap-y-8">
            <Header />
            <section className="w-full flex flex-row items-center justify-center gap-x-52">
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
            <section className="w-full flex flex-col items-center justify-center">
                <p className="text-white font-JetBrains text-4xl text-center">
                    Tecnologias Usadas: <br />
                    (em meus projetos pessoais)
                </p>
            </section>
            <section className="w-full flex flex-row items-center justify-center gap-x-40">
                {reactIcons.map(e => {
                    return (
                        <img src={e.icon} alt="Não" />
                    )
                })}
            </section>
            <section className="w-full flex flex-row items-center justify-center gap-x-40">
                {icons.map(e => {
                    return (
                        <img src={e.icon} alt="Não" />
                    )
                })}
            </section>
            {/* <section className="flex flex-row items-center justify-center">
                <Button
                    text="Contato"
                    backgroundColor="bg-green-600"
                    icon={<User size={48} color="black" />}
                />

            </section> */}
        </main>
    )
}