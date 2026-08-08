import { Download, ExternalLink, FileText, MapPin, Mail, Phone, Globe, GraduationCap, Briefcase, Award } from 'lucide-react'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

export default function Resume() {
  const t = useT()
  const data = tr.resume

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-10 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Documento', en: 'Document' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{t(data.pageSubtitle)}</p>

          {/* Download actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'var(--primary)' }}
            >
              <Download size={15} />
              {t(data.downloadBtn)}
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-muted hover:-translate-y-0.5"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'var(--card)' }}
            >
              <ExternalLink size={15} />
              {t(data.openPDFBtn)}
            </a>
          </div>
        </div>

        {/* Resume preview */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-200"
          style={{ border: '1px solid var(--border)' }}
        >
          {/* Preview toolbar */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ background: 'var(--muted)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="flex-1 text-center text-xs text-muted-foreground font-mono">
              {t(data.previewNote)}
            </span>
            <FileText size={13} className="text-muted-foreground" />
          </div>

          {/* Resume paper */}
          <div
            className="p-8 sm:p-12"
            style={{ background: '#FFFFFF', color: '#0F172A', minHeight: '840px' }}
          >
            {/* Resume header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8 pb-8"
              style={{ borderBottom: '2px solid #2563EB' }}
            >
              <div>
                <h2
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Charles Pereira Marcelino Júnior
                </h2>
                <p className="text-base font-semibold text-blue-600 mb-4">
                  {t({ pt: 'Cientista da Computação | Analista de Requisitos | PM', en: 'Computer Scientist | Requirements Analyst | PM' })}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> Brasília, DF - Brasil</span>
                  <span className="flex items-center gap-1.5"><Mail size={12} /> charles@email.com</span>
                  <span className="flex items-center gap-1.5"><Globe size={12} /> linkedin.com/in/charles</span>
                </div>
              </div>
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                CPM
              </div>
            </div>

            {/* Professional summary */}
            <div className="mb-7">
              <h3
                className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t({ pt: 'RESUMO PROFISSIONAL', en: 'PROFESSIONAL SUMMARY' })}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(tr.home.summary)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Left col: Experience + Education */}
              <div className="sm:col-span-2 space-y-7">
                {/* Experience */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={14} className="text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t({ pt: 'EXPERIÊNCIA', en: 'EXPERIENCE' })}
                    </h3>
                  </div>
                  <div className="pl-4" style={{ borderLeft: '2px solid #E2E8F0' }}>
                    <div className="mb-1 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {t(tr.experience.role)}
                        </p>
                        <p className="text-sm font-semibold text-blue-600">{tr.experience.company}</p>
                      </div>
                      <p className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0">
                        {t({ pt: 'Dez 2023 – Dez 2025', en: 'Dec 2023 – Dec 2025' })}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">Brasília, DF</p>
                    <ul className="space-y-1">
                      {tr.experience.responsibilities.slice(0, 5).map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="text-blue-400 mt-0.5">•</span>
                          {t(r)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={14} className="text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t({ pt: 'FORMAÇÃO', en: 'EDUCATION' })}
                    </h3>
                  </div>
                  <div className="pl-4" style={{ borderLeft: '2px solid #E2E8F0' }}>
                    <p className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t(tr.about.degree)}
                    </p>
                    <p className="text-sm text-blue-600">{t(tr.about.university)}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Brasília, DF</p>
                  </div>
                </div>
              </div>

              {/* Right col: Skills + Certs */}
              <div className="space-y-7">
                {/* Skills */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {t({ pt: 'COMPETÊNCIAS', en: 'SKILLS' })}
                  </h3>
                  <div className="space-y-1.5">
                    {['Requirements Analysis', 'Agile / Scrum / Kanban', 'Backlog Management', 'Figma & Balsamiq', 'User Stories', 'Stakeholder Communication', 'Angular', 'Spring Boot', 'MySQL', 'Git'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        <span className="text-xs text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={12} className="text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t({ pt: 'CERTIFICAÇÕES', en: 'CERTIFICATIONS' })}
                    </h3>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      'Scrum Fundamentals Certified',
                      'Product Owner Certified',
                      'ClickUp Expert',
                      'ClickUp Admin',
                      'Prompt Engineering',
                    ].map((cert) => (
                      <div key={cert} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-slate-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {t({ pt: 'IDIOMAS', en: 'LANGUAGES' })}
                  </h3>
                  {tr.about.languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <span className="text-xs text-slate-600">{t(lang.name)}</span>
                      <span className="text-xs text-slate-400">{t(lang.level)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground text-center mt-4 animate-fade-in delay-300">
          {t(data.infoNote)}
        </p>
      </div>
    </main>
  )
}
