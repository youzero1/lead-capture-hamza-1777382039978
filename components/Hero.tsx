export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Now in public beta
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          Ship Faster,{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Scale Smarter
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
          The modern platform for teams who want to build, deploy, and iterate at lightning speed.
          From idea to production in minutes, not months.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Start for Free
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Hero visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 h-6 rounded-md bg-gray-800" />
            </div>
            {/* Mock code */}
            <div className="p-6 text-left font-mono text-sm leading-relaxed">
              <p><span className="text-purple-400">import</span> <span className="text-green-400">{'{ deploy }'}</span> <span className="text-purple-400">from</span> <span className="text-yellow-300">{"'velocity'"}</span><span className="text-gray-400">;</span></p>
              <p className="mt-2"><span className="text-purple-400">const</span> <span className="text-blue-300">app</span> <span className="text-gray-400">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">deploy</span><span className="text-gray-400">(</span><span className="text-gray-400">{'{'}</span></p>
              <p className="ml-6"><span className="text-blue-300">name</span><span className="text-gray-400">:</span> <span className="text-green-400">{"'my-app'"}</span><span className="text-gray-400">,</span></p>
              <p className="ml-6"><span className="text-blue-300">region</span><span className="text-gray-400">:</span> <span className="text-green-400">{"'auto'"}</span><span className="text-gray-400">,</span></p>
              <p className="ml-6"><span className="text-blue-300">scale</span><span className="text-gray-400">:</span> <span className="text-orange-400">true</span></p>
              <p><span className="text-gray-400">{'}'}</span><span className="text-gray-400">);</span></p>
              <p className="mt-4"><span className="text-gray-500">// ✓ Deployed to 12 regions in 4.2s</span></p>
              <p><span className="text-gray-500">// ✓ SSL, CDN, and auto-scaling enabled</span></p>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16">
          <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
            {['Acme Corp', 'Globex', 'Initech', 'Hooli', 'Piedmont'].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
