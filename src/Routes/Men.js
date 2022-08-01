import {React,useEffect} from 'react'
import data from '../components//data'
import Catagory from '../components/Catagory'
import { CartProvider } from "react-use-cart"

const Men = () => {

    // ! scrolling to top of the page everytime user come to this page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 
      
    const men = data.productDataForAll.filter((val)=>val.catagory=='men')
    return (
        <div>
        <CartProvider>
            <Catagory men={men}/>
        </CartProvider>
        </div>
    )
}

export default Men
