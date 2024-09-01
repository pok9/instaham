import { NavLink } from 'react-router-dom'
import styles from './SidebarItem.module.scss'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export interface SidebarItemProps {
  icon: React.ReactNode
  name: string
  to: string
}

interface SidebarItemComponentProps extends SidebarItemProps {
  isActive: boolean // Optional, as it will be handled by NavLink
}

export default function SidebarItem(props: SidebarItemComponentProps) {
  const showNameSidebar = useMediaQuery('min-width', 1264)

  return (
    <NavLink
      to={props.to}
      // className={`${styles.navLink}`}
      className={({ isActive }) =>
        // isPending ? "pending" : isActive ? "active" : ""
        `${styles.navLink} ${props.isActive ? styles.navLinkActive : ''}`
      }
    >
      <div className={styles.container}>
        {props.icon}
        {showNameSidebar && <div className={styles.name}>{props.name}</div>}
      </div>
    </NavLink>
  )
}
