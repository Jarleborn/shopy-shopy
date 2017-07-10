import React, { Component } from 'react'
class Pages extends Component{
  constructor(props){
  	super(props)
  	this.state = ({'pages':null})
  }

  componentDidMount(){
    fetch('http;//localhost:1337/getPages', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      const pagess = res.json()
      this.setState({'pages':pagess})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    return(
      <p>bajs</p>
    )
  }
}

export default Pages
