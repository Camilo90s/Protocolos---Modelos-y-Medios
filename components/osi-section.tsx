import { Layers3 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function OsiSection() {
  const osiLayers = [
    { number: 7, name: "Aplicación", description: "Interfaz directa con el usuario final (correo, web, chats)" },
    { number: 6, name: "Presentación", description: "Traduce datos entre formatos, comprime y cifra información" },
    { number: 5, name: "Sesión", description: "Administra la apertura, mantenimiento y cierre de sesiones" },
    { number: 4, name: "Transporte", description: "Controla la entrega de extremo a extremo (TCP, UDP)" },
    { number: 3, name: "Red", description: "Determina la dirección y el enrutamiento de los paquetes (IP)" },
    {
      number: 2,
      name: "Enlace de Datos",
      description: "Organiza cómo los datos pasan entre nodos (Ethernet, switches)",
    },
    { number: 1, name: "Física", description: "Define medios, cables, conectores, voltajes y señales" },
  ]

  return (
    <section id="osi" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Layers3 className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Modelo <span className="text-primary">OSI</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-4">
            Es un <span className="text-primary font-medium">modelo teórico de 7 capas</span> que detalla cada paso de
            la comunicación en redes.
          </p>
          <p className="text-sm text-muted-foreground italic">Open Systems Interconnection</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {osiLayers.map((layer) => (
            <Card key={layer.number} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">{layer.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{layer.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-primary/10 border-primary/30">
            <h3 className="text-xl font-bold mb-3 text-primary">OSI</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Modelo teórico de 7 capas</li>
              <li>• Especifica detalles físicos</li>
              <li>• Ideal para aprender y analizar</li>
            </ul>
          </Card>
          <Card className="p-6 bg-primary/10 border-primary/30">
            <h3 className="text-xl font-bold mb-3 text-primary">TCP/IP</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Modelo práctico de 4 capas</li>
              <li>• Basado en protocolos reales</li>
              <li>• Usado en Internet actualmente</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
