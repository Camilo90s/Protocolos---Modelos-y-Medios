import { Layers, Wifi, Globe2, Send } from "lucide-react"
import { Card } from "@/components/ui/card"

export function TcpIpSection() {
  const layers = [
    {
      number: "4",
      name: "Aplicación",
      icon: Send,
      description: "Protocolos que usamos directamente: HTTP (web), FTP (archivos), DNS (dominios), SMTP (correo).",
      color: "text-cyan-400",
    },
    {
      number: "3",
      name: "Transporte",
      icon: Layers,
      description: "Garantiza que los datos lleguen completos y en orden. TCP verifica errores; UDP prioriza rapidez.",
      color: "text-blue-400",
    },
    {
      number: "2",
      name: "Internet",
      icon: Globe2,
      description: "Se encarga del direccionamiento y enrutamiento (protocolo IP). Define las rutas de los paquetes.",
      color: "text-indigo-400",
    },
    {
      number: "1",
      name: "Acceso a la Red",
      icon: Wifi,
      description:
        "Especifica cómo se envían los datos en el medio físico (cables o inalámbrico). Incluye Ethernet y Wi-Fi.",
      color: "text-purple-400",
    },
  ]

  return (
    <section id="tcp-ip" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Modelo <span className="text-primary">TCP/IP</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Es el <span className="text-primary font-medium">modelo real</span> en el que se basa Internet. Define un
            conjunto de protocolos que hacen posible la transmisión de datos entre dispositivos.
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {layers.map((layer, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className={`text-5xl font-bold ${layer.color}`}>{layer.number}</div>
                  <layer.icon className={`w-8 h-8 ${layer.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{layer.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
