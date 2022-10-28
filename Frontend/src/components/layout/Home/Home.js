import react from 'react'
import {Fragment} from 'react'
import { FaMouse } from "react-icons/fa"
import './Home.css'
import Product from './Product'

const product ={
    name:"Orange Tshirt",
    images:[{url:"https://explosiontshirt.com/wp-content/uploads/2018/10/men-saftey-orange-tshirt-gildan-adult-front1.jpg"}],
    price:3000,
    _id:"imran"
}

const Home =()=>{
    return <Fragment>
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
                <button>
                    Scroll <FaMouse/>
                </button>

            </a>
        </div>
        <h2 className='homeheading'>Featured Products</h2>
        <div className='container' id='container'>
            <Product product={product}/>
        </div>
    </Fragment>
}

export default Home