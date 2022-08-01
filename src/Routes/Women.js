import {React,useEffect} from 'react'
import data from '../components//data'
import Catagory from '../components/Catagory'
import { CartProvider } from "react-use-cart"

const Women = () => {

    // ! scroll to top of the page everytime user come to this page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])  

    const women = data.productDataForAll.filter((val)=>val.catagory=='women')
    return (
        <div>
        <CartProvider>
            <Catagory women={women}/>
        </CartProvider>    
        </div>
    )
}

export default Women
