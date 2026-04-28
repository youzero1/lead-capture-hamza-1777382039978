const plans = [
  {
    name: 'Hobby',
    price: '$0',
    period: '/month',
    description: 'Perfect for personal projects and experiments.',
    features: [
      '3 projects',
      '100 GB bandwidth',
      'Automatic SSL',
      'Community support',
      'Preview deployments',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professional developers and growing teams.',
    features: [
      'Unlimited projects',
      '1 TB bandwidth',
      'Custom domains',
      'Priority support',
      'Team collaboration',
      'Advanced analytics',
      'Edge functions',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced requirements.',
    features: [
      'Everything in Pro',
      'Unlimited bandwidth',
      'SSO / SAML',
      'Dedicated support',
      'SLA guarantee',
      'Custom contracts',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? 'border-indigo-200 bg-white shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-500'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && <span className="ml-1 text-gray-500">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block w-full text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25'
                    : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
