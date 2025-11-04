import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/50">
                <span className="font-mono">{'<C/>'}</span>
              </div>
              <h3 className="text-lg font-bold font-mono bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CODE-P
              </h3>
            </div>
            <p className="text-sm text-cyan-100/60 mb-3">
              Open-source coding education platform. Master programming with interactive lessons.
            </p>
            <p className="text-xs text-cyan-200/40 font-mono">
              {'// Built by'} <span className="text-cyan-400 font-semibold">Pheng Sopanha</span>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-cyan-300 font-mono">{'{ Product }'}</h4>
            <ul className="space-y-2 text-sm text-cyan-100/60">
              <li>
                <Link href="/features" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-cyan-300 font-mono">{'{ Company }'}</h4>
            <ul className="space-y-2 text-sm text-cyan-100/60">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-cyan-300 font-mono">{'{ Legal }'}</h4>
            <ul className="space-y-2 text-sm text-cyan-100/60">
              <li>
                <Link href="/privacy" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span className="text-cyan-500">{'>'}</span> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cyan-100/50 font-mono">
              <span className="text-cyan-400">{'©'}</span> {currentYear} CODE-P <span className="text-cyan-500/50">{'|'}</span> Empowering developers worldwide
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100/50 hover:text-cyan-300 transition-colors">
                <span className="font-mono text-xs">{'</> GitHub'}</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100/50 hover:text-cyan-300 transition-colors">
                <span className="font-mono text-xs">{'@ Twitter'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}