import Button from "./components/button";
import { NAVLINKS } from "./constants/navItems";

const Header = () => {
  return (
    <header>
      <h1>Welcome</h1>
      <nav>
        <ul>
          {/* <li>
            <a href="/">Home</a>
          </li>
    
          <li>
            <a href="/contact">Contact</a>
          </li> */}

          {NAVLINKS.map((navItem) => (
            <li>
              <a className="anchor" href={navItem.link}>
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button label="Sign in" icon="➡" />
    </header>
  );
};

export default Header;
