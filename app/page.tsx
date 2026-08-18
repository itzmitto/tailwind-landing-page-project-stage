import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-red-100 p-10"> 
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8">
        <div className="border-b p-10">
          <h1 className="text-3xl font-bold">1. Vertel ons waar u staat</h1>
          <p>Zo kunnen we het gesprek goed voorbereiden en direct de juiste specialist laten aansluiten.</p>
        </div>

        <section className="mt-8">
          <h2>Welk advies past het beste bij uw situatie?</h2>
          <div className="mt-4 flex flex-col gap-3">
            <label className="rounded-xl border p-4">
              <input type="radio" name="advies" value="project"/>Ik heb een concreet project</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="advies" value="regelgeving"/>Ik wil advies over regelgeving</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="advies" value="orienteren"/>Ik weet het nog niet precies</label>
          </div>
        </section>

        <section className="mt-8">
          <h2>Wanneer wilt u starten?</h2>
          <div className="mt-4 flex flex-col gap-3">
            <label className="rounded-xl border p-4">
              <input type="radio" name="start" value="snel"/>Zo snel mogelijk</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="start" value="3-maanden"/>Binnen 3 maanden</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="start" value="later-dit-jaar"/>Later dit jaar</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="start" value="orienteren"/>Ik ben me nog aan het oriënteren</label>
          </div>

        </section>
        <section className="mt-8">
          <h2>Hoe wilt u het gesprek straks voeren?</h2>
          <div className="mt-4 flex flex-col gap-3">
            <label className="rounded-xl border p-4">
              <input type="radio" name="gesprek" value="telefonisch"/>Telefonisch</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="gesprek" value="showroom"/>In onze showroom</label>
            <label className="rounded-xl border p-4">
              <input type="radio" name="gesprek" value="locatie"/>Op locatie</label>
          </div>
        </section>
       
       <Link href="/page2" className="mt-8 inline-block rounded-2xl bg-lime-700 px-8 py-4 text-neutral-100">Volgende stap</Link>
      
      </div>
    </main>
  );
}


