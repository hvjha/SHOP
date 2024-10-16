const backendDomain = "http://localhost:5500"


const SummaryApi = {
    signup:{
        url:`${backendDomain}/api/v1/user/signup`,
        method:"post"
    },
    signin :{
        url:`${backendDomain}/api/v1/user/signin`,
        method:"post"
    },
   current_user : {
        url : `${backendDomain}/api/v1/user/user-details`,
        method : "get"
    },
    logout_user:{
         url : `${backendDomain}/api/v1/user/logout`,
        method : "get"
    },
    allUser :{
        url:`${backendDomain}/api/v1/user/all-user`,
        method:"get"
    },
    updateUser : {
        url:`${backendDomain}/api/v1/user/update-user`,
        method:"post"
    },
    uploadProduct :{
        url:`${backendDomain}/api/v1/product/upload-product`,
        method:"post"
    },
    allProduct:{
        url:`${backendDomain}/api/v1/product/get-product`,
        method:"get"
    },
    updateProduct :{
        url:`${backendDomain}/api/v1/product/update-product`,
        method:"post"
    },
    categoryProduct : {
        url:`${backendDomain}/api/v1/product/get-categoryProduct`,
        method:"get"
    },
    categoryWiseProduct :{
        url:`${backendDomain}/api/v1/product/category-product`,
        method:"post"
    },
    productDetails : {
        url:`${backendDomain}/api/v1/product/product-details`,
        method:"post"
    },
    addToCartProduct :{
        url:`${backendDomain}/api/v1/cart/addtocart`,
        method:"post"
    },
    addToCartProductCount : {
        url:`${backendDomain}/api/v1/cart/countAddToCartProduct`,
        method:"get"
    },
    addToCartProductView : {
        url:`${backendDomain}/api/v1/cart/view-cart-product`,
        method:"get"
    },
    updateCartProduct : {
        url:`${backendDomain}/api/v1/cart/update-cart-product`,
        method:"post"
    },
    deleteCartProduct :{
        url:`${backendDomain}/api/v1/cart/delete-cart-product`,
        method:'delete'
    },
    searchProduct : {
        url:`${backendDomain}/api/v1/product/search`,
        method:"get"
    },
    filterProduct : {
        url: `${backendDomain}/api/v1/product/filter-product`,
        method:"post"
    },
    payment:{
        url:`${backendDomain}/api/v1/payment/checkout`,
        method:"post"
    },
    order : {
        url:`${backendDomain}/api/v1/payment/order-list`,
        method:"get"
    },
    allOrder : {
         url:`${backendDomain}/api/v1/payment/all-order`,
        method:"get"
    }

}

export default SummaryApi