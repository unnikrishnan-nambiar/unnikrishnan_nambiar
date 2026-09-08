import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page Not Found - RYX AI Community',
  description: "This page doesn't exist. Head back and find what's real.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="container-content py-24 text-center sm:py-32">
          <p className="font-display text-[110px] font-bold leading-none tracking-tight sm:text-[160px]">
            <span className="text-gradient-vp">404</span>
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            That page isn&apos;t signal. It&apos;s just noise.
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-lg text-ink-secondary">
            The link&apos;s broken or the page moved. Either way, it&apos;s not
            here anymore.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="primary">
              Back to RYX AI Community →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
