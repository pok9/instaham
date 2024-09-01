import UserSuggestionList from './UserSuggestionList'
import styles from './UserSuggestions.module.scss'

export default function UserSuggestions() {
  return (
    <div className={styles.container}>
      <div className={styles.textSuggested}>Suggested for you</div>
      <UserSuggestionList />
    </div>
  )
}
