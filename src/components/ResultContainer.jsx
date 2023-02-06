
import ResetButton from "./resultComponents/ResetButton";
import ResultComponent from "./resultComponents/ResultComponent";

function ResultContainer (props){
    
    let persons = props.personAmount == '' ? 1 : props.personAmount;  
    let amountBill=(props.value/100)*props.currentTip
    let amountPerPerson=((props.value/persons)+amountBill).toFixed(2)

    return <div className="flex flex-col justify-between min-w-[413px] my-[32px] mr-[32px] rounded-[15px] bg-[#00474B] gap-[25px] ">
        <div className="flex flex-col m-[40px] gap-[25px] " >
            <ResultComponent 
                title="Tip Amount"
                amount={amountBill.toFixed(2)}
            />
            <ResultComponent 
                title="Total"
                amount={amountPerPerson}
            />
        </div>
        <ResetButton 
            onClick={props.onClick}
        />
    </div>
}

export default ResultContainer;
