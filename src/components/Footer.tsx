import { MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

export default function Footer() {
  const t = useT()

  return (
    <footer
      className="mt-auto py-10 px-4 sm:px-6"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={13} />
          <span>{t(tr.footer.location)}</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
            aria-label="GitHub"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center">{t(tr.footer.copyright)}</p>
      </div>
    </footer>
  )
}
