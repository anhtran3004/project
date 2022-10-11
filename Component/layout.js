import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import { useState } from 'react';


const Layout = ({ children, categories }) => {
    const [showCart, setShowCart] = useState(false);
    const [totalProduct, setTotalProduct] = useState(1);
    const [mobile, setMobile] = useState(false);
    function numberWithDots(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>VTO - Demo website</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Head>

            <header className='menu'>

                <div className='containers menus'>
                    <ul className="nav">
                        <Link href="/">
                            <li >
                                <div className='logo'>
                                    <Image
                                        src="/static/home/logo.png"
                                        width="80"
                                        height="30.9"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </Link>
                        <Link href="/brand">
                            <li style={{ marginRight: "80px" }} className="tab_menus">Brand</li>
                        </Link>
                        <li className='cate tab_menus'>Category
                            <ul className='categorys'>
                                {categories?.map(category => (
                                    <Link href={`/category/${category.id}`} key={category.id}>
                                        <li className='category' >{category.name}</li>
                                    </Link>
                                ))}

                            </ul>
                        </li>
                        {/* <li class="tab_menu">
                        <i class='bx bx-menu'></i>
                    </li> */}
                    </ul>
                    <div className='options_menu'>

                        <div className='search'>
                            <form>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Bạn tìm gì...' />
                                <input type="submit" hidden />
                            </form>
                        </div>
                        <span className='btn_search'>
                            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "23px", position: "relative", top: "4px" }}></i>
                        </span>

                        <i className="fa-solid fa-store " style={{ fontSize: "23px" }}></i>
                        <i className="fa-regular fa-heart" style={{ fontSize: "23px" }}></i>
                        <i className="fa-regular fa-user" style={{ fontSize: "23px" }}></i>
                        <span className='cart_b'>
                            <i className='bx bx-cart' style={{ fontSize: "25px" }} onClick={() => { setShowCart(true) }}></i>
                            <div className='number_product'>{totalProduct}</div>
                        </span>
                        <span className="tab_menu" onClick={() => { setMobile(true) }}>
                            <i class='bx bx-menu' style={{ fontSize: "25px", position: "relative", top: "5px" }}></i>
                        </span>

                        {showCart ? (
                            <div className='modal_cart'>
                                <div className='modal_overlay_cart' onClick={() => { setShowCart(false) }}></div>
                                <div className='modal_body_cart'>
                                    <div className='modal_inner_cart'>
                                        <div className='close_cart'>
                                            <i className='bx bx-x' onClick={() => { setShowCart(false) }}></i>
                                        </div>
                                        {totalProduct == 0 ? (
                                            <div className='cart_content'>
                                                <i className='bx bx-shopping-bag' ></i>
                                                <p>Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                                            </div>
                                        ) : (
                                            <div className='cart_have_content'>
                                                <p className='sp'>(1) sản phẩm trong giỏ hàng</p>
                                                <div style={{ display: "flex", height: "90px", borderBottom: "1px solid #e8e8ea", paddingBottom: "15px" }}>
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
                                                        <p style={{ color: "#333f48", fontWeight: "bold" }}>{numberWithDots(240000)}đ</p>
                                                    </div>
                                                    <div className='amount_cart'>
                                                        <div><i className='bx bx-minus-circle' ></i><span style={{ fontSize: "15px", padding: "0 10px 10px" }}>1</span><i className='bx bx-plus-circle' ></i></div>
                                                    </div>
                                                </div>
                                                <Link href="/order"><div className='btn_view_cart'>XEM GIỎ HÀNG</div></Link>
                                                <div style={{ textAlign: "center", fontSize: "14px" }}>Tổng tạm tính <span style={{ color: "#333f48", fontWeight: "600" }}>{numberWithDots(498000)}đ</span></div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {mobile ? (
                            <div className='modal_menu'>
                                <div className='modal_overlay_menu' onClick={() => { setMobile(false) }}></div>
                                <div className='modal_body_menu'>
                                    <div className='modal_inner_menu'>
                                        <div className='close_menu' onClick={() => { setMobile(false) }}>
                                            <i className='bx bx-x'></i>
                                        </div>
                                        <div className='content_menu'>
                                        <Link href="/brand">
                                            <div className="brand_m">Brand</div>
                                        </Link>
                                        <div className='cate_m'>Category
                                            <ul className='categorys' style={{paddingLeft:"0"}}>
                                                {categories?.map(category => (
                                                    <Link href={`/category/${category.id}`} key={category.id} >
                                                        <li className='category_m' style={{margin:"0"}} onClick={() => { setMobile(false) }}>{category.name}</li>
                                                    </Link>
                                                ))}

                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className='img_footer'>
                    <div className='img'>
                        <Image
                            src="/static/home/footer.png"
                            width="1920"
                            height="600"
                            alt=""
                            id='img'
                        />
                    </div>
                    <div className='container-footer'>
                        <div className='sub-footer'>
                            <div className='logo_footer'>
                                <Image
                                    src="/static/home/logo.png"
                                    width="120"
                                    height="46.3"
                                    alt=""
                                />
                            </div>

                            <p className='sd'>Avatar modeling, virtual fitting and sizing solution for bussiness of all sizes</p>
                            <form>
                                <input type="text" placeholder='Enter your Email' style={{ zIndex: "3" }} />
                                <button>Subscribe</button>
                            </form>
                            <p id='copyright'>© Copyright VTO. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Layout