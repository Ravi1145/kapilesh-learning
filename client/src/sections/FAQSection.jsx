import SectionHeading from "../components/SectionHeading";
import FAQ from "../components/FAQ";
import { faqs } from "../data/content";

export default function FAQSection() {
  return (
    <section className="border-t border-line bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Frequently Asked"
          title={["Questions worth", "answering clearly."]}
          align="center"
        />
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>
  );
}
