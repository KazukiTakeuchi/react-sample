import { memo } from "react"


type ChildAreaProps = {
  open: boolean,
  onClickClose: () => void
}

export const ChildArea: React.FC<ChildAreaProps> = memo(({ open, onClickClose }) => {
  console.log('ChildAreaがレンダリングされた！')
  return (
    <>
      {open ? (
        <div>
          <p>child component</p>
          <button onClick={onClickClose}>Close</button>
        </div>
      ) : null}
    </>
  )
})
