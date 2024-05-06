import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id,  price, img } = service;
    const { user } = useContext(AuthContext);
    console.log("user", user)
    const handleCheckOut = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = { 
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price

         };
        console.log("sign up order", order);
        fetch(`http://localhost:5000/book`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order),
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if (data.insertedId) {
                alert('service booked or purchased successfully.')
            }
        })
    }
    return (
        <div>
            <h3>check out title: {title}</h3>

            <form onSubmit={handleCheckOut} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user ? user.displayName : ''} placeholder="name" className="input input-bordered" required />
                    </div>
                    {/* date */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />

                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={user ? user.email : ''} className="input input-bordered" required />
                    </div>
                    {/* due amount */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />

                    </div>
                    {/* Image
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Image" className="input input-bordered" required />

                    </div> */}

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Confirm Purchase" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;