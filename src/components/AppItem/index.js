import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app-background">
      <img src={imageUrl} className="appIcon" alt={appName} />
      <p className='name'>{appName}</p>
    </li>
  )
}
export default AppItem
