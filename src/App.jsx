import React from 'react'

// All data inline - no imports needed
const site = {
  name: "Bhanu Prakash Bhanuri",
  title: "Cloud Computing & Python Developer",
  tagline: "Building practical cloud solutions and automation with AWS & Python.",
  resumeUrl: "/resume.pdf",
  email: "bhanuprakashbhanuri@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhanu-prakash-bhanuri/",
  github: "https://github.com/BhanuPrakashhh3",
  hero: {
    intro: "Hi, I'm Bhanu — a Cloud-focused tech student building scalable cloud solutions and automation.",
    bullets: ["AWS Cloud Practitioner", "Python | Cloud Automation", "Projects: Resume Ops (AWS), IoT Simulated Predictive Maintenance"]
  },
  skills: {
    Programming: ["Python"],
    Cloud: ["AWS (S3, CloudFront, Route53, ACM)", "DynamoDB", "Lambda", "EC2"],
    Tools: ["Docker","Git","MATLAB","UiPath","Linux"]
  },
  projects: [
    {
      id: 1,
      title: "Resume Ops — Static Resume & View Tracking",
      desc: "Static resume hosted on S3 + CloudFront; view tracking with Go API containerized and DynamoDB.",
      tech: ["AWS S3","CloudFront","Docker","DynamoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Simulated IoT Predictive Maintenance",
      desc: "End-to-end simulated IoT pipeline for predictive maintenance (data generation, model, dashboard).",
      tech: ["Python","Docker","AWS"],
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
  certificates: [
    "AWS Cloud Practitioner (CLF-C02)",
    "AWS re/Start — Tech Mahindra SMART Academy",
    "Cloud Application Developer - NSDC"
  ],
  strengths: ["Honesty","Punctuality","Good communication","Teamwork","Adaptability"],
  footerNote: "Designed & maintained by Bhanu — built with React + Tailwind"
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#06050a] text-[#e6eef8]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-sm bg-[#06050a]/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#8A4BFF] flex items-center justify-center text-black font-bold text-sm">
              BP
            </div>
            <div>
              <div className="text-lg font-semibold">{site.name}</div>
              <div className="text-xs text-gray-400">{site.title}</div>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <a 
              href={site.resumeUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="px-3 py-2 text-sm rounded-md border border-white/10 hover:border-white/20 transition"
            >
              View Resume
            </a>
            <a 
              href={site.resumeUrl} 
              download 
              className="px-3 py-2 rounded-md bg-gradient-to-r from-[#00C2FF] to-[#8A4BFF] text-black text-sm font-medium hover:shadow-lg transition"
            >
              Download
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold mb-2">{site.name}</h1>
              <p className="text-sm font-medium text-gray-400">{site.title}</p>
            </div>
            <p className="text-gray-300 text-lg">{site.hero.intro}</p>
            <div className="flex gap-3">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-gray-700 hover:border-gray-500 transition text-sm">View Resume</a>
              <a href={site.resumeUrl} download className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00C2FF] to-[#8A4BFF] text-black font-medium text-sm">Download Resume</a>
            </div>
            <div className="flex gap-2 flex-wrap pt-4">
              {site.hero.bullets.map((b, i) => (
                <div key={i} className="px-3 py-1.5 rounded-md text-sm border border-white/10 bg-white/5">{b}</div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-48 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-[#00C2FF]/10 to-[#8A4BFF]/10 flex items-center justify-center text-gray-400">
              <div className="text-center"><div className="text-4xl mb-2">👤</div><p className="text-xs">Profile Photo</p></div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(site.skills).map(([cat, items]) => (
              <div key={cat} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-[#00C2FF] mb-4">{cat}</h3>
                <ul className="space-y-2">
                  {items.map((s, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-[#8A4BFF]">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {site.projects.map(p => (
              <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
                <h3 className="font-semibold text-[#00C2FF] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{p.desc}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {p.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded border border-[#8A4BFF]/40 bg-[#8A4BFF]/10 text-[#8A4BFF]">{t}</span>
                  ))}
                </div>
                <a href={p.link} className="text-sm text-[#00C2FF] hover:text-[#8A4BFF]">View Project →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            {site.education.map((e, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#00C2FF]">{e.degree}</h3>
                  <span className="text-xs text-gray-400">{e.duration}</span>
                </div>
                <p className="text-sm text-gray-400 mb-1">{e.institute}</p>
                <p className="text-xs text-gray-500">{e.grade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Certificates & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {site.certificates.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-gray-300">✓ {c}</div>
            ))}
          </div>
        </section>

        {/* Strengths */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Strengths</h2>
          <div className="flex gap-3 flex-wrap">
            {site.strengths.map((s, i) => (
              <div key={i} className="px-4 py-2 rounded-lg border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-sm text-gray-300">{s}</div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/5 pt-12">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href={`mailto:${site.email}`} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-[#00C2FF] mb-2">Email</h3>
              <p className="text-sm text-gray-400">{site.email}</p>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-[#00C2FF] mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">View Profile</p>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-[#00C2FF] mb-2">GitHub</h3>
              <p className="text-sm text-gray-400">View Projects</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm mt-12">
        <p>© 2025 {site.name}. All rights reserved.</p>
        <p className="mt-2">{site.footerNote}</p>
      </footer>
    </div>
  )
}
