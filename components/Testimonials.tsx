const testimonials = [
  {
    quote: 'Velocity cut our deployment time from 30 minutes to under 10 seconds. Our team ships features 5x faster now.',
    name: 'Sarah Chen',
    role: 'CTO, Acme Corp',
    initials: 'SC',
  },
  {
    quote: 'The auto-scaling alone has saved us thousands in infrastructure costs. It just works — no config, no headaches.',
    name: 'Marcus Johnson',
    role: 'Lead Engineer, Globex',
    initials: 'MJ',
  },
  {
    quote: 'Preview deployments for every PR changed how our design team reviews work. Collaboration has never been smoother.',
    name: 'Emily Rodriguez',
    role: 'VP Engineering, Initech',
    initials: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Loved by engineering teams everywhere
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              {/* Quote mark */}
              <svg className="absolute top-6 right-6 w-8 h-8 text-indigo-100" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="text-gray-700 leading-relaxed">{t.quote}</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
