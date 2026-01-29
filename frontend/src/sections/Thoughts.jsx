import React, { useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import LinkedInStoryCard from '../components/linkedin/LinkedInStoryCard';
import { fetchLinkedInPosts } from '../services/linkedin.api';

const Thoughts = () => {
  const [posts, setPosts] = useState([]); // ← FIX: no MOCK_POSTS

  useEffect(() => {
    const getPosts = async () => {
      const fetched = await fetchLinkedInPosts();
      setPosts(fetched);
    };
    getPosts();
  }, []);

  return (
    <section
      id="thoughts"
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10"
    >
      <Reveal>
        <div className="flex items-center justify-center gap-4 mb-20">
          <Linkedin className="text-blue-500" size={40} />
          <h2 className="text-5xl font-black tracking-tighter text-center">
            Featured on LinkedIn
          </h2>
        </div>
      </Reveal>

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
