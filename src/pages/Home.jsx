import { Link } from "react-router-dom";

const featuredGames = [
  {
    name: "BGMI",
    tag: "Battle Royale",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Valorant",
    tag: "Tactical FPS",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cyberpunk 2077",
    tag: "Open World",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  {
    title: "Esports Arena",
    text: "Tournament-ready spaces and live event coverage.",
    accent: "from-cyan-500/20 to-blue-700/20",
  },
  {
    title: "Co-op Nights",
    text: "Squads, clans, and community-powered game nights.",
    accent: "from-fuchsia-500/20 to-purple-700/20",
  },
  {
    title: "Next-Gen Tech",
    text: "Performance gear, rigs, and immersive play setups.",
    accent: "from-emerald-500/20 to-cyan-700/20",
  },
];

const trendingGames = [
  {
    name: "Mass Effect",
    blurb: "A galaxy of choices, alliances, and elite missions.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Elden Ring",
    blurb: "Dark fantasy battles, lore, and legendary boss fights.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  },
];

const trailers = ["GTA V", "Call of Duty", "Mass Effect", "Elden Ring"];

function Home() {
  return (
    <section className="space-y-10 text-slate-900 dark:text-slate-100">
      <article className="gaming-hero rounded-[32px] p-6 md:p-8 lg:p-10">
        <div className="relative z-10 flex min-h-[78vh] flex-col justify-between rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-slate-950/35 dark:shadow-[0_18px_60px_rgba(15,23,42,0.55)] md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-700 dark:text-cyan-200">
              CYRUS NEXUS • Gaming Culture Hub
            </p>
            <h1 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              Play the future. Live the arena.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-700 dark:text-slate-200 md:text-lg">
              A neon-lit gaming landing page built for tournaments, trailers,
              community nights, and the pulse of modern esports culture.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="gaming-glass rounded-[24px] p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-700 dark:text-fuchsia-200">
                This week in the arena
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li>• BGMI showdown finals and elite stream highlights</li>
                <li>• Valorant squad drops and ranked challenge recaps</li>
                <li>• New cyberpunk patch notes and community events</li>
              </ul>
            </div>
            <div className="gaming-glass rounded-[24px] p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
                Jump into CYRUS NEXUS
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.2)]"
                >
                  Explore the Shop
                </Link>
                <Link
                  to="/shop"
                  className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 font-semibold text-slate-900 dark:border-white/15 dark:bg-white/6 dark:text-white"
                >
                  Watch Featured Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Featured Games
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            Immersive worlds, cinematic action, unforgettable squads.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredGames.map((game) => (
              <article
                key={game.name}
                className="gaming-card overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-950/60"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-700 dark:text-fuchsia-200">
                    {game.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {game.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Why Choose CYRUS NEXUS
          </p>
          <div className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <div className="rounded-[18px] border border-cyan-400/15 bg-cyan-400/8 p-4">
              ⚡ Curated esports culture, instant drops, and premium next-gen
              visuals.
            </div>
            <div className="rounded-[18px] border border-fuchsia-400/15 bg-fuchsia-400/8 p-4">
              🎮 Community-first updates, tournaments, game nights, and patch
              highlights.
            </div>
            <div className="rounded-[18px] border border-emerald-400/15 bg-emerald-400/8 p-4">
              🌐 A sleek hub for news, trailers, and the latest gaming momentum.
            </div>
          </div>
        </aside>
      </section>

      <section className="gaming-glass rounded-[28px] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
          Gaming Categories
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className={`gaming-card rounded-[24px] border border-slate-200 bg-white/90 bg-gradient-to-br ${item.accent} p-5 dark:border-white/10 dark:bg-slate-950/70`}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Trending Games
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Large banners, bold visuals, iconic worlds.
          </h2>
          <div className="mt-6 space-y-4">
            {trendingGames.map((game) => (
              <article
                key={game.name}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-950/70"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {game.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                    {game.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Esports Section
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Tournaments, squads, and live-stage energy.
          </h2>
          <div className="mt-6 rounded-[24px] border border-fuchsia-400/15 bg-[linear-gradient(145deg,rgba(15,23,42,0.9),rgba(88,28,135,0.5))] p-5">
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Watch regional qualifiers, championship recaps, and community
              tournament highlights powered by CYRUS NEXUS visuals.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["BGMI Finals", "Valorant Cup", "Co-op Clash"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-700 dark:border-white/10 dark:bg-white/6 dark:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Featured Game Trailers
          </p>
          <div className="mt-4 grid gap-3">
            {trailers.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-slate-200 bg-white/80 p-4 text-slate-900 dark:border-white/10 dark:bg-white/6 dark:text-white"
              >
                ▶ {item} trailer spotlight
              </div>
            ))}
          </div>
        </article>

        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Gaming Community
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Build your squad, share your style, rise together.
          </h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
            From BYOC nights to community stream sessions, CYRUS NEXUS keeps the
            heartbeat of gaming culture alive.
          </p>
        </article>
      </section>

      <section className="gaming-glass rounded-[28px] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
          Animated Stats
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["120K+", "Gamers"],
            ["80+", "Featured Games"],
            ["30+", "Tournaments"],
            ["4.9/5", "Reviews"],
          ].map(([value, label]) => (
            <article
              key={label}
              className="rounded-[20px] border border-slate-200 bg-white/85 p-5 text-center shadow-[0_10px_30px_rgba(56,189,248,0.08)] dark:border-white/10 dark:bg-white/6"
            >
              <div className="text-3xl font-black text-cyan-700 dark:text-cyan-100">
                {value}
              </div>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-700 dark:text-slate-200">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Gaming News & Updates
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <div className="rounded-[18px] border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/6">
              New esports-ready gear drop and tournament spotlight update.
            </div>
            <div className="rounded-[18px] border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/6">
              Community vote for the next featured game banner and trailer
              reveal.
            </div>
            <div className="rounded-[18px] border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/6">
              Seasonal patch notes, live events, and collector’s edition
              coverage.
            </div>
          </div>
        </article>

        <article className="gaming-glass rounded-[28px] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            Newsletter
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Stay locked in with the next arena drop.
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <input
              className="rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100 dark:placeholder:text-slate-400"
              placeholder="Enter your email"
            />
            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-semibold text-slate-950">
              Subscribe
            </button>
          </div>
        </article>
      </section>

      <footer className="gaming-glass rounded-[28px] p-6 text-sm text-slate-700 dark:text-slate-200">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-base font-semibold text-slate-900 dark:text-white">
            CYRUS NEXUS
          </p>
          <p>
            Designed for gaming culture, esports energy, and immersive digital
            experiences.
          </p>
          <p className="text-cyan-700 dark:text-cyan-100">© 2026 CYRUS NEXUS</p>
        </div>
      </footer>
    </section>
  );
}

export default Home;
