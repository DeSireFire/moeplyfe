import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 主页
  {
    path: '/',
    component: () => import('../views/search/index'),
    hidden: true
  },
  // 工具箱
  {
    path: '/tools',
    redirect: '/tools/magnetBest',
    component: () => import('../views/tools/index'),
    children: [
    {
      path: 'magnetBest',
      name: '磁性链接优化',
      component: () => import('../views/tools/components/magnetBest'),
      meta: { title: 'magnetBest', icon: 'magnetBest' }
    },
    {
      path: 'magnet2Torrent',
      name: '磁性链接和磁力种子转换',
      component: () => import('../views/tools/components/magnet2Torrent'),
      meta: { title: 'magnet2Torrent', icon: 'magnet2Torrent' }
    }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 动态添加title
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    // console.log(to.meta.title)
    document.title = to.meta.title
  }
  next()
})

export default router
