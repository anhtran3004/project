import React,{useState,useEffect} from 'react'
import Layout from '../Component/layout'
import Image from 'next/image';
import Link from 'next/link';
import { getListCategories } from "/lib/database/category_api";
import { getAllProducts } from "../lib/database/product_api";
const Order = ({ products, categories }) => {
    function numberWithDots(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
    const LINK_IMAGE = process.env.NEXT_PUBLIC_LINK_IMAGE_PRODUCT;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;
    const [item, setItem] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset]);
    const handlePageClick = (event) => {
        // let i = 1;
        setItem(++item);
        const newOffset = (item * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${item}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const handlePageClickM = (event) => {
        // let i = 1;
        setItem(--item);
        const newOffset = (item * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${item}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
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
                        <h5 style={{ fontWeight: "700", fontSize: "24px", marginBottom: "20px" }}>(1)Sản phẩm</h5>
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
                        <h5 style={{ fontWeight: "700", fontSize: "24px" }}>Đơn hàng</h5>
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
                            <Image
                                src="/static/order/visa.svg"
                                width={295}
                                height={70}
                                alt="" />
                        </div>
                    </div>
                </div>
                <div className="product_like">
                    <h3>Có thể bạn sẽ thích</h3>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* <div className="carousel-item active">
                                <img src="..." className="d-block w-100" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="...">
                            </div> */}
                            <div className='list-products row' >
                            {currentItems && currentItems.map(product => (
                            <Link href={`/productDetail/${product.id}`} key={product.id}>
                                <div className='product carousel-item active' style={{ margin: "48px 14px" }}>
                                    <div className='thumbnail-product'>
                                        <Image
                                            // loader={myLoader}
                                            src={`${LINK_IMAGE}/${product.image_preview_name.split(",")[0]}.jpg`}
                                            width="240"
                                            height="320"
                                            alt=""
                                        />
                                    </div>
                                    <div className='infor-product' id="l">
                                        <div className='brand'>{product.brand_name}</div>
                                        <span className={'name '}>{product.name.slice(0, 20)}</span>
                                        <span style={{ border: "none", borderRadius: "5px" }} >...</span>
                                        <div id="parent_p">
                                            <div className='price'>{numberWithDots(product.price)}đ</div>
                                            <div className='detail'>See-more</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        onClick={() => handlePageClickM()}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                          onClick={() => handlePageClick()}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Order
export async function getStaticProps() {
    const categories = await getListCategories();
    const products = await getAllProducts();
    return {
        props: {
            products,
            categories


        },
    };
}