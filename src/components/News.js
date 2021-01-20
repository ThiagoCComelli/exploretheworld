import React from 'react';

import '../styles/News.css'

const News = ({currentProp,setCurrentProp}) => {

    const handleChangeActive = (e) => {
        document.getElementsByClassName('active')[0].classList.toggle('active')
        e.classList.toggle('active')
        setCurrentProp(e.id)


        document.getElementById(currentProp).classList.toggle('activeText')
        document.getElementById(e.id).classList.toggle('activeText')
    }

    return (
        <>
        <div className="mainNews">
            <div className="upcomingEvents">
                <h5>Events</h5>
                <div className="event">
                    <span>Pop-Up @ Steven Alanfilmore</span>
                    <strong>SF - Sat.August 12 / 5-8 PM</strong>
                    <a href="/">Read more</a>
                </div>
                <div className="event">
                    <span>Pop-Up @ Steven Alanfilmore</span>
                    <strong>SF - Sat.August 12 / 5-8 PM</strong>
                    <a href="/">Read more</a>
                </div>
            </div>
            <div className="newsDiv">
                <img id="forest" onClick={(e) => {handleChangeActive(e.target)}} className="active forestImage" alt="" src={`${process.env.PUBLIC_URL}/images/forest.jpg`}/>
                <img id="snow" onClick={(e) => {handleChangeActive(e.target)}} className="snowImage" alt="" src={`${process.env.PUBLIC_URL}/images/snow.jpg`}/>
                <img id="desert" onClick={(e) => {handleChangeActive(e.target)}} className="desertImage" alt="" src={`${process.env.PUBLIC_URL}/images/desert.jpg`}/>
            </div>
        </div>
        </>
    )
}

export default News;
