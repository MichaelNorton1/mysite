import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p></p>
        <p>This is my Portfolio and Contact website made with Next.js! </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://michaelnorton1.github.io/TeamTracker/">
              <a>Team Tracker</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}></small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://michaelnorton1.github.io/Playlist/">
              <a>Create My Concert (with Spotify)</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}></small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://michaelnorton1.github.io/PigGame/">
              <a>Pig Dice Game</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}></small>
          </li>{" "}
          <li className={utilStyles.listItem}>
            <Link href="https://michaelnorton1.github.io/expenses/">
              <a>Monthly expense Calculator</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}></small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
