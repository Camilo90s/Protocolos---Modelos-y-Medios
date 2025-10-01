import { Cable, Lightbulb, Radio } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MediaSection() {
  const media = [
    {
      icon: Cable,
      name: "Medios Metálicos (Cobre)",
      description:
        "Usan impulsos eléctricos para enviar datos. Son económicos, pero limitados en velocidad y distancia.",
      examples: "Cables de par trenzado (UTP) y coaxial",
      color: "text-orange-400",
    },
    {
      icon: Lightbulb,
      name: "Fibra Óptica",
      description:
        "Transmite datos como pulsos de luz. Ofrece gran velocidad y largas distancias, además de resistencia a interferencias.",
      examples: "Ideal para conexiones de alta velocidad",
      color: "text-yellow-400",
    },
    {
      icon: Radio,
      name: "Medios Inalámbricos",
      description:
        "Emplean ondas electromagnéticas (radiofrecuencia, satélite). Son flexibles y prácticos, pero más vulnerables a interferencias.",
      examples: "Wi-Fi, Bluetooth, redes celulares",
      color: "text-green-400",
    },
  ]

  return (
    <section id="medios" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Medios de Transmisión</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Para que la información viaje de un origen a un destino, se necesita un{" "}
            <span className="text-primary font-medium">medio de transmisión</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.05]"
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-secondary rounded-full mb-4">
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">{item.examples}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
