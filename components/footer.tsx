import { Network, BookOpen, GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Conclusiones</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex gap-3">
              <Network className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                Los <span className="text-foreground font-medium">protocolos</span> son como idiomas que permiten que
                las computadoras se entiendan entre sí.
              </p>
            </div>
            <div className="flex gap-3">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                Los <span className="text-foreground font-medium">estándares</span> hacen posible que equipos de
                distintos fabricantes trabajen juntos.
              </p>
            </div>
            <div className="flex gap-3">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                El <span className="text-foreground font-medium">modelo OSI</span> es una guía conceptual, mientras que{" "}
                <span className="text-foreground font-medium">TCP/IP</span> es el que usamos en la práctica.
              </p>
            </div>
            <div className="flex gap-3">
              <Network className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                Los <span className="text-foreground font-medium">medios de transmisión</span> son la autopista por la
                que viajan los datos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Guía de Estudio sobre Protocolos, Modelos y Medios de Comunicación
          </p>
        </div>
      </div>
    </footer>
  )
}
