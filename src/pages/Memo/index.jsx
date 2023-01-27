import React from 'react'
import { Card, Toast, Empty, Collapse } from 'antd-mobile'
import { CloseCircleOutline, CheckCircleOutline } from 'antd-mobile-icons'

import MemoAdd from '@/components/MemoAdd'
import MemoList from '@/components/MemoList'

function Memo() {
  return (
    <div className="container p-5 h-full relative">
      {/* 列表 */}
      <MemoList />
      {/* 按钮 */}
      <MemoAdd />
    </div>
  )
}

export default Memo
