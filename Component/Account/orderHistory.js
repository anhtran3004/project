import React, { useState, useEffect } from 'react'
// import ReactPaginate from 'react-paginate';
// import Image from 'next/image';
const Order = () => {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 8;
  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(products.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(products.length / itemsPerPage));
  // }, [itemOffset]);
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % products.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  return (
    <>
      <h5 style={{ fontWeight: "700" }}>Đơn hàng của tôi</h5>
      <p>Tất cả đơn hàng</p>
      <table border={1} className="table_order">
        <thead>
          <tr>
            <th>Đơn hàng</th>
            <th>Ngày mua</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1234</td>
            <td>12-09-2022</td>
            <td>1</td>
            <td>{numberWithDots(2000)}đ</td>
            <td>Đã giao hàng</td>
          </tr>
        </tbody>
      </table>
      <div className="page">
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel={<Image src="/static/mobile/next.png" width="48" height="48" alt="" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<Image src="/static/mobile/next.png" width="48" height="48" alt="" />}
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"

        /> */}
      </div>
    </>
  )
}

export default Order