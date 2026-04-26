export default function NursingAgencyWebsite() {
  const services = [
    {
      title: "Skilled Nursing",
      description:
        "Reliable RN and LPN staffing for facilities, private duty care, post-acute support, and ongoing patient monitoring.",
    },
    {
      title: "Certified Nursing Assistants",
      description:
        "Compassionate CNAs for daily living support, mobility assistance, hygiene support, and bedside care.",
    },
    {
      title: "Home Care Support",
      description:
        "Flexible home-based care plans for seniors, recovery patients, and families needing dependable support.",
    },
    {
      title: "Facility Staffing",
      description:
        "Short-term, long-term, and urgent placement solutions for nursing homes, rehab centers, assisted living, and hospitals.",
    },
  ];

  const benefits = [
    "Fast caregiver placement",
    "Background-checked professionals",
    "Flexible scheduling",
    "Client-centered care plans",
    "Coverage for private homes and facilities",
    "Responsive local support team",
  ];

  const testimonials = [
    {
      name: "Family Client",
      quote:
        "The caregivers were professional, kind, and dependable. They made a stressful time much easier for our family.",
    },
    {
      name: "Facility Partner",
      quote:
        "Their staffing team helped us fill urgent shifts quickly with qualified professionals who fit right in.",
    },
    {
      name: "Private Duty Client",
      quote:
        "Excellent communication, compassionate care, and a team that truly shows up when needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-tight">WillowCare Nursing Agency</div>
            <div className="text-sm text-slate-500">Compassionate staffing and home care support</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#why-us" className="hover:text-sky-700">Why Choose Us</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            Request Care
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-white blur-3xl" />
          <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium">
              Trusted nursing support for homes and facilities
            </div>
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Professional caregivers. Dependable coverage. Human-centered care.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-sky-100 md:text-lg">
              WillowCare Nursing Agency connects families and healthcare organizations with qualified nursing professionals for home care, private duty support, and staffing coverage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-900 shadow-lg transition hover:bg-slate-100"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl ring-1 ring-white/15">
              <div className="text-sm text-sky-200">Response Time</div>
              <div className="mt-2 text-3xl font-bold">Fast</div>
              <p className="mt-3 text-sm leading-6 text-sky-100">
                Rapid staffing support for urgent shifts and home care requests.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl ring-1 ring-white/15">
              <div className="text-sm text-sky-200">Coverage</div>
              <div className="mt-2 text-3xl font-bold">Flexible</div>
              <p className="mt-3 text-sm leading-6 text-sky-100">
                Daily, overnight, weekend, respite, and ongoing care options.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl ring-1 ring-white/15 sm:col-span-2">
              <div className="text-sm text-sky-200">Care Promise</div>
              <div className="mt-2 text-2xl font-bold">Compassion and professionalism in every placement</div>
              <p className="mt-3 text-sm leading-6 text-sky-100">
                Built for families, senior communities, and healthcare facilities that need reliable support without the chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Services</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Care and staffing solutions built around real needs</h2>
          <p className="mt-4 text-slate-600">
            Whether you are a family seeking dependable support or a facility managing coverage gaps, our agency provides flexible nursing and caregiver solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-11 w-11 rounded-2xl bg-sky-100" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">About Us</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A nursing agency centered on trust, dignity, and consistency</h2>
            <p className="mt-5 leading-7 text-slate-600">
              WillowCare Nursing Agency is designed to make quality care easier to access. We focus on dependable staffing, strong communication, and the kind of compassionate service families and healthcare partners remember.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our goal is simple: place the right caregiver in the right setting, with the right support around them.
            </p>
          </div>

          <div className="grid gap-4 rounded-[2rem] bg-slate-100 p-6 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-sky-50 p-8">
            <h3 className="text-xl font-bold">Qualified Professionals</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We emphasize professionalism, reliability, and strong caregiver-client matching.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 p-8">
            <h3 className="text-xl font-bold">Flexible Service Models</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              From short-shift support to ongoing coverage, we adapt to changing needs quickly.
            </p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-8">
            <h3 className="text-xl font-bold">Clear Communication</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Families and facilities deserve updates, responsiveness, and a team that follows through.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Testimonials</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">What clients and partners value most</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
                <div className="mt-5 text-sm font-semibold text-white">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contact</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Request care or staffing support</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Tell us what kind of support you need and our team will follow up to discuss coverage, scheduling, and next steps.
            </p>

            <form className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-sky-600" placeholder="Full name" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-sky-600" placeholder="Phone number" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-sky-600 md:col-span-2" placeholder="Email address" />
              <select className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600 md:col-span-2">
                <option>Service needed</option>
                <option>Home care support</option>
                <option>Private duty nursing</option>
                <option>Facility staffing</option>
                <option>CNA coverage</option>
              </select>
              <textarea className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600 md:col-span-2" placeholder="Tell us about your needs" />
              <button type="button" className="rounded-2xl bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 md:col-span-2">
                Submit Request
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] bg-slate-100 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Agency Contact Information</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-700">
              <div>
                <div className="font-semibold text-slate-900">Phone</div>
                <div>(304) 620-8265</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Email</div>
                <div>info@willowcarenursing.com</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Office</div>
                <div>Charles Town, WV</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">Hours</div>
                <div>Monday–Friday: 8:00 AM – 6:00 PM</div>
                <div>On-call support available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 WillowCare Nursing Agency. All rights reserved.</div>
          <div>Compassionate care. Trusted staffing. Local support.</div>
        </div>
      </footer>
    </div>
  );
}
