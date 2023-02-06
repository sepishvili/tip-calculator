// import IconDollar from "../../images/IconDollar";

function ResultComponent (props){
    return <div className="flex justify-between items-center">
                 <div  className="flex flex-col font-bold text-[16px] text-white leading-[24px]" >{props.title} <span className="text-[13px] text-[#7F9D9F] leading-19px">/ person</span></div>
                <div className="text-[48px] leading-[71px] text-right tracking-[-1px] text-[#26C2AE]">
                    $
                    <span>{props.amount}</span>
                </div>
             </div>
}

export default ResultComponent;
