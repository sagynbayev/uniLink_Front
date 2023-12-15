import {useParams} from "react-router-dom";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
import "./Checkout.scss"
import e1 from "../../assets/events/event1.jpg";
import {useGetEventByIdQuery} from "../EventsPage/eventsPageApiSlice";

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
const Checkout = () => {
    const eventId = useParams()
    console.log(eventId.eventId)
    const {data: eventPage, isLoading, isError} = useGetEventByIdQuery(eventId.eventId)
    console.log(eventPage)
    const { count } = useParams();

    const intCount = parseInt(count)
    const intPrice = parseInt(eventPage.ticket_price)
    const totalPrice = intCount * intPrice
    console.log(totalPrice)
    return (
        <div className="checkout">
            <div className="selection">
                <div className="item">
                    <div className="picture">
                        <ConfirmationNumberIcon/>
                    </div>
                    <div className="pictureText">
                        <span>Ticket Selection</span>
                    </div>
                </div>
                <div className="item">
                    <div className="picture">
                        <CreditCardIcon/>
                    </div>
                    <div className="pictureText">
                        <span>Checkout</span>
                    </div>
                </div>
            </div>
            <div className="orderCheck">
                <p>Your order</p>
                <div className="check">
                    <div className="ticketInfo">
                        <p className="type">Ticket</p>
                        <p>{eventPage.title}</p>
                    </div>
                    <hr/>
                    <div className="checkPrice">
                        <div className="left">
                            <span>Adults/Kids</span>
                        </div>
                        <div className="right">
                            <span>{count + " X" + " " + eventPage.ticket_price}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="total">
                        <div className="left">
                            <span>Total</span>
                        </div>
                        <div className="right">
                            <span>{totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout