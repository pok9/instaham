import styles from './UserSuggestionItem.module.scss'

export interface UserSuggestionItemProps {
  url: string
  username: string
}

export default function UserSuggestionItem(props: UserSuggestionItemProps) {
  return (
    <div className={styles.container}>

      <div className={styles.containerProfile}>
        <img className={styles.image} src={props.url} alt="" />
        <div>
          <div>{props.username}</div>
          <div>Suggested for you</div>
        </div>
      </div>
      <button>Follow</button>

    </div>
  )
}
