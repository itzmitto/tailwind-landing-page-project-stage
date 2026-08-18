"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page4() {
  const [ervaring, setErvaring] = useState({
    score: "",
    toelichting: ""
  });

//   function handleSubmit() {
//     console.log(ervaring);
//   }

function handleSubmit() {
  const bestaandeData = localStorage.getItem("formulier");
  const formulier = bestaandeData ? JSON.parse(bestaandeData) : {};

  const alles = {
    ...formulier,
    ...ervaring
  };

  console.log(alles);
}

  return (
    <main className="min-h-screen bg-red-100 p-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-14 shadow-lg">
        <div>
          <h1 className="mt-5 text-4xl font-bold">4. Bedankt voor je aanvraag</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600"> We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op. Meestal lukt dit binnen één werkdag. Houd je inbox in de gaten voor een bevestiging.</p>
        </div>

        <section className="mt-20">
          <h2 className="text-xl font-bold">Hoe was je ervaring?</h2>
          <p className="mt-5 text-lg text-gray-600">het was makkelijk om mijn aanvraag in te dienen</p>
          <div className="mt-5 grid grid-cols-7 gap-3">

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="1" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})}/>
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-red-900 peer-checked:text-white">1</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="2" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})}/>
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-red-900 peer-checked:text-white">2</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="3" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})} />
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-red-900 peer-checked:text-white">3</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="4" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})} />
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-lime-500 peer-checked:text-white">4</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="5" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})} />
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-lime-500 peer-checked:text-white">5</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="6" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})}/>
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-lime-500 peer-checked:text-white">6</div>
            </label>

            <label className="cursor-pointer">
              <input type="radio" name="ervaring" value="7" className="peer hidden" onChange={(e) => setErvaring({...ervaring, score: e.target.value})}/>
              <div className="flex h-20 items-center justify-center rounded-xl border text-lg transition peer-checked:bg-lime-500 peer-checked:text-white">7</div>
            </label>

          </div>
          <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span>Sterk mee oneens</span>
            <span>Sterk mee eens</span>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold">Voeg een toelichting toe en help ons verbeteren</h2>
          <textarea value={ervaring.toelichting} onChange={(e) => setErvaring({...ervaring, toelichting: e.target.value})} className="mt-5 h-60 w-full rounded-3xl border p-5 bg-orange-100 text-lg" placeholder="Vertel ons wat je ervan vond..." />
        </section>

        <Link href="/" onClick={handleSubmit} className="mt-20 inline-block rounded-2xl bg-amber-900 px-12 py-5 text-lg font-semibold text-white">Indienen</Link>

      </div>
    </main>
  );
}