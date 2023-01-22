import { navigation } from "../../resources";
import { Link } from "react-router-dom";

import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.root}>
      {Object.values(navigation).map(({ text, href }) => (
        <Link key={href} to={href}>
          {text}
        </Link>
      ))}
    </header>
  );
}
