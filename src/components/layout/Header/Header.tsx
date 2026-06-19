// WHO CAN EDIT:
// Logo: Junior, Mid, Senior
// Other: Senior

"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import SubMenu from "./SubMenu/SubMenu";
import Logo from "../../../assets/svg/logo.svg";
import { isFilled } from "@prismicio/client";

const Header = ({ data }) => {
  const navItems = data?.links;

  return (
    <header className={styles.Header}>
      <div className={styles.Inner}>
        <Link href="/" className={styles.Logo}>
          <Logo />
        </Link>
        <nav className={styles.Nav}>
          <ul>
            {navItems?.map(({ link }, i) => {
              if (link.length === 1) {
                return (
                  <li key={i}>
                    <PrismicNextLink field={link[0]}>
                      {link[0].text}
                    </PrismicNextLink>
                  </li>
                );
              } else if (link.length > 1) {
                return <SubMenu key={i} items={link} />;
              } else {
                return null; // Handle case where link is empty
              }
            })}
            {isFilled.link(data.cta) && <li>
              <PrismicNextLink field={data.cta} className="button small"/>
            </li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
