import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { TabBar, Badge } from 'antd-mobile'
import {
  AppOutline,
  UserContactOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons'

import styles from './index.module.scss'

const tabs = [
  {
    key: '/',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: '/memo',
    title: '待办',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: '/me',
    title: '我的',
    icon: <UserContactOutline />,
  },
]

function Layout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // 切换菜单
  const setRouteActive = (value) => {
    navigate(value)
  }

  return (
    <div className={styles.app}>
      <div className={styles.body}>
        {/*  二级路由出口 */}
        {<Outlet />}
      </div>
      <div className={styles.bottom}>
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout
