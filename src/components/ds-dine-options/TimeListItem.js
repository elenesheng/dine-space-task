import { useSelector } from "react-redux";

function TimeListItem(props){
    const orderTime = useSelector(state => state.orderTime);

    return(
        <li onClick={(e)=>props.onClick(e)} className={orderTime === props.value?"active-time time": "time"}>{props.value}</li>
    )
}

export default TimeListItem;