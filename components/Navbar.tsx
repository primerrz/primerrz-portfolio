export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/60 backdrop-blur z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-semibold">
          Primerrz
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  )
}