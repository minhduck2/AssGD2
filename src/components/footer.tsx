import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className="footer-top h-[282px]  bg-[#053D29] flex ">
          <div className=" text-white ml-[40px] mr-[80px] w-[600px]  mt-[60px]">
            <p className=" ">
            Việc khách hàng tuân theo quy trình huấn luyện là rất quan trọng, nhưng tôi làm
            Vào lúc đó họ lâm vào tình trạng lao động và đau đớn tột độ
            </p>
          </div>
          <div className='grid grid-cols-3'>
          <div className=" text-white mr-[10px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">Um</h3>
            <ul>
              <li>Liên hệ chúng tôi</li>
              <li>chúng ta</li>
              <li>Sự nghiệp</li>
              <li>Thông tin công ty</li>
            </ul>
          </div>
          <div className=" text-white  ml-[50px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">Hilfe</h3>
            <ul>
              <li>Liên hệ chúng tôi</li>
              <li>Về chúng tôi</li>
              <li>Sự nghiệp</li>
              <li>Thông tin công ty</li>
            </ul>
          </div>
          <div className=" text-white  ml-[70px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">pOLITIK</h3>
            <ul>
            <li>Liên hệ chúng tôi</li>
              <li>Về chúng tôi</li>
              <li>Sự nghiệp</li>
              <li>Thông tin công ty</li>
            </ul>
          </div>
          </div>
        </div>
        <div className=" text-white h-[43.5px] bg-[#062F21] mt-[2px]"></div>
      </footer>
  )
}

export default Footer