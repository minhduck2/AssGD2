import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCT } from '../context/product'
import { IProduct } from '../interface/product'
import api from '../config/axios'
import { GetDetailProductByID } from '../services/product'

type Props = {}

const Detail = (props: Props) => {
  const [product,setProduct] = useState<IProduct>({} as IProduct)
  const param = useParams()
  useEffect(()=>{
   fetch(`http://localhost:3000/products/${param?.id}`).then(res=>res.json())
   .then((data:IProduct)=>{
    setProduct(data)
   }).catch(error => console.log(error));
  },[])
  return (
    <>
    <>
    <div className="container">
        <div className="IFproduct flex justify-center p-[10px] items-center mt-[50px]">
          <div >
            <img className="image_product w-[355px] h-[355px] bg-[#000000] mr-[90px]" src={product.image} alt="" />
            <div className="flex mt-5 space-x-2">
          <img className="w-[110px] object-cover" src={product.image} alt="Thumbnail 1" />
          <img className="w-[110px] object-cover" src={product.image} alt="Thumbnail 2" />
          <img className="w-[110px] object-cover" src={product.image} alt="Thumbnail 3" />
        </div>
          </div>
          <div className="Info mt-24">
            <h3 className="text-[14px] text-left text-[#4E7C32] font-bold">{product.category}</h3>
            <h1 className="text-[44px] text-[#1D2025] text-left font-bold">
             {product.name}
            </h1>
            <p className="text-[16px] mb-[20px] text-left text-[#68707D]">
              {product.mota}
              <br />
             
            </p>
            <p className="text-[30px] font-bold text-left text-[#1D2025]">${product.price}</p>
            <p className="text-lg font-bold text-left line-through text-[#1D2025]">$125.00</p>
            <div className="flex space-x-4 mt-5">
              <div className="flex items-center bg-muted p-2 rounded-lg">
                <button className="text-muted-foreground px-2">-</button>
                <span className="px-4 text-foreground text-[#1D2025]">3</span>
                <button className="text-muted-foreground px-2">+</button>
              </div>

              <button className="flex items-center bg-[#4E7C32] text-[white] w-[200px] pl-[40px] text-primary-foreground p-2 rounded-lg">
                <img
                  aria-hidden="true"
                  alt="shopping-cart"
                  src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                  className="mr-2"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="description ml-[70px] mt-[80px]">
          <h1 className="text-[#4E7C32] text-left text-[30px] mb-[10px]">Mô tả</h1>
          <p className="text-[#665345] text-left text-[20px]">
          Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ
          . Lorem Ipsum đã là văn bản giả chuẩn của ngành công nghiệp kể từ những năm 1500, khi một thợ in vô danh lấy một galley
            <br /> gõ và xáo trộn 
          </p>
        </div>
        <div className="about ml-[70px] mt-[80px]">
          <h1 className="text-[#4E7C32] text-[30px] text-left mb-[10px]">Về</h1>
          <p className="text-[#665345] text-[20px] text-left">
          Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ
          . Lorem Ipsum đã là văn bản giả chuẩn của ngành công nghiệp kể từ những năm 1500, khi một thợ in vô danh lấy một galley
            <br /> gõ và xáo trộn 
          </p>
        </div>
        <div className="p-4 ml-[50px] mt-[80px] mr-[20px]">
          <div className="flex items-start">
            <img
              src={product.image}
              className="w-24 h-24 mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center mb-2">
<div className="flex space-x-1 text-zinc-500">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <span className="text-green-600 text-2xl ml-2">5.0</span>
                <span className="text-zinc-500 ml-1">(388)</span>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
              Viết đánh giá
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-1">
              <span className="text-sm">1⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-blue-500 h-2 w-[100%]"></div>
              </div>
              <span className="text-sm text-zinc-500">(388)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">2⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[80%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">3⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">4⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[40%]"></div>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <span className="text-sm">5⭐</span>
              <div className="w-full bg-zinc-200 h-2 mx-2">
                <div className="bg-zinc-400 h-2 w-[20%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2">
          <div className="border-t pt-4"></div> 
    <div className="border-t pt-4">
        <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
        <p className="text-zinc-700">
        Tôi đã sử dụng loại sữa rửa mặt này trong khoảng năm hoặc sáu tháng nay
và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự đã vật lộn trong
nhiều năm với làn da của mình và đã thử mọi cách có thể nhưng đây là
thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và
chắc chắn sẽ tiếp tục sử dụng.
        </p>
    </div>
    <div className="border-t pt-4">
        <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
        <p className="text-zinc-700">
        Tôi đã sử dụng loại sữa rửa mặt này trong khoảng năm hoặc sáu tháng nay
và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự đã vật lộn trong
nhiều năm với làn da của mình và đã thử mọi cách có thể nhưng đây là
thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và
chắc chắn sẽ tiếp tục sử dụng.
        </p>
    </div>
    
    <div className="border-t pt-4">
        <p className="text-green-600 font-bold">Aman gupta ⭐⭐⭐⭐⭐</p>
        <p className="text-zinc-700">
        Tôi đã sử dụng loại sữa rửa mặt này trong khoảng năm hoặc sáu tháng nay
và mụn của tôi gần như đã biến mất hoàn toàn. Tôi thực sự đã vật lộn trong
nhiều năm với làn da của mình và đã thử mọi cách có thể nhưng đây là
thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và
chắc chắn sẽ tiếp tục sử dụng.
        </p>
    </div>
</div>
          <div className="mt-4 text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
            Nhìn thấy tất cả
            </button>
          </div>
        </div>
        
      </div>
    </>
    </>
  )
}

export default Detail