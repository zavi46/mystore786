import {React,useEffect} from 'react'
import data from '../components//data'
import Catagory from '../components/Catagory'
import { CartProvider } from "react-use-cart"

const Accessory = () => {
    
    // ! scroll to top of the page everytime user come to thi page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

    const other = data.productDataForAll.filter((val)=>val.catagory=='other')
    return (
        <div>
        <CartProvider> 
            <Catagory accessory={other}/>
        </CartProvider>
        </div>
    )
}

export default Accessory
