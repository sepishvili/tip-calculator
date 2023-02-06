function BillContainer (props){
    
    return  <div>
                <h3 className="text-[16px] leading-[24px] ">{props.title}</h3>
                <div className="flex mt-[6px] relative">
                    {props.icon} 
                    <input className="w-full pr-[17px] text-[#00474B] text-[24px] leading-[36px] bg-[#F3F9FA] rounded-[5px]  text-right mr-[14px] h-[48px]" 
                    placeholder="0" 
                    value={props.amount}
                    onChange={(e)=> props.setAmount(e.target.value)} 
                    type="number" />
                </div>
            </div>
}

export default BillContainer;

