import mock from '../mock'
/* eslint-disable */
import { paginateArray, sortCompare, randomDate, getRandomInt } from '../utils'

const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
const nextWeek = new Date(nextDay.getTime() + 7 * 24 * 60 * 60 * 1000)

const data = {
  products: [
    {
      id: 1,
      name: 'VicTsing Wireless Mouse,',
      slug: '3-year-unlimited-cloud-storage-service-activation-card-other-1',
      description:
        'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
      brand: 'VicTsing',
      price: 10.99,
      image: require('@src/assets/images/pages/eCommerce/27.png').default,
      hasFreeShipping: true,
      rating: 2
    },
     {
      id: 27,
      name: 'Apple Watch Series 5',
      slug: 'apple-watch-series-5-27',
      brand: 'Apple',
      price: 339.99,
      image: require('@src/assets/images/pages/eCommerce/1.png').default,
      hasFreeShipping: true,
      rating: 4,
      description: `On Retina display that never sleeps, so it’s easy to see the time and other important information, without
    raising or tapping the display. New location features, from a built-in compass to current elevation, help users
    better navigate their day, while international emergency calling1 allows customers to call emergency services
    directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available
    in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.`
    }
  ],
  userWishlist: [
    { id: 1, productId: 26 },
    { id: 2, productId: 23 }
  ],
  userCart: [
    { id: 1, productId: 27, qty: 1 },
    { id: 2, productId: 21, qty: 1 },
    { id: 3, productId: 26, qty: 1 },
    { id: 4, productId: 25, qty: 1 },
    { id: 5, productId: 23, qty: 1 }
  ]
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/products').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', sortBy = 'featured', perPage = 9, page = 1 } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = data.products.filter(product => product.name.toLowerCase().includes(queryLowered))

  let sortDesc = false
  const sortByKey = (() => {
    if (sortBy === 'price-desc') {
      sortDesc = true
      return 'price'
    }
    if (sortBy === 'price-asc') {
      return 'price'
    }
    sortDesc = true
    return 'id'
  })()

  const sortedData = filteredData.sort(sortCompare(sortByKey))
  if (sortDesc) sortedData.reverse()

  const paginatedData = JSON.parse(JSON.stringify(paginateArray(sortedData, perPage, page)))

  paginatedData.forEach(product => {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1
    /* eslint-enable */
  })

  return [
    200,
    {
      products: paginatedData,
      total: filteredData.length,
      userWishlist: data.userWishlist,
      userCart: data.userCart
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------
mock.onGet(/\/apps\/ecommerce\/products\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.products.findIndex(p => p.id === productId)
  const product = data.products[productIndex]

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1

    // * Add Dummy data for details page
    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info']

    return [200, { product }]
  }
  return [404]
})

// ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/wishlist').reply(() => {
  const products = data.userWishlist.map(wishlistProduct => {
    const product = data.products.find(p => p.id === wishlistProduct.productId)
    product.isInCart = data.userCart.findIndex(p => p.productId === wishlistProduct.productId) > -1
    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/cart').reply(() => {
  const products = data.userCart.map(cartProduct => {
    const product = data.products.find(p => p.id === cartProduct.productId)

    // Other data
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === cartProduct.productId) > -1
    product.qty = cartProduct.qty
    product.shippingDate = randomDate(nextDay, nextWeek)
    product.offers = getRandomInt(1, 4)
    product.discountPercentage = getRandomInt(3, 20)

    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------
mock.onPost('/apps/ecommerce/cart').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userCart
  let lastId = 0
  if (length) lastId = data.userCart[length - 1].i

  data.userCart.push({
    id: lastId + 1,
    productId,
    qty: 1
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userCart.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userCart.splice(productIndex, 1)

  return [200]
})

// ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------
mock.onPost('/apps/ecommerce/wishlist').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userWishlist
  let lastId = 0
  if (length) lastId = data.userWishlist[length - 1].i

  data.userWishlist.push({
    id: lastId + 1,
    productId: Number(productId)
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userWishlist.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1)

  return [200]
})
