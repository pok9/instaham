import styles from './Feed.module.scss'
import FeedItem from "./FeedItem"

export default function Feed() {
  return (
    <div className={styles.container}>
      {
        [1,2,3,4,5,6,7,8,9].map(() => <FeedItem />)
      }
    </div>
  )
}
