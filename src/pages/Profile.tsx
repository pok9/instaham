import Avatar from '../components/common/Avatar'
import styles from './Profile.module.scss'

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.containerProfile}>
        <Avatar size={150} />

        <div className={styles.profileInformation}>

          <div className={styles.profileUsername}>
            <div>pok_chanchai9</div>
            <button>Edit profile</button>
          </div>

          <div className={styles.profileStats}>
            <div>15 posts</div>
            <div>19 followers</div>
            <div>278 following</div>
          </div>

        </div>

      </div>
    </div>
  )
}
