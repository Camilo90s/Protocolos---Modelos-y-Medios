import { Shield, Globe, Zap, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StandardsSection() {
  const organizations = [
    {
      icon: Globe,
      name: "IETF",
      fullName: "Internet Engineering Task Force",
      description:
        "Desarrolla protocolos de Internet. Sus propuestas se publican en documentos llamados RFC (Request For Comments).",
    },
    {
      icon: Zap,
      name: "IEEE",
      fullName: "Institute of Electrical and Electronics Engineers",
      description: "Establece estándares como Ethernet (IEEE 802.3) o Wi-Fi (IEEE 802.11).",
    },
    {
      icon: Shield,
      name: "ISO",
      fullName: "International Organization for Standardization",
      description: "Creadora del modelo de referencia OSI para redes de comunicación.",
    },
    {
      icon: Building2,
      name: "ITU",
      fullName: "International Telecommunication Union",
      description: "Regula aspectos de telecomunicaciones a nivel global.",
    },
  ]

  return (
    <section id="estandares" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Importancia de los Estándares</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Los <span className="text-primary font-medium">estándares de red</span> son acuerdos internacionales que
            garantizan la interoperabilidad entre dispositivos de diferentes fabricantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {organizations.map((org, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <org.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{org.name}</h3>
                  <p className="text-sm text-primary mb-3">{org.fullName}</p>
                  <p className="text-muted-foreground leading-relaxed">{org.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8">
          <p className="text-lg text-center leading-relaxed">
            Gracias a estas organizaciones, un mensaje enviado desde un computador en Colombia puede recibirse sin
            problema en un teléfono en Japón, siempre que ambos usen los mismos protocolos.
          </p>
        </div>
      </div>
    </section>
  )
}
