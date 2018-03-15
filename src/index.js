import ListItem from './components/ListItem.vue'
import Toolbar from './components/Toolbar.vue'
import ToolbarLogo from './components/ToolbarLogo.vue'

let components = {
  [ListItem.name]: ListItem,
  [Toolbar.name]: Toolbar,
  [ToolbarLogo.name]: ToolbarLogo
}

function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(c => Vue.component(c.name, components[c.name]))
  } else {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({install})
}

export default {
  install
}

export {
  ListItem,
  Toolbar,
  ToolbarLogo
}
