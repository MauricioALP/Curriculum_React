import React, { Component } from "react";
import "./CSS/style.css";

import mail from "./IMG/mail.png"
import phone from "./IMG/phone.png"
import gps from "./IMG/gps.png"
import whatsapp from "./IMG/whatsapp.png"
import instagram from "./IMG/instagram.png"
import twitter from "./IMG/twitter.png"
import telegram from "./IMG/telegram.png"
import linkedin from "./IMG/linkedin.png"
import cpp from "./IMG/c++.png"
import eight from "./IMG/80.jpg"
import python from "./IMG/python.png"
import seven from "./IMG/70.jpg"
import c_logo from "./IMG/c_logo.png"
import five from "./IMG/50.jpg"
import Basket from "./IMG/Basket.png"
import Swim from "./IMG/Swim.png"
import Bowling from "./IMG/Bowling.png"
import card from "./IMG/card.png"
import gamepad from "./IMG/gamepad.png"
import Car from "./IMG/Car.png"

class App extends Component {
    render()
    {
        return(
            <div class="container">
                <div class="card1">
                    <div id="name">
                        <p>Mauricio Londoño</p>
                    </div>

                    <div id="career">
                        <p>Computer Science Student at UTB</p>
                    </div>

                    <div id="email">
                        <div id="mail_img">
                            <img style={{width: '15px'}} src={mail} alt=""/>
                        </div>

                        <div id="gmail">
                            <p>T00049903@utbvirtual.edu.co</p>
                        </div>
                
                    </div>

            <div id="number">
                <div id="phone">
                    <img src={phone} alt=""/>
                </div>
                <div id="contact">
                    <p>+12 3456789012</p>
                </div>
            </div>

            <div id="location">
                    <div id="gps_icon">
                        <img src={gps} alt=""/>
                    </div>
                    <div id="country">
                        <p>Cartagena de Indias, Colombia</p>
                    </div>
            </div>

            <div id="icons">
                <div id="whatsapp">
                    <a href="#">
                        <img style={{width: '26px'}}src={whatsapp} alt=""/>
                    </a>
                </div>

                <div id="instagram">
                    <a href="#">
                        <img style={{width: '26px'}}src={instagram} alt=""/>
                    </a>
                </div>

                <div id="twitter">
                    <a href="#">
                        <img style={{width: '26px'}}src={twitter} alt=""/>
                    </a>
                </div>

                <div id="telegram">
                    <a href="#">
                        <img style={{width: '26px'}}src={telegram} alt=""/>
                    </a>
                </div>

                <div id="linkedin">
                    <a href="#">
                        <img style={{width: '26px'}} src={linkedin} alt=""/>
                    </a>
                </div>
            </div>


            
        </div>

        <div class="card2">
            <div class="description">
                <p>I am known for being a responsible, dedicated, creative person, committed to my work, with ease
                        of adaptation and leadership capacity, problem management, with programming skills in various
                        languages. I successfully solve the problems and overcome the goals proposed by my superiors.</p>
            </div>

            <a class="btn1" href="#">Contact me</a>
        </div>



        <div class="card3">
            <div class="title">
                <p>Preferred Languages</p>    
            </div>

            <div class="cpp">
                <h1>C++</h1>
                <img style={{height: '120px', margin:'20px 0 0 60px'}} src={cpp}/>
                <img style={{height: '120px', padding: '83px 0 0 60px'}} src={eight}/>
            </div>

            <div class="python">
                <h2>Python</h2>
                <img style={{height: '120px', margin:'20px 0 0 60px'}} src={python}/>
                <h1>Skills</h1>
                <img style={{height: '120px', padding: '35px 0 0 60px'}} src={seven}/>
            </div>

            <div class="c">
                <h1>C</h1>
                <img style={{height: '120px', margin:'20px 0 0 60px'}} src={c_logo}/>
                <img style={{height: '120px', padding: '80px 0 0 60px'}} src={five}/>
            </div>
            
        </div>

        <div class="card4">
            <h1>Hobbies</h1>

            <div id="icon1"><img style={{width: '40px'}} src={Basket} alt=""/></div>
            <div class="icon2"><img style={{width: '40px'}} src={Swim}/></div>
            <div class="icon3"><img style={{width: '40px'}} src={Bowling}/></div>
            <div class="icon4"><img style={{width: '25px'}} src={card}/></div>
            <div class="icon5"><img style={{width: '40px'}} src={gamepad}/></div>
            <div class="icon6"><img style={{width: '35px'}} src={Car}/></div>
        </div>
    </div>
        );
    }
}

export default App;