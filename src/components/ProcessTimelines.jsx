import { CheckCircle2, Circle, CalendarDays, Mail, UserCheck, ClipboardList, Clock } from "lucide-react";

const flows = {
  student: [
    { label: "Register", icon: Mail },
    { label: "Book interview (admin dates)", icon: CalendarDays },
    { label: "Admin approves → 7-day trial", icon: Clock },
    { label: "Trial ends → complete profile", icon: ClipboardList },
    { label: "Book second interview", icon: CalendarDays },
    { label: "Admin approves → Full access", icon: UserCheck },
  ],
  teacher: [
    { label: "Register", icon: Mail },
    { label: "Admin reviews & emails approval", icon: Mail },
    { label: "Book interview", icon: CalendarDays },
    { label: "Admin approves", icon: UserCheck },
    { label: "Complete 5 milestones", icon: ClipboardList },
    { label: "Full access", icon: CheckCircle2 },
  ],
};

export default function ProcessTimelines() {
  return (
    <section id="flows" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Visual guides for students and teachers. Admins control everything in-between.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Timeline title="Student flow" steps={flows.student} accent="indigo" />
          <Timeline title="Teacher flow" steps={flows.teacher} accent="purple" />
        </div>
      </div>
    </section>
  );
}

function Timeline({ title, steps, accent }) {
  const accentMap = {
    indigo: "text-indigo-600 bg-indigo-600",
    purple: "text-purple-600 bg-purple-600",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.label} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700`}>
                <s.icon className={`h-4 w-4 ${accentMap[accent].split(" ")[0]}`} />
              </div>
              {i !== steps.length - 1 && (
                <div className={`mt-1 h-8 w-0.5 ${accentMap[accent].split(" ")[1]} opacity-30`} />
              )}
            </div>
            <div className="pt-1.5 text-sm text-gray-700">{s.label}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
