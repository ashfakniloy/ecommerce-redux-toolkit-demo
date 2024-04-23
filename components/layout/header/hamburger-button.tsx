export default function HamburgerButton({
  showNavDrawer,
  setShowNavDrawer,
}: {
  showNavDrawer: boolean;
  setShowNavDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center"
      aria-label="showNavDrawer"
      onClick={() => setShowNavDrawer(!showNavDrawer)}
    >
      <div
        className={`${hamburgerLine} ${
          showNavDrawer ? "rotate-45 translate-y-[7px] " : ""
        }`}
      />
      <div className={`${hamburgerLine} ${showNavDrawer ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          showNavDrawer ? "-rotate-45 -translate-y-[7px] " : ""
        }`}
      />
    </button>
  );
}
