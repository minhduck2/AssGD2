import React, { useContext, useEffect, useState } from "react";
import Form_gmail from "./form_gmail";
import ProductItemCategory from "./productIteamCategory";
import { ProductCT } from "../context/product";
import { IPCategory, IProduct } from "../interface/product";
import { CategoryCT } from "../context/category";
import { Link, useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const { Categorys, } = useContext(CategoryCT);
  const { products,onUpdateData } = useContext(ProductCT);
  const {id} = useParams()
  useEffect(()=>{
   if(id) onUpdateData(id)
  },[id])
  
 
  return (
    <>
      {/* banner */}
      <div className="bg-gradient-to-r from-[#B5DCB0]  from-40% h-[200px] rounded-lg  flex flex-col md:flex-row items-center">
        <div className="ml-44 text-wrap">
          <h2 className="text-5xl text-left text-[#505F4E] font-bold text-primary">Chậu và hộp đựng</h2>
        </div>
      </div>
      {/* category */}
      <div className="grid grid-cols-4 gap-4 p-4">
        {Categorys.map((category: IPCategory) => (
          <Link
            key={category.id}
            className={`bg-[#B5DCB0] justify-around flex p-4 rounded-lg shadow-md cursor-pointer`}
           to={"/category/" +category.id}
          >
            <img alt="" className="w-[35px]" src={category.image} />
            <span className="mt-2 text-[#505F4E]">{category.name}</span>
          </Link>
        ))}
      </div>

      {/* product */}
      <div className="container grid grid-cols-5 mx-auto gap-16 p-4">
        <div className="grid grid-cols-1 col-span-4 gap-4">
          <div className="content_left grid grid-cols-3 gap-9 bg-gradient-to-t from-white to-green-100">
            {products.map((product: IProduct) => (
              <ProductItemCategory key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-2xl text-[#505F4E]">Thể loại</h2>
          <div className="flex text-left text-[#333333] flex-col mt-2">
            <label><input type="checkbox" /> Chậu vuông</label>
            <label><input type="checkbox" /> Chậu tròn</label>
            <label><input type="checkbox" /> Đế lót ly</label>
            <label><input type="checkbox" /> Chậu trồng cây</label>
          </div>
          <div className="mt-8">
            <h2 className="font-semibold">Trồng cây yêu thích của riêng bạn</h2>
            <img src="src/images/annie-spratt-ncQ2sguVlgo-unsplash 1.png" alt="Plant" className="w-[200px] h-[250px] object-cover mt-2" />
          </div>

          <div className="p-4">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-[#333333] text-foreground">Lọc theo giá</label>
              <input type="range" min="0" max="8000" className="w-full accent-green-900" />
              <div className='flex justify-between'>
                <span className="text-muted-foreground text-[#333333]">Từ $0 đến $8000</span>
                <span className="text-muted-foreground text-[#333333]">Lọc</span>
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-foreground text-[#333333]">Lọc theo kích thước</label>
              <input type="range" min="0" max="100" className="w-full accent-green-900" />
              <div className='flex justify-between'>
                <span className="text-muted-foreground text-[#333333]">2 mm x 50</span>
                <span className="text-muted-foreground text-[#333333]">Lọc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
