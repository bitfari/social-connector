import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    avatar: '10.jpg',
    full_name: "Digital Spectacular in the exact center of Times Square, lowest level to the ground. Due to the volume of demand for this sign, expect moderation to take 4-5 business days.",
    post: 'Y',
    email: '',
    city: 'New York',
    start_date: '',
    salary: '864,384',
    age: '61',
    experience: '828 wide x 1260 high pixels',
    status: 2
  },
  
  {
    responsive_id: '',
    id: 100,
    avatar: '',
    full_name: 'Board located in Chicago with 1191932 daily impressions.',
    post: 'IL-19809',
    email: '',
    city: 'Chicago',
    start_date: '',
    salary: '1,130,486',
    age: '41',
    experience: '1044 wide x 324 high pixels',
    status: 2
  }
]

mock.onGet('/api/datatables/initial-data').reply(() => {
  return [200, data]
})

mock.onGet('/api/datatables/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
