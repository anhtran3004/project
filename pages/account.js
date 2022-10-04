import React, {useState} from 'react'
import Layout from '../Component/layout'
import Order from '../Component/Account/orderHistory';
import Voucher from '../Component/Account/voucher';
import Point from '../Component/Account/point';
import Address from '../Component/Account/address';
import Like from '../Component/Account/like';
import Accounts from '../Component/Account/accounts';
const Account = () => {
  
  const [showMenu, setShowMenu] = useState('1');
  return (
    <Layout>
        <div className="content_account containers">
        <div className='left_account'>
        <h1>Tài khoản</h1>
        <div className='box_menu'>
        <h2>Trần Anh</h2>
        <ul className='option_account'>
            <li onClick={() =>{setShowMenu('1')}} className={showMenu=='1' ? "bor" : ""}><i className='bx bx-package'></i>Đơn hàng của tôi</li>
            <li onClick={() =>{setShowMenu('2')}} className={showMenu=='2' ? "bor" : ""}><i className="fa-light fa-percent"></i>Khuyến mại</li>
            <li onClick={() =>{setShowMenu('3')}} className={showMenu=='3' ? "bor" : ""}><i className='bx bx-palette'></i>C-points</li>
            <li onClick={() =>{setShowMenu('4')}} className={showMenu=='4' ? "bor" : ""}><i className='bx bxs-location-plus' ></i>Sổ địa chỉ</li>
            <li onClick={() =>{setShowMenu('5')}} className={showMenu=='5' ? "bor" : ""}><i className='bx bx-heart' ></i>Yêu thích</li>
            <li onClick={() =>{setShowMenu('6')}} className={showMenu=='6' ? "bor" : ""}><i className='bx bxs-user-circle' ></i>Tài khoản</li>
            <li><i className='bx bx-log-out' ></i>Đăng xuất</li>
        </ul>
        <div className='lh'>
            <h5 style={{fontWeight:"700"}}>Bạn cần hỗ trợ?</h5>
            <p>Vui lòng gọi <span style={{color:"#31cbcb"}}>1800 1198</span>(miễn phí cước gọi)</p>
        </div>
        </div>
        </div>
        <div className="tab_right_account">
          {showMenu == '1' ? (
            <Order />
          ) : null}
          {showMenu == '2' ? (
            <Voucher />
          ) : null}
          {showMenu == '3' ? (
            <Point />
          ) : null}
          {showMenu == '4' ? (
            <Address />
          ) : null}
          {showMenu == '5' ? (
            <Like />
          ) : null}
          {showMenu == '6' ? (
            <Accounts />
          ) : null}
        </div>
        </div>
    </Layout>
  )
}

export default Account