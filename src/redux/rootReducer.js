// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import focus from '@src/views/apps/focus/store'
import instafriend from '@src/views/apps/instafriend/store'
import users from '@src/views/apps/user/store'
import tellfari from '@src/views/apps/tellfari/store'
import invoice from '@src/views/apps/invoice/store'
import book from '@src/views/apps/book/store'
import network from '@src/views/apps/publish/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'

const rootReducer = {
  focus,
  instafriend,
  tellfari,
  users,
  navbar,
  layout,
  invoice,
  book,
  network,
  dataTables,
  permissions
}

export default rootReducer
