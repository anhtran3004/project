import React from 'react'
import Layout from '../Component/layout'
import Image from 'next/image';

const order = () => {
    function numberWithDots(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <Layout>
            <div className='containerse'>
                <div className='purchasing_process'>
                    <span style={{ background: "#333f48", color: "white", width: "50px", height: "50px", borderRadius: "50%", padding: "5px 11px" }}>1</span>
                    <span style={{ padding: "0 10px" }}> Giỏ hàng </span>
                    <span style={{ borderTop: "solid 2px gray", paddingLeft: "60px", position: "relative", top: "13px" }}></span>
                    <span style={{ border: "solid 1px #d2d1d4", color: "#d2d1d4", width: "50px", height: "50px", borderRadius: "50%", padding: "5px 11px", margin: "0 10px" }}>2</span>
                    <span style={{ marginRight: "10px", color: "#d2d1d4" }}>Đặt hàng</span>
                    <span style={{ borderTop: "solid 2px gray", paddingLeft: "60px", position: "relative", top: "13px" }}></span>

                    <span style={{ border: "solid 1px #d2d1d4", color: "#d2d1d4", width: "50px", height: "50px", borderRadius: "50%", padding: "5px 11px", margin: "0 10px" }}>3</span>
                    <span style={{ color: "#d2d1d4" }}>Hoàn tất</span>
                </div>
                <div className='order_'>
                    <div className='list_products'>
                    <h5 style={{ fontWeight: "700", fontSize:"24px", marginBottom: "20px" }}>(1)Sản phẩm</h5>
                        <table border={1} className="table_products">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá tiền</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ display: "flex" }}>
                                        <div>
                                            <Image
                                                src="/static/products-ar/ARISTINO_ABZ00601_PREVIEW_0.jpg"
                                                width={60}
                                                height={80}
                                                alt=""
                                            />
                                        </div>
                                        <div className='infor_cart'>
                                            <p style={{ color: "#77757f" }}>Vest nam</p>
                                            <p style={{ color: "#333f48", fontWeight: "bold" }}>M</p>

                                        </div>
                                    </td>
                                    <td>{numberWithDots(369000)}đ</td>
                                    <td>
                                        <div className='amount_products'><i className='bx bx-minus-circle' ></i><span style={{ fontSize: "15px", padding: "0 10px 10px" }}>1</span><i className='bx bx-plus-circle' ></i></div>
                                    </td>
                                    <td>{numberWithDots(369000)}đ</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="money_order">
                    <h5 style={{ fontWeight: "700", fontSize:"24px" }}>Đơn hàng</h5>
                    <div className='price_unit'>
                        <p>Giá gốc</p>
                        <p>{numberWithDots(369000)}đ</p>
                    </div>
                    <div className='total_bill'>
                        <p>Tổng tiền thanh toán</p>
                        <p>{numberWithDots(369000)}đ</p>
                    </div>
                    <div className='btn_view_cart'>ĐẶT HÀNG</div>
                    <div className='apply'>Áp dụng mã giảm giá, C-point tại bước tiếp theo</div>
                    <div className='pay'>Chúng tôi chấp nhận thanh toán:</div>
                    <div>

                    </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default order