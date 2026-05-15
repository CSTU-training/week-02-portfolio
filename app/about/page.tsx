/*
 * @Author: Telliex telliexyuzo@gmail.com
 * @Date: 2026-05-15 15:28:32
 * @LastEditors: Telliex telliexyuzo@gmail.com
 * @LastEditTime: 2026-05-15 15:29:34
 * @FilePath: /week-02-portfolio/app/about/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const experience = [
  {
    title: "Senior Software Engineer",
    company: "Awkns",
    location: "Remote",
    period: "May 2023 – Mar 2026",
    bullets: [
      "Collaborated daily with cross-functional teams in a remote, English-speaking startup environment",
      "Took ownership of tasks end-to-end, consistently meeting deadlines under pressure",
      "Supported teammates by sharing knowledge, coordinating timelines, and resolving blockers",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "eCloudvalley",
    location: "Taipei, Taiwan",
    period: "Apr 2022 – Apr 2023",
    bullets: [
      "Worked closely with clients and internal teams to deliver reliable, on-time results",
      "Maintained organized workflows and documentation to support smooth team operations",
    ],
  },
  {
    title: "Senior Frontend Engineer & Team Lead",
    company: "Shinho",
    location: "Shanghai, China",
    period: "Dec 2015 – Mar 2022",
    bullets: [
      "Led a cross-functional team across multiple product lines",
      "Coordinated schedules and ensured smooth day-to-day operations in a multicultural workplace",
      "Managed multiple responsibilities simultaneously while maintaining quality under high pressure",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Yahoo Taiwan",
    location: "Taipei, Taiwan",
    period: "May 2010 – Nov 2015",
    bullets: [
      "Contributed to a large team environment, building strong habits of communication and collaboration",
      "Managed multiple concurrent responsibilities while maintaining high attention to quality",
    ],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Frontend Architecture",
  "Team Leadership",
  "Cross-functional Collaboration",
  "Bilingual (English & Mandarin)",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Bio */}
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        About Me
      </h1>
      <p className="mt-4 max-w-prose text-base leading-7 text-zinc-600">
        I&apos;m Telliex Chiu, a frontend engineer based in San Jose, CA with
        8+ years of experience shipping products across Taiwan, China, and the
        U.S. I&apos;ve led teams, worked at companies ranging from Yahoo to
        early-stage startups, and built things at every scale. Currently
        deepening my computer science foundations as a student while staying
        close to the craft.
      </p>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-medium text-zinc-900">{job.title}</span>
                <span className="text-sm text-zinc-400">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-zinc-500">
                {job.company} &middot; {job.location}
              </p>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm leading-6 text-zinc-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900">Education</h2>
        <div className="mt-4 space-y-3">
          <div>
            <p className="font-medium text-zinc-900">
              Computer Science (in progress)
            </p>
            <p className="text-sm text-zinc-500">CSTU &middot; Current</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900">B.S. in Biology</p>
            <p className="text-sm text-zinc-500">
              Chinese Culture University, Taiwan
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}