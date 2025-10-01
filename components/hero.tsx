import { Network, Radio, Server } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Network className="w-12 h-12 text-primary" />
          <Radio className="w-10 h-10 text-primary/70" />
          <Server className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Protocolos y Modelos de <span className="text-primary">Comunicación</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Guía completa sobre los fundamentos de las redes de comunicación, estándares internacionales y medios de
          transmisión
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#protocolos"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Comenzar
          </a>
        </div>
      </div>
    </section>
  )
}
