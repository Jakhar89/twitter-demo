import React, { Component } from 'react';
import './search.css';
import gql from 'graphql-tag';
//import {Query} from 'react-apollo';
import { withApollo } from 'react-apollo';


const newQ  = gql`
query timelinesQuery($var: String){ 
    timelines(screen_name:$var) {
    id
    id_str
    text
    favourited
    user {
        name
      }
    }
}
`;

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      searchText:'',
      like:[]
    };  
    let {smallText,func} = this.props 
    this.smallText=(smallText)?smallText:`Use Twitter user/handle name to capture tweets`;
    this.call=func;
  }
  
  
  inputChange=(e)=>{
    this.setState({searchText:e.target.value})
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
 
  //implementing the GraphQL with Apollo Client
  
  queryS = ()=>{
    this.props.client.query({query:newQ,variables:{var:this.state.searchText}})
    .then(({data})=>this.setState({tweets:data.timelines},()=>console.log(data)))
  }
  
  
  

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Search Twitter</h1>
        
          <small>{this.smallText}</small>
          <div>
            <input type='text' onChange={this.inputChange}/>
            <button onClick={(this.call==='keyword')?this.keyword:this.queryS}>Search</button>
          </div>
          {(this.state.tweets )?
            <React.Fragment>
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
                })}
              </ul>
            </React.Fragment>
              :null
          }
      </div>
    );
  }
}

export default withApollo(Search);
