// ** Navigation imports
import dashboards from './dashboards'
import apps from './apps'
import pages from './pages'
import publish from './publish'
import billboards from './billboards'
import tools from './tools'
import screens from './screens'
import others from './others'
import help from './help'

// ** Merge & Export
export default [...dashboards, ...apps, ...publish, ...screens, ...billboards, ...tools, ...pages, ...others, ...help]
