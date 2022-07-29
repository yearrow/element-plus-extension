import menuData from './frame/menu-data.json'
const { createRouter, createWebHashHistory } = VueRouter
// 路由懒加载
const _routes = [{
  path: '/',
  name: 'main',
  component: () => import('./page/home.vue')
},
{
  path: '/markdown',
  name: 'markdown',
  component: () => import('@cs/markdown-loader/lib/markdown-use.md')
}
]

menuData.forEach((item) => {
  const { menuItem } = item
  menuItem.forEach(element => {
    const { link, name, title } = element
    _routes.push(
      {
        path: link,
        name: name,
        meta: { title },
        component: () => import(`./page/${name.toLowerCase()}/index`)
      }
    )
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: _routes
})

export default router
