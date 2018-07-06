
import React, {Component} from "react"
import ReactDom from "react-dom"
import Dock from 'react-dock';
import '../css/main.css';
import TextDetail from "./components/presentational/TextDetail.js"

class App extends Component{
    constructor(){
        super();
        this.state = {
            isLeftVisible:true,
            isBottomVisible:true,
            label:"Current Owner",
            detail:""
        };
    }
    render(){
        return(

            <div>
                <header>
                    <div>
                        <h1>Texel</h1>
                        <h2>Color Plot</h2>
                    </div>
                </header>
                <Dock dimMode="none" position='left' isVisible={this.state.isLeftVisible}>
                    {/* you can pass a function as a child here */}
                    <div onClick={() => this.setState({ isLeftVisible: !this.state.isLeftVisible })}>X</div>

                   <div className="flex-container">
                       <TextDetail label={"current owner"} detail={"0xca9b1"}/>
                       <TextDetail label={"current Auction owner"} detail={"0xca9b1"}/>
                       <TextDetail label={"leading bid"} detail={".439 ETH"} subDetail={"Bid closes in 45 blocks (approx 7 hours)"}/>
                       <div className="img-detail component">
                           <span className="label">title</span>
                           {/*<img src="http://via.placeholder.com/300x300" alt=""/>*/}
                           <div className="swatch"></div>
                       </div>
                   </div>
                </Dock>
                {/*<Dock dimMode="none" position='bottom' isVisible={this.state.isBottomVisible}>*/}
                    {/*/!* you can pass a function as a child here *!/*/}
                    {/*<div onClick={() => this.setState({ isBottomVisible: !this.state.isBottomVisible })}>X</div>*/}
                {/*</Dock>*/}
            </div>
        )
    }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDom.render(<App/>, wrapper): false;