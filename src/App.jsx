import './App.css'
import CallSection from './Sections/CallSection'
import Footer from './Sections/Footer'
import Hero from './Sections/Hero'
import ProductSection from './Sections/ProductSection'
import QNA from './Sections/QNA'
import SecondSection from './Sections/SecondSection'
import WhatsAppButton from './Components/WhatsAppButton' 


function App() {
  return (
    <>
      <Hero />
      <SecondSection />
      <ProductSection />
      <QNA />
      <CallSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App