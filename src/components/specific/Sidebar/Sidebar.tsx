import { useMediaQuery } from '../../../hooks/useMediaQuery'
import InstahamLogo from '../../common/icons/InstahamLogo'
import InstahamIcon from '../../common/icons/Sidebar/InstahamIcon'
import styles from './Sidebar.module.scss'
import SidebarList from './SidebarList'

export default function Sidebar() {
  const showInstahamLogo = useMediaQuery('min-width', 1264)

  return (
    <div className={styles.container}>
      {showInstahamLogo ? <InstahamLogo /> : <div className={styles.styleInstahamIcon}><InstahamIcon /></div>}
      <SidebarList />
    </div>
  )
}
