
import React, {Component} from "react"
import ReactDom from "react-dom"
import Dock from 'react-dock';
import '../css/main.css';
import TextDetail from "./components/presentational/TextDetail.js"
import logo from '../../images/logo.png';


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
                            <section className="card-header">
                                <p>Title Deed</p>
                                <p>{cardDetails.name}</p>

                            </section>
                            <section className="card-content">
                                <p>Rent $ {cardDetails.rent}</p>
                                <p>with 1 House $ {cardDetails.houseRentModifier[0]}</p>
                                <p>with 2 House $ {cardDetails.houseRentModifier[1]}</p>
                                <p>with 3 House $ {cardDetails.houseRentModifier[2]}</p>
                                <p>with 4 House $ {cardDetails.houseRentModifier[3]}</p>
                                <p>With {cardDetails.hotelPricingModifier[0]} $ 250 Mortgatge Value of ${cardDetails.MortgatgeValue}</p>
                                <p>Houses cost ${cardDetails.housePrice} each</p>
                                <p>Hotels cost $ {cardDetails.hotelcost} each plus four houses</p>
                                <p className="fine-print">
                                    if a player ownas ALL the Lots of any Color-Group, the rent is Doubled on Unimproved Lots in that group.
                                </p>
                            </section>
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