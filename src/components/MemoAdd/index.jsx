import React, { useRef, useState } from 'react'
import { Space, Popup, Form, Button, Input } from 'antd-mobile'
import { AddCircleOutline } from 'antd-mobile-icons'
import { useStore } from '@/store'

function MemoAdd() {
  const [visibleCloseRight, setVisibleCloseRight] = useState(false)
  const { memoStore } = useStore()

  const initRef = useRef() // 绑定表格
  const onFinish = (values) => {
    const data = {
      id: Math.random(100000),
      title: values.title,
      isDone: false,
    }
    memoStore.addItem(data)

    setVisibleCloseRight(false)
    initRef.current.setFieldsValue({ title: '', content: '' })
  }

  return (
    <>
      <Space
        className="text-5xl absolute bottom-8 right-8"
        wrap
        onClick={() => {
          setVisibleCloseRight(true)
        }}>
        <AddCircleOutline color="#1677ff" />
      </Space>
      <Popup
        visible={visibleCloseRight}
        showCloseButton
        onClose={() => {
          setVisibleCloseRight(false)
        }}>
        {/* 输入内容 */}
        <div className="">
          <Form
            ref={initRef}
            name="form"
            onFinish={onFinish}
            footer={
              <Button block type="submit" color="primary" size="large">
                提交
              </Button>
            }>
            <Form.Header>输入内容</Form.Header>
            <Form.Item name="title" label="标题" rules={[{ required: true }]}>
              <Input placeholder="请输入标题" clearable />
            </Form.Item>
            <Form.Item name="content" label="内容(选填)">
              <Input placeholder="请输入内容" clearable />
            </Form.Item>
          </Form>
        </div>
      </Popup>
    </>
  )
}

export default MemoAdd
