import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/ericko-portrait.jpg";
import {
  ArrowUpRight,
  Code2,
  Server,
  Cpu,
  Award,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ericko Wicaksono — Software Developer & Sysadmin" },
      {
        name: "description",
        content:
          "Full-Stack Developer & RHCSA-certified Sysadmin. I build secure, automated, result-oriented systems — from POS networks to AI-powered grading and BPMN workflow engines.",
      },
      { property: "og:title", content: "Ericko Wicaksono — Software Developer & Sysadmin" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer & RHCSA-certified Sysadmin building secure, automated, result-oriented systems.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#certs", label: "Certifications" },
  { href: "#work", label: "Work" },
];

const STACK = [
  {
    icon: Code2,
    title: "Frontend",
    tag: "01",
    items: ["Next.js 14/15", "React 18", "Vue 3", "TypeScript 5", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    tag: "02",
    items: ["Java 17 · Spring Boot 3", "Node.js · Express", "PHP · Laravel 10", "PostgreSQL · MySQL · MongoDB"],
  },
  {
    icon: Cpu,
    title: "DevOps / Sysadmin",
    tag: "03",
    items: ["Red Hat Enterprise Linux", "Docker", "Camunda 7 (BPMN)", "Git · CI/CD", "Shell · Bash automation"],
  },
];

const CERTS = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat, Inc.",
    year: "2023",
    badge: "RHCSA",
    featured: true,
  },
  {
    title: "Backend & Frontend Developer — 6 Month Bootcamp",
    issuer: "Dicoding Indonesia",
    year: "2024",
    badge: "DCD",
  },
  {
    title: "Red Hat System Administration — 5 Month Program",
    issuer: "Infinite Learning",
    year: "2023",
    badge: "RHSA",
  },
  {
    title: "Security Operations Center in Practice",
    issuer: "IBM",
    year: "2023",
    badge: "IBM",
  },
  {
    title: "Getting Started with Threat Intelligence & Hunting",
    issuer: "IBM",
    year: "2023",
    badge: "IBM",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    year: "2023",
    badge: "IBM",
  },
  {
    title: "Java Programming",
    issuer: "Oracle Academy",
    year: "2023",
    badge: "ORA",
  },
  {
    title: "Fresh Graduate Academy — KOMINFO × Google",
    issuer: "KOMINFO / Digital Talent",
    year: "2024",
    badge: "FGA",
  },
];

const PROJECTS = [
  {
    no: "01",
    name: "SmartEdu-ITB",
    client: "Institut Teknologi Bandung — via PT Padepokan79",
    role: "Backend Developer · 2026",
    description:
      "Enterprise Learning Management System on Chamilo with an AI evaluation engine that automates open-ended essay grading and maps results to OBE learning outcomes (CPL/CPMK).",
    stack: ["PHP 8", "MariaDB", "Chamilo / Symfony", "Google Gemini API", "Async Queues"],
    challenge:
      "Auditing a legacy, non-standardized codebase with outdated documentation while integrating a low-latency AI grading pipeline that had to stay reliable under load.",
    solution:
      "Architected a custom AI Evaluation Plugin with confidence-based auto-validation, exponential-backoff retry queues, and a dynamic OBE rubric builder — plus an idempotent migration script for safe schema evolution.",
    impact:
      "Cut manual essay grading effort for instructors and unlocked OBE analytics that were previously impossible inside the platform.",
  },
  {
    no: "02",
    name: "Loan Origination System V3C",
    client: "PT Sarana Multi Infrastruktur (SMI) (Persero) — via PT Padepokan79",
    role: "Backend Developer · 2025 – 2026",
    description:
      "End-to-end financing lifecycle platform — application, assessment, approval, oversight — re-architected from hard-coded sequences to a fully BPMN-driven workflow engine.",
    stack: ["Java 17 · Spring Boot 3.4", "Next.js 14", "SQL Server", "Camunda 7 BPMN"],
    challenge:
      "Business processes were locked inside source code, so every regulatory or policy change required a release cycle.",
    solution:
      "Reverse-engineered legacy flows, mapped API contracts into BPMN, and integrated Camunda 7 as the workflow engine so business users can modify processes without touching code.",
    impact:
      "Business analysts can now iterate on credit workflows in days instead of release cycles, while keeping full regulatory traceability.",
  },
  {
    no: "03",
    name: "POS & Inventory System",
    client: "UD Sri Jaya Keramik",
    role: "Fullstack Developer · 2021 – 2025",
    description:
      "Point-of-sale and inventory platform synchronizing two retail branches, with first-class handling of damaged-vs-good stock — a workflow off-the-shelf POS tools refused to model cleanly.",
    stack: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "Linux server"],
    challenge:
      "Non-technical staff needed to reconcile inventory across branches and track defective stock without ever leaving the sales flow.",
    solution:
      "Designed a deliberately simple UI for data input, modeled good/damaged inventory as first-class entities, and ran the stack on a hardened Linux server I administered end-to-end.",
    impact:
      "Eliminated cross-branch stock discrepancies, reduced shrinkage from undocumented damaged goods, and gave management a single source of truth for daily operations.",
  },
  {
    no: "04",
    name: "Bank Data Pengawasan",
    client: "BAWASLU Kota Surabaya",
    role: "Fullstack Developer · 2024",
    description:
      "Centralized election-supervision data bank for BAWASLU Kota Surabaya — consolidating monitoring records, incident reports, and reference data into one searchable, auditable repository.",
    stack: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    challenge:
      "Supervision data was scattered across spreadsheets and personal devices, making it slow to retrieve evidence and nearly impossible to audit historically.",
    solution:
      "Designed a structured schema for supervision records, built role-based access for field officers and supervisors, and shipped fast filtering plus export tools so data is usable in real reporting cycles.",
    impact:
      "Gave the office a single source of truth for supervision data, cut retrieval time from hours to seconds, and made historical audits straightforward.",
  },
];

const STATS = [
  { k: "4+", v: "Years shipping production code" },
  { k: "3", v: "Enterprise clients delivered" },
  { k: "8+", v: "Professional certifications" },
  { k: "RHCSA", v: "Red Hat certified sysadmin" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Certs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/60" />
          ericko.wicaksono
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              <span className="font-mono text-xs text-primary/70 mr-1.5">0{i + 1}.</span>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-xs px-3.5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          let's talk →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28">
        <div className="font-mono text-xs text-primary/80 mb-6 flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
          AVAILABLE FOR NEW PROJECTS — 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
          I build <span className="text-primary">secure systems</span>
          <br />
          that run themselves.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Saya Ericko — Full-Stack Developer & RHCSA-certified Sysadmin yang menjembatani UI yang
          rapi dengan backend yang tahan banting. Spesialisasi saya: mengubah proses bisnis yang
          rumit menjadi otomasi yang bersih, terdokumentasi, dan bisa diandalkan di production.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition"
          >
            See my work
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm hover:bg-surface transition"
          >
            <Mail className="size-4" />
            erickowicaksono9@gmail.com
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {STATS.map((s) => (
            <div key={s.v} className="bg-background p-5">
              <div className="text-2xl md:text-3xl font-semibold text-primary">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, kicker }: { tag: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-primary/80 mb-3">{tag}</div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {kicker && <p className="mt-3 text-muted-foreground max-w-2xl">{kicker}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-border bg-surface">
            <img
              src={portrait}
              alt="Ericko Wicaksono"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background to-transparent">
              <div className="font-mono text-xs text-primary/90">~/about/ericko.md</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <SectionHeader tag="// 01 — ABOUT" title="Clean code is a form of respect." />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sejak hari pertama menulis baris kode, ada satu hal yang membuat saya kembali ke
              terminal setiap pagi: <span className="text-foreground">rasa puas saat sesuatu yang manual berubah menjadi otomatis</span>.
              Saya tidak hanya senang membangun fitur — saya senang membangun fitur yang tidak
              perlu disentuh dua kali.
            </p>
            <p>
              Latar belakang saya berdiri di dua kaki: Full-Stack Development (Next.js, Laravel,
              Spring Boot) dan System Administration (RHCSA, Linux server hardening, Docker).
              Kombinasi itu memberi saya kebiasaan yang konsisten — menulis kode yang mudah dibaca,
              merancang sistem yang mudah di-deploy, dan mendokumentasikan keduanya sebelum lupa.
            </p>
            <p>
              Saya percaya kode terbaik adalah kode yang bisa dijelaskan rekan tim tanpa membuka
              file. Itulah standar yang saya bawa ke setiap proyek — dari POS dua cabang sampai
              workflow engine berbasis BPMN untuk lembaga keuangan negara.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Automation-first", "Result-oriented", "Documentation matters", "Security by default"].map(
              (t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          tag="// 02 — TECH STACK"
          title="The tools I reach for."
          kicker="Bukan daftar belanja teknologi — ini stack yang saya pakai di produksi, saya tuning, dan saya troubleshoot di malam Jumat."
        />
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {STACK.map(({ icon: Icon, title, tag, items }) => (
            <div key={title} className="bg-background p-7 hover:bg-surface transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="size-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{tag}</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-primary/60" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section id="certs" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          tag="// 03 — CERTIFICATIONS"
          title="Credentials, verified."
          kicker="Setiap sertifikasi di bawah ini punya pemegang asli, nomor verifikasi, dan jejak digital yang bisa dicek."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className={`group relative rounded-xl border p-5 flex items-start gap-4 transition-all hover:-translate-y-0.5 ${
                c.featured
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-surface hover:border-primary/30"
              }`}
            >
              <div
                className={`shrink-0 size-14 rounded-lg flex items-center justify-center font-mono text-xs font-semibold ${
                  c.featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-muted-foreground group-hover:text-primary"
                }`}
              >
                {c.badge}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {c.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary flex items-center gap-1">
                      <Sparkles className="size-3" /> Featured
                    </span>
                  )}
                </div>
                <h3 className="font-medium leading-snug">{c.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{c.issuer}</span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="font-mono">{c.year}</span>
                </div>
              </div>
              <CheckCircle2 className="size-4 text-primary/70 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          tag="// 04 — FEATURED WORK"
          title="Selected projects."
          kicker="Tiga sistem dari portfolio saya — dipilih bukan karena paling ramai fitur, tapi karena paling jelas menjawab masalah nyata."
        />

        <div className="space-y-4">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group rounded-xl border border-border bg-background p-6 md:p-8 hover:border-primary/40 transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <div className="font-mono text-xs text-primary/80 mb-2">PROJECT / {p.no}</div>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">{p.client}</div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{p.role}</div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-5">
                  <p className="text-foreground/90 leading-relaxed">{p.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Detail label="Challenge" body={p.challenge} />
                    <Detail label="Solution" body={p.solution} />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1.5">
                      Impact
                    </div>
                    <p className="text-sm text-foreground/90">{p.impact}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <div className="font-mono text-xs text-primary/80 mb-4">// 05 — LET'S BUILD</div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Got a system that <br />
            <span className="text-primary">should run itself?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Saya membuka slot untuk kolaborasi backend, full-stack, atau sysadmin di 2026. Kirim
            pesan singkat — saya balas dalam 24 jam kerja.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:erickowicaksono9@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              <Mail className="size-4" />
              erickowicaksono9@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ericko-wicaksono-9099421a4/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-border hover:bg-surface transition"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ericko0604"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-border hover:bg-surface transition"
            >
              <Github className="size-4" />
              GitHub (Ericko0604)
            </a>
            <a
              href="https://github.com/Ericko9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-border hover:bg-surface transition"
            >
              <Github className="size-4" />
              GitHub (Ericko9)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <div>© 2026 Ericko Wicaksono — Built with care, shipped with tests.</div>
        <div className="flex items-center gap-2">
          <Award className="size-3 text-primary" />
          RHCSA · Full-Stack · Sysadmin
        </div>
      </div>
    </footer>
  );
}
