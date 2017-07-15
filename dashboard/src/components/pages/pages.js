import React, { Component } from 'react'
class Pages extends Component{
  constructor(props){
  	super(props)
  	this.state = ({'pages':null})
  }

  componentDidMount(){
    fetch('http://localhost:1337/getPages', {
      method: 'GET',
      mode: 'cors',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // },
    })
    .then(res => {
      const pagesFound = res.json()
      return pagesFound
    })
    .then(pagesFound => {
      console.log(pagesFound)
      this.setState({'pages':pagesFound})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    console.log(this.state.pages)
    return(
      // <ul>
      //   <li> hej</li>
      // // {this.state.pages.map(listValue =>{
      // //   return <li> {listValue} </li>
      // // })}
      // </ul>

      <p> yoyo </p>
    )
  }
}

export default Pages
