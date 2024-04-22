import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 shadow-md">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}
