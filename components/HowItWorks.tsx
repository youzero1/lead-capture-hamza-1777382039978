const steps = [
  {
    step: '01',
    title: 'Connect Your Repo',
    description: 'Link your GitHub, GitLab, or Bitbucket repository. We automatically detect your framework and configure everything.',
  },
  {
    step: '02',
    title: 'Push Your Code',
    description: 'Every push triggers an instant build. Preview deployments are created automatically for every pull request.',
  },
  {
    step: '03',
    title: 'Go Live Globally',
    description: 'Your app is deployed to our global edge network with SSL, CDN, and auto-scaling — all configured automatically.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">How It Works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            From code to production in three simple steps
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-300 to-transparent" />
              )}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold shadow-lg shadow-indigo-500/20">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
