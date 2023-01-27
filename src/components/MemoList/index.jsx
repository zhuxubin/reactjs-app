import React from 'react'
import { Card, Empty, Button } from 'antd-mobile'
import { CloseCircleOutline, CheckCircleOutline } from 'antd-mobile-icons'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const Finished = ({ title }) => {
  return (
    <Card className="rounded-2xl mb-3">
      <div className="flex justify-between text-2xl line-through">
        <div>{title}</div>
        <div className=" flex justify-items-center justify-self-center content-around	items-center">
          <CloseCircleOutline />
          <CheckCircleOutline />
        </div>
      </div>
    </Card>
  )
}

const UnFinished = ({ title, id }) => {
  const { memoStore } = useStore()

  return (
    <Card className="rounded-2xl mb-3">
      <div className="flex justify-between text-2xl">
        <div>{title}</div>
        <div className=" flex justify-items-center justify-self-center content-around	items-center">
          <CloseCircleOutline
            color="#FF0000"
            onClick={() => {
              memoStore.delItem(id)
            }}
          />
          <CheckCircleOutline
            color="#1E90FF"
            onClick={() => {
              memoStore.checkItem(id)
            }}
          />
        </div>
      </div>
    </Card>
  )
}

function MemoList() {
  const { memoStore } = useStore()

  return (
    <>
      {memoStore.list.length > 0 ? (
        <>
          {memoStore.list.map((item) => {
            if (item.isDone) {
              return <Finished key={item.id} title={item.title} />
            } else {
              return (
                <UnFinished key={item.id} title={item.title} id={item.id} />
              )
            }
          })}
        </>
      ) : (
        <Empty
          style={{ padding: '64px 0' }}
          imageStyle={{ width: 128 }}
          description="暂无数据"
        />
      )}
    </>
  )
}

export default observer(MemoList)
