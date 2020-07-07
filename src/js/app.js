
import React, {Component} from "react"
import ReactDom from "react-dom"
import Dock from 'react-dock';
import '../css/main.css';
import logo from '../../images/logo.png';
import PropertyCard from "./components/presentational/property-card"

class App extends Component{
    constructor(){
        super();
        this.state = {
            isLeftVisible:true,
            isBottomVisible:true,
            label:"Current Owner",
            cardDetails: {
                name: 'Mediterranean ave.',
                rent:2,
                houseRentModifier:[10,30,90,90],
                hotelPricingModifier:[250],
                MortgatgeValue:30,
                housePrice:50,
                hotelcost:50,
                hotelExchangeRate:4,
            }
        };
    }
    render(){
        const { cardDetails } = this.state;
        return(

            <div>
                <header>
                    <div>
                        <h1>Monopoly</h1>
                        <img height={100} width={100} src={logo}/>
                        <h2>written by Alejandro</h2>
                    </div>
                </header>
                {/* //content window */}
                <section className="content">
                <Dock dimMode="none" position='left' isVisible={this.state.isLeftVisible}>
                    {/* you can pass a function as a child here */}
                    {/* todo: break out into close icon component */}
                    
                    <div onClick={() => this.setState({ isLeftVisible: !this.state.isLeftVisible })}>X</div>

                    <div className="flex-container">
                    <div className="img-detail component">
                        <span className="label">You have landed on: </span>
                        {/*<img src="http://via.placeholder.com/300x300" alt=""/>*/}
                        <div className="swatch">
                            <PropertyCard property={this.state.cardDetails}/>
                        </div>
                    </div>
                </div>
                </Dock>
                </section>
            
            </div>
        )
    }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDom.render(<App/>, wrapper): false; 