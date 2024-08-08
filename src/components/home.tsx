import React, { useContext } from 'react'
import { IPCategory, IProduct } from '../interface/product'
import ProductItem from './productItem'
import { ProductCT } from '../context/product'
import Form_gmail from './form_gmail'
import { CategoryCT } from '../context/category'


const Home = () => {
  const {products} = useContext(ProductCT)
  const {Categorys} = useContext(CategoryCT)
  return (
    <div className="container bg-white">
        <div className="bg-gradient-to-r from-[#B5DCB0]  from-40% h-[470px] rounded-lg  flex flex-col md:flex-row items-center">
          <div className="ml-44  text-wrap">
            <h2 className="text-5xl text-left text-[#505F4E] font-bold text-primary">
            Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
            </h2>
            <p className="text-base w-[450px] text-left mt-4 text-[#505F4E]">
            Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những năm 1500.
            </p>
            <button className="mt-6 mr-[350px] w-[150px] rounded  bg-[#B5DCB0] border-4 border-[#505F4E] text-[#505F4E] hover:bg-secondary/80 py-2">
            Tìm Hiểu Thêm
            </button>
          </div>
          <div className="w-3/6 ">
            <img src="src/upload/bg1.png" alt="Plant in pot" className="" />
          </div>
        </div>
        <h2 className="mt-[80px] ml-[200px] text-xl text-[#505F4E] font-bold text-[40px]">
        Bán chạy nhất
        </h2>

        <div>
        <div className="bestSeller relative  w-full h-full mt-[50px] bg-white">
          <div className="item grid grid-cols-4 justify-center">
            {products.map((product:IProduct)=>(
                <ProductItem product={product}/>
            ))}
          </div>
        </div>
     
        <div className="grid sticky  mt-6 w-[1034px] mx-auto grid-rows-12 grid-flow-col  gap-4">
              <div className="row-span-12 ">
                <img src="src/upload/5.png" alt="" />
              </div>
              <div className="row-span-6 ">
                <img src="src/upload/6.png" alt="" />
              </div>
              <div className="row-span-6 ">
                <img src="src/upload/7.png" alt="" />
              </div>
              <div className="row-span-6 ">
                <img src="src/upload/8.png" alt="" />
              </div>
              <div className="row-span-6 ">
              <img src="src/upload/9.png" alt="" />
              </div>  
          </div>
          </div>
        <h2 className="mt-[80px] ml-[200px] text-xl text-[#505F4E] font-bold text-[40px]">
          Thể Loại
        </h2>
        
        <div className="category mt-[50px]">
          <div className="grid grid-cols-4 gap-4 p-4">
          
          
        {Categorys.map((categorys: IPCategory) => (
          <div className="relative group">
          
            <img src={categorys.image} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 group-hover:bg-opacity-75 transition">
              <h3 className="text-lg font-semibold">{categorys.name}</h3>
              <p>30 items</p>
            </div>
            
          </div>
        ))}    
       
       
        
          </div>
        </div>
        <Form_gmail />
      </div>
  )
}

export default Home