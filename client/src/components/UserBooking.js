
import "./UserBooking.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function UserBooking() {

  const [booking, setBooking] = useState({
    data: []
  })
  const [sessions, setSessions] = useState({
    sessions: []
  })

  async function bookings() {

    try {
      
      const response = await fetch("/privateRoute", {
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json()
      
      axios.get(`/api/v1/booking/${parseRes.id}`)
      .then(response => {
        setBooking({data:response.data.data.bookings})
        response.data.data.bookings.forEach(booking => (
          axios.get(`/api/v1/sessions/${booking.yoga_session_id}`)
          .then(response => {
            setSessions(previousState => ({
              sessions: [...previousState.sessions, response.data.data.YogaSession]
          }));
          })
          // .then(response => {
          //   sessions.sessions.push(response.data.data.YogaSession)

          // })
        ))
        
      }) 

      // const response2 = await fetch(`/api/v1/booking/${parseRes.id}`, {
      //   method: "GET",
      //   headers: {"Content-Type" : "application/json"},
      //   body: JSON.stringify(body)
      // })

      // const parseRes = await response.json()

      // localStorage.setItem("token", parseRes.token);

      // setAuth(true);

    } catch (error) {
      console.error(error);
    }
  }

  console.log(booking.data);
  console.log(sessions.sessions);
  
  useEffect(() => {
    bookings()
  }, [])

  return (
    <div>
  
    {sessions.sessions.map(session => (
        <h5 className="booking">
          <p>{session.name}</p>
          <p>{session.duration}</p>
          <p>{session.price}</p>
        </h5>
      ))}
  
    <img src="/images/thank.jpeg" className="thankyou" alt="ThankYou"/>

    </div>
  )
};  

