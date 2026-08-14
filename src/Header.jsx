import Button from "./components/button";
import { NAVLINKS } from "./constants/navItems";
import { Search } from "lucide-react";

// xs  --  small device
// sm  --   medium device
// md  -- large device
// lg   -- tabs / desktop
// xl  -- large desktop
// 2xl  --  largest size

//padding
// px
// py
// p
// pl
// pr

////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <header className="flex items-center  justify-between px-4 bg-[#fef3c7]">
      <h1 className="text-4xl text-[#dc2626]/20 hover:text-red-700 duration-800 transition-all">
        Raph tutorials{" "}
        <Search color="brown" size={280} className="animate-spin" />
      </h1>
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
