import Image from "next/image";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen  justify-center items-center md:p-0 p-5">
      <main className="flex-grow  max-w-6xl  flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl font-bold mb-6">
          Support Our ExhibitionSupport Our Artists
        </h1>
        <p className="text-xl mb-8">
          Building a New Burma Together This project is proudly created by the
          ANew Burma Team, a group dedicated to raising awareness and fostering
          change in Myanmar. In the face of ongoing challenges such as
          airstrikes and human rights violations, our artists have taken the
          initiative to create impactful works like the &quot;Planes
          Project.&quot; These efforts aim to highlight the struggles and
          resilience of the people while inspiring hope for a brighter future.
          By supporting our artists, you&quot;re directly contributing to their
          mission of creating meaningful art that drives change, uplifts
          communities, and builds a new Burma. Join us in supporting this cause.
          Every contribution makes a difference.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors">
          Donate Now
        </button>
      </main>

      {/* Fixed footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Image
          src="/images/image-bomb.png"
          width={1180}
          height={788}
          alt="The Bomb"
          className="w-full"
        />
      </div>
    </div>
  );
}
