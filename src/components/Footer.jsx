import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.outro}>
          <h1>eMIST Recipe</h1>
          <p>
            "Cooking is like love. It should be entered into with abandon or not
            at all."
          </p>
        </div>
        <div className={styles.credit}>
          <div>
            <small>&copy; 2024 Edryl Moratas - All rights reserved</small>
            <br />
            <small>
              For more info contact me from my social media accounts
            </small>
          </div>
          <div className={styles.socmed}>
            <a href="https://github.com/e-mist" target="__blank">
              <img src="./src/assets/images/github.png" alt="" />
            </a>
            <a href="mailto:edrylmoratas.p.use@gmail.com" target="__blank">
              <img src="./src/assets/images/email.png" alt="" />
            </a>
            <a
              href="https://www.facebook.com/edrylmoratas.mist"
              target="__blank"
            >
              <img src="./src/assets/images/facebook.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
