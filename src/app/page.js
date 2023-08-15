import Image from "next/image";
import Link from "next/link";
import homeStyle from "./home.module.css";

export default function Home() {
  return (
    <>
      <ul className={homeStyle.bb}>
        <li>
          <Link className={homeStyle.buttonX} href="/Blog">
            Blog
          </Link>
        </li>
      </ul>

      <h1 className={homeStyle.m}>Welcome Home page</h1>
    </>
  );
}
