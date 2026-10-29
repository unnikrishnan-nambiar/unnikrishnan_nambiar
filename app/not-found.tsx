import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page Not Found - RYX AI',
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="container-content py-28 text-center sm:py-40">
          <p className="headline text-[120px] text-white/10 sm:text-[200px]">404</p>
          <h1 className="headline mt-2 text-3xl sm:text-5xl">
            This page <span className="accent-serif">isn&apos;t here.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[460px] text-lg text-muted">
            The link is broken or the page has moved.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Button href="/" arrow>
              Back home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
