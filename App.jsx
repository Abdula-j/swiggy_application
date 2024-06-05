import React from 'react'
import './App.css'
const Header=()=>{
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="https://cdn2.vectorstock.com/i/1000x1000/49/86/logo-for-grocery-store-vector-22844986.jpg"/> 
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

const Body=()=>{
  return(
    <div>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
    </div>
  )
}

const RestaurantCard=()=>{
  return (<div className='res-card'>
    <img className='res-card-logo' src="https://assets.cntraveller.in/photos/622b5939810f046cc2f6dc7c/3:2/w_3198,h_2132,c_limit/488481490" alt="res-card-image"/>
    <h3>Meghana Foods</h3>
    <h4>Biryani, chinese, North Indian</h4>
    <h4>4.3 stars</h4>
    <h4>38 minutes</h4>
  </div>)
}

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

export default AppLayout