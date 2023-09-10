interface CardProps {
    Name: string
    src: string
    link: string
    description: string
}

export function CardProject(props: CardProps) {
    return (
        <div className="w-96 h-96 bg-zinc-700 rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-full">
                <img src={props.src} alt=""
                    className="w-full h-60 rounded-t-lg py-6"
                />
            </div>
            <a href={props.link} target="_blank" className="text-green-600 text-2xl underline py-10">{props.Name}</a>
            <div className="w-full h-full flex items-center justify-center pb-10">
                <p className="text-white text-xl">{props.description}</p>
            </div>
        </div>
    )
}