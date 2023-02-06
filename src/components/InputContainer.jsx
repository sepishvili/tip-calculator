
import IconDollar from "../images/IconDollar";
import IconPerson from "../images/IconPerson";



import TipContainer from './inputComponents/TipContainer'
// import AmountPeopleContainer from './inputComponents/AmountPeopleContainer';
import BillContainer from './inputComponents/BIllContainer';

function ImputContainer (props){

    return <div className='ml-[48px] my-[48px] flex text-[#5E7A7D] flex-col gap-[40px]'>
        <BillContainer     
            title={'Bill'}
            icon={<IconDollar />}
            setAmount={props.setBill}
            amount={props.bill}
        />
        <TipContainer 
            tips={props.tips}
            setCurrentTip={props.setCurrentTip}
            customTip={props.customTip}
            setCustomTip={props.setCustomTip}
            currentCustomTip={props.currentCustomTip}
            setCurrentCustomTip={props.setCurrentCustomTip}
        />
        <BillContainer 
            title={'Number of People'}
            icon={<IconPerson />}
            amount={props.personAmount}
            setAmount={props.setPersonAmount}
            reset={props.reset}
            setResset={props.setResset}
        />
    </div>
    
}



export default ImputContainer;

