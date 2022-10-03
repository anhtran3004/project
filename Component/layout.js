import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';


const Layout = ({ children, categories }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>VTO - Demo website</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
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
                        <li style={{ marginRight: "80px" }}>Brand</li>
                    </Link>
                    <li className='cate'>Category
                        <ul className='categorys'>
                            {categories?.map(category => (
                                <Link href={`/category/${category.id}`} key={category.id}>
                                <li className='category' >{category.name}</li>
                                </Link>
                            ))}

                        </ul>
                    </li>

                </ul>
                <div className='options_menu'>
                    <div className='search'>
                        <form>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Bạn tìm gì...'/>
                            <input type="submit" hidden />
                        </form>
                    </div>
                    <i className="fa-solid fa-store " style={{fontSize:"23px"}}></i>
                    <i className="fa-regular fa-heart" style={{fontSize:"23px"}}></i>
                    <i className="fa-regular fa-user" style={{fontSize:"23px"}}></i>
                    <i className='bx bx-cart' style={{fontSize:"25px"}}></i>

                    <div>

                    </div>
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
                    <input type="text" placeholder='Enter your Email' style={{zIndex:"3"}} />
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