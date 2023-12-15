import React, {useState} from "react";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import "./Tickets.scss"
import {Link, useParams} from "react-router-dom";
import e1 from "../../../assets/events/event1.jpg";
import {useGetEventByIdQuery} from "../eventsPageApiSlice";

const eventDetails = [
    {
        id: 1,
        title: "Master-class Maria Struve",
        description: "Dear students!\n" +
            "\n" +
            "Just one day will change your idea of voice!\n" +
            "ALMATY\n" +
            "KBTU, Independence Hall\n" +
            "22nd of May\n" +
            "17:00\n" +
            "\n" +
            "You will learn that everyone has a voice and hearing!!!\n" +
            "\n" +
            "Now VOICE is not a talent, it is the ability of each person that needs to be developed and trained. After 90 minutes of the master class, you will see a real change in voice and hearing!\n" +
            "\n" +
            "Maria Struve is the only person on the planet 👏👏👏 who returns the ability to speak beautifully, speak in front of an audience, be heard and understood!\n" +
            "Thousands of grateful people, hundreds of stars who have received new recognition and fame!\n" +
            "Sati Kazanova, Alexander Reva, Yulia Plaksina, Danelia Tulesheva…\n" +
            "\n" +
            "The ability of a person to control his own voice gives him a huge advantage over others. Frequency, timbre, sound - these are the tools that will allow you to control the attention of listeners, to influence the minds.",
        category: "Education",
        eventImage: e1,
        contactPhone: "+77777777777",
        address: "KBTU",
        startDate: "22 May",
        time: "17:00",
        price: "500"
    },
]
const Tickets = () => {
    const eventId = useParams()
    // console.log(eventId.eventId)
    const {data: eventPage, isLoading, isError} = useGetEventByIdQuery(eventId.eventId)
    // console.log(eventPage)
    const [count, setCount] = useState(0);
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };
    return (
        <div className="tickets">
            <div className="selection">
                <div className="item">
                    <div className="picture">
                        <ConfirmationNumberIcon/>
                    </div>
                    <div className="pictureText">
                        <span>Ticket Selection</span>
                    </div>
                </div>
                <div className="item" style={{color: "#555"}}>
                    <div className="picture" style={{backgroundColor: "#555"}}>
                        <CreditCardIcon/>
                    </div>
                    <div className="pictureText">
                        <span>Checkout</span>
                    </div>
                    {/*<CreditCardIcon/>*/}
                    {/*<span>Checkout</span>*/}
                </div>
            </div>
            <div className="eventInfo">
                <span>{eventPage.title}</span>
            </div>
            <div className="plan">
                <p>Plan Selection</p>
                <div className="container">
                    <div className="planSelection">
                        <span className="age">Adults/Kids</span>
                        <span className="price">{eventPage.ticket_price} ₸</span>
                    </div>
                    <div className="buttons">
                        <button onClick={handleDecrease}>-</button>
                        <span>{count}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>
                </div>
            </div>
            <div className="next">
                    <Link to={`checkout/${count}`}>
                        <button disabled={count === 0} className={count === 0 ? 'grey' : 'red'}>Next</button>
                    </Link>
            </div>
        </div>
    )
}
export default Tickets
