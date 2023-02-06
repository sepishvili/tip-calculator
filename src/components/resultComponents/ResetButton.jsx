function ResetButton (props){

    return <button className="hover:bg-[#9FE8DF] mx-[40px] h-[48px] mb-[40px] border-none rounded-[5px] cursor-pointer bg-[#00AA66]"
    onClick={props.onClick}
    >reset</button>
}

export default ResetButton;
