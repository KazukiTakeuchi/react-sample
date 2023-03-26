import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const SearchInput = () => {
  return (
    <div className="App">
      <input type="text" placeholder="search something" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  )
}
