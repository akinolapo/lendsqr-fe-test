import Image from 'next/image';
import styles from './login.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* Left section */}
      <div className={styles.left}>
        <div className={styles.logo}><Image src="/logo.svg" alt="Logo" width={173} height={36} /></div>
        <Image src="/images/loginImage.png" alt="Login Illustration" width={600} height={337} className={styles.image} />
      </div>

      {/* Right section */}
      <div className={styles.right}>
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Email" />
          
          <input type="password" placeholder="Password" />
          
          <div className={styles.forgotPassword}>
            <a href="#">FORGOT PASSWORD?</a>
          </div>
          
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
