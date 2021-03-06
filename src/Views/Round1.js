import React, {Component} from "react";
import "./roun1.css";


import Bounce from "react-reveal/Bounce";
import Content from "../Components/Content";
import Footer from "../Components/Footer";


class Round1 extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Bounce top>
                        <h1>Hunt The Code</h1>
                    </Bounce>
                    <Bounce top delay="200">
                        <h2 className="Heading">Round 2</h2>
                    </Bounce>
                    <Bounce top delay="600">
                        <Content/>
                    </Bounce>
                </div>
                <br/>
                <br/>
                <Bounce bottom>
                    <Footer/>
                </Bounce>
            </div>
        );
    }
}

export default Round1;
