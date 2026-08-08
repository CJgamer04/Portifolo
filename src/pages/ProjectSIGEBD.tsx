import { Link } from 'react-router-dom'
import { Shield, BookOpen, User, CheckCircle2, AlertTriangle, Target, Cpu } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

const profileIcons = {
  shield: <Shield size={18} />,
  book: <BookOpen size={18} />,
  user: <User size={18} />,
}

export default function ProjectSIGEBD() {
  const t = useT()
  const data = tr.projectSigebd

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 animate-fade-in"
        >
          {t(tr.common.backToProjects)}
        </Link>

        {/* Hero */}
        <div
          className="rounded-2xl overflow-hidden mb-8 animate-fade-in-up"
          style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #0F172A 60%, #134E4A 100%)' }}
        >
          <div className="px-8 py-14 sm:py-20 relative">
            <div className="flex flex-wrap gap-2 mb-5">
              {tr.projects.sigebd.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              {data.title}
            </h1>
            <p className="text-lg text-white/70 mb-6">{t(data.subtitle)}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span>📅 {tr.projects.sigebd.year}</span>
              <span>👤 {t(tr.projects.sigebd.role)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-12 animate-fade-in-up delay-100">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{ background: 'var(--primary)' }}
          >
            <GithubIcon size={15} />
            {t(tr.common.github)}
          </a>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Overview + Problem row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionCard icon={<CheckCircle2 size={16} />} title={t(data.overviewTitle)} color="var(--primary)">
              <p className="text-sm text-muted-foreground leading-relaxed">{t(data.overview)}</p>
            </SectionCard>

            <SectionCard icon={<AlertTriangle size={16} />} title={t(data.problemTitle)} color="#F59E0B">
              <p className="text-sm text-muted-foreground leading-relaxed">{t(data.problem)}</p>
            </SectionCard>
          </div>

          {/* Objectives */}
          <SectionCard icon={<Target size={16} />} title={t(data.objectivesTitle)} color="var(--accent)">
            <ul className="space-y-2.5">
              {data.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                    style={{ background: 'var(--accent)' }}
                  >
                    {i + 1}
                  </span>
                  {t(obj)}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* My Role */}
          <SectionCard icon={<User size={16} />} title={t(data.myRoleTitle)} color="#8B5CF6">
            <p className="text-sm text-muted-foreground leading-relaxed">{t(data.myRole)}</p>
          </SectionCard>

          {/* Requirements elicitation */}
          <SectionCard icon={<CheckCircle2 size={16} />} title={t(data.requirementsTitle)} color="var(--primary)">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t(data.requirementsText)}</p>

            <h4 className="font-semibold text-sm text-foreground mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {t(data.frTitle)}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.functionalRequirements.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'var(--muted)' }}
                >
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0"
                    style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                  >
                    {req.id}
                  </span>
                  <span className="text-xs text-foreground">{t(req)}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* User profiles */}
          <div>
            <h2
              className="text-xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t(data.profilesTitle)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {data.profiles.map((profile, i) => {
                const profileColors = ['var(--primary)', '#8B5CF6', 'var(--accent)']
                return (
                  <div
                    key={i}
                    className="rounded-2xl p-6 card-hover"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                      style={{ background: profileColors[i] }}
                    >
                      {profileIcons[profile.icon as keyof typeof profileIcons]}
                    </div>
                    <h3
                      className="font-bold text-base text-foreground mb-4"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t(profile.name)}
                    </h3>
                    <ul className="space-y-2">
                      {t(profile.permissions).map((perm: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: profileColors[i] }}
                          />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Technologies */}
          <SectionCard icon={<Cpu size={16} />} title={t(data.techTitle)} color="var(--accent)">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-bold text-sm text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {tech.name}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                    >
                      {t(tech.category)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t(tech.desc)}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Architecture */}
          <SectionCard icon={<Cpu size={16} />} title={t(data.architectureTitle)} color="#8B5CF6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t(data.architecture)}</p>
            {/* Architecture diagram */}
            <div
              className="rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ background: 'var(--muted)' }}
            >
              {[
                { label: 'Angular SPA', sub: 'Front-end', color: '#DD0031' },
                { label: '→', sub: 'REST API / JWT', color: 'var(--muted-foreground)', isArrow: true },
                { label: 'Spring Boot', sub: 'Back-end', color: '#6DB33F' },
                { label: '→', sub: 'SQL Queries', color: 'var(--muted-foreground)', isArrow: true },
                { label: 'MySQL', sub: 'Database', color: '#00758F' },
              ].map((layer, i) =>
                layer.isArrow ? (
                  <div key={i} className="text-muted-foreground font-mono text-lg hidden sm:block">{layer.label}</div>
                ) : (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="px-5 py-3 rounded-xl text-xs font-bold text-white"
                      style={{ background: layer.color }}
                    >
                      {layer.label}
                    </div>
                    <span className="text-xs text-muted-foreground">{layer.sub}</span>
                  </div>
                )
              )}
            </div>
          </SectionCard>

          {/* Results */}
          <SectionCard icon={<CheckCircle2 size={16} />} title={t(data.resultsTitle)} color="var(--primary)">
            <ul className="space-y-3">
              {data.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                  {t(r)}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Lessons learned */}
          <SectionCard icon={<BookOpen size={16} />} title={t(data.lessonsTitle)} color="#F59E0B">
            <p className="text-sm text-muted-foreground leading-relaxed">{t(data.lessons)}</p>
          </SectionCard>
        </div>

        {/* Bottom action */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/projetos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(tr.common.backToProjects)}
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{ background: 'var(--primary)' }}
          >
            <GithubIcon size={15} />
            {t({ pt: 'Ver no GitHub', en: 'View on GitHub' })}
          </a>
        </div>
      </div>
    </main>
  )
}

function SectionCard({
  icon, title, color, children,
}: {
  icon: React.ReactNode
  title: string
  color: string
  children: React.ReactNode
}) {
  return (
    <div
      className="rounded-2xl p-8 animate-fade-in-up"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
          style={{ background: color }}
        >
          {icon}
        </div>
        <h2
          className="font-bold text-lg text-foreground"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}
