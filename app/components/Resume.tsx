import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Salt",
      period: "2020 - Present",
      positions: [
        {
          title: "Software Consultant",
          description: [
            "I provide expert software consulting services, helping companies navigate complex technical challenges and implement modern solutions.",
            "I specialize in full-stack development, blockchain technologies, Web3 applications, and AI-powered systems.",
            "I architect and develop scalable solutions using cutting-edge technologies including React, Angular, Python, and various blockchain platforms.",
          ],
        },
      ],
    },
    {
      company: "Independent Developer & Tech Entrepreneur",
      period: "2005 - Present",
      positions: [
        {
          title: "Full-Stack Developer & Creator",
          description: [
            "I've built various innovative projects including AI-powered cryptocurrency trading bots, MCP servers, and decentralized applications.",
            "I developed mexc-sniper-bot, an AI-powered cryptocurrency trading bot for MEXC exchange with pattern discovery and automated sniping capabilities.",
            "I contribute actively to the open-source community with projects like lancedb_mcp, sleepcatch, and various TypeScript/Python applications.",
            "I combine my creative background in music and entertainment with technical expertise to build unique, user-focused applications.",
          ],
        },
      ],
    },
    {
      company: "Music & Entertainment Industry",
      period: "2000 - 2020",
      positions: [
        {
          title: "Creative & Marketing Professional",
          description: [
            "I spent over 20 years in the music and entertainment scene, working as a creative and marketer.",
            "I bridged the gap between creative vision and technical execution, using technology to enhance entertainment experiences.",
            "I developed marketing strategies and creative campaigns for various entertainment projects and artists.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/braydon_headshot_1.jpeg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
