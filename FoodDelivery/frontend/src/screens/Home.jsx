import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'

export default function Home() {
    const [search,setsearch] = useState('');
    const [foodcat, setfoodcat] = useState([]);
    const [fooditem, setfooditem] = useState([]);
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/fooddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json();
        setfooditem(response[0]);
        setfoodcat(response[1]);
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div>
            <Navbar />
            

            
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className='carousel-caption' style={{ "zIndex": "2" }}>
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
                        
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/300×300?pizza" className="d-block w-100" alt="..." style={{"filter" : "brightness(40%)",
                "maxHeight":"500px","objectFit":"cover"}} />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100" alt="..."  style={{"filter" : "brightness(40%)","maxHeight":"500px","objectFit":"cover"}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/300×300?frenchfries" className="d-block w-100" alt="..." style={{"filter" : "brightness(40%)","maxHeight":"500px","objectFit":"cover"}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>



            <div className="container">
                {
                    foodcat != [] ? foodcat.map((data) => {
                        return (<div className='row mb-3'>
                            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                            <hr />


                            {fooditem != [] ?
                                fooditem.filter((item) =>
                                    (item.CategoryName == data.CategoryName) && item.name.toLowerCase().includes(search) )
                                    .map(filteritem => {
                                        return (
                                            <div key={filteritem._id} className="col-12 col-md-6 col-lg-4">
                                                <Cards 
                                                fooditem = {filteritem}
                                                options = {filteritem.options[0]}
                                               
                                                />
                                            </div>
                                        )
                                    })
                        : <div>NO such data found</div>}
                        </div>
                        )
                    }) : ""
                }
            </div>
            <Footer />
        </div>
    )
}
