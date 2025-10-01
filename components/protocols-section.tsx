import { MessageSquare, Users, Clock, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ProtocolsSection() {
  const analogies = [
    {
      icon: Users,
      title: "Emisor y Receptor",
      description: "Necesitamos saber quién habla y quién escucha",
    },
    {
      icon: MessageSquare,
      title: "Idioma Común",
      description: "Usamos un lenguaje y gramática compartidos",
    },
    {
      icon: Clock,
      title: "Velocidad y Momento",
      description: "Establecemos una velocidad y momento de entrega adecuados",
    },
    {
      icon: CheckCircle,
      title: "Acuse de Recibo",
      description: "Confirmamos que el mensaje fue recibido correctamente",
    },
  ]

  return (
    <section id="protocolos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">¿Qué son los Protocolos de Comunicación?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            La comunicación, ya sea entre personas o dispositivos, necesita{" "}
            <span className="text-primary font-medium">reglas compartidas</span> que permitan que el mensaje llegue de
            manera clara y sin errores. En redes, esas reglas se llaman{" "}
            <span className="text-primary font-medium">protocolos</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {analogies.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/50 border border-border rounded-lg p-8 text-center">
          <p className="text-lg leading-relaxed">
            Del mismo modo, en una red los dispositivos acuerdan previamente qué protocolo usar para poder comunicarse
            con éxito.
          </p>
        </div>
      </div>
    </section>
  )
}
