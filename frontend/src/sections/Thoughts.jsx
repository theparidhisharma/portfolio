import Reveal from "../components/common/Reveal";
import LinkedInStoryCard from "../components/linkedin/LinkedInStoryCard";
import { LINKEDIN_POSTS } from "../data/linkedin";
import { Linkedin } from "lucide-react";

export default function Thoughts() {
  return (
    <section id="thoughts" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex justify-center items-center gap-4 mb-20">
          <Linkedin size={40} className="text-blue-500" />
          <h2 className="text-5xl font-black">Featured on LinkedIn</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {LINKEDIN_POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <LinkedInStoryCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
