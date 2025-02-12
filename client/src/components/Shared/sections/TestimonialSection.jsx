export default function TestimonialSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light italic mb-8">
          &quot;Wonderful place to stay for
          <br />
          our first trip to Charleston.&quot;
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Staying here was the perfect combo of historic and luxe. Paired with
          updated rooms and thoughtful touches, this inn is the place to stay
          for anyone wanting to truly explore Charleston.
        </p>
        <div className="text-sm">
          <p className="font-semibold">BEATRICE R.</p>
          <p className="text-gray-500">Sept 2023</p>
        </div>
        <button className="mt-8 text-primary hover:underline">
          View All Reviews →
        </button>
      </div>
    </section>
  );
}
