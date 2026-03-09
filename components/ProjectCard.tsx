export default function ProjectCard({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">

      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-60 object-cover"
      />

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