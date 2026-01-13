import React, { useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import LinkedInStoryCard from '../components/linkedin/LinkedInStoryCard';
import { fetchLinkedInPosts } from '../services/linkedin.api';

const MOCK_POSTS = [
  {
    id: 1,
    title: "Orchestrating Microservices",
    snippet: "Deep dive into consumer groups and offset management in Kafka. 🚀",
    date: "Recent",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7371915870584958976/",
    image: "LINKEDIN_1.png"
  },
  {
    id: 2,
    title: "Journey at DTDL",
    snippet: "Reflecting on my summer internship building scalable backends at Deutsche Telekom.",
    date: "Recent",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7408132864497614848/",
    image: "LINKEDIN_2.png"
  }
];

const Thoughts = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);

  useEffect(() => {
    // Attempt to fetch from backend, fallback to mock is handled in state initialization
    // For now, we stick to mock as backend might be empty
    const getPosts = async () => {
        const fetched = await fetchLinkedInPosts();
        if(fetched && fetched.length > 0) {
            setPosts(fetched);
        }
    };
    getPosts();
  }, []);

  return (
    <section id="thoughts" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      <Reveal>
        <div className="flex items-center justify-center gap-4 mb-20">
          <Linkedin className="text-blue-500" size={40} />
          <h2 className="text-5xl font-black tracking-tighter text-center">Featured on LinkedIn</h2>
        </div>
      </Reveal>
      
      {/* Responsive Grid for Dynamic Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 100}>
            <LinkedInStoryCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Thoughts;