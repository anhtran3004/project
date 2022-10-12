import React from 'react'
import Head from 'next/head'
const love = () => {
  return (
    
    <>
    <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
    </Head>

    <div className='notifi_love'>
    <i className='bx bxs-shopping-bags'></i>
    <p className='notifi_text'>Sản phẩm đã được thêm vào danh sách yêu thích</p>
    <i className='bx bx-x'></i>
    </div>
    </>
  )
}

export default love