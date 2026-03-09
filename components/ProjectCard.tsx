export default function ProjectCard({
  title,
  description,
  video1,
  video2
}: {
  title: string;
  description: string;
  video1: string;
  video2: string;
}) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">

      <video
        key={video2}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-60 object-cover"
      >
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/webm" />
      </video>


      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-zinc-300">
          {description}
        </p>

      </div>

    </div>
  )
}