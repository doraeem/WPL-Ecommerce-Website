import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionboc-nav-box">Description</div>
            <div className="descriptionboc-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a platform that allows businesses to sell products or services online.
               It enables customers to browse products, add them to a virtual shopping cart, and make purchases
                securely over the internet. E-commerce websites typically provide features such as product listings,
                 search functionality, product details, shopping cart management, payment processing, order tracking, 
                 and customer account management.</p>
        </div>

    </div>
  )
}
