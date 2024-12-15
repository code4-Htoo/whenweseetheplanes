"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export default function Exhibition() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("visible");
          } else {
            //target.classList.remove("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    const targets = document.querySelectorAll(".animation");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="relative w-full">
      <div className="fixed w-full h-screen bg-gray-900/25"></div>
      <div className="max-w-6xl mx-auto pb-20 md:pb-32 min-h-screen h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Welcome */}
        <section className="snap-center min-h-screen relative flex justify-center items-center">
          <h2 className="text-6xl text-center text-yellow-400 max-w-4xl">
            Welcome to our Exhibition
          </h2>
        </section>
        {/* Myawady */}
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/01.png"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 w-1/2">
              <h3 className="text-yellow-400">
                Myawaddy Township (Karen State), 20 April By Zay Yar Minn
              </h3>
              <p>
                A Lot of 500-pound bombs were fired by the military council near
                friendship bridge.
              </p>
            </div>
            <div className="artwork_desc bg_dropsd p-8 text-right w-1/2">
              <h3 className="text-yellow-400">
                Laiza (Mountainous Town)Kachin, October 2023 By Khun Lat
              </h3>
              <p>
                Two bombs were dropped from a jet plane near Laiza city and a
                thermal flare was dropped to protect the aircraft from the
                MANPADS. 31 October 2023. On the night of October 9th, at least
                30 civilians, in­cluding a two-month-old infant, were killed and
                57 others were injured when artillery shelling was fired at the
                Mon Laike refugee camp.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/02.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/03.png"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/04.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/05.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_01.jpg"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg transition-all duration-300"
            />
          </div>
          <div
            className={`flex items-end justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-8 text-right w-2/3">
              <h3 className="text-yellow-400">Loi Nam Pha Camp</h3>
              <p>
                Waiting patiently for a hearty meal to receive. Conversations
                between them: &quot;when they see the jet fighter planes, they
                point and say evil plane&quot;. &quot;when they see passenger
                planes, they point and say its a good plane&quot;. They could
                tell the different type of planes when an airplane is in the
                sky.
              </p>
            </div>
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_02.jpg"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg transition-all duration-300"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 w-2/3">
              <h3 className="text-yellow-400">Loi Nam Pha Camp</h3>
              <p>
                Waiting patiently for a hearty meal to receive. Conversations
                between them: &quot;when they see the jet fighter planes, they
                point and say evil plane&quot;. &quot;when they see passenger
                planes, they point and say its a good plane&quot;. They could
                tell the different type of planes when an airplane is in the
                sky.
              </p>
            </div>
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_03.jpg"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-8 text-right w-2/3">
              <h3 className="text-yellow-400">Mese village, July 2023</h3>
              <p>
                Due to the Mese battle, a community has resettled deeper into
                the forest after being displaced by conflict, and they&apos;ve
                constructed a new home and household items entirely from bamboo.
                The ingenuity and resourcefulness of using bamboo for both
                shelter and daily necessities without nails is truly remarkable.
                It&apos;s a testament to their resilience and ability to adapt
                to their environment.
              </p>
            </div>
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_04.jpg"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg transition-all duration-300"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 w-2/3">
              <h3 className="text-yellow-400">Lukumpgra Village, June 2023</h3>
              <p>
                2 of 500-pound bombs were dropped near the owner of the pig farm
                houses where he was sleeping and very fortunate that he
                wasn&apos;t injured. First Aid workers have requested him to
                leave his home for evacuation but he refuses to leave his home.
                While the photos were taken, the jet plane was still up in the
                air. In this picture he is Preparing food for his pigs and
                drinking rice wine.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/06.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/07.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/des_01.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 w-2/3">
              <h3 className="text-yellow-400">
                Houses that were destroyed in the village of Sita,May 15, 2023
              </h3>
              <p>
                Her house was also caught in the fire, and they had to live in a
                nearby farm. Between the last week of March and April, troops
                under the 66th Division of the Military Council Army raided 12
                villages in Shweku Township and carried out airstrikes,
                artillery shelling, and arson attacks resulting in the wreckage
                of 1800 houses.
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/des_02.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 w-2/3">
              <h3 className="text-yellow-400">
                A child searching for tinsel in the ruins of a house that was
                destroyed by the military council army. May 13, 2023
              </h3>
              <p>
                Between the last week of March and April, troops under the 66th
                Division of the Military Council Army raided 12 villages in
                Shweku Township and carried out airstrikes, artillery shelling,
                and arson attacks resulting in the wreckage of 1800 houses.
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/des_03.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 pb-10 pr-20 w-full">
              <h3 className="text-yellow-400">
                A woman fleeing the war returned after offering alms to the
                village monastery, Si Mu Lai Village May 12, 2023
              </h3>
              <p>
                Her house was also caught in the fire, and they had to live in a
                nearby farm. Between the last week of March and April, troops
                under the 66th Division of the Military Council Army raided 12
                villages in Shweku Township and carried out airstrikes,
                artillery shelling, and arson attacks resulting in the wreckage
                of 1800 houses.
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/des_04.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-center gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-8 w-1/2">
              <h3 className="text-yellow-400 mb-5">Artist: Hkun Li</h3>
              <p>
                Another Tragic event. Military&apos;s airstrike on the civilians
                in Kunglaw village, Kachin State, Many children are among the
                deaths and casualties. The Myanmar military committed another
                terrible crime, killing innocent children in Kunglaw village,
                Kachin state. The airstrike on the church killed 9 people,
                mostly children, and injured over 10. One civilian was killed
                and 10 was injured by retaliatory airstrikes carried out by the
                military on Kung law , located in the Kachin state , on 7
                August.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/hkn_01.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/hkn_02.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/hkn_03.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hkn_04.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-10 w-full">
              <h3 className="text-yellow-400 mb-6">Artist: Nyein Chan Aung</h3>
              <p>
                At the Shan-Kayah border, in the Ban Kauk refugee camp located
                in Hpruso Township, the military council dropped two 500-pound
                bombs via airstrike at around 9 PM on September 5. This resulted
                in the deaths of nine civilians, including children, and left
                many others injured. Among the nine fatalities, six were members
                of the same family: a mother and her five children.
                Additionally, six school-age children residing in the camp were
                also killed. Furthermore, a two-year-old child, the son of a CDM
                (Civil Disobedience Movement) teacher who had been teaching at
                the camp, was among the victims.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/08.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/des_04.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-center gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-8 w-1/2">
              <h3 className="text-yellow-400 mb-6">
                On March 24, 2023, a military plane bombed Dor Ta Ma Gyi
                Hospital in the eastern part of Demoso. Karenni state by YAT
              </h3>
              <p>
                This room is a small operating room. I feel sad because the room
                that is supposed to save people&apos;s lives has turned out like
                this. First, this hospital was shelled. Heavy weapons fell. I
                had to move when I fell. After all, there was an airstrike
                bombing this place. The items in it were left as they were.The
                mountains on the side and the cracked roofs here, In addition to
                that, the medical equipment and the small operating room were
                shot like this. August.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/09.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/10.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/11.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-10 w-1/2">
              <h3 className="text-yellow-400 mb-6">
                Artist Sit Htet aung/ (The Roots)
              </h3>
              <p>
                A church collapsed by military airstrike at the MaeKaNae village
                in Karen State. April,26,2023
              </p>
            </div>
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/12.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-10 w-full">
              <h3 className="text-yellow-400">Mai Ba Nyan</h3>
              <p>
                his is the scene seen on February 4, 2024, when the military
                council army bombed the monastery of Pangkylog village in Kuk
                Khaing Township, North Shan, and almost all of the school
                buildings were damaged. About a mile away from Pangyelog
                village, the military council army and the Kachin Independence
                Army (KIA) fought fiercely. In addition to the monastery of
                Pangkylok village, about 50 houses were burnt to ashes due to
                the airstrike, and many houses were damaged. Until now, the
                monastery and houses have not been rebuilt.
              </p>
            </div>
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/13.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end  justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-20 pb-5 w-3/4">
              <h3 className="text-yellow-400">
                Villagers in Nampheka observe the wreckage of a fighter jet that
                was crashed down on December 12, 2023 by Kachin Independence
                Army,
              </h3>
              <p>
                After bombing their village during a clash between KIA and
                Military Council forces in North Shan. The attack resulted in
                over 20 civilian deaths and destroyed more than a hundred homes,
                leaving many residents homeless and exposed to the elements.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/14.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/yat_02.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-10 w-full">
              <h3 className="text-yellow-400">
                Demoso Township (Karannei), 4 July, 2023 by YAT (The Roots)
              </h3>
              <p>After dropping 2 of 500-pound to IDP Camp</p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_05.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end  justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc text-right p-10 w-3/4">
              <h3 className="text-yellow-400 mb-6">
                Kom Blai (The Roots) Lukumphra village, June 2023
              </h3>
              <p>
                (most of the animals that have been killed including one
                person)They came to drop 2 of 500 pound bomb during middle of
                the night, it is not active war zone
              </p>
              <p>
                This image captures the aftermath of two 500-pound bombs dropped
                at night in a non-active war zone, depicting significant damage
                and the loss of animal and human life
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/hha_06.jpg"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end justify-center gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc text-center p-10 w-3/4">
              <h3 className="text-yellow-400 mb-6">
                DKom Blai (The Roots) <br />
                Lukumphra village, June 2023 
              </h3>
              <p>
                pieces of  500 pound boomb shell pieces (please look up 500
                pound descriptions)
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/15.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end  justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-10 w-2/3">
              <h3 className="text-yellow-400 mb-6">
                Laiza (Mountainous Town), Kachin, October 2023 by Khun Lat
              </h3>
              <p>
                Two bombs were dropped from a jet plane near Laiza city and a
                thermal flare was dropped to protect the aircraft from the
                MANPADS. 31 October 2023. On the night of October 9th, at least
                30 civilians, including a two-month-old infant, were killed and
                57 others were injured when artillery shelling was fired at the
                Mon Laike refugee camp.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/16.jpg"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <div
              className={`flex items-center justify-center gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
            >
              <div className="text-xl pt-5">
                <h3 className="text-yellow-400">
                  WHEN WE SEE THE PLANES, WE STILL FEEL THE PAIN!
                </h3>
                <p className="mb-6">
                  This short experimental film combines performance art, video
                  art, and interviews to portray the feeling of pain that people
                  experience due to the brutal airstrikes back home in
                  Burma/Myanmar. Although the artists have not personally
                  experienced attacks from fighter jets, they have dreamt about
                  these horrific scenes after working with raw footage from the
                  frontlines. As such, archival audio from the ground becomes
                  the sonic landscape in this film. At its core, this artwork is
                  born out of the artists’ desire to face their own nightmares. 
                </p>
                <p className="mb-6">
                  Visually, the artists relied upon Butoh, animism, and
                  historical material culture such as antique textiles to weave
                  between the borderlands of fear and hope. There are two main
                  beings in this work, the green ghost and the white spirit.
                  Back home, people believe that when a person dies from
                  unnatural and violent deaths, their spirits get trapped in our
                  world, lingering as vengeful green ghosts. Building upon this
                  traditional belief, greenness becomes omnipresent in this
                  film, inviting the viewers to be haunted. The white spirit
                  represents the next generation. Even those who are yet to
                  enter this world are terrified of the airstrikes. The young
                  artist expresses this sense of foreboding fear through the
                  contemporary Japanese dance, Butoh. The mask shields the
                  identity of the young artist. 
                </p>
                <p className="mb-6">
                  Connecting these two beings are the antique textiles with
                  airplane patterns from Mru communities (also known as
                  Rakhine-Chin) that live near the border of Myanmar and
                  Bangladesh. In the 1990s, the Myanmar Military (or Tatmadaw)
                  encountered the Mru tribes during their clearance operation
                  against the Rohingya people. Being minorities among
                  minorities, the Mru people experienced the worst oppression
                  from the military government. Their traditional textiles were
                  banned and burned because the soldiers deemed their fashion
                  too revealing and primitive. The few that remain found their
                  way to the filmmaker and into this film.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="max-w-6xl mx-auto w-full h-auto flex gap-5">
            <Image
              src="/images/17.jpg"
              width={1920}
              height={1000}
              alt="background Image"
              className="w-1/2 h-auto"
            />
            <Image
              src="/images/18.jpg"
              width={1920}
              height={1000}
              alt="background Image"
              className="w-1/2 h-auto"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/19.png"
              width={1176}
              height={784}
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/20.png"
              width={1176}
              height={784}
              alt="background Image"
              className="fixed-bg !h-auto !top-2/3 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
          <div
            className={`flex items-end  justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-10 ">
              <h3 className="text-yellow-400 mb-6">MRO-CHIN PEOPLE</h3>
              <p className="mb-8">
                Mro (or Mru) are considered the most primal peoples who settled
                in the valleys of Chin Hills. Their textiles have the most
                unusual patterns and only cover parts of their body. During the
                migration of Tibeto-Burmans into the region, the Khumi-Khami-Mro
                peoples ended up in the coastal rainforests near Bay of Bengal.
                Over the past five centuries, the Khumi people began settling in
                what is now known as Southwestern parts of Chin state.
                Similarly, Khami peoples live in the Northwest Rakhine state.
                The Mro people live along the Chittagong Hills.
              </p>
              <h3 className="text-yellow-400 mb-6">MRO-CHIN PEOPLE</h3>
              <p className="mb-6">
                Mro (or Mru) are considered the most primal peoples who settled
                in the valleys of Chin Hills. Their textiles have the most
                unusual patterns and only cover parts of their body. During the
                migration of Tibeto-Burmans into the region, the Khumi-Khami-Mro
                peoples ended up in the coastal rainforests near Bay of Bengal.
                Over the past five centuries, the Khumi people began settling in
                what is now known as Southwestern parts of Chin state.
                Similarly, Khami peoples live in the Northwest Rakhine state.
                The Mro people live along the Chittagong Hills.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/21.png"
              fill
              alt="background Image"
              className="fixed-bg !h-auto !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex pb-9 overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/yat_03.png"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg transition-all duration-300"
            />
          </div>
          <div
            className={`flex items-end justify-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc p-8 pl-0 text-right w-4/5">
              <h3 className="text-yellow-400 mb-6">
                Demoso Township (Karannei), 7 May 2023 by YAT (The Roots)
              </h3>
              <p>
                The refugees flash light to spider on the wall as they hide in
                the natural cave to shield from the air strike near Demoso
                township, Karenni state, Myanmar in May 7, 2023. (Data to
                update) Report documents 2,471 airstrikes, resulting in at least
                1,295 deaths since February 2021 coup. Myanmar junta airstrikes
                killed over 359 civilians, including 61 children, and injured
                756 others in the first four months of 2024, according to a
                recent report.
              </p>
            </div>
          </div>
        </section>

        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/22.png"
              fill
              alt="background Image"
              className="fixed-bg"
            />
          </div>
          <div
            className={`flex items-end gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd p-8 pb-10 pr-20 w-full">
              <h3 className="text-yellow-400">
                Si Ei village, 8th February 2024 by Kom Blai (The Roots)
              </h3>
              <p>
                The tragic event at the primary school in Daw Si Ei village,
                where a 500-pound bomb was dropped during school hours, has
                caused devastating consequences for the community. The attack
                resulted in the death of four students and injuries to 40
                others. One severely injured student required the removal of a
                kidney. This horrifying experience has deeply traumatized the
                children, leaving them fearful and withdrawn, often hiding under
                tables and being re-traumatized by loud noises. The emotional
                and psychological impact extends beyond the primary school
                students to all children in Daw Si Ei village
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/23.png"
              fill
              alt="background Image"
              className="fixed-bg object-contain !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/24.png"
              fill
              alt="background Image"
              className="fixed-bg object-contain !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <div
              className={`flex items-center justify-center gap-5 mt-auto mb-0 transition-all duration-1000 animation`}
            >
              <div className="text-xl pt-5">
                <h3 className="text-yellow-400">Rebuilding Lives (2024)</h3>
                <p className="mb-6">
                  This short life-affirming documentary weaves the stories of
                  two different refugees, Pi Ngun Hoi and Pu Tluang Cung, as
                  they rebuild their lives in the borderlands between India and
                  Burma/Myanmar. Although their journeys differ, their aim to
                  build new homes with their families unites them. In essence,
                  their stories represent the many Chin people who have been
                  displaced due to the airstrikes against Chin State in
                  Burma/Myanmar. On one side, Pi Ngun Hoi chronicles her journey
                  with pain, starting from her involvement in the Civil
                  Disobedience Movement (CDM), continuing to her near-death
                  experience during an airstrike against Khuafo, a village north
                  of Thantlang, and ending with her family building a house for
                  themselves instead of overstaying at the town&apos;s communal
                  house. On the other side, Pu Tlaung Cung expresses his sorrow
                  in losing his elder sister and his inherited house due to the
                  airstrike against Tlanglo, his village situated close to the
                  India border. But now he is focusing on rebuilding his house
                  back in Tlanglo, because his elderly parents want to return
                  back to their village before they pass away. Tying these two
                  separate stories is the traditional song that Pu Tluang
                  Cung&apos;s father sings about wanting to return to his
                  village. At its core, we see Pi Ngun Hoi&apos;s perseverance
                  to support her family despite her wounds, and Pu Tluang
                  Cung&apos;s defiant determination to fulfil his parents&apos;
                  wish to return to home. Lastly, not only their struggle to
                  rebuild new houses connect their stories, but also their firm
                  defiance against the military junta that has destroyed their
                  lives in the first place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/25.jpg"
              fill
              alt="background Image"
              className="fixed-bg object-contain !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section
          className="snap-center min-h-screen relative flex overflow-hidden"
          id="target-section"
        >
          <div className="bg-wrap max-w-6xl mx-auto relative w-full h-full">
            <Image
              src="/images/26.png"
              width={1900}
              height={1000}
              alt="background Image"
              className="fixed-bg transition-all duration-300"
            />
          </div>
          <div
            className={`flex items-center justify-end gap-5 h-full transition-all duration-1000 animation`}
          >
            <div className="artwork_desc bg_dropsd h-full p-16 w-1/2">
              <h3 className="text-yellow-400 mb-6">
                Demoso Township (Karannei), 7 May 2023 by YAT (The Roots)
              </h3>
              <p>
                The refugees flash light to spider on the wall as they hide in
                the natural cave to shield from the air strike near Demoso
                township, Karenni state, Myanmar in May 7, 2023. (Data to
                update) Report documents 2,471 airstrikes, resulting in at least
                1,295 deaths since February 2021 coup. Myanmar junta airstrikes
                killed over 359 civilians, including 61 children, and injured
                756 others in the first four months of 2024, according to a
                recent report.
              </p>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="max-w-6xl mx-auto w-full h-auto flex gap-10">
            <Image
              src="/images/27.png"
              width={1920}
              height={1000}
              alt="background Image"
              className="w-2/3 h-auto"
            />
            <Image
              src="/images/28.png"
              width={1920}
              height={1000}
              alt="background Image"
              className="w-1/3 h-auto"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <Image
              src="/images/29.png"
              fill
              alt="background Image"
              className="fixed-bg object-contain !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <div
              className={`flex items-center justify-center gap-5 mt-auto mb-0 transition-all duration-1000 animation h-full`}
            >
              <div className="text-xl pt-5">
                <h3 className="text-yellow-400 mb-6">Animation</h3>
                <p className="mb-6">
                  Our team created a short animated video to inform and mobilize
                  the public to participate in the Paper Plane Strike on the
                  first day of the Myanmar New Year. We aim to convey a sense of
                  urgency in stopping the ongoing airstrikes perpetrated by
                  S.A.C., and we selected an artistic style for our video that
                  allowed us to paint a vivid picture of the atrocities Myanmar
                  people are forced to go through. For instance, we used an
                  artistic approach that juxtaposes 3D cartoon characters with
                  real images that depict the horrific aftermath of airstrikes
                  to highlight the harsh realities that children in Myanmar
                  experience. We also incorporated the real sound recording of
                  the airstrikes to further accentuate the urgency to stop the
                  supply of jet fuel to the junta and ultimately stop their
                  reign of terror from above.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="max-w-6xl mx-auto w-full h-auto flex justify-center items-center gap-10">
            <Image
              src="/images/30.png"
              width={1920}
              height={1000}
              alt="background Image"
              className="w-auto h-auto max-h-screen"
            />
            <div
              className={`w-1/3 flex items-center justify-center gap-5 transition-all duration-1000 animation h-full`}
            >
              <div className="text-xl pt-5">
                <h3 className="text-yellow-400 mb-6">MIRACLE CRASH</h3>
                <p className="mb-6">
                  In a land burdened with relentless suffering, where
                  individuals bear the weight of hardships beyond their years,
                  The people fervently wish for the miraculous fall of the junta
                  as they endure their daily tribulations. They harbor a
                  profound hope for the downfall of the junta and its planes and
                  jets, which heartlessly attack innocent civilians. This
                  curtain serves as a vivid illustration of the cries, prayers,
                  and curses of the people, longing for the crash of the fighter
                  jets whenever they appear. It encapsulates a fragment of the
                  deep-seated hatred carried by all of us who are adrift in this
                  sea of suffering. This is the blanket for the family, sewn
                  from the fabric of our collective wounds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-center min-h-screen relative flex items-center">
          <div className="bg-wrap max-w-6xl mx-auto relative w-full">
            <h3 className="mt-28 text-yellow-400 text-8xl text-center">
              THE BOMB
            </h3>
            <Image
              src="/images/bomb.png"
              fill
              alt="background Image"
              className="fixed-bg object-contain !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
