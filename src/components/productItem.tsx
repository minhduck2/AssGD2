import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    product:IProduct
}
const ProductItem = ({product}: Props) => {
  return (
    <div className=" h-[340px] ml-8  bg-white">
      <img
        src={product.image}
        className="img w-[235px] h-[230px] bg-white ml-[35px] mt-[20px]"
      ></img>
      <p className='text-[#665345] ml-5'>{product.category}</p>
      <div className="tt flex justify-between m-[20px] mr-[50px]">
        <div className="name text-[#665345]"><Link to={`detail/${product.id}`}>{product.name}</Link> </div>
        <div className="price text-red-600">{product.price}</div>
      </div>
    </div>
  )
}
export default ProductItem