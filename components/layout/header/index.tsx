import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 shadow-md">
      <HeaderTop />
      <div className="hidden lg:block">
        <HeaderBottom />
      </div>
    </header>
  );
}
