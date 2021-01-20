import React,{useState} from 'react';
import Navbar from './Navbar'
import News from './News'

import '../styles/Hero.css'

const Hero = () => {
    const [currentProp,setCurrentProp] = useState("forest")
    const images = {
        forest: {
            image: "forest.jpg", 
            index: 1
        }, 
        snow: {
            image: "snow.jpg", 
            index: 2
        }, 
        desert: {
            image: "desert.jpg", 
            index: 3
        }
    }

    const rotateActive = () => {
        var actual = images[currentProp].index

        document.getElementsByClassName('activeText')[0].classList.toggle('activeText')
        document.getElementsByClassName('active')[0].classList.toggle('active')

        if(actual === 1){
            document.getElementsByClassName('snowText')[0].classList.toggle('activeText')
            document.getElementsByClassName('snowImage')[0].classList.toggle('active')
            setCurrentProp("snow")
        }else if(actual === 2){
            document.getElementsByClassName('desertText')[0].classList.toggle('activeText')
            document.getElementsByClassName('desertImage')[0].classList.toggle('active')
            setCurrentProp("desert")
        }else{
            document.getElementsByClassName('forestText')[0].classList.toggle('activeText')
            document.getElementsByClassName('forestImage')[0].classList.toggle('active')
            setCurrentProp("forest")
        }
    }
    
    return (
        <>
        <div className="mainHero">
            <img alt="" src={`${process.env.PUBLIC_URL}/images/${images[currentProp].image}`}/>
            <Navbar />
            <div className="contents">
                <div className="contentsSwap">
                    <h1 onAnimationIteration={() => {
                        rotateActive()
                    }}>/0{images[currentProp].index}</h1>
                    <span id="forest" className="activeText forestText">Forest | Brazil</span>
                    <span id="snow" className="snowText">Snow | Iceland</span>
                    <span id="desert" className="desertText">Desert | Africa</span>
                </div>
                <div className="contentsText">
                    <h2>Travel now</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla purus, ullamcorper id luctus sed. </p>
                    <button>Consult</button>
                </div>
            </div>
            <News currentProp={currentProp} setCurrentProp={setCurrentProp}/>
        </div>
        </>
    );
}

export default Hero;
