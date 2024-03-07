import React from 'react';
import { Carousel, CarouselItem, Image } from 'react-bootstrap';

const Slider = ({images}) => {
    return (
        <>
        <Carousel fade data-bs-theme="dark" >
            {images.map(e=>(
                <CarouselItem>
                    <Image style={{height:'80vh',width:'100%'}} src={e} fluid thumbnail/>
                </CarouselItem>
                ))}
        </Carousel>
        </>
    );
}

export default Slider;
