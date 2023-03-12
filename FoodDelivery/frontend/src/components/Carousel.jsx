import React from 'react'

export default function Carousel() {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className='carousel-caption' style={{ "zIndex": "2" }}>
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary text-white bg-success">search</button>
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
    )
}
