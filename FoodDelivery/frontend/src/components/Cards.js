import React, { useState } from 'react'
import { useDispatchCart, useCart } from './contextreducer';
export default function Cards(props) {
    let options = props.options;
    let dispatch = useDispatchCart();
    let data = useCart();
    let priceoptions = Object.keys(options);
    let fooditem = props.fooditems;
    const [qty, setqty] = useState(1);
    const [size, setsize] = useState("");
    let finalprice = qty*parseInt(options[size]);
    
    const handleaddtocard = async () => {
        await dispatch({
            type: "ADD", id: props.fooditem._id,
            name: props.fooditem.name,
            price: props.finalprice,
            qty: qty, size: size
        })

        console.log(data);
    }

    return (
        <div>
            <div class="card mt-3" style={{ 'width': '18rem', "maxeight": "360px" }}>
                <img src={props.fooditem.img} class="card-img-top" alt="FoodImage" style={{ height: "160px", objectFit: "cover" }} />
                <div class="card-body">
                    <h5 class="card-title">{props.fooditem.name}</h5>
                    <p class="card-text">{props.fooditem.desc}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setqty(e.target.value)}>
                            {priceoptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>Price:
                        </div>
                        <hr />
                        <button className='btn btn-success' onClick={handleaddtocard}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
