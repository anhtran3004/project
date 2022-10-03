import React from 'react'
import Layout from '../Component/layout'

const account = () => {
  return (
    <Layout>
        <div className="content_account containers">
        <div className='left_account'>
        <h1>Tài khoản</h1>
        <div className='box_menu'>
        <h2>Trần Anh</h2>
        <ul className='option_account'>
            <li><i className='bx bx-package'></i>Đơn hàng của tôi</li>
            <li><i className="fa-light fa-percent"></i>Khuyến mại</li>
            <li><i className='bx bx-palette'></i>C-points</li>
            <li><i className='bx bxs-location-plus' ></i>Sổ địa chỉ</li>
            <li><i className='bx bx-heart' ></i>Yêu thích</li>
            <li><i className='bx bxs-user-circle' ></i>Tài khoản</li>
            <li><i className='bx bx-log-out' ></i>Đăng xuất</li>
        </ul>
        <div className='lh'>
            <h5>Bạn cần hỗ trợ?</h5>
            <p>Vui lòng gọi 1800 1198(miễn phí cước gọi)</p>
        </div>
        </div>
        </div>
        <div className="tab_right_account"></div>
        </div>
    </Layout>
  )
}

export default account