import LikeHeartIcon from '../../common/icons/Ui/LikeHeartIcon'
import styles from './FeedItem.module.scss'

export default function FeedItem() {
  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.profile}>
          <img className={styles.profileAvatar} src="https://www.online-station.net/wp-content/uploads/2020/04/Son-Goku_1200_628-1.jpg" alt="" />
          <div>username</div>
        </div>
      </div>
      {/* image */}
      <img src="https://www.online-station.net/wp-content/uploads/2020/04/Son-Goku_1200_628-1.jpg" alt="" className={styles.image} />

      {/* Action buttons */}
      <div className={styles.actionButtons}>
        <LikeHeartIcon />
      </div>

      {/* Likes */}
      <div>1,955,147 likes</div>

      {/* Caption */}
      <div className={styles.caption}>
        risingballers
        Last minute winners hit different. Especially in Non-League. SCENES. 😭🤩
      </div>

      {/* Comments */}
      <div className={styles.viewAllComments}>
        View all 29 comments
      </div>

      {/* Add comment */}
      <input className={styles.inputComment} type="text" placeholder='Add a comment...' />

    </div>
  )
}
