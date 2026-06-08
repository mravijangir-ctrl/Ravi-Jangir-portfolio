import { useEffect, useState } from "react";
import raviPhoto from "./ravi.jpeg";
/* ------------- Design tokens ------------- */
// Background: #050816
// Glass:      rgba(255, 255, 255, 0.08)
// Accent:     #3B82F6  (blue)
// Accent 2:   #8B5CF6  (purple)
// Text:       #FFFFFF
/* project images
*/
import abdullaVilla from "./images/abdulla villa abu dhabi.jpg";
import abdullaVillaLocation from "./images/abdulla villa location abu dhabi city.jpg";

import meDoReBedroom from "./images/me do re bed room  location jumeraih lake tower.jpg";
import meDoReBackWall from "./images/me do re bed back wall jumeraih lake tower.jpg";
import meDoReLiving from "./images/me do re living area tv wall jumeraih lake tower.jpg";
import meDoReKitchen from "./images/me do re main kitchen jumeraih lake tower.jpg";
import meDoReTvWall from "./images/me do re tv wall jumeraih lake tower.jpg";

import orangeWheel from "./images/orange wheel abu dhabi city.jpeg";
import orangeWheelKids from "./images/orange whhel kids play area abu dhabi.jpeg";

import seedLounge from "./images/seed conservation centre lounge area location- madinath zayad.jpg";
import seedReception from "./images/seed conservation centre reception area location- madinath zayad.jpg";

import wtcMall from "./images/wtc nall abu dhabi.jpeg";



const navLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const highLevelStats = [
  { k: "2+", v: "Years UAE Experience" },
  { k: "33", v: "Projects Delivered" },
  { k: "0", v: "Defect Handovers" },
  { k: "15+", v: "Issues Resolved / Project" },
];

const sectors = [
  { name: "Residential & Villas", count: 10, icon: "🏠" },
  { name: "Commercial & Office", count: 4, icon: "🏢" },
  { name: "Government & Security", count: 7, icon: "🏛️" },
  { name: "Hospitality & Hotels", count: 2, icon: "🏨" },
  { name: "Retail & Mall", count: 3, icon: "🛍️" },
  { name: "Education", count: 2, icon: "🎓" },
  { name: "Events & Exhibitions", count: 3, icon: "🎪" },
  { name: "Corporate Offices", count: 2, icon: "🏗️" },
];

const coreStrengths = [
  { title: "Turnkey Fit-Out Execution", desc: "End-to-end project lifecycle from inception to zero-defect handover", icon: "🏗️" },
  { title: "Joinery & Carpentry Specialist", desc: "Deep expertise in joinery manufacturing coordination and supervision", icon: "🪵" },
  { title: "Technical Documentation", desc: "RFI logs, shop drawing reviews, material submittals & inspection records", icon: "📋" },
  { title: "Client & Consultant Coordination", desc: "Skilled at material approval meetings, progress reviews, and query resolution", icon: "🤝" },
  { title: "Quality & Schedule Champion", desc: "Zero-defect handovers with rigorous snagging and QA/QC processes", icon: "🎯" },
  { title: "Multi-Disciplinary Team Leadership", desc: "Coordinating subcontractors, vendors, civil, and MEP teams simultaneously", icon: "👷" },
];

const keyAchievements = [
  { title: "Zero-Defect Handovers", desc: "Achieved zero-defect client handover across all delivered projects through rigorous pre-handover inspections and snagging list closure.", icon: "✅" },
  { title: "30 Projects – On Time", desc: "Contributed to the on-time delivery of 30 interior fit-out projects over 2 years, consistently maintaining high workmanship standards.", icon: "🗓️" },
  { title: "15+ Issues Resolved / Project", desc: "Identifies and resolves 15+ technical drawing discrepancies per project cycle, eliminating rework and preventing schedule delays.", icon: "🔍" },
  { title: "Multi-Sector Delivery", desc: "Successfully delivered projects across 7+ sectors including residential, hospitality, government, retail, education, and events.", icon: "🤝" },
  { title: "Complete Documentation Excellence", desc: "Maintained RFI logs, submittal registers, inspection records, and handover documentation to international standards on every project.", icon: "📋" },
  { title: "Full Lifecycle Management", desc: "Managed complete project execution from BOQ analysis, IFC drawing review, and procurement through to final client handover.", icon: "👷" },
];

const technicalSkillGroups = [
  { title: "Project Management", icon: "📊", items: ["Turnkey Fit-Out Execution", "Project Lifecycle Management", "BOQ Analysis", "Quantity Take-Off", "Schedule Management", "Manpower Planning", "Cost Control"] },
  { title: "Construction & Fit-Out", icon: "🧱", items: ["Interior Fit-Out", "Joinery & Carpentry Supervision", "Site Supervision", "Quality Assurance", "Snagging & Snag Closure", "HSE Compliance"] },
  { title: "Technical Skills", icon: "📐", items: ["IFC Drawing Review", "Shop Drawing Review", "Construction Drawing Compliance", "MEP Coordination", "Material Submittal Management", "RFI Management", "Civil Works Coordination"] },
];

const softwareSkills = [
  { name: "AutoCAD", level: "Advanced", pct: 90 },
  { name: "Microsoft Word", level: "Advanced", pct: 90 },
  { name: "SketchUp", level: "Proficient", pct: 75 },
  { name: "Microsoft PowerPoint", level: "Proficient", pct: 80 },
  { name: "Microsoft Excel", level: "Advanced", pct: 90 },
  { name: "Microsoft Outlook", level: "Proficient", pct: 80 },
];

type RoleColor = "emerald" | "sky" | "amber" | "violet" | "rose";

const education = [
  { degree: "Master of Arts (MA)", specialization: "Economics", institute: "Pandit Deendayal Upadhyaya Shekhawati University (PDUSU)", location: "Sikar, Rajasthan", period: "2022 – 2024" },
  { degree: "Master Diploma in Interior Design", specialization: "Interior Design & CADD", institute: "CADD Centre Training Services Pvt. Ltd.", location: "Sikar, Rajasthan", period: "2022 – 2023" },
  { degree: "Bachelor of Science (BSc)", specialization: "Mathematics", institute: "Pandit Deendayal Upadhyaya Shekhawati University (PDUSU)", location: "Sikar, Rajasthan", period: "2019 – 2022" },
];

const certifications = [
  { title: "Master Diploma in Interior Design", org: "CADD Centre Training Services Pvt. Ltd., Sikar, Rajasthan", icon: "🎓" },
  { title: "Interior Design Certificate", org: "CADDESK Bengaluru", icon: "📜" },
];

const experience = [
  {
    role: "Project Engineer",
    company: "Alwan Al Ebdaa Interior LLC",
    location: "Abu Dhabi, UAE",
    period: "July 2025 – Present",
    badge: "⭐ Zero-defect client handover across all delivered projects",
    bullets: [
      "Manage end-to-end execution of turnkey interior fit-out projects for commercial and residential clients, ensuring on-time delivery within budget and full compliance with approved design specifications",
      "Attend client and consultant meetings for material sample approval, project progress reviews, and technical query resolution; maintain continuous alignment with design intent throughout the project lifecycle",
      "Review IFC drawings, shop drawings, and material submittals; identify and coordinate resolution of 15+ technical discrepancies per project cycle to eliminate rework and prevent schedule delays",
      "Develop and manage project schedules, manpower plans, and material procurement trackers to prevent cost overruns and ensure uninterrupted site progress",
      "Coordinate with architects, MEP subcontractors, civil contractors, and vendors to align technical submittals, resolve site clashes, and obtain consultant approvals on schedule",
      "Prepare and maintain RFI logs, material submittal registers, inspection records, progress reports, and handover documentation",
      "Conduct pre-handover quality inspections and manage snagging list closure to zero prior to client sign-off",
    ],
  },
  {
    role: "Site Engineer",
    company: "Alwan Al Ebdaa Interior LLC",
    location: "Abu Dhabi, UAE",
    period: "June 2024 – July 2025",
    badge: "🏆 On-time delivery of 30 fit-out projects across 2 years",
    bullets: [
      "Supervised joinery, carpentry, and interior fit-out site operations across multiple concurrent projects, ensuring compliance with approved shop drawings, specifications, and quality standards",
      "Contributed to the successful on-time delivery of 30 interior fit-out projects over 2 years, consistently maintaining high workmanship standards across all project phases",
      "Conducted multi-stage quality control inspections at all project milestones (in-process, pre-closing, and pre-handover); prepared snagging lists and tracked snag closure to zero before client handover",
      "Coordinated material sample submittals and attended consultant approval meetings to ensure materials were specified, approved, and procured in line with project schedules",
      "Planned and managed daily site activities including labour allocation, subcontractor supervision, and material delivery scheduling to maintain productivity and avoid programme delays",
      "Reviewed shop drawings and technical submittals; raised and tracked RFIs to resolve design discrepancies with the consultant and design team in a timely manner",
    ],
  },
  {
    role: "Draftsman & Interior Designer",
    company: "MS Design Zone",
    location: "Sikar, Rajasthan, India",
    period: "Feb 2023 – June 2024",
    badge: null,
    bullets: [
      "Produced comprehensive 2D layout plans, space planning drawings, furniture layouts, and detailed joinery sections for residential and commercial interior projects using AutoCAD and SketchUp",
      "Prepared full construction documentation packages including working drawings, material schedules, and finish specifications; managed drawing revisions and maintained accurate drawing registers",
      "Liaised with project teams to coordinate drawing updates and resolve design queries prior to site execution",
    ],
  },
  {
    role: "Interior Design Intern",
    company: "MS Design Zone",
    location: "Sikar, Rajasthan, India",
    period: "Sep 2022 – Feb 2023",
    badge: null,
    bullets: [
      "Assisted senior designers in preparing 2D floor plans, space planning layouts, and furniture arrangement drawings using AutoCAD",
      "Supported creation of client-facing presentation materials including mood boards, material palettes, and finish schedules",
      "Participated in site visits to observe fit-out installation progress and understand on-site application of design and construction drawings",
    ],
  },
];

const projectGroups: { name: string; icon: string; total: number; items: { title: string; role: string; roleColor: RoleColor; type: string }[] }[] = [
  {
    name: "Residential & Villas", icon: "🏠", total: 10, items: [
      { title: "ME DO RE Penthouse", role: "Site Engineer", roleColor: "emerald", type: "Luxury Residential · Abu Dhabi" },
      { title: "Damac Lagoons", role: "Site Engineer", roleColor: "emerald", type: "Residential Development" },
      { title: "Trunkey Dubai", role: "Site Engineer", roleColor: "emerald", type: "Residential · Dubai" },
      { title: "Muhammad Villa", role: "Site Engineer", roleColor: "emerald", type: "Private Villa" },
      { title: "Yas Island Apartment", role: "Site Engineer", roleColor: "emerald", type: "Residential · Yas Island" },
      { title: "Ahmad Villa", role: "Site Engineer", roleColor: "emerald", type: "Private Villa" },
      { title: "Faisal Villa", role: "Site Engineer", roleColor: "emerald", type: "Private Villa" },
      { title: "Reem Island Apartment", role: "Project Engineer", roleColor: "sky", type: "Residential · Reem Island" },
      { title: "Wathba Private Villa RIBS", role: "Project Engineer", roleColor: "sky", type: "Luxury Private Villa" },
      { title: "Private Apartment Radiant Heights", role: "Project Engineer", roleColor: "sky", type: "Residential Apartment" },
      { title: "Hamily Villa", role: "Project Engineer", roleColor: "sky", type: "Private Villa" },
    ]
  },
  {
    name: "Government & Security", icon: "🏛️", total: 7, items: [
      { title: "Seed Conservation Centre", role: "Site Engineer", roleColor: "emerald", type: "Government Facility" },
      { title: "ADNOC Meeting Table", role: "Project Engineer", roleColor: "sky", type: "Government / Oil & Gas" },
      { title: "Agricultural & Feed Store", role: "Project Engineer", roleColor: "sky", type: "Government Facility" },
      { title: "K9 Security Inspection – Abu Dhabi Police", role: "Project Engineer", roleColor: "sky", type: "Government / Security" },
      { title: "Al Dafra Police Station", role: "Project Engineer", roleColor: "sky", type: "Government / Security" },
      { title: "Mazyad Police Station Abu Dhabi", role: "Project Engineer", roleColor: "sky", type: "Government / Security" },
    ]
  },
  {
    name: "Commercial & Corporate", icon: "🏢", total: 6, items: [
      { title: "MMEC", role: "Draftsman", roleColor: "amber", type: "Corporate Office" },
      { title: "Smart Office Building", role: "Project Coordinator", roleColor: "violet", type: "Commercial Office" },
      { title: "Landmark Tower", role: "Draftsman", roleColor: "amber", type: "Corporate Tower" },
      { title: "Orange Wheel", role: "Site Engineer", roleColor: "emerald", type: "Commercial" },
      { title: "Euroart Office", role: "Site Engineer", roleColor: "emerald", type: "Corporate Office" },
      { title: "Orange Hub", role: "Site Engineer", roleColor: "emerald", type: "Commercial" },
    ]
  },
  {
    name: "Retail & Mall", icon: "🛍️", total: 3, items: [
      { title: "Retail Mall Interior Works", role: "Project Coordinator", roleColor: "violet", type: "Retail Interior" },
      { title: "WTC Mall", role: "Site Engineer", roleColor: "emerald", type: "Mall / Retail" },
      { title: "Zadina Boutique – Jimi Mall", role: "Project Engineer", roleColor: "sky", type: "Retail Boutique · Mall" },
    ]
  },
  {
    name: "Hospitality", icon: "🏨", total: 2, items: [
      { title: "Hotel Premier Inn", role: "Project Engineer", roleColor: "sky", type: "Hospitality / Hotel" },
      { title: "Hotel Luce", role: "Project Engineer", roleColor: "sky", type: "Hospitality / Hotel" },
    ]
  },
  {
    name: "Education", icon: "🎓", total: 2, items: [
      { title: "MBZ University", role: "Site Engineer", roleColor: "emerald", type: "Higher Education" },
      { title: "Khalifa University", role: "Site Engineer", roleColor: "emerald", type: "Higher Education" },
    ]
  },
  {
    name: "Events & Exhibitions", icon: "🎪", total: 3, items: [
      { title: "Polester Car Launch Event", role: "Project Engineer", roleColor: "sky", type: "Event / Exhibition" },
      { title: "Volvo Car Launch Event", role: "Project Engineer", roleColor: "sky", type: "Event / Exhibition" },
      { title: "NIO Car Launch Event", role: "Project Engineer", roleColor: "sky", type: "Event / Exhibition" },
    ]
  },
];

const openRoles = ["Project Engineer", "Fit-Out Engineer", "Site Engineer", "Interior Project Management", "Construction Management"];

/* ------------- Gallery photos ------------- */

type GalleryImage = {
  title: string;
  category: string;
  caption: string;
  src: string;
};
const galleryImages: GalleryImage[] = [
  {
    title: "Abdulla Villa",
    category: "Residential",
    caption: "Luxury villa interior works — Abu Dhabi",
    src: abdullaVilla,
  },
  {
    title: "Abdulla Villa Location",
    category: "Residential",
    caption: "Villa project located in Abu Dhabi City",
    src: abdullaVillaLocation,
  },
  {
    title: "ME DO RE Bedroom",
    category: "Residential",
    caption: "Luxury bedroom interior fit-out",
    src: meDoReBedroom,
  },
  {
    title: "ME DO RE Bedroom Back Wall",
    category: "Residential",
    caption: "Custom bedroom wall finishes and joinery",
    src: meDoReBackWall,
  },
  {
    title: "ME DO RE Living Area",
    category: "Residential",
    caption: "Premium living area TV wall design",
    src: meDoReLiving,
  },
  {
    title: "ME DO RE Main Kitchen",
    category: "Residential",
    caption: "Luxury kitchen fit-out and cabinetry",
    src: meDoReKitchen,
  },
  {
    title: "ME DO RE TV Wall",
    category: "Residential",
    caption: "Feature TV wall and decorative finishes",
    src: meDoReTvWall,
  },
  {
    title: "Orange Wheel",
    category: "Commercial",
    caption: "Commercial interior fit-out project",
    src: orangeWheel,
  },
  {
    title: "Orange Wheel Kids Area",
    category: "Commercial",
    caption: "Kids play area interior execution",
    src: orangeWheelKids,
  },
  {
    title: "Seed Conservation Centre Lounge",
    category: "Government",
    caption: "Government facility lounge area",
    src: seedLounge,
  },
  {
    title: "Seed Conservation Centre Reception",
    category: "Government",
    caption: "Reception area fit-out and finishes",
    src: seedReception,
  },
  {
    title: "WTC Mall",
    category: "Retail",
    caption: "Retail mall interior fit-out project",
    src: wtcMall,
  },
];

const roleColorMap: Record<RoleColor, string> = {
  emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  sky: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  amber: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  violet: "border-violet-400/30 bg-violet-500/10 text-violet-300",
  rose: "border-rose-400/30 bg-rose-500/10 text-rose-300",
};

/* ------------- Helpers ------------- */

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ------------- Glass building blocks ------------- */

function glassPanel(extra = "") {
  return `rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(59,130,246,0.08)] ${extra}`;
}

/* ------------- Components ------------- */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-sm font-black tracking-tight text-white shadow-lg shadow-blue-500/20">
            RKJ
          </span>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-white">Ravi K. Jangir</div>
            <div className="text-xs text-blue-300/70">Project Engineer · Abu Dhabi, UAE</div>
          </div>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-zinc-300 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50 md:inline-flex">
          Let's connect →
        </a>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)} className="md:hidden rounded-md border border-white/10 bg-white/5 p-2">
          <div className="flex h-4 w-5 flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#050816]">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-zinc-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {title}
      </h2>
      <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
    </div>
  );
}
function Hero({ onOpenGallery }: { onOpenGallery: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Blue + purple gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-10 md:pt-24">
        <div className="md:col-span-5 md:order-2">
          <div className="mx-auto max-w-sm">
            <div className={`${glassPanel()} p-1.5`}>
              <div className="rounded-[22px] bg-[#0a0f24] p-5">
                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl ring-1 ring-white/20">
                  <div className="flex justify-center">
                    <div className="relative h-64 w-64">
                      <img
                        src={raviPhoto}
                        alt="Ravi Jangir"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>


                </div>
                <div className="mt-5 space-y-2 text-sm">
                  <HeroRow icon="📞" text="+971 56 550 3124" />
                  <HeroRow icon="✉️" text="mravijangir@gmail.com" />
                  <HeroRow icon="📍" text="Abu Dhabi, UAE" />
                  <HeroRow icon="🚗" text="Valid UAE Driving License" />
                  <HeroRow icon="🛂" text="Employment Visa — Valid till Jul 2026" highlight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
            🏆 Available for new opportunities
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Ravi K. Jangir
            <span className="mt-2 block bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#c084fc] bg-clip-text text-transparent">
              Project Engineer
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">
            Interior Fit-Out & Joinery Specialist · 2+ years UAE experience delivering turnkey projects across commercial, residential, hospitality, retail, government, and educational sectors in Abu Dhabi.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highLevelStats.map((s) => (
              <div key={s.v} className={`${glassPanel("p-4 transition hover:border-blue-400/40 hover:bg-white/[0.12]")}`}>
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-3xl font-bold text-transparent">{s.k}</div>
                <div className="mt-1 text-xs leading-tight text-zinc-400">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/60">
              Hire me — Abu Dhabi based
            </a>
            <a href="#projects" className={`${glassPanel("px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.14]")}`}>
              View 33 delivered projects
            </a>
            <button onClick={onOpenGallery} className={`${glassPanel("flex items-center gap-2 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.14]")}`}>
              <span>📷</span> Project Gallery
            </button>
          </div>

          <div className={`${glassPanel("mt-8 p-4")}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Open to</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {openRoles.map((r) => (
                <li key={r} className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroRow({ icon, text, highlight }: { icon: string; text: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-lg px-3 py-2 ${highlight ? "border border-blue-400/40 bg-blue-500/10 text-blue-100" : "border border-white/10 bg-white/[0.06] text-zinc-200"}`}>
      <span className="text-base">{icon}</span>
      <span className="truncate text-sm">{text}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="01 · Profile" title="About Me" />
      <div className="mt-10 grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-zinc-300 md:col-span-3">
          <p className="text-lg leading-relaxed text-white">
            <span className="font-semibold">Results-driven Project Engineer</span> with over 2 years of hands-on UAE experience managing and delivering turnkey interior fit-out projects across commercial, residential, hospitality, retail, government, and educational sectors in Abu Dhabi.
          </p>
          <p className="leading-relaxed">
            My career spans the full project lifecycle — from initial BOQ analysis and IFC drawing review through RFI management, material sample approval, client and consultant coordination, quality inspections, snagging, and zero-defect client handover. I have contributed to the successful delivery of <span className="font-semibold text-blue-300">33 projects</span> and bring a disciplined, detail-oriented approach to every engagement.
          </p>
          <p className="leading-relaxed">
            Before my UAE career, I honed my technical drawing and design skills as a <b>Draftsman</b> and <b>Interior Designer</b> in India, developing a deep understanding of joinery details, construction documents, and space planning — giving me a strong foundation to bridge design intent and site execution.
          </p>
          <p className="leading-relaxed">
            I thrive in fast-paced, multi-project environments where strong communication, meticulous documentation, and decisive problem-solving are essential. I am equally comfortable leading site teams, presenting in client meetings, and driving cross-disciplinary coordination with architects, MEP contractors, and consultants.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid gap-3">
            {coreStrengths.map((c) => (
              <div key={c.title} className={`${glassPanel("flex items-start gap-4 p-4 transition hover:border-blue-400/40")}`}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-xl">{c.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyAchievements() {
  const gradients = [
    "from-blue-500 to-purple-500",
    "from-purple-500 to-fuchsia-500",
    "from-sky-500 to-blue-600",
    "from-indigo-500 to-violet-600",
    "from-fuchsia-500 to-purple-600",
    "from-blue-400 to-indigo-500",
  ];
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="02 · Highlights" title="Key Achievements" />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {keyAchievements.map((a, idx) => (
          <div key={a.title} className={`${glassPanel("group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.12]")}`}>
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradients[idx % gradients.length]}`} />
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06] text-2xl ring-1 ring-white/10 transition group-hover:scale-110">{a.icon}</span>
            <h3 className="mt-4 text-lg font-semibold text-white">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="03 · Career" title="Professional Experience" />
      <div className="mt-12 relative pl-6 md:pl-10">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:left-4" />
        <ol className="space-y-8">
          {experience.map((e) => (
            <li key={e.role + e.period} className="relative">
              <span className="absolute -left-[10px] top-5 grid h-5 w-5 place-items-center rounded-full border-2 border-[#050816] bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] shadow-lg shadow-blue-500/30 md:-left-[2px]" />
              <article className={`${glassPanel("p-6 transition hover:border-blue-400/40 hover:bg-white/[0.12] md:p-8")}`}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                    <p className="mt-1 text-sm text-blue-300">{e.company} <span className="text-zinc-500">· {e.location}</span></p>
                  </div>
                  <span className="w-fit rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">{e.period}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-none last:pb-0">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {e.badge && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200">
                    {e.badge}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SectorsStats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className={`${glassPanel("relative overflow-hidden p-8 md:p-12")}`}>
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">04 · Impact</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Project Statistics
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">Delivered across every major sector in Abu Dhabi — from private villas and five-star hotels to government facilities and university campuses.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className={`${glassPanel("group relative overflow-hidden p-5 transition hover:-translate-y-1")}`}>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-80" />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-2xl ring-1 ring-white/10">{s.icon}</span>
                  <span className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-3xl font-black text-transparent">{s.count}</span>
                </div>
                <p className="mt-3 text-sm font-medium leading-tight text-white">{s.name}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] p-8 text-center text-white shadow-lg shadow-blue-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative text-6xl font-black md:text-7xl">33</div>
            <div className="relative mt-1 text-lg font-bold">Total Projects Delivered</div>
            <div className="relative mt-1 text-sm opacity-90">Interior Fit-Out & Joinery · Abu Dhabi, UAE · 2022 – Present</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpenGallery }: { onOpenGallery: () => void }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader eyebrow="05 · Portfolio" title="Projects Delivered" />
        <button onClick={onOpenGallery} className={`${glassPanel("flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.14]")}`}>
          📷 Open Photo Gallery
        </button>
      </div>
      <div className="mt-10 space-y-14">
        {projectGroups.map((g) => (
          <div key={g.name}>
            <div className="mb-5 flex items-center gap-3 border-b border-white/5 pb-3">
              <span className="text-xl">{g.icon}</span>
              <h3 className="text-lg font-semibold text-white">{g.name}</h3>
              <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-xs font-bold text-white shadow-md shadow-blue-500/20">{g.total}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((p) => (
                <article key={p.title} className={`${glassPanel("group relative overflow-hidden p-5 transition hover:-translate-y-1 hover:border-blue-400/40")}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold leading-tight text-white">{p.title}</h4>
                    <span className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-blue-300">↗</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">{p.type}</p>
                  <span className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${roleColorMap[p.roleColor]}`}>{p.role}</span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skills = technicalSkillGroups;
  const pillClass = "rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-100";
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="06 · Competencies" title="Technical Skills" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className={`${glassPanel("p-6")}`}>
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-lg ring-1 ring-white/10">{group.icon}</span>
              <h3 className="text-base font-semibold text-blue-200">{group.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((i) => (
                <li key={i} className={pillClass}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-white md:text-2xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Software Skills
        </h3>
        <p className="mt-1 text-sm text-zinc-400">Hands-on tools used across drawings, documentation, and project coordination.</p>
        <div className={`${glassPanel("mt-8 grid gap-6 p-8 md:grid-cols-2")}`}>
          {softwareSkills.map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-white">{s.name}</span>
                <span className="text-xs uppercase tracking-widest text-blue-300">{s.level}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] transition-all duration-1000" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="07 · Academic" title="Academic Background" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {education.map((e) => (
          <article key={e.degree} className={`${glassPanel("relative overflow-hidden p-6 transition hover:border-blue-400/40")}`}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
            <div className="flex items-start justify-between gap-3 pt-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{e.degree}</h3>
                <p className="mt-1 text-sm text-blue-300">{e.specialization}</p>
              </div>
              <span className="shrink-0 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">{e.period}</span>
            </div>
            <div className="mt-4 space-y-1 text-sm text-zinc-400">
              <p className="flex items-center gap-2"><span>📍</span><span className="text-zinc-200">{e.institute}</span></p>
              <p className="pl-6 text-zinc-500">{e.location}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-white md:text-2xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Certifications &amp; Training
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <div key={c.title} className={`${glassPanel("flex items-center gap-4 p-5 transition hover:border-blue-400/40")}`}>
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl ring-1 ring-white/10">{c.icon}</span>
              <div>
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <p className="mt-1 text-xs text-zinc-400">{c.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className={`${glassPanel("relative overflow-hidden p-8 md:p-12")}`}>
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#3B82F6]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#8B5CF6]/25 blur-3xl" />

        <div className="relative grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">08 · Contact</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Let's build something
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#c084fc] bg-clip-text text-transparent">
                exceptional together.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-zinc-300">
              Currently based in Abu Dhabi and open to project engineer, fit-out, and site engineering opportunities across the UAE. Reach out directly — I respond within a day.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ContactRow icon="📞" label="Phone / WhatsApp" value="+971 56 550 3124" />
              <ContactRow icon="✉️" label="Email" value="mravijangir@gmail.com" />
              <ContactRow icon="📍" label="Location" value="Abu Dhabi, United Arab Emirates" />
              <ContactRow icon="🛂" label="Visa Status" value="Employment Visa — Valid till Jul 2026" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for reaching out! Ravi will get back to you within one business day.");
            }}
            className={`${glassPanel("p-6")}`}
          >
            <h3 className="text-lg font-semibold text-white">Send a quick message</h3>
            <p className="mt-1 text-sm text-zinc-400">Share a project brief or role you'd like to discuss.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" placeholder="Jane / John Doe" />
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Phone (optional)" placeholder="+971 ..." />
              <Field label="Company" placeholder="Company or recruiter" />
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-zinc-200">Role / Project</span>
              <select className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.08] px-3 py-2.5 text-sm text-white outline-none backdrop-blur-md focus:border-blue-400/50">
                <option>Project Engineer — Fit-Out</option>
                <option>Site Engineer</option>
                <option>Interior Project Management</option>
                <option>Construction Management</option>
                <option>Joinery Supervision</option>
                <option>Other / General enquiry</option>
              </select>
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-zinc-200">Message</span>
              <textarea rows={4} placeholder="A short project overview, location, and timeline..." className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-white/[0.08] px-3 py-2.5 text-sm text-white outline-none backdrop-blur-md focus:border-blue-400/50" />
            </label>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/60">
              Send message to Ravi →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className={`${glassPanel("flex items-center gap-3 p-4")}`}>
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-lg ring-1 ring-white/10">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-widest text-zinc-400">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block text-sm">
      <span className="text-zinc-200">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-1 w-full rounded-lg border border-white/10 bg-white/[0.08] px-3 py-2.5 text-sm text-white outline-none backdrop-blur-md transition focus:border-blue-400/50" />
    </label>
  );
}

/* ------------- Photo Gallery Modal ------------- */

function PhotoGallery({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Close on Escape + prevent body scroll when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeIndex !== null) setActiveIndex(null);
        else onClose();
      }
      if (e.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, activeIndex, onClose]);

  if (!open) return null;

  // Lightbox view (when an image is active/clicked)
  if (activeIndex !== null) {
    const img = galleryImages[activeIndex];
    return (
      <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]/95 p-4 backdrop-blur-xl">
        <button onClick={() => setActiveIndex(null)} className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-lg text-white backdrop-blur hover:bg-white/[0.14]">
          ← Back
        </button>
        <button onClick={onClose} className="absolute top-5 right-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-lg text-white backdrop-blur hover:bg-white/[0.14]">
          ✕
        </button>
        <button
          onClick={() => setActiveIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length))}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xl text-white backdrop-blur hover:bg-white/[0.14] md:grid"
        >
          ‹
        </button>
        <button
          onClick={() => setActiveIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length))}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-xl text-white backdrop-blur hover:bg-white/[0.14] md:grid"
        >
          ›
        </button>
        <div className="w-full max-w-4xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-blue-500/20">
            <img
              src={img.src}
              alt={img.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center text-white">
                <div className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
            <span>{img.title}</span>
            <span>{activeIndex + 1} / {galleryImages.length}</span>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#050816]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Project Gallery</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Photo Highlights
            </h2>
            <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
            <p className="mt-4 max-w-xl text-sm text-zinc-400">
              A selection of interior fit-out, joinery, and turnkey projects delivered across Abu Dhabi and the UAE. Click any image to view it larger (arrow keys & Esc supported).
            </p>

          </div>
          <button onClick={onClose} className={`${glassPanel("flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.14]")}`}>
            ✕ Close gallery
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, idx) => (
            <button
              key={img.title}
              onClick={() => setActiveIndex(idx)}
              className={`${glassPanel("group relative overflow-hidden text-left transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.12]")}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-blue-500/20">
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_55%)]" />
                <div className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                  {img.category}
                </div>
                <div className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  🔍
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-white">{img.title}</h4>
                <p className="mt-1 text-xs text-zinc-400">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-zinc-400">
          <span>{galleryImages.length} project photos · click to enlarge</span>
          <button onClick={onClose} className="text-blue-300 hover:text-white">↑ Back to portfolio</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050816]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-sm font-black text-white shadow-lg shadow-blue-500/20">RKJ</span>
          <div>
            <div className="text-sm font-semibold text-white">Ravi K. Jangir</div>
            <div className="text-xs text-blue-300/70">Project Engineer · Interior Fit-Out & Joinery</div>
          </div>
        </div>
        <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Ravi K. Jangir · Abu Dhabi, UAE · Portfolio handmade with attention to detail.</p>
        <a href="#top" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 hover:bg-white/10">Back to top ↑</a>
      </div>
    </footer>
  );
}

/* ------------- Page ------------- */

export default function App() {
  const progress = useScrollProgress();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const openGallery = () => setGalleryOpen(true);
  const closeGallery = () => setGalleryOpen(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white antialiased selection:bg-blue-500/40 selection:text-white">
      <div className="fixed top-0 left-0 z-50 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#c084fc] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      <Nav />
      <main>
        <Hero onOpenGallery={openGallery} />
        <About />
        <KeyAchievements />
        <Experience />
        <SectorsStats />
        <Projects onOpenGallery={openGallery} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PhotoGallery open={galleryOpen} onClose={closeGallery} />
    </div>
  );
}
