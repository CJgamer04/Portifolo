import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectSIGEBD from './pages/ProjectSIGEBD'
import Certifications from './pages/Certifications'
import Resume from './pages/Resume'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/competencias" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/sigebd" element={<ProjectSIGEBD />} />
          <Route path="/certificacoes" element={<Certifications />} />
          <Route path="/curriculo" element={<Resume />} />
          {/* English route aliases */}
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/sigebd" element={<ProjectSIGEBD />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <Layout />
      </AppProvider>
    </BrowserRouter>
  )
}
