import Image from "next/image";

export default function AboutImageGrid() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about1.jpg"
              alt="Blog writing workspace"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              priority
            />
          </div>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about2.jpg"
              alt="Developer coding"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />
          </div>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about3.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
