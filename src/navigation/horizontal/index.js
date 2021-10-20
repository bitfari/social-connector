// ** Navigation sections imports
import apps from './apps'
import dashboards from './dashboards'
import misc from './others'
import pages from './pages'
import forms from './forms-tables.js'

// ** Merge & Export
export default [...dashboards, ...apps, ...forms, ...pages, ...misc]

