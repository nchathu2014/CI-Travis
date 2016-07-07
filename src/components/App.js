import  React from 'react';
import sum from '../js/sum';

class App extends React.Component{

    constructor(props){
        super(props);
        console.log("App initialized...");
        this.onClick=this._onClick.bind(this);
    }

    render(){
        return(
            <div onClick={this._onClick}>
                <h3>CI with Travis CI</h3>
                 {sum(10,80)}
            </div>
        );
    }

    _onClick(){
        console.info("onClick from React");
    }
}

export default App;