import './index.css'

const TabItem = props => {
  const {tabDetail, onChangeTabItems, isActive} = props
  const {tabId, displayText} = tabDetail
  const onChange = () => {
    onChangeTabItems(tabId)
  }
  const isActiveTab = isActive ? 'isActive' : 'category-names'

  return (
    <li>
      <button className={isActiveTab} onClick={onChange}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
