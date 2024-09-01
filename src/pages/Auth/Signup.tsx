import styles from './Signup.module.scss'

export default function Signup() {
  return (
    <div className={styles.container}>
      <div>รูปภาพ</div>
      <div className={styles.formSignup}>
        <div>Instagram</div>
        <input type="text" placeholder='Mobile Number or Email' />
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Password' />
        <button>Sign up</button>
      </div>
    </div>
  )
}
