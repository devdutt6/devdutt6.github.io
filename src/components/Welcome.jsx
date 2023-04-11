import styles from "@/styles/Welcome.module.css";

const Welcome = () => {
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

  return (<>
  <div className={styles.pre}>
    <div>
      <pre>
        {NAME}
      </pre>
      <br/>
      <p className={styles.line}>
        Welcome to my terminal portfolio.  (Version 1.0.0)
      </p>
      <br/>
      <p className={styles.line}>
        ----
      </p>
      <br/>
      <p className={styles.line}>
        For the list of available commands, type `<span className={styles.green}>help</span>`.
      </p>
      <br/>
    </div>
    <div className={styles.photo}>
      <pre>
        {PHOTO}
      </pre>
    </div>
  </div>
  </>)
}

export default Welcome;