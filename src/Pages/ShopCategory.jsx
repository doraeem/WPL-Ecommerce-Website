import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  console.log(all_product);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {/* {all_product.map((item,i)=>{
          // if(props.category===item.category){
             <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            console.log("getting " + item.name);
          // }
          // else{
          //   return null;
          // }
        })} */}
        {all_product.map((item)=> 
        item.category == props.category ?
        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> : "")}
      </div>
        
    </div>
  )
}


const Item = (props) => {
  return (
    <div className='item'>
        <Link to={'/product/${props.id}'}><img onClick={window.scrollTo(0,0)} src={props.image} alt=" " /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}

            </div>
            <div className="item-price-old">
                ${props.old_price}
                
            </div>
        </div>

    </div>
  )
}
//export default ShopCategory;
