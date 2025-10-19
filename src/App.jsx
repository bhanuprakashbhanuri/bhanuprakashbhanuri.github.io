import React from 'react'

export default function App() {
  const site = {
    name: "Bhanu Prakash Bhanuri",
    title: "Cloud Computing & Python Developer",
    tagline: "Building practical cloud solutions and automation with AWS & Python.",
    email: "bhanuprakashbhanuri@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhanu-prakash-bhanuri/",
    github: "https://github.com/BhanuPrakashhh3",
    hero: {
      intro: "Hi, I'm Bhanu — a Cloud-focused tech student building scalable cloud solutions and automation.",
      bullets: ["AWS Cloud Practitioner", "Python | Cloud Automation", "Resume Ops (AWS), IoT Predictive Maintenance"]
    },
    skills: {
      Programming: ["Python", "Go", "JavaScript"],
      Cloud: ["AWS S3", "CloudFront", "Route53", "DynamoDB", "Lambda", "EC2"],
      Tools: ["Docker", "Git", "Linux", "MATLAB", "UiPath"]
    },
    projects: [
      {
        title: "Resume Ops — Static Resume & View Tracking",
        desc: "Static resume on S3 + CloudFront; Go API with Docker & DynamoDB.",
        tech: ["AWS S3", "CloudFront", "Docker", "DynamoDB"],
        link: "#"
      },
      {
        title: "IoT Predictive Maintenance",
        desc: "End-to-end simulated IoT pipeline with data generation and model.",
        tech: ["Python", "Docker", "AWS"],
        link: "#"
      }
    ],
    education: [
      {
        institute: "Vignana Bharathi Institute of Technology",
        degree: "B.Tech — Electrical & Electronics Engineering",
        duration: "2020 - 2024",
        grade: "CGPA: 6.61"
      }
    ],
    certs: [
      "AWS Cloud Practitioner (CLF-C02)",
      "AWS re/Start — Tech Mahindra SMART Academy",
      "Cloud Application Developer - NSDC"
    ],
    strengths: ["Honesty", "Punctuality", "Communication", "Teamwork", "Adaptability"],
    footer: "Designed & built by Bhanu — React + Tailwind CSS"
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 backdrop-blur-sm bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-black text-sm">
              BP
            </div>
            <div>
              <div className="font-bold">{site.name}</div>
              <div className="text-xs text-gray-400">{site.title}</div>
            </div>
          </div>
          <nav className="flex gap-3">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border border-cyan-500/30 rounded hover:border-cyan-500 transition">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-600 transition font-medium">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="text-xl text-slate-300">{site.hero.intro}</p>
          <div className="flex gap-2 flex-wrap">
            {site.hero.bullets.map((b, i) => (
              <span key={i} className="px-3 py-1 rounded border border-cyan-500/30 text-sm text-slate-300">
                {b}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${site.email}`} className="px-6 py-2 bg-cyan-500 text-black rounded font-medium hover:bg-cyan-600 transition">
              Get In Touch
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="px-6 py-2 border border-cyan-500/30 rounded hover:border-cyan-500 transition">
              View Projects
            </a>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(site.skills).map(([cat, items]) => (
              <div key={cat} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="font-bold text-cyan-400 mb-4">{cat}</h3>
                <ul className="space-y-2">
                  {items.map((s, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-violet-400 rounded-full"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {site.projects.map((p, i) => (
              <div key={i} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition">
                <h3 className="font-bold text-cyan-400 mb-2">{p.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded border border-violet-500/30">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  View →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Education</h2>
          {site.education.map((e, i) => (
            <div key={i} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-cyan-400">{e.degree}</h3>
                  <p className="text-slate-400 text-sm">{e.institute}</p>
                </div>
                <span className="text-slate-400 text-sm">{e.duration}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{e.grade}</p>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {site.certs.map((c, i) => (
              <div key={i} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-4 text-sm text-slate-300">
                ✓ {c}
              </div>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Strengths</h2>
          <div className="flex flex-wrap gap-3">
            {site.strengths.map((s, i) => (
              <span key={i} className="px-4 py-2 rounded border border-cyan-500/30 text-slate-300 text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-cyan-500/10 pt-12">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href={`mailto:${site.email}`} className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-bold text-cyan-400 mb-1">Email</h3>
              <p className="text-slate-400 text-sm">{site.email}</p>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition text-center">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-bold text-cyan-400 mb-1">LinkedIn</h3>
              <p className="text-slate-400 text-sm">Connect with me</p>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-cyan-400 mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm">View my work</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-8 text-center text-slate-400 text-sm">
        <p>© 2025 Bhanu Prakash Bhanuri</p>
        <p className="mt-1">{site.footer}</p>
      </footer>
    </div>
  )
}
