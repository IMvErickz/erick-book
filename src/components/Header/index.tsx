import { Logo } from "../../assets/Icon";

export function Header() {
    return (
        <header className="w-full h-20 flex flex-row items-center justify-center bg-zinc-950 shadow-2xl">
            <Logo />
            <h1 className="text-slate-600 text-6xl font-bold font-JetBrains">Erick Book</h1>
        </header>
    )
}