import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Skills } from '@/components/Skills/Skills';
import { CTA } from '@/components/CTA/CTA';
import { Projects } from '@/components/Projects/Projects';
import { Contact } from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Hero
        name='Roman Sosnovskyi'
        position='Frontend Developer'
        description='I build fast, modern, and user-friendly websites that people love.'
        cvPath='/documents/Roman_Sosnovskyi_CV.pdf'
        avatarPath='/images/avatar.jpeg'
        highlightedWords={['modern']}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CTA />
    </main>
  );
}
