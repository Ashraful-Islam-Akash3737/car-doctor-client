import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";

import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    
    console.log("my bookings", bookings);
    // const url = `http://localhost:5000/book?email=${user?.email}`;
    const url = `/book?email=${user?.email}`;
    useEffect(() => {
        // 1st way
        // axios.get(url, { withCredentials: true})
        // .then(res => {
        //     setBookings(res.data)
        // })

        // 2nd way
        axiosSecure.get(url, { withCredentials: true})
        .then(res => setBookings(res.data))

        // 3rd way
        // fetch(url , { credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url, axiosSecure])

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/book/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("data deleted successfully.")
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirmed"})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking=> booking._id !== id);
                    const update = bookings.find(booking=> booking._id === id);
                    update.status = 'confirm';
                    const newBookings = [ update, ...remaining];
                    setBookings(newBookings)
                }
            })
    }
    return (
        <div>
            <h3>My Bookings: {bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service-info</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;