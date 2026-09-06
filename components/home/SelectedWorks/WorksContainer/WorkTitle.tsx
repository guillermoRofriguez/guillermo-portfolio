interface Title {
    title:string
    count:number
}
export default function WorkTitle({title,count}:Title){
    const numberCount = count <= 9 ? `0${count}` : count; 
    return(
        <div className="flex gap-x-4 items-end pb-4 border-b border-[#3C4A46]">
            <span className="text-(--secondary) text-[14px]">{numberCount}</span>
            <p className="text-[32px] text-[#DDE4E1] font-bold">{title}</p>
        </div>
    )
}