import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: [],
      searchText:null,
      like:[]
    };  
    let {smallText,func} = this.props 
    this.smallText=(smallText)?smallText:`Use Twitter user/handle name to capture tweets`;
    this.call=func;
  }
  
  
  inputChange=(e)=>{
    this.setState({searchText:e.target.value})
  }

  search = ()=>{
    fetch(`/api/twitter?key=${this.state.searchText}`)
      .then(res => res.json())
      .then(tweet => this.setState({tweets: tweet}, () => console.log('Customers fetched...', tweet)));
  } 

  keyword = ()=>{
    fetch(`/api/search?key=${this.state.searchText}`)
  .then(res => res.json())
  .then(tweet => this.setState({tweets: tweet.statuses}, () => console.log('Customers fetched...', tweet)));
}
  
like = (e)=>{
  fetch(`/api/like?key=${e}`)
  .then(res => res.json())
  .then(like => this.setState({like:this.state.like.concat([like.id])}, () => console.log('Customers fetched...', this.state.like)));
}
  

  render() {
    return (
      <div>
        <h1>Search Twitter</h1>
          <small>{this.smallText}</small>
          <div>
            <input type='text' onChange={this.inputChange}/>
            <button onClick={(this.call==='keyword')?this.keyword:this.search}>Search</button>
          </div>
          <h3>{(this.state.tweets.length>0 && this.call!=='keyword')?this.state.tweets[0].user.name:null}</h3>
          <ul>
            {this.state.tweets.map(el => {
              let check = this.state.like.includes(el.id);
              let fav = el.favorited
              
              return <li key={el.id} className={(check||fav)?'liked':null}>
                        {el.text}  
                        {(!(check||fav))?<button className='like-btn' onClick={this.like.bind(this,el.id_str)}>Like</button>
                        :null}
                      </li>
            }
              
            )}
          </ul>
      </div>
    );
  }
}

export default Search;
