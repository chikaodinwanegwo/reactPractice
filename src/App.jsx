import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/programs'
import Title  from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle='Our Services' title='What we offer'/>
          <Programs />
          <About />
          <Title subTitle='Gallery' title='Medical Equipment'/>
          <Campus />
          <Title subTitle='TESTIMONIALS' title='What our patients say'/>
          <Testimonials />
          <Title subTitle='Contact us' title='Get in touch'/>
          <Contact />
          <Footer />
          
        </div>
    </div>
  )
}

export default App