import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      <Navbar />

      {/*About Me*/}
      <section id="about-me" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-5xl font-bold mb-6">
          Roblox Portfolio
        </h1>

        <p className="text-zinc-300 max-w-xl mb-3">
          I'm Primerrz, a Roblox developer with 2+ years of experience scripting and developing games. 
          I have: 
        </p>

        <ul className="text-zinc-300 max-w-md text-left list-disc space-y-2 mb-3">
          <li>
            Designed and implemented scalable player data systems using <b>DataStoreService</b> and structured persistence libraries such as <b>ProfileStore</b>.
          </li>
          <li>
            Architected modular gameplay systems including <b>combat</b>, <b>movement</b>, <b>physics interactions</b>, and <b>item purchasing</b>.
          </li>
          <li>
            Developed responsive and performant user interfaces with a focus on clarity, usability, and maintainable UI architecture.
          </li>
          <li>
            Integrated animation systems and visual effects to deliver polished gameplay feedback.
          </li>
        </ul>

        <p className="text-zinc-300 max-w-xl">
          Many of the projects I am working on have yet to be released, but below you can find a selection of work that demonstrates my development approach, technical experience, and the types of systems I build.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-zinc-700 rounded-lg"
          >
            See Projects
          </a>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            title="Gameplay Systems"
            description="Implemented scalable gameplay features in Roblox using modular Luau scripts and built-in engine services such as physics and tweening."
            video1="/GameplaySystems1.mp4"
            video2="/GameplaySystems1.webm"
          />

          <ProjectCard
            title="Frontend User Interface"
            description="Developed responsive in-game UI with Luau, connecting interface elements to gameplay events and player input to provide clear feedback and smooth interactions."
            video1="/UISystems1.mp4"
            video2="/UISystems1.webm"
          />

          <ProjectCard
            title="Animation and VFX"
            description="Created animations and visual effects that complement gameplay actions, helping communicate abilities, movement, and other events in a clear and visually polished way."
            video1="/VFXandAnimation1.mp4"
            video2="/VFXandAnimation1.webm"
          />

          <ProjectCard
            title="Player Data Systems"
            description="Built a player data systems using ProfileStore to save and load player progress, with autosaving and safeguards to help prevent data loss between sessions."
            video1="/DatastoreSystems1.mp4"
            video2="/DatastoreSystems1.webm"
          />

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="py-20 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Contact
        </h2>

          <a href="mailto:primerrzrblx@gmail.com"
          className="text-zinc-300 pr-5">
            Email: primerrzrblx@gmail.com
          </a>
          <p className="text-zinc-300">
            Discord: primerrz
          </p>
          <p className="text-zinc-300 mb-5">
            Roblox: @PrimeRRZ
          </p>

      </section>

    </div>
  )
}
