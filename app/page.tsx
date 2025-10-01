import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProtocolsSection } from "@/components/protocols-section"
import { StandardsSection } from "@/components/standards-section"
import { TcpIpSection } from "@/components/tcp-ip-section"
import { OsiSection } from "@/components/osi-section"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProtocolsSection />
      <StandardsSection />
      <TcpIpSection />
      <OsiSection />
      <MediaSection />
      <Footer />
    </main>
  )
}
