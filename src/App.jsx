import React, { useState } from 'react';

export default function WindowsInstallWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // --- KONFIGURASI KONTAK ---
  const whatsappNumber = "62895621365826"; // Ganti dengan nomor WA asli
  const instagramUsername = "adilridayu"; // Ganti username IG asli
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi loading
    setTimeout(() => {
      const message = `Halo Admin, perkenalkan saya *${formData.name}*.\n\nEmail: ${formData.email}\nNo HP: ${formData.phone}\n\nPesan/Keluhan:\n${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', message: '' }); 
    }, 1000);
  };
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Halo, saya mau konsultasi jasa konsultasi komputer`, '_blank');
  };

  const services = [
    {
      title: "Install Windows 10/11",
      description: "Instalasi fresh Windows dengan driver lengkap, aktivasi, dan update software terbaru.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Backup & Recovery",
      description: "Amankan data penting sebelum instalasi. Kami juga membantu recovery data yang terhapus.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      title: "Optimasi Performa",
      description: "Debloat Windows, setting registry, dan optimasi startup agar PC/Laptop Anda ngebut.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-heading { font-family: 'Space Grotesk', sans-serif; }
        
        .custom-shadow { box-shadow: 12px 12px 0px rgba(37, 99, 235, 0.4); }
        
        /* Efek Peta: Grayscale -> Warna saat Hover */
        .map-container iframe { filter: grayscale(100%) invert(92%) contrast(83%); transition: all 0.5s ease; }
        .map-container:hover iframe { filter: none; }

        .glitch { position: relative; }
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -2px 0 #2563eb;
          top: 0;
          color: white;
          background: black;
          overflow: hidden;
          animation: glitch-1 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(40% 0 50% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(10% 0 70% 0); }
          100% { clip-path: inset(30% 0 20% 0); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href='#home'}>
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-xl font-bold font-heading">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-heading">
                DELRYU<span className="text-blue-500">INUL</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Beranda', 'Layanan', 'Tentang', 'Kontak'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('beranda', 'home')}`} 
                  className="relative group text-sm font-medium uppercase tracking-wider hover:text-blue-400 transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <button onClick={handleWhatsAppClick} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1">
                Chat WA
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute w-full bg-gray-900 border-b-2 border-blue-600 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 space-y-4 flex flex-col">
            {['Beranda', 'Layanan', 'Tentang', 'Kontak'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('beranda', 'home')}`}
                className="text-lg font-medium hover:text-blue-500 transition uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/20 rounded-full filter blur-[80px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 border border-blue-500 bg-blue-500/10 rounded-full">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Solusi PC Terbaik</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-heading">
                JASA INSTALL ULANG
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 glitch" data-text="WINDOWS">WINDOWS</span>
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl border-l-4 border-blue-600 pl-6">
                Laptop lemot? Kena virus? Atau ingin upgrade ke Windows terbaru? Kami siap membantu instalasi Windows, Office, dan Software pendukung lainnya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Konsultasi Gratis</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <a 
                  href="#services"
                  className="px-8 py-4 border border-gray-600 hover:border-white hover:bg-white hover:text-black font-bold uppercase tracking-wider transition-all text-center"
                >
                  Lihat Paket
                </a>
              </div>
            </div>
            
            <div className="relative mt-10 lg:mt-0 group">
              <div className="absolute inset-0 border-2 border-blue-600 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800&q=80"
                alt="Windows Installation Setup"
                className="relative w-full grayscale hover:grayscale-0 transition-all duration-500 custom-shadow object-cover h-[400px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-gray-900 border-y border-gray-800 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">LAYANAN <span className="text-blue-500">KAMI</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-black border border-gray-800 hover:border-blue-600 transition-colors duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors font-heading">{service.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1 leading-relaxed">{service.description}</p>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-bold uppercase text-sm tracking-wider transition-all"
                  >
                    Pilih Paket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">MENGAPA MEMILIH <span className="text-blue-500">KAMI?</span></h2>
              <p className="text-gray-400 text-lg">Kami tidak hanya menginstall ulang, tapi memastikan laptop Anda berjalan pada performa maksimalnya.</p>
            </div>

            <div className="space-y-8">
              {[
                { num: "01", title: "Teknisi Berpengalaman", desc: "Sudah menangani ratusan laptop dengan berbagai masalah software." },
                { num: "02", title: "Software Terupdate", desc: "Selalu menggunakan installer Windows dan Driver versi terbaru." },
                { num: "03", title: "Garansi 7 Hari", desc: "Ada masalah setelah install ulang? Kami perbaiki GRATIS." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-4xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors font-heading">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-gray-700 z-0"></div>
            <div className="relative z-10 bg-gray-900 p-8 border border-gray-800">
               <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-blue-600/10 border border-blue-600/30">
                    <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Device Fixed</div>
                  </div>
                  <div className="text-center p-6 bg-blue-600/10 border border-blue-600/30">
                    <div className="text-4xl font-bold text-blue-500 mb-2">5.0</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Rating</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Form */}
            <div>
              <div className="mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">HUBUNGI <span className="text-blue-500">KAMI</span></h2>
                <p className="text-gray-400">Punya pertanyaan atau ingin booking jadwal install? Isi form di bawah ini.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nama</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-black border border-gray-700 focus:border-blue-500 p-4 outline-none transition-colors text-white" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">No. WhatsApp</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-black border border-gray-700 focus:border-blue-500 p-4 outline-none transition-colors text-white" placeholder="0812xxxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-black border border-gray-700 focus:border-blue-500 p-4 outline-none transition-colors text-white" placeholder="email@anda.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Pesan</label>
                  <textarea name="message" required rows="4" value={formData.message} onChange={handleInputChange} className="w-full bg-black border border-gray-700 focus:border-blue-500 p-4 outline-none transition-colors text-white resize-none" placeholder="Ceritakan kebutuhan Anda..."></textarea>
                </div>
                <button type="submit" disabled={isLoading} className="w-full py-4 bg-blue-600 font-bold uppercase tracking-widest hover:bg-blue-700 transition-all text-white flex justify-center items-center gap-2">
                  {isLoading ? 'MENGIRIM...' : 'KIRIM PESAN'}
                </button>
              </form>
            </div>

            {/* --- BAGIAN MAPS --- */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-heading uppercase flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Lokasi Workshop
                </h3>
                
                {/* CONTAINER MAP */}
                <div className="relative w-full h-80 bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden shadow-2xl map-container group">
                  {/* Peta yang Anda Berikan */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7965.402414009504!2d104.26928854334716!3d-3.4227690067893755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1767293766281!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Toko"
                  ></iframe>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <span className="bg-black/70 px-4 py-2 rounded text-sm font-bold text-white border border-white/20">
                      Hover untuk melihat Peta Warna
                    </span>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white block mb-1">Alamat Lengkap:</strong>
                    Jl. Bogenvile, Anak Petai, Kec. Prabumulih Utara, Kota Prabumulih, Sumatera Selatan 31121
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SOSMED & WA --- */}
      <footer className="bg-black pt-16 pb-8 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Kolom 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 flex items-center justify-center transform rotate-12">
                  <span className="text-xl font-bold font-heading">A</span>
                </div>
                <span className="text-2xl font-bold tracking-tight font-heading">
                  DELRYU<span className="text-blue-500">INUL</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Jasa instalasi ulang Windows profesional, terpercaya, dan bergaransi. Kembalikan performa laptop Anda seperti baru.
              </p>
            </div>

            {/* Kolom 2: Navigasi */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-blue-600 pl-4">Menu Cepat</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Beranda</a></li>
                <li><a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Layanan</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors flex items-center gap-2"><span className="text-blue-600">›</span> Kontak</a></li>
              </ul>
            </div>

            {/* Kolom 3: Sosmed & Kontak */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-blue-600 pl-4">Hubungi Kami</h3>
              <div className="space-y-4">
                
                {/* Tombol WhatsApp Premium */}
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-4 bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-green-500 hover:bg-green-900/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest group-hover:text-green-500">Chat WhatsApp</div>
                    <div className="font-bold text-white text-lg">0895-6213-65826</div>
                  </div>
                </a>

                {/* Tombol Instagram Premium */}
                <a 
                  href={`https://instagram.com/${instagramUsername}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-4 bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-pink-500 hover:bg-pink-900/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest group-hover:text-pink-500">Follow Instagram</div>
                    <div className="font-bold text-white text-lg">@{instagramUsername}</div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 InstallPro Services. Hak Cipta Dilindungi.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-white transition text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}

