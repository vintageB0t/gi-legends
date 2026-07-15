export function SectionTitle({
  eyebrow,
  pre,
  highlight,
  post,
  tone = "dark",
  center = false,
}: {
  eyebrow?: string;
  pre: string;
  highlight: string;
  post: string;
  tone?: "dark" | "light";
  center?: boolean;
}) {
  const titleColor = tone === "light" ? "text-white" : "text-petroleo";
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="font-sans text-xs tracking-[0.28em] text-teal">{eyebrow}</p>
      )}
      <h2 className={`mt-4 font-sanchez text-3xl leading-[1.12] sm:text-4xl ${titleColor}`}>
        {pre}
        <em className="font-instrument italic text-teal">{highlight}</em>
        {post}
      </h2>
    </div>
  );
}
