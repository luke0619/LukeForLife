import React from "react";

import Sun from '../../assets/Sun.jpg';
import FireWork from '../../assets/FireWork.JPG';
import Bench from '../../assets/Bench.JPG';
import WaterFall from '../../assets/WaterFall.JPG';
import Sunset from '../../assets/Sunset.JPG';
import SunBridge from '../../assets/SunBridge.PNG';
import RiverPark from '../../assets/RiverPark.JPG';
import Nangang from '../../assets/Nangang.JPG';
import Fruit from '../../assets/Fruit.JPG';
import Cats from '../../assets/Cats.JPG';
import BigFireWork from '../../assets/BigFireWork.JPG';
import House from '../../assets/House.JPG';
import Sea from '../../assets/Sea.JPG';
import CatSleep from '../../assets/CatSleep.JPG';
import Bike from '../../assets/Bike.JPG';
import Street from '../../assets/Street.JPG';

function Gallery() {
    return (
        <React.Fragment>
            <section className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src={Bike} alt="Bike.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src={FireWork} alt="FireWork.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src={Bench} alt="Bench.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <img src={BigFireWork} alt="BigFireWork.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <img src={Sunset} alt="Sunset.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <img src={Nangang} alt="Nangang.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--7">
                    <img src={Fruit} alt="Fruit.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--8">
                    <img src={RiverPark} alt="RiverPark.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--9">
                    <img src={SunBridge} alt="SunBridge.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--10">
                    <img src={Cats} alt="Cats.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--11">
                    <img src={House} alt="House.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--12">
                    <img src={CatSleep} alt="CatSleep.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--13">
                    <img src={Street} alt="Street.jpg" className="gallery__img" />
                </figure>
                <figure className="gallery__item gallery__item--14">
                    <img src={Sea} alt="Sea.jpg" className="gallery__img" />
                </figure>
            </section>
        </React.Fragment>
    );
}

export default Gallery;