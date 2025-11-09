import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <Sparkles className="h-4 w-4" /> Ready to onboard
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">Launch your role-based journey today</h3>
              <p className="mt-2 max-w-2xl text-white/90">
                Start as a student or teacher and let admins guide the steps. Your platform, your rules, beautifully organized.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <a href="#roles" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50 transition">
                Get Started <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#flows" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
