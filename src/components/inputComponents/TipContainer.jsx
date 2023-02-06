function TipContainer(props){
      
    const bgColor= props.customTip ?{backgroundColor:"#F3F9FA",textAlign:'right',paddingRight:'5px'} : {backgroundColor:"#26C2AE",textAlign:'center'}

    return <div>
        <h3>Select Tip %</h3>
         <div className="mt-[16px] flex flex-wrap gap-[14px]  " >
            {props.tips.map((tip)=>{
                return <button onClick={(e)=>{props.setCurrentTip(e.target.value);
                }}
                value={tip}
                key={tip}
                className="w-[117px] text-white hover:text-[#00474B] focus:text-[#00474B] text-[24px] leading-[36px] h-[48px] bg-[#00474B] hover:bg-[#26C2AE] focus:bg-[#9FE8DF] rounded-[5px] " >{tip}%</button>
                })}
                <input onChange={(e)=> {props.setCurrentTip(e.target.value);
                        props.setCustomTip(true);
                        props.setCurrentCustomTip(e.target.value);
                }}
                style={bgColor}
                className="w-[117px] placeholder-white hover:placeholder-[#00474B] text-[#00474B] focus:placeholder-[#00474B] text-[24px] leading-[36px] h-[48px hover:!bg-[#26C2AE] focus:!bg-[#9FE8DF] rounded-[5px]  customTip" 
                type="number" 
                value={props.currentCustomTip}
                placeholder={"Custom"} id="" />
            </div>
        </div>
}

export default TipContainer;




