export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-wide">REVEX</h1>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <span>Home</span>
          </li>

          <li>
            <span>About</span>
          </li>

          <li>
            <span>Work</span>
          </li>

          <li>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
