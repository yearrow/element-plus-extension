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
    const { link, name, title, type } = element
    console.log(name.toLowerCase())
    _routes.push(
      {
        path: link,
        name: name,
        meta: { title, type },
        component: () => import(`./page/${name.toLowerCase()}/index`)
      }
    )
  })
})

_routes.push(
  {
    path: '/moduleorder',
    name: 'markdown',
    component: () => import('./page/moduleorder/app.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('./page/moduleorder/index.vue')
      },{
      path: 'edit',
      name: 'edit',
      component: () => import('./page/moduleorder/edit.vue')
    },
    {
      path: 'detail',
      name: 'detail',
      component: () => import('./page/moduleorder/detail.vue')
    }]
  })
const router = createRouter({
  history: createWebHashHistory(),
  routes: _routes
})

export default router
