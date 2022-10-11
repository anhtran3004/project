import React, { useState } from 'react'

const login = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <div className='modal_login'>
                <div className='modal_overlay_login'></div>
                <div className='modal_body_login'>
                    <div className='modal_inner_login'>
                        <div className='option_login'>
                            <div className='op_l'>Đăng nhập</div>
                            <div className='op_l'>Khách hàng mới</div>
                        </div>
                        {login ? <>
                            <div>Cảm ơn bạn đã trở lại</div>
                            <form>
                                <input placeholder='Vui lòng nhập số điện thoại'></input>
                                <input placeholder='Vui lòng nhập mật khẩu'></input>
                                <button type="submit">Tiếp tục</button>
                            </form>
                            <div>Bằng việc chọn tiếp tục, bạn đã đồng ý với<span style={{ color: "#63b1bc" }}>Điều khoản & Điều kiện</span>  cùng <span style={{ color: "#63b1bc" }}>Chính sách bảo mật và chia sẻ thông tin</span> của SHOP</div>
                        </> : <>
                            <div>Đăng ký để Canifa có cơ hội phục vụ bạn tốt hơn.</div>
                            <form>
                                <input placeholder='Vui lòng nhập số điện thoại'></input>
                                <input placeholder='Vui lòng nhập mật khẩu mới'></input>
                                <input placeholder='Vui lòng xác nhận mật khẩu'></input>
                                <button type="submit">Tiếp tục</button>
                            </form>
                            <div>Bằng việc chọn tiếp tục, bạn đã đồng ý với<span style={{ color: "#63b1bc" }}>Điều khoản & Điều kiện</span>  cùng <span style={{ color: "#63b1bc" }}>Chính sách bảo mật và chia sẻ thông tin</span> của SHOP</div>
                        </>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default login