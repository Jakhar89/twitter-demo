import React, { Component } from 'react';
import './keyword.css';
import Search from '../search/search';

class Keywords extends Component{

    render(){
        return(
            <Search smallText='Keyword Search' func='keyword' />
        )
    }
}

export default Keywords