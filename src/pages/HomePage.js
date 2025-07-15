// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Checkbox, Radio } from "antd";
// import { Prices } from "../components/Prices";
// import { useCart } from "../context/cart";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Layout from "./../components/Layout/Layout";
// import { AiOutlineReload } from "react-icons/ai";
// import "../styles/Homepage.css";
// import axiosApi from "../services/axios";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useCart();
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [checked, setChecked] = useState([]);
//   const [radio, setRadio] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   //get all cat
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axiosApi.get("/api/v1/category/get-category");
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//     getTotal();
//   }, []);
//   //get products
//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axiosApi.get(
//         `/api/v1/product/product-list/${page}`
//       );
//       console.log("data = ", data);
//       setLoading(false);
//       setProducts(data.products);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   //getTOtal COunt
//   const getTotal = async () => {
//     try {
//       const { data } = await axiosApi.get("/api/v1/product/product-count");
//       setTotal(data?.total);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (page === 1) return;
//     loadMore();
//   }, [page]);
//   //load more
//   const loadMore = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axiosApi.get(
//         `/api/v1/product/product-list/${page}`
//       );
//       setLoading(false);
//       setProducts([...products, ...data?.products]);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   // filter by cat
//   const handleFilter = (value, id) => {
//     let all = [...checked];
//     if (value) {
//       all.push(id);
//     } else {
//       all = all.filter((c) => c !== id);
//     }
//     setChecked(all);
//   };
//   useEffect(() => {
//     if (!checked.length || !radio.length) getAllProducts();
//   }, [checked.length, radio.length]);

//   useEffect(() => {
//     if (checked.length || radio.length) filterProduct();
//   }, [checked, radio]);

//   //get filterd product
//   const filterProduct = async () => {
//     try {
//       const { data } = await axiosApi.post("/api/v1/product/product-filters", {
//         checked,
//         radio,
//       });
//       setProducts(data?.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout title={"ALl Products - Best offers "}>
//       {/* banner image */}
//       <img
//         src="/images/banner.png"
//         className="banner-img"
//         alt="bannerimage"
//         width={"100%"}
//       />
//       {/* banner image */}
//       <div className="container-fluid row mt-3 home-page">
//         <div className="col-md-3 filters">
//           <h4 className="text-center">Filter By Category</h4>
//           <div className="d-flex flex-column">
//             {categories?.map((c) => (
//               <Checkbox
//                 key={c._id}
//                 onChange={(e) => handleFilter(e.target.checked, c._id)}
//               >
//                 {c.name}
//               </Checkbox>
//             ))}
//           </div>
//           {/* price filter */}
//           <h4 className="text-center mt-4 ">Filter By Price</h4>
//           <div className="d-flex flex-column">
//             <Radio.Group onChange={(e) => setRadio(e.target.value)}>
//               {Prices?.map((p) => (
//                 <div key={p._id}>
//                   <Radio value={p.array}>{p.name}</Radio>
//                 </div>
//               ))}
//             </Radio.Group>
//           </div>
//           <div className="d-flex flex-column">
//             <button
//               className="btn btn-danger mb-2 mt-3 "
//               onClick={() => window.location.reload()}
//             >
//               RESET FILTERS
//             </button>
//           </div>
//         </div>
//         <div className="col-md-9 ">
//           <h1 className="text-center text-black">All Products</h1>
//           <div className="d-flex flex-wrap">
//             {products?.map((p) => (
//               <div className="card m-2" key={p._id}>
//                 <img
//                 //update for the image problem
//                   src={`${p?.imageUrl}`}
//                   className="card-img-top"
//                   alt={p.name}
//                 />
//                 <div className="card-body">
//                   <div className="card-name-price">
//                     <h5 className="card-title">{p.name}</h5>
//                     <h5 className="card-title card-price">
//                       {p.price.toLocaleString("en-IN", {
//                         style: "currency",
//                         currency: "INR",
//                       })}
//                     </h5>
//                   </div>
//                   <p className="card-text ">
//                     {p.description.substring(0, 60)}...
//                   </p>
//                   <div className="card-name-price">
//                     <button
//                       className="btn btn-info ms-1"
//                       onClick={() => navigate(`/product/${p.slug}`)}
//                     >
//                       More Details
//                     </button>
//                     <button
//                       className="btn btn-dark ms-1"
//                       onClick={() => {
//                         setCart([...cart, p]);
//                         localStorage.setItem(
//                           "cart",
//                           JSON.stringify([...cart, p])
//                         );
//                         toast.success("Item Added to cart");
//                       }}
//                     >
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="m-2 p-3">
//             {products && products.length < total && (
//               <button
//                 className="btn loadmore"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setPage(page + 1);
//                 }}
//               >
//                 {loading ? (
//                   "Loading ..."
//                 ) : (
//                   <>
//                     {" "}
//                     Loadmore <AiOutlineReload />
//                   </>
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import axiosApi from "../services/axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axiosApi.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // Get total product count
  const getTotal = async () => {
    try {
      const { data } = await axiosApi.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axiosApi.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Load more products
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axiosApi.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Handle category filter
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Fetch products on filter change
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // Filter products
  const filterProduct = async () => {
    try {
      const { data } = await axiosApi.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="All Products - Best Offers">
      {/* Banner Image */}
      <img
        src="/images/banner.png"
        className="banner-img"
        alt="banner"
        width="100%"
      />

      {/* Page Content */}
      <div className="container-fluid row mt-3 home-page">
        {/* Filter Sidebar */}
        <div className="col-12 col-md-3 mb-3">
          {/* Toggle Button for Mobile */}
          <div className="d-md-none mb-2 text-center">
            <button
              className="btn btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterCollapse"
              aria-expanded="false"
              aria-controls="filterCollapse"
            >
              Show Filters
            </button>
          </div>

          {/* Collapsible Filter Panel */}
          <div className="collapse d-md-block" id="filterCollapse">
            <div className="filters p-2 border rounded">
              <h4 className="text-center">Filter By Category</h4>
              <div className="d-flex flex-column">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>

              <h4 className="text-center mt-4">Filter By Price</h4>
              <div className="d-flex flex-column">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>

              <div className="d-flex flex-column">
                <button
                  className="btn btn-danger mb-2 mt-3"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="col-md-9">
          <h1 className="text-center text-black">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`${p?.imageUrl}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem("cart", JSON.stringify([...cart, p]));
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : <>Load More <AiOutlineReload /></>}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
