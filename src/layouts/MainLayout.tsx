import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Sidebar from '../components/specific/Sidebar/Sidebar'

export default function MainLayout() {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  )
}
