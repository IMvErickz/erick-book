import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    backgroundColor: string
    icon?: ReactNode
}

export function Button({ text, backgroundColor, icon, ...rest }: ButtonProps) {
    return (
        <button className={`${backgroundColor} text-white text-xl flex flex-row items-center justify-center gap-x-4 hover:bg-green-800 transition-colors rounded-xl w-[172px] h-[46px]`} {...rest}>{text}{icon}</button>
    )
}