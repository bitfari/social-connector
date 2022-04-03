// ** Navigation imports
import dashboards from './dashboards'
import account from './account.js'
import apps from './apps'
import publish from './publish'
import billboards from './billboards'
import tools from './tools'
import others from './others'
import help from './help'

// ** Merge & Export
export default [...dashboards, ...account, ...apps, ...publish, ...billboards, ...tools, ...others, ...help]
