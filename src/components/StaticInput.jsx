import styles from "@/styles/Input.module.css"
import styles2 from "@/styles/Welcome.module.css"
import Input from "./Input"

const StaticInput = () => {
  const USER = "visitor"
  const DOMAIN = "terminal.devdutt.dev"
  const NAME = `
         _                      _           _     _
        | |                    | |         | |   | |
      __| |   ___  __   __   __| |  _   _  | |_  | |_
    /  _  |  / _ \\ \\ \\ / /  / _  | | | | | | __| | __|
    | (_| | |  __/  \\ V /  | (_| | | |_| | | |_  | |_
     \\____|  \\___|   \\_/    \\__,_|  \\__,_|  \\__|  \\__|
  `;

  const PHOTO = `
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `;

  return (
    <>
      <div className={styles.card}>
          <span className={styles.orange}>{USER}</span>
          @<span className={styles.green}>{DOMAIN}</span>
          :~$&nbsp;
        <div className={styles.form}>
          <form
          autoComplete="off"
          className={styles.form}>
            <input
            type="text"
            className={styles.input}
            value={"welcome"}
            disabled={true}/>
            <input
            type="submit"
            value="submit"
            className={styles.display}/>
          </form>
        </div>
      </div>
      <>
      <br/>
      <div className={styles2.pre}>
        <div>
          <pre>
            {NAME}
          </pre>
          <br/>
          <p className={styles2.line}>
            Welcome to my terminal portfolio.  (Version 1.0.0)
          </p>
          <br/>
          <p className={styles2.line}>
            ----
          </p>
          <p className={styles2.line}>
            Hi, I'm full-stack/MERN stack developer.
          </p>
          <br/>
          <p className={styles2.line}>
            For the list of available commands, type `<span className={styles2.green}>help</span>`.
          </p>
        </div>
        <div className={styles2.photo}>
          <pre>
            {PHOTO}
          </pre>
        </div>
      </div>
      <br/>
      <Input />
    </>
    </>
  )
}

export default StaticInput;