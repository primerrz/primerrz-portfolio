export default function ProjectCard({
  title,
  description,
  image,
  href
}: {
  title: string;
  description: string;
  image: string;
  href?: string;
}) {
  const imgEl = (
    <img
      src={image}
      alt={title}
      className="w-full h-60 object-cover"
    />
  );

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">

      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {imgEl}
        </a>
      ) : (
        imgEl
      )}

      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-zinc-300">
          {description}
        </p>

      </div>

    </div>
  );
}