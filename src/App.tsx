import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Heart, Mail } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}ceratonin-logo.png?v=3`}
              alt="Ceratonin" 
              className="h-10 w-auto" 
            />
            <span className="text-xl font-serif font-bold text-amber-950">ceratonin</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-sm text-stone-600 hover:text-amber-900 transition-colors">About</a>
            <a href="#definition" className="text-sm text-stone-600 hover:text-amber-900 transition-colors">Definition</a>
            <a href="#contact" className="text-sm text-stone-600 hover:text-amber-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
            The Joy of<br />Ceramics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Where creativity flows and every piece tells a story
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full transition-all duration-300 hover:gap-4 group"
          >
            Discover Our Craft
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-light text-amber-900 mb-6">
              Crafted with<br />Intention
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Ceratonin is more than a pottery studio—it's a sanctuary where creativity flows and mindfulness takes form. Each piece we create is a meditation, a moment of calm shaped by hands and heart.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We believe in the therapeutic power of working with clay, the joy of creating something tangible, and the beauty of imperfection that makes each piece uniquely yours.
            </p>
          </div>
          <div className="relative group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pottery crafting"
              className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 rounded-2xl transition-all duration-500"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-light text-amber-900 mb-6">Our Philosophy</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Every creation is an expression of balance between control and letting go
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <Sparkles className="w-7 h-7 text-amber-900" />
            </div>
            <h3 className="text-2xl font-light text-amber-900 mb-4">Mindful Making</h3>
            <p className="text-stone-600 leading-relaxed">
              Each piece begins with presence. We embrace the meditative process of shaping clay, finding peace in the rhythm of creation.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <Heart className="w-7 h-7 text-amber-900" />
            </div>
            <h3 className="text-2xl font-light text-amber-900 mb-4">Handcrafted Love</h3>
            <p className="text-stone-600 leading-relaxed">
              No two pieces are identical. Every curve, texture, and glaze carries the mark of human touch and genuine care.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <Sparkles className="w-7 h-7 text-amber-900" />
            </div>
            <h3 className="text-2xl font-light text-amber-900 mb-4">Organic Beauty</h3>
            <p className="text-stone-600 leading-relaxed">
              We celebrate the raw, earthy nature of clay. Imperfections aren't flaws—they're signatures of authenticity.
            </p>
          </div>
        </div>
      </section>

      <section id="definition" className="py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="border-b border-amber-200 pb-8">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-950 mb-4">ceratonin</h2>
              <p className="text-lg text-stone-600 italic mb-4">
                <span className="font-serif">/ˌserəˈtɑ.nɪn/</span> <span className="font-serif font-bold">noun</span>
              </p>
              <p className="text-base text-amber-900 italic">
                <span className="font-serif">sounds like</span> <span className="font-serif font-semibold">serotonin</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-amber-800 font-bold text-xl leading-relaxed pt-1">•</div>
                <p className="text-lg text-stone-700 leading-relaxed font-serif">
                  The feeling of immense joy and creative fulfillment derived from the process of making and appreciating ceramics.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="text-amber-800 font-bold text-xl leading-relaxed pt-1">•</div>
                <p className="text-lg text-stone-700 leading-relaxed font-serif">
                  A unique sense of happiness and well-being associated with working with clay, finding peace in the rhythm of creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-amber-900 mb-6">From Our Studio</h2>
            <p className="text-lg text-stone-600">A glimpse into our creative process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-96">
              <img
                src="https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pottery wheel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-light mb-2">The Wheel</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Where centrifugal force meets creative vision
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group cursor-pointer h-96">
              <img
                src="https://images.pexels.com/photos/5706269/pexels-photo-5706269.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ceramic pieces"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-light mb-2">The Collection</h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Functional art for everyday rituals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-6">Let's Create Together</h2>
          <p className="text-xl text-stone-300 mb-12 font-light">
            Whether you're looking for a custom piece or interested in joining a workshop,<br />
            we'd love to hear from you
          </p>

          <a
            href="mailto:hello@ceratonin.studio"
            className="inline-flex items-center gap-3 bg-amber-800 hover:bg-amber-700 text-white px-10 py-5 rounded-full transition-all duration-300 hover:gap-5 group text-lg"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mt-16 pt-8 border-t border-stone-800">
            <p className="text-stone-400 text-sm">
              © 2026 Ceratonin. Handcrafted with care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
