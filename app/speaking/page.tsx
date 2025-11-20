import { ShadowBox } from "@/app/components/ShadowBox";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Button } from "@/app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { PageSection } from "../components/PageSection";
import { ContentLink } from "../components/ContentLink";
import { VideoCard } from "../components/VideoCard";

interface Talk {
  title: string;
  description: string;
  event: string;
  url?: string;
}

const talksAndPresentations: Talk[] = [
  {
    title: "Building AI-Powered Trading Bots",
    description:
      "Explore the intersection of AI and cryptocurrency trading. Learn how to build intelligent trading bots that can discover patterns and execute automated strategies on crypto exchanges.",
    event: "Available for speaking",
  },
  {
    title: "Web3 and Blockchain: A Practical Introduction",
    description:
      "Demystify blockchain technology and Web3 development. From smart contracts to decentralized applications, learn how these technologies are reshaping the internet.",
    event: "Available for speaking",
  },
  {
    title: "From Music to Code: A 20-Year Journey in Tech",
    description:
      "A personal story of transitioning from the music and entertainment industry to becoming a full-stack developer. Lessons learned, challenges overcome, and insights gained.",
    event: "Available for speaking",
  },
  {
    title: "Full-Stack Development in the Modern Era",
    description:
      "Navigate the current landscape of full-stack development. Best practices, emerging technologies, and how to stay relevant in an ever-changing field.",
    event: "Available for speaking",
  },
];

export default function SpeakingPage() {
  return (
    <div className="relative">
      <title>Speaking | Ryan Lisse</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="max-w-3/5 mx-auto mt-16 text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            My conference talks, podcast && video appearances.
          </h1>
        </GridWrapper>

        <div className="text-center">
          <GridWrapper className="py-4">
            <Button
              variant="primary"
              href="https://forms.gle/hyhqN12A2BGForzq6"
            >
              Invite me to speak
            </Button>
          </GridWrapper>
        </div>

        <div>
          {/* Photos */}
          <div className="mb-8 mt-16 hidden items-center justify-center space-x-12 lg:flex">
            <div className="relative">
              <ShadowBox width={278} height={278}></ShadowBox>
              <span className="absolute left-1 top-2 rotate-[-8deg]">
                <Photo
                  width={270}
                  height={270}
                  src="/c3_speaker_head.png"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="right"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={412} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[8deg]">
                <Photo
                  width={404}
                  height={270}
                  src="/braydon_commit_your_code.jpeg"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="left"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={188} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[-8deg]">
                <Photo
                  width={180}
                  height={270}
                  src="/braydon_stir_trek.jpeg"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="right"
                />
              </span>
            </div>
          </div>
          {/* Mobile Photos */}
          <AnimatedMobilePhotos delay={0.1} />
        </div>

        <div className="relative space-y-32">
          <div className="space-y-16">
            <PageSection title={<h2>Talks && Presentations</h2>}>
              <p className="text-sm/8 text-text-primary">
                An arrangement of live and virtual conference and meetup
                presentations.
              </p>
              <div className="mt-8 max-w-2xl space-y-10 text-balance">
                {talksAndPresentations.map((talk) => (
                  <ContentLink
                    key={talk.title}
                    title={talk.title}
                    description={talk.description}
                    href={talk.url}
                  />
                ))}
              </div>
            </PageSection>

            <PageSection title={<h2>Videos && Podcasts</h2>}>
              <p className="text-sm/8 text-text-primary">
                A combination of podcast recordings and educational videos.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                <VideoCard
                  title="Build a Devious Web Video Player in 4 Hours"
                  subtitle="Web Dev Challenge"
                  url="https://youtu.be/bF32laUxoK0?si=UW3OGEQ4dYVSzhBV"
                  target="_blank"
                  thumbnailUrl="/web_dev_challenge.jpeg"
                  duration={2108}
                />
                <VideoCard
                  title="Homeless to Software Developer! TailwindCSS Usage and Best Practices!"
                  subtitle="Commit Your Code: Ep9"
                  url="https://youtu.be/eQsedvVk9sE?si=11dVYMIoHl-R85o4"
                  target="_blank"
                  thumbnailUrl="/commit_your_code_ep_9.jpeg"
                  duration={2731}
                />
              </div>
            </PageSection>
          </div>

          {/* Biography */}
          <GridWrapper>
            <section className="relative px-4">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="relative col-span-7 flex flex-col space-y-8">
                  {/* Title */}
                  <div className="col-span-5 flex w-3/4 flex-col items-start space-y-3 text-balance">
                    <div className="text-left text-sm font-medium text-indigo-600">
                      <span>Biography</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-text-primary">
                      Here are a few options for speaker bios
                    </h2>
                  </div>

                  <Tabs defaultTab="first-person">
                    <TabList>
                      <Tab id="first-person" label="First person" />
                      <Tab id="third-person" label="Third person" />
                    </TabList>
                    <TabPanels className="mt-8">
                      <TabPanel id="first-person">
                        <p className="text-base leading-7 text-text-secondary">
                          I am Ryan Lisse, a Software Consultant at Salt, where
                          I help companies navigate complex technical challenges.
                          With over 20 years of experience in the music and
                          entertainment scene, I bring a unique creative
                          perspective to full-stack development. I specialize in
                          blockchain, Web3, and AI technologies, and I'm
                          passionate about building decentralized applications.
                          I live in Amsterdam with my two children and a dog.
                        </p>
                      </TabPanel>
                      <TabPanel id="third-person">
                        <p className="text-base leading-7 text-text-secondary">
                          Ryan Lisse is a Software Consultant at Salt, where he
                          helps companies navigate complex technical challenges.
                          With over 20 years of experience in the music and
                          entertainment scene, he brings a unique creative
                          perspective to full-stack development. Ryan specializes
                          in blockchain, Web3, and AI technologies, and is
                          passionate about building decentralized applications.
                          He lives in Amsterdam with his two children and a dog.
                        </p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
                <div className="col-span-5 flex flex-col items-start space-y-8">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="text-left text-sm font-medium text-indigo-600">
                      <span>Headshots</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-text-primary">
                      A variety of photos great for speaker headshots
                    </h2>
                  </div>
                  <div className="mt-12 flex w-full space-x-4">
                    <div className="relative">
                      <ShadowBox width={200} height={200}></ShadowBox>
                      <img
                        className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[9deg] rounded-lg object-cover shadow"
                        src="/braydon_headshot_3.jpg"
                        alt=""
                      />
                    </div>

                    <div className="relative">
                      <ShadowBox width={200} height={200}></ShadowBox>
                      <img
                        className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[-8deg] rounded-lg object-cover shadow"
                        src="/braydon_speaking_photo_square.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </GridWrapper>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
