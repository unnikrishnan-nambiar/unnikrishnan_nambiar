import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import UseCaseExplorer from '@/components/UseCaseExplorer';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  '/solutions',
  'AI Solutions & Use Cases - RYX AI',
  'Twelve ways RYX AI puts AI to work in sales, marketing, customer service and operations: lead agents, instant callbacks, WhatsApp assistants, bookings, reviews and document automation.'
);

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Solutions"
          title={
            <>
              AI built around <span className="accent-serif">your problem.</span>
            </>
          }
          intro="Every engagement starts with where you lose leads, time or money. Here are twelve problems we solve today, each with what we measure so you know it's working."
        />
        <section className="container-content pb-8">
          <UseCaseExplorer />
        </section>
        <CtaBand
          title={
            <>
              Don&apos;t see your use case?
              <br />
              <span className="accent-serif">Tell us about it.</span>
            </>
          }
          body="Most of what we build starts as a problem nobody has a tool for yet. Bring yours and we'll show you how AI could handle it."
        />
      </main>
      <Footer />
    </>
  );
}
