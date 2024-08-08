import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../config/axios'
import { IProduct } from '../interface/product'
import ProductItem from './productItem'

type Props = {}

const Search = (props: Props) => {
  const [search] = useSearchParams()
  const [products,setProducts]= useState<IProduct[]>([])
  const [keywords,setKeywords] = useState<string>('')
  useEffect(()=>{
    
    (async()=>{
      const {data} = await api.get('products?name_like=' +search.get('keyword'))
      setProducts(data)
      setKeywords(search.get('keyword') as string)
    })()
    
  },[search])
  return (
    <>
    <h1 className='text-center my-5'> Kết quả tìm kiếm :<strong>{keywords}</strong> </h1>
    <div className='grid grid-cols-4 gap-x-6 '>
      { products.map((product:IProduct) =>(
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    </>
  )
}

export default Search