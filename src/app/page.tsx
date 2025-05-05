import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Skills } from '@/components/Skills/Skills';
import { CTA } from '@/components/CTA/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <CTA />
    </main>
  );
}
