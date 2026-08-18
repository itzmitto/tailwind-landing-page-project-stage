import Link from "next/link";

export default function Page2() {
  return (
    
    <main className="min-h-screen bg-red-100 p-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white">
        <div className="border-b p-10">
          <h1 className="text-4xl font-bold">2. Laat uw situatie zien</h1>
          <p className="mt-4 text-lg">Hoe beter wij uw situatie begrijpen, hoe gerichter we kunnen adviseren</p>
        </div>
        <div className="p-10">

          <section>
            <h2 className="text-lg font-bold">Vertel kort iets over uw plannen</h2>
            <textarea className="mt-4 h-48 w-full rounded-3xl border p-5"placeholder={'Bijvoorbeeld: "We willen onze bestaande stal vervangen door zes paardenboxen met een ruime wasplaats."'}/>
          </section>
            
          <section className="mt-8">
            <h2 className="text-lg font-bold">Voeg foto’s of tekeningen toe</h2>
            <p className="mt-3 text-lg">Heeft u al foto’s van de huidige situatie, een schets of bouwtekening? Upload deze gerust</p>
            <p className="mt-6 text-lg">Hiermee kunnen wij ons beter voorbereiden.</p>
            <label className="mt-4 flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-xl text-white">+</span>
              <span className="mt-3 font-semibold text-orange-500">Bestanden toevoegen</span>
              <span className="mt-2 text-sm text-gray-500">Ondersteunde bestanden: JPG, PNG en PDF.</span>
              <input type="file" className="hidden" />
            </label>
          </section>

          <Link href="/page3" className="mt-8 inline-block rounded-2xl bg-lime-700 px-8 py-4 text-neutral-100">Naar uw gegevens</Link>

        </div>
      </div>
    </main>
  );
}