import styles from './Login.module.scss'

export default function Login() {
  return (
    <div className={styles.container}>
      <div>รูปภาพ</div>
      <div className={styles.formLogin}>
        <div>Instagram</div>
        <input type="text" placeholder='Phone number, username, or email' />
        <input type="text" placeholder='Password' />
        <button>Log in</button>
      </div>
    </div>
  )
}
