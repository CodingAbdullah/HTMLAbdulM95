import { Component } from 'react';

class Lichess extends Component {

    constructor(props){
        super(props);

        this.state = {
            userData: null,
            isLoading: false,
            status: ""
        }
    }

    // Working with the Lichess API to export and visualize my personal Chess stats.
    componentDidMount = () => {
        this.setState({isLoading: true});
        
        // enabling cors and authorization token (hidden for now)
        const init = {
            method: 'get',
            headers : {
                'accepts': 'application/json',
                'content-type': 'application/json',
                'Authorization': 'Bearer <TOKEN IS A SECRET TO BE ADDED LATER',
                'Access-Control-Allow-Origin':  "https://lichess.org/api/account"
            },
            mode: 'cors'
        }

        fetch("/api/account", init)
        .then(res => res.json())
        .then(response => {
            this.setState({userData: response, status: response.online, isLoading: false});
           // const isOnline = this.state.userData.online;
            console.log(this.state.status);
        })
        .catch(err => {
            this.setState({userData: err})
            console.log(err);
        })
    }

    render() {

        if (this.state.isLoading){
            return (
                <h1>Is Loading...</h1>
            )
        }
        else {
            return (
                <div className="lichess">
                    <h1>Hello World!</h1>
                    <p>{this.state.status}</p> 
                </div>
            )   
        }
    }
}

export default Lichess;