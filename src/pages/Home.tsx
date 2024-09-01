import Feed from '../components/specific/Feed/Feed'
import UserSuggestions from '../components/specific/UserSuggestions/UserSuggestions'
import { useMediaQuery } from '../hooks/useMediaQuery'
import styles from './Home.module.scss'

export default function Home() {
  const showSuggestions = useMediaQuery('min-width', 1160)
  
  return (
    <div className={styles.container}>
      <Feed />
      {showSuggestions && <UserSuggestions />}
    </div>
  )
}
