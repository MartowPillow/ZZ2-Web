import './Element.css';

function Element({season, revenue, price, mean}) {

    const Color = () => {
        if(price > mean){
            return "yellow"
        }
        else{
            return "lime"
        }
    }   

    return (
        <div className="box">
            <div>Season : {season}</div>
            <div>----------</div>
            <div>Revenue : {revenue}</div>
            <div style={{backgroundColor: Color()}}>TicketPrice : {price}</div>
        </div>
    );
}
export default Element;