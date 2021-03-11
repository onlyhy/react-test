import React, {Component} from 'react';
import TabControl from "./TabControl";

class NavBar extends Component{
    render(){
        const {leftSlot, centerSlot, rightSlot} = this.props;

        return(
            <div className="nav-bar">
                <div className="item left">{leftSlot}</div>
                <div className="item center">{centerSlot}</div>
                <div className="item right">{rightSlot}</div>
            </div>
        )
    }
}

export default class App extends Component {
    constructor(props){
        super(props);
        this.titles = ["流行", "新款", "精选"];

        this.state = {
            currentTitle: "流行"
        }
    }

    itemClick(index) {
        this.setState({
            currentTitle: this.titles[index]
        })
    }

    render() {
        const navLeft = <div>返回</div>;
        const navCenter = <div>标题</div>;
        const navRight = <div>更多</div>;
        return (
            <div>
                <TabControl titles={this.titles} itemClick={index => this.itemClick(index)} />
                <h2>{this.state.currentTitle}</h2>
                <NavBar leftSlot={navLeft} centerSlot={navCenter} rightSlot={navRight} />
            </div>
        )
    }
}