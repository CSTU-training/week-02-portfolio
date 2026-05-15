type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-blue-200 bg-white p-5">
      <h2 className="font-semibold text-blue-900">{title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-blue-600">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
