import React, { Component } from 'react';
import './tweeting.css';

class Tweeting extends Component{
    constructor() {
        super();
        this.state = {
          tweet: {},
          text:null
        };
        
      }
    handleChange=(e)=>{this.setState({text:e.target.value})}
    posting=()=>{
        fetch(`/api/tweetPost?key=${this.state.text}`)
            .then(res => res.json())
            .then(tweet => this.setState({tweet:tweet,text:null}, () => console.log('Customers fetched...', tweet)));
    }
    render(){
        return(
            <React.Fragment>
                <h2>Post a new Tweet</h2>
                <div>
                    <textarea className='text-area' onChange={this.handleChange}/>
                    <br/>
                    <button className='post-tweet' onClick={this.posting}>Tweet</button>
                </div>
                {
                    (Object.keys(this.state.tweet).length>0 )?
                        <ul>
                            <li>Happy Tweeting!! Mr {this.state.tweet.user.name}</li>
                            <li>Created: {this.state.tweet.created_at}</li>
                            <li>Tweet text: {this.state.tweet.text}</li>
                            <li>Handle: @{this.state.tweet.user.screen_name}</li>
                        </ul>
                        :null
                }
            </React.Fragment>
        )
    }
}

export default Tweeting;