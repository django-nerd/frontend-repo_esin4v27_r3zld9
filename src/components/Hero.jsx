import { Rocket, Shield, Users, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
              <Shield className="h-4 w-4" />
              Role-based onboarding platform
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Streamlined onboarding for
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Students</span>,
              Teachers & Admins
            </h1>
            <p className="mt-5 max-w-xl text-gray-600">
              From registration to interviews, approvals, trials, and milestones — everything flows in one place. Designed for clarity and control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition">
                <Rocket className="h-5 w-5" /> Get Started
              </a>
              <a href="#flows" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
                <Users className="h-5 w-5" /> See How It Works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-indigo-600" /> Student trials</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-600" /> Admin controls</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-indigo-600" /> Teacher milestones</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card title="Students" color="indigo" points={["Register", "Book interview", "7-day trial", "Complete profile", "Full access"]} />
                <Card title="Teachers" color="purple" points={["Register", "Admin review", "Book interview", "5 milestones", "Full access"]} />
              </div>
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, points, color }) {
  const colorMap = {
    indigo: "from-indigo-500 to-indigo-600",
    purple: "from-purple-500 to-purple-600",
  };
  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <div className={`inline-flex items-center rounded-md bg-gradient-to-r ${colorMap[color]} px-3 py-1 text-xs font-semibold text-white`}>{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${colorMap[color]}`} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
