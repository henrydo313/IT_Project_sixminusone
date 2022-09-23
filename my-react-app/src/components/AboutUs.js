import style from "./CSS/aboutUs.module.css"
import Layout from "./Layout"

export default function AboutUs() {
    return(
        <Layout>
            <div className={style.aboutLabel}>
                About Us
            </div>
            <div className={style.aboutText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum justo ac sapien mollis pulvinar. Duis volutpat est eget tortor luctus cursus. Nam at nulla nunc. Integer eget nisi vel purus iaculis interdum ut nec nisl. Quisque vel lacus aliquet, tincidunt odio sodales, facilisis ante. Vivamus venenatis commodo erat, nec scelerisque eros congue vel. Nam viverra nisi at pulvinar facilisis. Ut commodo tellus et nisl consectetur cursus. Proin non consectetur nunc. Sed lobortis congue luctus. Maecenas ut erat et nisl interdum sagittis quis in felis. Aenean tempus non lorem a lobortis. Quisque at tortor accumsan, ornare lorem a, auctor mi. Pellentesque leo nulla, ullamcorper sed orci ac, pretium feugiat nunc.
            </div>
        </Layout>

        
    )
}