import {React,useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import CateroryCard from '../components/CateroryCard'
import Product from '../components/Product'
import CarouselSlider from '../components/Carousel'
import { CartProvider } from "react-use-cart"
import {authContext} from '../Authenticaton/AuthProvider'
import { Link } from 'react-router-dom'

const Home = () => {

    // ! scroll to top of the page everytime user come to thi page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 

      const history = useHistory()
      // ! checking if user has not loged in then it redirect user to login page
      const {user} = useContext(authContext)
      useEffect(() => {
          if (!user) {
              history.push('/login')
          }
          
      }, [user, history]) 
    return (
        <>
            <CarouselSlider/>
            <CateroryCard />
            <CartProvider>
                <Product/>
            </CartProvider>
        </>
    )
}

export default Home
