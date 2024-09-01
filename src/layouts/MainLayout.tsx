import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Sidebar from '../components/specific/Sidebar/Sidebar'

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <div style={{ position: "relative"}}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  )
}
