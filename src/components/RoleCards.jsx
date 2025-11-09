import { User, GraduationCap, Briefcase, Shield } from "lucide-react";

const roles = [
  {
    key: "student",
    title: "Students",
    description:
      "Register, book interviews, start a 7-day trial, complete your profile, and unlock full access after approval.",
    icon: GraduationCap,
    bullets: [
      "Register & verify",
      "Book interview from admin dates",
      "7-day trial upon approval",
      "Complete profile to continue",
    ],
    color: "indigo",
  },
  {
    key: "teacher",
    title: "Teachers",
    description:
      "Submit your profile, get admin approval, book an interview, complete 5 milestones, and gain full access.",
    icon: Briefcase,
    bullets: [
      "Register & submit profile",
      "Admin review & email approval",
      "Book interview",
      "Complete 5 milestones",
    ],
    color: "purple",
  },
  {
    key: "admin",
    title: "Admins",
    description:
      "Configure interview slots, approve users, manage trials and milestones, and control access across the platform.",
    icon: Shield,
    bullets: [
      "Create & manage interview dates",
      "Approve or reject applications",
      "Manage trials & milestones",
      "Full platform oversight",
    ],
    color: "rose",
  },
];

export default function RoleCards() {
  return (
    <section id="roles" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose your path</h2>
          <p className="mt-3 text-gray-600">Clear steps for each role ensure a smooth experience from day one.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <RoleCard key={role.key} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role }) {
  const Icon = role.icon;
  const gradient = {
    indigo: "from-indigo-500 to-blue-600",
    purple: "from-purple-500 to-fuchsia-600",
    rose: "from-rose-500 to-pink-600",
  }[role.color];

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${gradient} px-3 py-1 text-xs font-semibold text-white`}>
        <Icon className="h-4 w-4" />
        {role.title}
      </div>
      <p className="mt-4 text-sm text-gray-700">{role.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-gray-600">
        {role.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
            {b}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
        Continue as {role.title.slice(0, -1)}
      </button>
    </div>
  );
}
