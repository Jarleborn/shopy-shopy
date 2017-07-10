import React, { Component } from 'react'
import { Collection, CollectionItem } from 'react-materialize'

class Sidebar extends Component{
  render() {
    return (
      <Collection>
        <CollectionItem href='#' active>Home</CollectionItem>
        <CollectionItem href='#'>Pages</CollectionItem>
        <CollectionItem href='#'>Products</CollectionItem>
        <CollectionItem href='#'>Customers</CollectionItem>
        <CollectionItem href='#'>Billing</CollectionItem>
        <CollectionItem href='#'>Settings</CollectionItem>
      </Collection>)
  }
}

export default Sidebar
