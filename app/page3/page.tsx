import Link from "next/link";

export default function Page3() {
  return (
    <main className="min-h-screen bg-red-100 p-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white">
        <div className="border-b p-10">
          <h1 className="text-4xl font-bold">3. Gegevens en afronden</h1>
          <p className="mt-4 text-lg">Vul uw contactgegevens in zodat wij u kunnen bereiken voor het adviesgesprek.</p>
        </div>
        <div className="p-10">

          <section>
            <label className="text-lg font-bold">Naam</label>
            <input type="text" placeholder="Uw naam" className="mt-3 w-full rounded-full border p-4"/>
        </section>

          <section className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="text-lg font-bold">E-mailadres</label>
              <input type="email" placeholder="Uw e-mailadres" className="mt-3 w-full rounded-full border p-4"/>
            </div>
            <div>
              <label className="text-lg font-bold">Telefoonnummer</label>
              <input type="tel" placeholder="Uw telefoonnummer" className="mt-3 w-full rounded-full border p-4"/>
            </div>
          </section>

          <section className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="text-lg font-bold">Postcode</label>
              <input type="text" placeholder="1234 AB" className="mt-3 w-full rounded-full border p-4"/>
            </div>
            <div>
              <label className="text-lg font-bold">Woonplaats</label>
              <input type="text" placeholder="Uw woonplaats" className="mt-3 w-full rounded-full border p-4"/>
            </div>
          </section>

          <p className="mt-5 text-sm text-gray-500">We vragen dit om de regio/situatie goed in te kunnen schatten.</p>

          <button className="mt-14 rounded-2xl bg-orange-500 px-10 py-4 font-semibold text-white">Versturen</button>
        </div>
      </div>
    </main>
  );
}