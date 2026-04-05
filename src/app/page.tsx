import styles from "./page.module.css";

// Sections
import About from "../components/sections/About/About";
import Mv from "../components/sections/Mv/Mv";
import Quality from "../components/sections/Info/Info";
import Products from "@/components/sections/Products/Products";
import News from "@/components/sections/News/News";

export default function Home() {
    return (
        <main className={styles.main}>
            <Mv />
            <Quality />
            <About />
            <Products />
            <News />
        </main>
    );
}
