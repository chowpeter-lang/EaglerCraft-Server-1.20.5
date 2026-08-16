import { useState, useEffect } from 'react'

const SERVER_ADDRESS = 'wss://your-server-ip:8081'

function Hero() {
  const [copied, setCopied] = useState(false)
  const [address] = useState(SERVER_ADDRESS)

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-block mb-6 animate-fade-in">
          <span className="px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-sm font-semibold tracking-wide">
            EAGLERCRAFT 1.20.5
          </span>
        </div>

        <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s', opacity: 0 }}>
          ShadowNetwork
          <span className="block text-primary-400 text-xl md:text-3xl lg:text-4xl mt-4">Eaglercraft Server</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Play Minecraft 1.20.5 directly in your browser. No download required.
          Just paste the server address and start building.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-dark-800/80 border border-primary-500/30 rounded-xl px-5 py-3 backdrop-blur-sm">
              <code className="text-primary-300 font-mono text-sm md:text-base">{address}</code>
            </div>
            <button
              onClick={copyAddress}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 active:scale-95"
            >
              {copied ? 'Copied!' : 'Copy Address'}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Survival Mode
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-400"></span>
              PVP Enabled
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400"></span>
              20 Player Slots
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="text-gray-600 text-sm flex flex-col items-center gap-2">
          <span>Scroll for more</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function ServerInfo() {
  const stats = [
    { label: 'Version', value: '1.20.5', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { label: 'Gamemode', value: 'Survival', icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m9.757 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Difficulty', value: 'Easy', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Max Players', value: '20', icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4 4 4 0 004 4z' },
    { label: 'PVP', value: 'Enabled', icon: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m9.757 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Nether', value: 'Open', icon: 'M12 3v18m9-9H3' },
  ]

  return (
    <section className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">Server Information</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Everything you need to know before joining the server.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group bg-dark-800/60 border border-gray-800 hover:border-primary-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <p className="text-white text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowToJoin() {
  const steps = [
    {
      number: '01',
      title: 'Open Eaglercraft',
      description: 'Go to an Eaglercraft client in your web browser. This lets you play Minecraft without downloading anything.',
    },
    {
      number: '02',
      title: 'Click Multiplayer',
      description: 'From the main menu, click "Multiplayer" to see the server list screen.',
    },
    {
      number: '03',
      title: 'Add a Server',
      description: 'Click "Add Server" or "Direct Connect" and paste the server address you copied from the top of this page.',
    },
    {
      number: '04',
      title: 'Make sure it starts with wss://',
      description: 'The address must start with wss:// instead of https://. If it does not, change it manually before connecting.',
    },
    {
      number: '05',
      title: 'Join and Play',
      description: 'Click "Join Server" and you will be dropped into the world. If the server asks for a password, type the one you registered with.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">How to Join</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Five simple steps to start playing in your browser.
        </p>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex gap-6 bg-dark-800/40 border border-gray-800 hover:border-primary-500/40 rounded-2xl p-6 transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center font-pixel text-primary-400 text-sm group-hover:bg-primary-500/20 group-hover:scale-110 transition-all">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdminSetup() {
  const [openStep, setOpenStep] = useState<number | null>(1)

  const steps = [
    {
      title: 'Install Java',
      content: 'Open a terminal and run: sudo apt install default-jdk && sudo apt install default-jre -y',
    },
    {
      title: 'Start the Servers',
      content: 'Open two terminals. In the first: cd server && sudo java -jar server.jar. In the second: cd bungee && sudo java -jar bungeecord.jar',
    },
    {
      title: 'Forward Ports',
      content: 'Forward ports 8081 and 25565. Make port 8081 public. The link next to it is your server IP.',
    },
    {
      title: 'Fix the Address',
      content: 'Replace "https://" with "wss://" in the server address that players will use to connect.',
    },
    {
      title: 'Add Plugins (Optional)',
      content: 'Upload plugins to server/plugins, then restart the server with "stop" followed by "sudo java -jar server.jar".',
    },
  ]

  return (
    <section className="py-24 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">Admin Setup</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          For server operators only. Players do not need to follow these steps.
        </p>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border border-gray-800 hover:border-primary-500/40 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenStep(openStep === i + 1 ? null : i + 1)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-pixel text-primary-400 text-xs">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white font-semibold group-hover:text-primary-300 transition-colors">{step.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openStep === i + 1 ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openStep === i + 1 ? 'max-h-40' : 'max-h-0'}`}>
                <div className="px-5 pb-5 pl-16">
                  <code className="block bg-dark-950 border border-gray-800 rounded-lg p-4 text-primary-300 text-sm font-mono whitespace-pre-wrap break-all">
                    {step.content}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark-950 border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-pixel text-primary-400 text-sm mb-4">ShadowNetwork</p>
        <p className="text-gray-600 text-sm">
          Created by Ryan Norshare. Eaglercraft 1.20.5. This server is free and may not be online 24/7.
        </p>
        <p className="text-gray-700 text-xs mt-4">
          Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Synergies AB.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.title = 'ShadowNetwork - Eaglercraft 1.20.5 Server'
  }, [])

  return (
    <div className="min-h-screen bg-dark-950">
      <Hero />
      <ServerInfo />
      <HowToJoin />
      <AdminSetup />
      <Footer />
    </div>
  )
}
