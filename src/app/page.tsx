"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Placeholder component for images
function ImagePlaceholder({
  label,
  className = ""
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`bg-purple-darker border-2 border-dashed border-gold/30 flex items-center justify-center text-gold/50 text-sm font-medium ${className}`}>
      {label}
    </div>
  );
}

// Navigation Component
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "NFTs", href: "#meet-sassy" },
    { label: "$SHAKA", href: "#shaka" },
    { label: "PRODUCTS", href: "#products" },
    { label: "ALIGNMENT", href: "#the-model" },
    { label: "AMBASSADORS", href: "#athletes" },
    { label: "THE MOB", href: "#community" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#280646] ${scrolled ? "py-3" : "py-4 md:py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Shredding Sassy"
            width={192}
            height={48}
            className="h-8 md:h-12 w-auto"
          />
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://opensea.io/collection/shredding-sassy-base"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold font-bold px-6 py-2.5 rounded-full hover:bg-gold hover:text-purple-dark transition-all text-sm"
          >
            BUY NFT
          </a>
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0x478e03D45716dDa94F6DbC15A633B0D90c237E2F&chain=base"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-purple-dark font-bold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition-all text-sm"
          >
            BUY $SHAKA
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-purple-darker/95 backdrop-blur-md border-t border-gold/20 mt-2">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-gold transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <a
                href="https://opensea.io/collection/shredding-sassy-base"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gold text-gold font-bold px-4 py-3 rounded-full text-center text-sm"
              >
                BUY NFT
              </a>
              <a
                href="https://app.uniswap.org/swap?outputCurrency=0x478e03D45716dDa94F6DbC15A633B0D90c237E2F&chain=base"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold text-purple-dark font-bold px-4 py-3 rounded-full text-center text-sm"
              >
                BUY $SHAKA
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  const proofPoints = [
    {
      value: "PRO SNOWBOARDER",
      label: "COFOUNDER",
      icon: <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      hideOnMobile: false
    },
    {
      value: "PRO ATHLETE AMBASSADORS",
      label: "WORLDWIDE",
      icon: <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
      hideOnMobile: false
    },
    {
      value: "5 GLOBAL EVENTS",
      label: "TAHOE · LISBON · LUGANO",
      icon: <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      hideOnMobile: false
    },
    {
      value: "HATS & COLLECTIBLE PINS",
      label: "SHIPPED WORLDWIDE",
      icon: <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      hideOnMobile: true
    },
    {
      value: "REAL BRAND COLLABS",
      label: "PIT VIPER · SHRED OPTICS",
      icon: <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      hideOnMobile: true
    },
  ];

  return (
    <section className="scroll-snap-section relative h-screen w-full overflow-hidden bg-purple-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero2.png"
          alt="Shredding Sassy Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bottom Gradient Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%]"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(40,6,70,0.9))' }}
      />

      {/* Left Gradient Overlay */}
      <div
        className="absolute inset-y-0 left-0 w-[60%] md:w-[40%]"
        style={{ background: 'linear-gradient(to right, rgba(40,6,70,0.8), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-8 md:pb-16">
        <p className="text-white text-sm md:text-lg tracking-[0.3em] uppercase mb-2 drop-shadow-lg">
          The World of
        </p>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-gold tracking-tight mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
          SHREDDING SASSY
        </h1>
        <p className="text-white/80 text-base md:text-xl drop-shadow-lg max-w-xl mb-8 md:mb-12" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
          Real brand. Real products. When we win, you win. Grab a Sassy. Align with $SHAKA. Join the mob. Rep the gear.
        </p>

        {/* Proof Points - moved into Hero */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-8 justify-items-center">
            {proofPoints.map((point) => (
              <div key={point.label} className={`text-center ${point.hideOnMobile ? 'hidden md:block' : ''}`}>
                <div className="text-gold/80 mb-1 md:mb-2 flex justify-center drop-shadow-lg">
                  {point.icon}
                </div>
                <div className="text-[9px] md:text-sm font-black text-white mb-0.5 leading-tight drop-shadow-lg">{point.value}</div>
                <div className="text-[7px] md:text-xs text-white/60 uppercase tracking-wider drop-shadow-lg">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Proof Wall - two horizontal filmstrips scrolling opposite directions
function ProofWall() {
  // Width variations: wide (420-500px landscape), medium (280-350px), narrow (180-220px portrait)
  // Videos and images alternated for visual variety
  const row1Items = [
    { src: "/images/proof/_MG_0183 (2).jpg", type: "image", width: 420 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254594/2009284392498221056-qduq4juFpPmAh9rA_uowb8g.mp4", type: "video", width: 320 },
    { src: "/images/proof/_MG_1018.jpg", type: "image", width: 480 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768255591/rz0vjumifggticog7tyy.mp4", type: "video", width: 280 },
    { src: "/images/proof/_MG_1067.jpg", type: "image", width: 190 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254626/1867188708497383424-eQspnZi7JZ1dCwQg_eio2tn.mp4", type: "video", width: 380 },
    { src: "/images/proof/_MG_1265 (1).jpg", type: "image", width: 210 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254598/1895799319342858501-YBZsnSjtsis6cFeb_igspfr.mp4", type: "video", width: 350 },
    { src: "/images/proof/_MG_4306 (1).jpg", type: "image", width: 500 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254577/1744720327232589910-3FKepbeVRu9SSZsr_wpxu6u.mp4", type: "video", width: 240 },
    { src: "/images/proof/_MG_5004.jpg", type: "image", width: 380 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254575/1936332427376333168-4N_IYM1puC4qi0nY_qnpnfy.mp4", type: "video", width: 300 },
    { src: "/images/proof/IMG_1623.jpg", type: "image", width: 220 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254571/1754601529829654610-AOQ26mDU6JvDEn63dlEmD3zHDSapn4ZQVhhgVWejQRk_dxajgw.mp4", type: "video", width: 420 },
  ];

  const row2Items = [
    { src: "/images/proof/_MG_5212.jpg", type: "image", width: 200 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254578/2005650169518583808-t2cavQ30LHsZAqG__wvq2wc.mp4", type: "video", width: 360 },
    { src: "/images/proof/_MG_9674.jpg", type: "image", width: 190 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254568/1936332427376333168-3uGlz3CcYExrFQ62_ssczus.mp4", type: "video", width: 320 },
    { src: "/images/proof/_MG_9724.jpg", type: "image", width: 480 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254555/1743413695005532444-QZnaZDb5Q0TH8yl8HnUTzdj8lg_Y-HjnSRvj4SjfMR4_spmokh.mp4", type: "video", width: 280 },
    { src: "/images/proof/_MG_9824.jpg", type: "image", width: 300 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254553/1708240584148754589-BhvRdZC51Gxor6S9_jnh9qy.mp4", type: "video", width: 380 },
    { src: "/images/proof/_MG_9847.jpg", type: "image", width: 180 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254549/1734709145104683200-cppDiErdSCPOfvo1_ki3mqu.mp4", type: "video", width: 340 },
    { src: "/images/proof/_MG_9862.jpg", type: "image", width: 220 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254549/1725276657982885949-gra06Vh0ysekI4Ah_mbceht.mp4", type: "video", width: 260 },
    { src: "/images/proof/G9gBoeMWUAAXy51.jpeg", type: "image", width: 500 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254548/1761020231353262113-Tq7rUshMIXKBML_Z_tve9zk.mp4", type: "video", width: 300 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254544/1712463085934653463-VrG1X2pSxZ5slxd7GmHyworWlzhbANlxBCzw33fmz3w_sys5qu.mp4", type: "video", width: 400 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254538/1786138641569378666-pTgPcCbH3gigJ4dV_ffrojj.mp4", type: "video", width: 350 },
    { src: "https://res.cloudinary.com/dwaidu6ko/video/upload/v1768254537/1641149414776373250-2ToS-meZg5rR9VdS_kxrku8.mp4", type: "video", width: 280 },
  ];

  return (
    <div className="overflow-hidden py-1 pb-4 md:py-6">
      {/* Row 1 - scrolls left */}
      <div className="overflow-hidden">
        <div className="flex gap-2 md:gap-3 animate-scroll-left">
          {[...row1Items, ...row1Items].map((item, i) => {
            const mobileWidth = Math.round(item.width * 0.7);
            return (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 h-[32vh] md:h-[320px] rounded-lg md:rounded-xl overflow-hidden bg-purple-darker w-[var(--mobile-w)] md:w-[var(--desktop-w)]"
                style={{ '--mobile-w': `${mobileWidth}px`, '--desktop-w': `${item.width}px` } as React.CSSProperties}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt=""
                    width={item.width}
                    height={280}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gap between rows */}
      <div className="h-3 md:h-3" />

      {/* Row 2 - scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-2 md:gap-3 animate-scroll-right">
          {[...row2Items, ...row2Items].map((item, i) => {
            const mobileWidth = Math.round(item.width * 0.7);
            return (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 h-[32vh] md:h-[320px] rounded-lg md:rounded-xl overflow-hidden bg-purple-darker w-[var(--mobile-w)] md:w-[var(--desktop-w)]"
                style={{ '--mobile-w': `${mobileWidth}px`, '--desktop-w': `${item.width}px` } as React.CSSProperties}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt=""
                    width={item.width}
                    height={280}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Value Props
function ValueProps() {
  const props = [
    {
      icon: "chart",
      title: "Alignment",
      description: "10% of all revenue flows back to $SHAKA holders. When we win, you win.",
    },
    {
      icon: "box",
      title: "Real Products",
      description: "1,000+ hats shipped worldwide. Physical goods, not just pixels.",
    },
    {
      icon: "medal",
      title: "Real Athletes",
      description: "3 Paralympic snowboarders sponsored. Real impact in action sports.",
    },
    {
      icon: "ticket",
      title: "NFT Utility",
      description: "10% off all products. Exclusive access. Real membership benefits.",
    },
  ];

  const icons: Record<string, React.ReactNode> = {
    chart: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    box: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    medal: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    ticket: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>,
  };

  return (
    <section className="py-20 bg-purple-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="bg-purple-darker border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all group"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                {icons[prop.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Meet Sassy Section
function MeetSassy() {
  const traits = [
    {
      title: "Identity",
      desc: "your online persona",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    },
    {
      title: "Status",
      desc: "Rare traits + flex value",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
    },
    {
      title: "Collectible",
      desc: "trade, collect, complete sets (IYKYK)",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
    },
    {
      title: "Access",
      desc: "10% off products + token-gated perks",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
    },
  ];

  return (
    <section id="meet-sassy" className="scroll-snap-section bg-purple-darker flex items-center justify-center overflow-y-auto relative">
      {/* Mobile background image - cropped to top portion only */}
      <div className="absolute inset-x-0 top-0 h-[70%] md:hidden">
        <Image
          src="/images/sassy the sasquatch.png"
          alt=""
          fill
          className="object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-darker/60 via-purple-darker/80 to-purple-darker" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 pt-28 pb-16 md:py-16">
        {/* Two-column layout: 45% left, 55% right */}
        <div className="flex flex-col lg:flex-row items-start md:items-center gap-4 lg:gap-12">

          {/* LEFT COLUMN - 45% width, content spread vertically */}
          <div className="lg:w-[45%] flex-shrink-0 flex flex-col justify-center lg:py-0">
            {/* Label */}
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-2 lg:mb-6">Meet Sassy</p>

            {/* Headline */}
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-8">
              The Primal Voice Inside
            </h2>

            {/* Body paragraphs - updated copy */}
            <div className="space-y-2 md:space-y-6 text-white/70 leading-relaxed text-sm md:text-lg mb-4 md:mb-12">
              <p>
                Sassy is a Sasquatch – the part of you that wants to tell your boss to fuck off, ghost your inbox, and disappear into the mountains.
              </p>
              <p className="hidden md:block">
                Legend has it when the first storm hit these peaks, Sassy was already there… Watching. Waiting. Leaving tracks where no one else dares.
              </p>
              <p className="hidden md:block">
                First tracks, every time.
              </p>
              <p>
                6,200 Sassy NFTs live onchain – each one unique, with its own traits, rarity, and personality.
              </p>
              <p>
                And yes… they all shred.
              </p>
            </div>

            {/* 4 trait points - spread across full width */}
            <div className="grid grid-cols-2 md:flex md:justify-between gap-3 md:gap-4 mb-4 md:mb-12">
              {traits.map((trait) => (
                <div key={trait.title} className="flex-1">
                  <div className="text-gold mb-2">{trait.icon}</div>
                  <div className="text-sm font-bold text-white mb-0.5">{trait.title}</div>
                  <div className="text-xs text-white/50">{trait.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://opensea.io/collection/shredding-sassy-base"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-purple-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all text-sm self-start mt-12 md:mt-0"
            >
              VIEW COLLECTION ON OPENSEA
            </a>
          </div>

          {/* RIGHT COLUMN - 55% width, giant Sassy image (desktop only) */}
          <div className="hidden lg:flex lg:w-[55%] flex-shrink-0 items-center justify-end">
            <div className="relative h-[85vh] flex items-center">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gold/15 rounded-3xl blur-[80px] scale-110" />
              <Image
                src="/images/sassy the sasquatch.png"
                alt="Sassy the Sasquatch"
                width={900}
                height={1125}
                className="relative z-10 h-[80vh] w-auto object-contain rounded-3xl drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SHAKA Section - The brand coin
function ShakaSection() {
  const contractAddress = "0x478e03D45716dDa94F6DbC15A633B0D90c237E2F";

  const stats = [
    { value: "166K+", label: "HOLDERS" },
    { value: "1M+", label: "HOLDERS MISSION" },
    { value: "10%", label: "REVENUE TO BUYBACKS" },
  ];

  const buyLinks = [
    { label: "UNISWAP", href: "https://app.uniswap.org/swap?outputCurrency=0x478e03D45716dDa94F6DbC15A633B0D90c237E2F&chain=base" },
    { label: "AERODROME", href: "https://aerodrome.finance/swap?to=0x478e03D45716dDa94F6DbC15A633B0D90c237E2F" },
    { label: "OPENSEA", href: "https://opensea.io/collection/shredding-sassy-base" },
  ];

  return (
    <section id="shaka" className="scroll-snap-section bg-purple-darker flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">

          {/* Left side - Content (45%) */}
          <div className="lg:w-[45%] flex-shrink-0 text-center lg:text-left">
            {/* Label */}
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3 md:mb-6">$SHAKA TOKEN</p>

            {/* Headline */}
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-8">
              The brand coin.
            </h2>

            {/* Body - 3 paragraphs */}
            <div className="space-y-3 md:space-y-6 text-white/60 leading-relaxed text-sm md:text-lg mb-6 md:mb-12">
              <p>
                The old model is broken. You buy the product, tell your friends, watch it blow up - and get nothing. The people who build the hype never share in the upside.
              </p>
              <p>
                $SHAKA flips that. When the brand wins, holders win. Period.
              </p>
              <p>
                10% of brand revenue flows into $SHAKA buybacks. The more we grow, the more the ecosystem gets fueled.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex justify-between mb-6 md:mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex-1">
                  <div className="text-xl md:text-3xl font-black text-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Shaka GIF - Mobile only */}
            <div className="flex md:hidden justify-center mb-6">
              <Image
                src="/images/Shaka Shaka Brah GIF by Shredding Sassy.gif"
                alt="Shaka Shaka Brah"
                width={200}
                height={200}
                className="w-40 h-auto object-contain rounded-2xl"
                unoptimized
              />
            </div>

            {/* Buy Links - 4 buttons (2x2 grid on mobile) */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-4 md:mb-8">
              {buyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-gold/60 text-gold font-bold px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-gold hover:text-purple-dark transition-all text-xs md:text-sm text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contract Address */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/40">
              <span className="text-xs font-mono">{contractAddress}</span>
              <button
                onClick={() => navigator.clipboard.writeText(contractAddress)}
                className="hover:text-white/60 transition-colors"
                title="Copy address"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Shaka Hand Visual (55%) - hidden on mobile */}
          <div className="hidden md:flex lg:w-[55%] flex-shrink-0 items-center justify-center">
            <div className="relative flex items-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/15 rounded-[2rem] blur-[60px] scale-110" />
              <Image
                src="/images/Shaka Shaka Brah GIF by Shredding Sassy.gif"
                alt="Shaka Shaka Brah"
                width={400}
                height={400}
                className="relative z-10 h-[39vh] w-auto object-contain rounded-[2rem] drop-shadow-2xl overflow-hidden"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Products Section - Physical goods with scattered stack layout
function ProductsShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Product images with positioning for scattered effect - randomized layout
  const products = [
    // Center/near-center images (foundation of the pile)
    { src: "/images/products/MG_0522_9c79192e-8f96-48c8-b361-18dfe2c609d0.jpg", rotation: -4, x: -6, y: 8, z: 1, size: "w-96 h-72" },
    { src: "/images/products/pinpack.webp", rotation: 3, x: 10, y: -5, z: 2, size: "w-72 h-72" },
    { src: "/images/products/MG_4594_1.webp", rotation: -2, x: -3, y: -10, z: 3, size: "w-96 h-80" },

    // Inner ring
    { src: "/images/products/MG_8672 (1).webp", rotation: 5, x: 38, y: 8, z: 4, size: "w-64 h-80" },
    { src: "/images/products/DSC00835 (1).jpg", rotation: -6, x: -42, y: -8, z: 5, size: "w-60 h-80" },
    { src: "/images/products/MG_1109.jpg", rotation: 4, x: 22, y: -32, z: 6, size: "w-80 h-60" },
    { src: "/images/products/MG_4416.jpg", rotation: -3, x: -32, y: 25, z: 7, size: "w-72 h-64" },

    // Outer ring
    { src: "/images/products/GlexIgEXEAAsfm8.webp", rotation: 6, x: -65, y: -25, z: 8, size: "w-64 h-56" },
    { src: "/images/products/MG_1018_1.jpg", rotation: -5, x: 58, y: -18, z: 9, size: "w-72 h-56" },
    { src: "/images/products/MG_0478_1.webp", rotation: 7, x: -55, y: 38, z: 10, size: "w-56 h-72" },
    { src: "/images/products/MG_4610_a7e18801-2961-4093-bffc-8e74709ea328.webp", rotation: -4, x: 65, y: 28, z: 11, size: "w-60 h-72" },
    { src: "/images/products/MG_4413_2.jpg", rotation: 3, x: -18, y: -45, z: 12, size: "w-64 h-52" },
  ];

  // Intersection Observer for scroll animation - triggers both directions
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="scroll-snap-section bg-purple-dark flex items-start pt-8 md:pt-24 overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-16">
        {/* Top section - Intro text */}
        <div className="text-center mb-8 md:mb-16">
          {/* Label */}
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">Products</p>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-8">
            Real products. Real customers.
          </h2>

          {/* Body - 2 value props */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center gap-6 md:gap-16">
            <div className="text-center">
              <h3 className="text-white font-bold text-base mb-1">Premium Headwear</h3>
              <p className="text-white/50 text-sm">When the helmet comes off, the hat goes on.</p>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-base mb-1">Collectible Enamel Pins</h3>
              <p className="text-white/50 text-sm">Blind rip mechanics. Trade them, collect them, flex them.</p>
            </div>
          </div>
        </div>

        {/* Scattered stack product showcase */}
        <div className="relative h-[350px] md:h-[600px] mb-12 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-5xl h-full">
            {products.map((product, index) => {
              const spreadX = isMobile ? product.x * 2.5 : product.x * 6;
              const spreadY = isMobile ? product.y * 2 : product.y * 5;

              return (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 ${product.size} rounded-xl overflow-hidden transition-all duration-700 ease-out cursor-pointer hover:scale-110 hover:!z-50 max-md:!w-32 max-md:!h-32`}
                  style={{
                    transform: isVisible
                      ? `translate(-50%, -50%) translate(${spreadX}px, ${spreadY}px) rotate(${product.rotation}deg)`
                      : `translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.8)`,
                    opacity: isVisible ? 1 : 0,
                    zIndex: product.z,
                    transitionDelay: `${index * 70}ms`,
                    boxShadow: '0 12px 50px rgba(0,0,0,0.5)',
                  }}
                >
                  <Image
                    src={product.src}
                    alt="Shredding Sassy Product"
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4 md:mt-8">
          <a
            href="https://www.shreddingsassy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-purple-dark transition-all text-sm"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
}

// The Model Section - Toggle between NFTs, TOKEN, and PRODUCTS
function TheModel() {
  const [activeTab, setActiveTab] = useState<'nfts' | 'token' | 'products'>('nfts');

  const tabs = [
    { key: 'nfts', label: 'NFTs' },
    { key: 'token', label: 'TOKEN' },
    { key: 'products', label: 'PRODUCTS' },
  ] as const;

  const content = {
    nfts: {
      subhead: "Identity. Scarcity. Utility.",
      body: "NFTs are the cultural core. This is where identity, status, and long-term belonging live. Every secondary sale carries a 4.2% royalty (enforced). Those royalties buy back NFTs for purgatory before being burnt — and the supply gets burned down over time. It started at 6,200. It burns to 4,200.",
      stats: [
        { value: "4.2%", label: "ENFORCED ROYALTIES" },
        { value: "6,200 → 4,200", label: "DEFLATIONARY SUPPLY" },
        { value: "100%", label: "ROYALTIES TO BUYBACK" },
      ],
      button: { text: "VIEW ON OPENSEA", href: "#" },
      showContract: false,
    },
    token: {
      subhead: "The brand coin.",
      body: "$SHAKA is how you back Shredding Sassy – and stay aligned as it grows. When the brand levels up, holders level up with it.",
      stats: [
        { value: "166K+", label: "HOLDERS" },
        { value: "10%", label: "REVENUE BUYBACKS" },
        { value: "0%", label: "VC MONEY" },
      ],
      button: { text: "BUY ON UNISWAP", href: "#" },
      showContract: true,
    },
    products: {
      subhead: "A real brand with real customers.",
      body: "Hats, pins, and gear worn by pro athlete ambassadors – shipped worldwide. This is how Shredding Sassy reaches people who've never touched Web3 and keeps the flywheel spinning: 10% of every sale flows into $SHAKA buybacks.",
      stats: [
        { value: "PRO ATHLETE", label: "BACKED" },
        { value: "SHIPPED", label: "WORLDWIDE" },
        { value: "10%", label: "TO SHAKA BUYBACKS" },
      ],
      button: { text: "SHOP NOW", href: "#" },
      showContract: false,
    },
  };

  const contractAddress = "0x478e03D45716dDa94F6DbC15A633B0D90c237E2F";
  const current = content[activeTab];

  return (
    <section id="the-model" className="scroll-snap-section bg-purple-dark flex items-center md:items-start overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center w-full pt-16 pb-8 md:pt-28 md:pb-12">
        {/* Label - Fixed */}
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3 md:mb-4">Alignment</p>

        {/* Headline - Fixed */}
        <h2 className="text-lg md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
          The people who help build a brand should share in its upside.
        </h2>

        {/* Toggle Pills */}
        <div className="flex justify-center gap-1.5 md:gap-3 mb-6 md:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 md:px-8 py-1.5 md:py-3 rounded-full text-xs md:text-base font-bold transition-all ${
                activeTab === tab.key
                  ? 'bg-gold text-purple-dark'
                  : 'border border-gold/60 text-gold hover:border-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="min-h-0 flex flex-col justify-center">
          {/* Subhead */}
          <p className="text-sm md:text-xl text-white/70 mb-3 md:mb-4 transition-opacity duration-300">
            {current.subhead}
          </p>

          {/* Body */}
          <p className="text-white/60 text-xs md:text-lg leading-relaxed max-w-[840px] mx-auto mb-6 md:mb-8 transition-opacity duration-300">
            {current.body}
          </p>

          {/* Stats Row */}
          <div className="flex flex-row justify-center gap-4 md:gap-16 mb-6 md:mb-8">
            {current.stats.map((stat) => (
              <div key={stat.label} className="text-center flex-1">
                <div className="text-lg md:text-3xl font-black text-gold mb-0.5 md:mb-2 transition-all duration-300">{stat.value}</div>
                <div className="text-[8px] md:text-sm text-white/50 uppercase tracking-wide md:tracking-[0.15em]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Flywheel Image */}
          <div className="mt-2 md:mt-6">
            <Image
              src="/images/Gemini_Generated_Image_p1i8gyp1i8gyp1i8.png"
              alt="Alignment Flywheel"
              width={500}
              height={500}
              className="mx-auto max-w-[200px] md:max-w-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// IP Gallery Section (From the Vault)
function IPGallery() {
  // Images from /public/images/ip/ with varied sizes and rotations
  const row1Images = [
    { src: "/images/ip/Apollo(4).jpg", width: 320, height: 320, rotation: -2 },
    { src: "/images/ip/01 -.png", width: 300, height: 300, rotation: 1 },
    { src: "/images/ip/Back to the future  (1).jpg", width: 400, height: 280, rotation: 1 },
    { src: "/images/ip/03 -.png", width: 280, height: 280, rotation: -1 },
    { src: "/images/ip/Fly(2).jpg", width: 280, height: 350, rotation: -1 },
    { src: "/images/ip/07.png", width: 340, height: 340, rotation: 2 },
    { src: "/images/ip/Forest.jpg", width: 360, height: 300, rotation: 2 },
    { src: "/images/ip/09.png", width: 360, height: 360, rotation: -2 },
    { src: "/images/ip/G (4).jpg", width: 300, height: 300, rotation: -3 },
    { src: "/images/ip/1000017552.png", width: 320, height: 320, rotation: 1 },
    { src: "/images/ip/Ghost (2).jpg", width: 350, height: 280, rotation: 1 },
    { src: "/images/ip/1000017554.png", width: 300, height: 300, rotation: -1 },
    { src: "/images/ip/Gym (2).jpg", width: 280, height: 320, rotation: -2 },
    { src: "/images/ip/11.png", width: 340, height: 340, rotation: 3 },
    { src: "/images/ip/Hakashaka__ (4).jpg", width: 340, height: 300, rotation: 3 },
    { src: "/images/ip/17 -.png", width: 280, height: 280, rotation: -2 },
    { src: "/images/ip/Handeee (4).jpg", width: 300, height: 340, rotation: -1 },
    { src: "/images/ip/Hat_Beer_Can (1).png", width: 320, height: 320, rotation: 2 },
    { src: "/images/ip/Hhhhh (5).jpg", width: 380, height: 280, rotation: -2 },
    { src: "/images/ip/Hold_gun (3).jpg", width: 280, height: 350, rotation: 1 },
    { src: "/images/ip/IMG_20240828_203340 (5).jpg", width: 360, height: 300, rotation: -3 },
    { src: "/images/ip/Jump(5).jpg", width: 300, height: 380, rotation: 2 },
    { src: "/images/ip/Lionardo(4).png", width: 340, height: 340, rotation: -1 },
    { src: "/images/ip/Meme_04(2).jpg", width: 320, height: 280, rotation: 3 },
  ];

  const row2Images = [
    { src: "/images/ip/Meme_6 (3).jpg", width: 280, height: 340, rotation: -2 },
    { src: "/images/ip/2_20250710_085904_0001.png", width: 320, height: 320, rotation: 1 },
    { src: "/images/ip/Meme_7(2).jpg", width: 380, height: 300, rotation: 1 },
    { src: "/images/ip/22.png", width: 340, height: 340, rotation: -1 },
    { src: "/images/ip/Meme_side_eye_ (3).jpg", width: 300, height: 300, rotation: -1 },
    { src: "/images/ip/25.png", width: 300, height: 300, rotation: 2 },
    { src: "/images/ip/Movie_ (6).jpg", width: 380, height: 320, rotation: 2 },
    { src: "/images/ip/PNG  (2).png", width: 280, height: 280, rotation: -1 },
    { src: "/images/ip/Polis2(2).jpg", width: 350, height: 300, rotation: 3 },
    { src: "/images/ip/Relaxing_ (4).jpg", width: 320, height: 350, rotation: -2 },
    { src: "/images/ip/Rubull_(2).jpg", width: 300, height: 300, rotation: 1 },
    { src: "/images/ip/Sassy (12).jpg", width: 280, height: 380, rotation: -3 },
    { src: "/images/ip/Sassy (13).jpg", width: 360, height: 300, rotation: 2 },
    { src: "/images/ip/sassy sighting.jpeg", width: 320, height: 320, rotation: -1 },
    { src: "/images/ip/Sassy_ (2).jpg", width: 340, height: 280, rotation: 1 },
    { src: "/images/ip/Setting_ (8).jpg", width: 300, height: 350, rotation: -2 },
    { src: "/images/ip/shakaaa.png", width: 280, height: 300, rotation: 3 },
    { src: "/images/ip/Ski (1).jpg", width: 400, height: 280, rotation: -1 },
    { src: "/images/ip/The (5).jpg", width: 300, height: 350, rotation: 2 },
    { src: "/images/ip/Three (2).jpg", width: 350, height: 300, rotation: -2 },
    { src: "/images/ip/Uno(2).jpg", width: 280, height: 340, rotation: -3 },
    { src: "/images/ip/Up (4).jpg", width: 360, height: 280, rotation: 2 },
    { src: "/images/ip/Yyy.jpg", width: 300, height: 320, rotation: -1 },
  ];

  const handleDownload = (src: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop() || 'sassy-artwork';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pb-16 bg-purple-dark overflow-hidden w-full">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-12 text-center pt-12 md:pt-0">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-2 md:mb-4">The Art</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4">From the vault.</h2>
        <p className="text-white/60 text-sm md:text-xl max-w-2xl mx-auto">
          Stickers, artwork, and IP from the Shredding Sassy universe.
        </p>
      </div>

      {/* Row 1 - scrolling left */}
      <div className="mb-5 overflow-hidden">
        <div className="flex gap-5 animate-scroll-left">
          {[...row1Images, ...row1Images].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-purple-darker relative group"
              style={{
                width: img.width,
                height: img.height,
                transform: `rotate(${img.rotation}deg)`,
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              }}
            >
              <Image
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                className="w-full h-full object-cover"
              />
              {/* Download overlay */}
              <button
                onClick={() => handleDownload(img.src)}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              >
                <div className="bg-gold text-purple-dark font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolling right */}
      <div className="overflow-hidden">
        <div className="flex gap-5 animate-scroll-right">
          {[...row2Images, ...row2Images].map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-purple-darker relative group"
              style={{
                width: img.width,
                height: img.height,
                transform: `rotate(${img.rotation}deg)`,
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              }}
            >
              <Image
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                className="w-full h-full object-cover"
              />
              {/* Download overlay */}
              <button
                onClick={() => handleDownload(img.src)}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              >
                <div className="bg-gold text-purple-dark font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Token Section
function TokenSection() {
  const tokenomics = [
    { percentage: "30%", label: "Community" },
    { percentage: "30%", label: "Treasury" },
    { percentage: "30%", label: "Liquidity" },
    { percentage: "10%", label: "Team" },
  ];

  const contractAddress = "0x478e03D45716dDa94F6DbC15A633B0D90c237E2F";

  return (
    <section id="token" className="py-24 bg-purple-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The Token</p>
          <h2 className="text-5xl md:text-7xl font-black text-gold mb-4">$SHAKA</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The native token of Shredding Sassy. Built on Base. Backed by real revenue.
          </p>
        </div>

        {/* Tokenomics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {tokenomics.map((item) => (
            <div key={item.label} className="bg-purple-dark border border-gold/20 rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-gold mb-2">{item.percentage}</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Alignment Callout */}
        <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-gold text-4xl">*</div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-2">True Alignment</h3>
              <p className="text-white/80 leading-relaxed">
                10% of ALL Shredding Sassy revenue flows directly back to $SHAKA. Hat sales,
                merch drops, sponsorship deals - when the brand wins, token holders win.
                This isn&apos;t a promise. It&apos;s code.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-purple-dark rounded-2xl p-6 mb-8">
          <p className="text-white/60 text-sm mb-2">Contract Address (Base)</p>
          <div className="flex items-center gap-4 flex-wrap">
            <code className="text-gold text-sm md:text-base font-mono break-all">{contractAddress}</code>
            <button
              onClick={() => navigator.clipboard.writeText(contractAddress)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Buy Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-gold text-purple-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
            Buy on Uniswap
          </a>
          <a href="#" className="border border-gold text-gold font-bold px-8 py-4 rounded-full hover:bg-gold/10 transition-all">
            View on Basescan
          </a>
        </div>
      </div>
    </section>
  );
}

// NFT Section
function NFTSection() {
  const benefits = [
    "10% off all Shredding Sassy products",
    "Exclusive Discord access & alpha",
    "Early access to drops & collabs",
    "Governance voting rights",
  ];

  return (
    <section id="nfts" className="py-24 bg-purple-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The NFTs</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              6,200 Unique Sassys
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Each Sassy is a one-of-one piece of art and your membership pass to the
              Shredding Sassy ecosystem. Real utility, real community, real value.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-gold text-purple-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
                View on OpenSea
              </a>
              <a href="#" className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                View on Blur
              </a>
            </div>
          </div>

          {/* Right - NFT Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <ImagePlaceholder
                key={i}
                label={`NFT EXAMPLE ${i}`}
                className="aspect-square rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  return (
    <section className="py-24 bg-purple-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The Merch</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Not Just JPEGs</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real products. Shipped worldwide. NFT holders get 10% off everything.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {["HAT - BLACK", "HAT - GOLD", "PIN SET", "STICKER PACK"].map((product) => (
            <div key={product} className="group">
              <ImagePlaceholder
                label={product}
                className="aspect-square rounded-2xl mb-4 group-hover:border-gold/60 transition-all"
              />
              <p className="text-white font-medium text-center">{product}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="bg-gold text-purple-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all inline-block">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

// Athletes Section
function AthletesSection() {
  const athletes = [
    { name: "Ollie Hill", team: "Snowboard Team GB", image: "/images/athletes/_methode_times_prod_web_bin_d355e166-a12c-11ec-a33b-e5ebed659a52 (1).jpeg", position: "center" },
    { name: "Keith Gabel", team: "Snowboard Team USA", image: "/images/athletes/WhatsApp_Image_2025-03-28_at_19.22.25.webp", position: "center" },
    { name: "James Barnes-Miller", team: "Snowboard Team GB", image: "/images/athletes/jbm pfp.png", position: "center" },
  ];

  // Countdown to March 6, 2026
  const targetDate = new Date("2026-03-06T00:00:00").getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="pb-4 md:pb-16 bg-purple-dark w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 pt-12 md:pt-0">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
            Three riders. One mission.
            <br />
            Milan-Cortina 2026.
          </h2>
          <p className="text-white/60 text-base md:text-2xl max-w-2xl mx-auto">
            The biggest stage in winter sports. We&apos;ll be there.
          </p>
        </div>

        {/* Countdown - Big and bold */}
        <div className="flex justify-center gap-2 md:gap-6 mb-6 md:mb-16">
          {[
            { value: countdown.days, label: "DAYS" },
            { value: countdown.hours, label: "HRS" },
            { value: countdown.mins, label: "MIN" },
            { value: countdown.secs, label: "SEC" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl md:text-7xl lg:text-8xl font-black text-gold tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-white/40 text-[10px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] mt-1 md:mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Athletes - 3 prominent cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto mb-4 md:mb-12">
          {athletes.map((athlete) => (
            <div key={athlete.name} className="group">
              <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden mb-2 md:mb-4 bg-purple-darker">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: athlete.position }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <h3 className="text-white font-black text-sm md:text-2xl mb-0.5 md:mb-1">{athlete.name}</h3>
                  <p className="text-gold text-[10px] md:text-sm font-medium">{athlete.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <a href="https://www.shreddingsassy.com/pages/the-mob" className="text-gold hover:text-yellow-300 transition-colors text-lg font-medium inline-flex items-center gap-2">
            View all athletes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Story Section
function StorySection() {
  return (
    <section className="py-24 bg-purple-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder
              label="FOUNDERS / ORIGIN IMAGE (600x500)"
              className="w-full aspect-[6/5] rounded-3xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The Origin</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Shredding Sassy started with a simple question: What if a crypto project
                actually did something? Not promises. Not roadmaps. Action.
              </p>
              <p>
                We&apos;re a team of snowboarders, surfers, and crypto natives who got tired
                of the same old playbook. So we wrote our own. We make real products. We
                sponsor real athletes. We share real revenue with our community.
              </p>
              <p>
                Sassy isn&apos;t just a character - he&apos;s a movement. A call to everyone
                who believes action sports and web3 can be more than hype. They can be a
                force for good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Community Section
function CommunitySection() {
  const socials = [
    {
      platform: "X (Twitter)",
      handle: "@ShreddingSassy",
      stat: "13K",
      link: "https://twitter.com/ShreddingSassy",
      icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      platform: "Instagram",
      handle: "@shreddingsassy",
      stat: "10K",
      link: "https://instagram.com/shreddingsassy",
      icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    {
      platform: "Discord",
      handle: "Sassy HQ",
      stat: "2K",
      link: "https://discord.gg/sassy",
      icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
    },
    {
      platform: "OpenSea",
      handle: "Buy NFTs",
      stat: "BUY",
      link: "https://opensea.io/collection/shredding-sassy-base",
      icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0zM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 01.187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 01-.117.199.106.106 0 01-.09.045H6.013a.106.106 0 01-.091-.163zm13.914 1.68a.109.109 0 01-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 01-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 01-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.858.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 00.065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 00-.048-.312 6.494 6.494 0 00-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 00-.328-.972 5.212 5.212 0 00-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 01-.094-.197 4.658 4.658 0 00-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 01.477.202.69.69 0 01.2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 01.574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 01.029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 01-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.823 3.823 0 01-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 01-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 01.05-.03l3.65-1.057a.108.108 0 01.138.103z"/></svg>
    },
  ];

  return (
    <section id="community" className="pt-6 md:pt-10 pb-6 md:pb-10 bg-purple-darker w-full h-full flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-4 md:mb-6">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-1 md:mb-2">The Mob</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2">Join the Mob</h2>
          <p className="text-white/60 text-sm md:text-lg">Be a part of something truly special, born from web3, set to take over the world.</p>
        </div>

        {/* Scrolling Carousels from Proof section */}
        <div className="mb-4 md:mb-6">
          <ProofWall />
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-dark border border-gold/20 rounded-lg md:rounded-xl p-2 md:p-4 text-center hover:border-gold/40 hover:bg-purple-dark/80 transition-all group"
            >
              <div className="text-gold mb-1 md:mb-2 flex justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6">{social.icon}</div>
              </div>
              <div className="text-lg md:text-2xl font-black text-gold mb-0.5 md:mb-1">{social.stat}</div>
              <div className="text-white font-bold text-[9px] md:text-xs">{social.platform}</div>
              <div className="text-white/50 text-[8px] md:text-xs hidden md:block">{social.handle}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const contractAddress = "0x478e03D45716dDa94F6DbC15A633B0D90c237E2F";

  const quickLinks = [
    { label: "OpenSea", href: "https://opensea.io/collection/shreddingsassy" },
    { label: "Uniswap", href: "https://app.uniswap.org/swap?outputCurrency=0x478e03D45716dDa94F6DbC15A633B0D90c237E2F&chain=base" },
    { label: "Basescan", href: "https://basescan.org/token/0x478e03D45716dDa94F6DbC15A633B0D90c237E2F" },
    { label: "Shop", href: "https://www.shreddingsassy.com" },
  ];

  const socialLinks = [
    { label: "Twitter/X", href: "https://x.com/ShreddingSassy" },
    { label: "Instagram", href: "https://instagram.com/shreddingsassy" },
    { label: "Discord", href: "https://discord.gg/sassy" },
    { label: "YouTube", href: "https://youtube.com/@shreddingsassy" },
  ];

  return (
    <footer className="bg-purple-darker border-t border-gold/20 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Shredding Sassy"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md">
              A place for shredders 🤙<br />
              Hats & chaos since 2023<br />
              Home of Sassy the Sasquatch™
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="border-t border-gold/10 pt-8 mb-8">
          <p className="text-white/40 text-xs mb-2">$SHAKA Contract (Base)</p>
          <div className="flex items-center gap-3">
            <code className="text-gold/60 text-xs font-mono">{contractAddress}</code>
            <button
              onClick={() => navigator.clipboard.writeText(contractAddress)}
              className="text-white/40 hover:text-white/60 transition-colors"
              title="Copy address"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gold/10 pt-8">
          <p className="text-white/40 text-xs leading-relaxed">
            Disclaimer: $SHAKA is a community token with no expectation of profit. NFTs are collectible
            digital art. Nothing on this site constitutes financial advice. Crypto assets are volatile
            and risky. Do your own research. Sassy Labs LLC.
          </p>
          <p className="text-white/40 text-xs mt-4">
            &copy; {new Date().getFullYear()} Shredding Sassy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Nav />
      <div className="scroll-snap-container bg-purple-dark">
        {/* Hero */}
        <Hero />

        {/* 2. Meet Sassy (directly after Hero) */}
        <MeetSassy />

        {/* 4. SHAKA */}
        <ShakaSection />

        {/* 5. Products */}
        <ProductsShowcase />

        {/* 6. The Model */}
        <TheModel />

        {/* 7. Ambassadors (Athletes) */}
        <section id="athletes" className="scroll-snap-section bg-purple-dark flex items-start pt-4 md:pt-24 overflow-y-auto">
          <AthletesSection />
        </section>

        {/* 8. The Mob (Community with carousels) */}
        <section className="scroll-snap-section bg-purple-darker flex flex-col pt-4 md:pt-16 overflow-y-auto">
          <CommunitySection />
        </section>

        {/* 9. From the Vault (IP Gallery - above footer) */}
        <section className="scroll-snap-section bg-purple-dark flex items-start pt-4 md:pt-24 overflow-y-auto">
          <IPGallery />
        </section>

        {/* Footer */}
        <section className="scroll-snap-section bg-purple-darker flex flex-col overflow-y-auto">
          <Footer />
        </section>
      </div>
    </>
  );
}
