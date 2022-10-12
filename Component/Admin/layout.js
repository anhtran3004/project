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
            <div>
                <div className='sidebar'>
                    <div className='sidebar_inner'>
                        <div className='sidebar_logo'>
                            <Image
                                src="/static/home/logo.png"
                                width="80"
                                height="30.9"
                                alt=""
                            />
                        </div>
                        <ul className='sidebar_menu'>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'>
                                            <i className='bx bx-home' ></i>
                                        </span>
                                        <span className='title'>Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'>
                                            <i className='bx bx-envelope'></i>
                                        </span>
                                        <span className='title'>Email</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'><i className='bx bxl-product-hunt'></i></span>
                                        <span className='title'>Products</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href="/" className='sidebar_link'>
                                    <a>
                                        <span className='icon_holder'></span>
                                        <span className='title'></span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='page-container'>
                    <header className='menu_admin'>
                        <div>
                            <i className='bx bx-menu' ></i>
                        </div>
                        <div>
                            <i className='bx bx-search' ></i>
                        </div>
                    </header>

                    <main>
                        {children}
                    </main>
                    <footer>

                    </footer>
                </div>
            </div>
        </>
    )
}


export default Layout