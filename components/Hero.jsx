import styles from './Hero.module.scss'

import SearchIcon from "../public/search-icon-white.svg";

import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={robotoSlab.className}>Providing independent research analysis, and resources to facilitate informed policy decisions and administration of services</h1>
                <form>
                    <label for="heroSearch">Search rfa.sc.gov</label>
                    <input placeholder="Search rfa.sc.gov" id="heroSearch" />
                    <button>Search<SearchIcon/></button>
                </form>
            </div>
        </section>
    )
}