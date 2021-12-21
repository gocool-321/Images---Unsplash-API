import React, { Component } from 'react'

export default class BackGroundChanger extends Component {
  state = {
    url: "",
    height : window.innerHeight,
width : window.innerWidth
  }
  componentDidMount(){
    this.APIData()
    setInterval(this.APIData, 2000);
  }
  APIData = async ()=>{
    var height = window.innerHeight
    var width = window.innerWidth
    // https://source.unsplash.com/random/300x200
    
    const promise = await fetch(`https://source.unsplash.com/random/${width}x${height}`)
    this.setState({url : promise.url,height,width})
  }

  render() {
    return (
      <img 
       src={this.state.url} alt="The Pic"/>
    );
  }
}