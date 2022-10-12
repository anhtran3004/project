import React, { useState } from 'react'

const Login = () => {
    const [showLogin, setShowLogin] = useState(1);
    const [showBoxLogin, setShowBoxLogin] = useState(false);
    return (
        <>
            <div className='modal_login'>
                <div className='modal_overlay_login'></div>
                <div className='modal_body_login'>
                    <div className='modal_inner_login'>
                        <div className='close_login' onClick={() => setShowBoxLogin(false)}>
                        <i className='bx bx-x'></i>
                        </div>
                        <div className='option_login'>
                            <div className={'op_l ' + (showLogin == 1 ? "active_login" : "")} onClick={() => { setShowLogin(1) }}>
                                Đăng nhập
                                {showLogin == 1 ? <>
                                    <div className='under_line'></div>
                                </> : null}

                            </div>
                            <div className={'op_l ' + (showLogin == 2 ? "active_login" : "")} onClick={() => { setShowLogin(2) }}>Khách hàng mới
                                {showLogin == 2 ? <>
                                    <div className='under_line_k'></div>
                                </> : null}
                            </div>
                        </div>
                        {showLogin == 1 ? <>
                            <div className='text_lo'>Cảm ơn bạn đã trở lại</div>
                            <form>
                                <input placeholder='Vui lòng nhập số điện thoại'></input><br></br>
                                <input placeholder='Vui lòng nhập mật khẩu'></input>
                                <button type="submit">Tiếp tục</button>
                            </form>
                            <div style={{marginLeft:"20px"}}>Bằng việc chọn tiếp tục, bạn đã đồng ý với <span style={{ color: "#63b1bc" }}>Điều khoản & Điều kiện</span>  cùng <span style={{ color: "#63b1bc" }}>Chính sách bảo mật và chia sẻ thông tin</span> của SHOP</div>
                        </> : <>
                            <div className='text_lo'>Đăng ký để Canifa có cơ hội phục vụ bạn tốt hơn.</div>
                            <form>
                                <input placeholder='Vui lòng nhập số điện thoại'></input>
                                <input placeholder='Vui lòng nhập mật khẩu mới'></input>
                                <input placeholder='Vui lòng xác nhận mật khẩu'></input>
                                <button type="submit">Tiếp tục</button>
                            </form>
                            <div style={{marginLeft:"20px"}}>Bằng việc chọn tiếp tục, bạn đã đồng ý với <span style={{ color: "#63b1bc" }}>Điều khoản & Điều kiện</span>  cùng <span style={{ color: "#63b1bc" }}>Chính sách bảo mật và chia sẻ thông tin</span> của SHOP</div>
                        </>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login