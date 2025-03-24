import React, { useState, useEffect } from 'react';
import { Phone, Clock, PenTool, Settings, MessageSquare, Wrench, Shield, Star, MapPin, Quote, Moon, Sun, Camera, PenTool as Tool } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/+6287858545428', '_blank');
  };

  const reviews = [
    {
      name: "Widyatama Patar Handiyono",
      rating: 5,
      text: "Bengkel terbaik untuk sepeda onthel! Hasil restorasinya luar biasa.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW07u2jQ8VwRbCvON5e6jzNFi_Y8TVEPvAm76by1m5H9iq2hl8=s100"
    },
    {
      name: "Idham Nasar Be Em",
      rating: 5,
      text: "MasyaaAllah, yang mau benerin sepeda pancal, InsyaaAllah amanah bapaknya, benerin disini aja, bapaknya profesional sekali dalam dunia persepeda pancalan",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVmJLAHCaa8MJK_Ny68dotRlr-vQdZWNLlk2_clgo95Y3lzYfHX=w75-h75-p-rp-mo-ba3-br100"
    },
    {
      name: "Cut Mutia Svensi",
      rating: 5,
      text: "Pelayanannya bagus dan hasil kerjanya juga bagus, sepeda saya selesainya juga cepat",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUdH2b8OZWQ69T92mXxx7Ba9clYPZjjWk6V_sRU4Cenr-_YQ1t0=w100"
    }
  ];

  const bicycleImages = [
    {
      url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80",
      caption: "Sepeda Klasik Terawat"
    },
    {
      url: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80",
      caption: "Restorasi Profesional"
    },
    {
      url: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80",
      caption: "Kualitas Terbaik"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % bicycleImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531845116688-48819b3b68d9?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=80"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-amber-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-amber-900'} text-white fixed w-full z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              {/* <PenTool className="h-8 w-8 animate-float" /> */}
              <span className="font-bold text-xl">AKSI LAMA</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#layanan" className="hover:text-amber-200 transition-colors">Layanan</a>
              
              <a href="#keunggulan" className="hover:text-amber-200 transition-colors">Keunggulan</a>
              <a href="#ulasan" className="hover:text-amber-200 transition-colors">Ulasan</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-amber-800 transition-colors"
                aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageSquare size={18} />
                WhatsApp
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <a href="#layanan" className="block py-2 hover:text-amber-200">Layanan</a>
              
              
              <a href="#keunggulan" className="block py-2 hover:text-amber-200">Keunggulan</a>
              <a href="#ulasan" className="block py-2 hover:text-amber-200">Ulasan</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full text-left py-2 hover:text-amber-200 flex items-center gap-2"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                {darkMode ? 'Mode Terang' : 'Mode Gelap'}
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 justify-center mt-4"
              >
                <MessageSquare size={18} />
                WhatsApp
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {bicycleImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-xl md:text-2xl text-center">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in ">
              Bengkel Sepeda Onthel "AKSI LAMA"
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-amber-100 animate-fade-in-delay">
              Bengkel ini berdiri pada tahun 2018 dikelola oleh milik pribadi dengan mekanik profesional mantan atlet sepeda.
              <br /> 
              Kami menyediakan mulai dari jual beli hingga servis sepeda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg"
              >
                <MessageSquare size={24} />
                Konsultasi Gratis /  Buat Janji
              </button>
              <a
                href="#layanan"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg"
              >
                <Tool size={24} />
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Section
      <section id="galeri" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Galeri Bengkel </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Berikut beberapa galeri bengkel " AKSI LAMA "
            </p>
          </div>
          <div className="image-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="image-container shadow-xl">
                <img
                  src={image}
                  alt={`Hasil Restorasi ${index + 1}`}
                  className="transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Camera className="text-white mr-2" size={20} />
                  <span className="text-white">FOTO {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="layanan" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-amber-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Layanan Spesialis</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Kami menyediakan layanan lengkap sepeda  kesayangan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}>
              <div className={`w-16 h-16 ${darkMode ? 'bg-gray-700' : 'bg-amber-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <PenTool className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Restorasi Total</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Pembersihan menyeluruh
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Pengecatan ulang
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Perbaikan komponen
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Perakitan profesional
                </li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}>
              <div className={`w-16 h-16 ${darkMode ? 'bg-gray-700' : 'bg-amber-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Settings className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Servis Rutin</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Pelumasan rantai
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Penyetelan rem
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Pemeriksaan ban
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Pengencangan baut
                </li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}>
              <div className={`w-16 h-16 ${darkMode ? 'bg-gray-700' : 'bg-amber-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Wrench className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Perbaikan Khusus</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Perbaikan rangka
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Penggantian spare part
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Modifikasi custom
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
                  Konsultasi ahli
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Mengapa Memilih Kami</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Pengalaman dan dedikasi kami dalam merawat sepeda klasik menjadi jaminan kualitas layanan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-amber-100'} rounded-full flex items-center justify-center mb-6`}>
                <Shield className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ahli Berpengalaman</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Kami memiliki pengalaman puluhan tahun dalam restorasi sepeda klasik
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-amber-100'} rounded-full flex items-center justify-center mb-6`}>
                <Star className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Kualitas Terjamin</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Menggunakan spare part original dan teknik restorasi yang tepat
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-600' : 'bg-amber-100'} rounded-full flex items-center justify-center mb-6`}>
                <Clock className={darkMode ? 'text-amber-400' : 'text-amber-800'} size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Harga yang terjangkau</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Harga yang ergonomis untuk semua case
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="ulasan" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-amber-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Ulasan Pelanggan</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Apa kata mereka tentang layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-400"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className={`absolute ${darkMode ? 'text-gray-600' : 'text-amber-200'} h-8 w-8 -top-4 -left-4 -z-10`} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Lokasi Bengkel</h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className={`${darkMode ? 'text-amber-400' : 'text-amber-800'} w-6 h-6 flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Bengkel Sepeda Onthel</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Jl. Pahlawan No. 123<br />
                    Kota Lama, Semarang<br />
                    Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={24} />
                Hubungi Kami
              </button>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2988959681855!2d110.42744631477426!3d-6.968426694962668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec52229d7%3A0xc791d6abc9236c7!2sKota%20Lama%20Semarang!5e0!3m2!1sen!2sid!4v1635825谷歌地图"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}


      {/* Location & Contact */}
<section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">Lokasi Bengkel</h2>
        <div className="flex items-start gap-4 mb-6">
          <MapPin className={`${darkMode ? 'text-amber-400' : 'text-amber-800'} w-6 h-6 flex-shrink-0 mt-1`} />
          <div>
            <h3 className="font-semibold text-xl mb-2">Bengkel Sepeda Onthel</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Jl. Kalianyar Selatan, <br />
            Kalianyar, Sidodadi, Kec. Lawang, Kabupaten Malang, <br />
            Jawa Timur, kode pos : 65216
            </p>
          </div>
        </div>
        <button
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
        >
          <Phone size={24} />
          Hubungi Kami
        </button>
      </div>
      <div className="aspect-video rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
        {/* Embed Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7904.719798759417!2d112.7024372!3d-7.8573513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62b9e29a9716d%3A0x4549560d24aab64c!2sBengkel%20Sepeda%20Onthel%20AKSI%20LAMA!5e0!3m2!1sid!2sid!4v1742612299338!5m2!1sid!2sid"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-amber-900'} text-amber-50 py-12 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <PenTool className="h-8 w-8 animate-float" /> */}
                <span className="font-bold text-xl">Bengkel Sepeda Onthel "AKSI LAMA"</span>
              </div>
              <p className="text-amber-200">
                Spesialis restorasi dan servis sepeda onthel klasik sejak 2018
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Jam Operasional</h3>
              <ul className="space-y-2 text-amber-200">
                <li>Senin - Jumat: 06:30 - 17:00</li>
                <li>Sabtu -  Minggu : 07:00 - 15:00</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Hubungi Kami</h3>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
              >
                <MessageSquare size={20} />
                Chat WhatsApp
              </button>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>© Bengkel Sepeda Onthel "AKSI LAMA". Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;