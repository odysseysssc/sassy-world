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
    { label: "TOKEN", href: "#shaka" },
    { label: "PRODUCTS", href: "#products" },
    { label: "THE MODEL", href: "#the-model" },
    { label: "ATHLETES", href: "#athletes" },
    { label: "COMMUNITY", href: "#community" },
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

        {/* CTA Button */}
        <a
          href="https://opensea.io/collection/shredding-sassy-base/tokens"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-gold text-purple-dark font-bold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition-all text-sm"
        >
          BUY $SHAKA
        </a>
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
            <a
              href="https://opensea.io/collection/shredding-sassy-base/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gold text-purple-dark font-bold px-4 py-3 rounded-full text-center text-sm mt-4"
            >
              BUY $SHAKA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
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
        className="absolute inset-x-0 bottom-0 h-[40%]"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(40,6,70,0.7))' }}
      />

      {/* Left Gradient Overlay */}
      <div
        className="absolute inset-y-0 left-0 w-[40%]"
        style={{ background: 'linear-gradient(to right, rgba(40,6,70,0.8), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start text-left px-6 md:pl-[80px] pb-24 md:pb-[180px]">
        <p className="text-white text-sm md:text-lg tracking-[0.3em] uppercase mb-2 drop-shadow-lg">
          The World of
        </p>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-gold tracking-tight mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
          SHREDDING SASSY
        </h1>
        <p className="text-white/80 text-base md:text-xl drop-shadow-lg max-w-md" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
          Real brand. Real products. When we win, you win.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Stats Headline
function StatsHeadline() {
  return (
    <div id="stats" className="pt-4 md:pt-8 pb-2 md:pb-8">
      <div className="text-center px-4 md:px-6">
        <h2 className="text-xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
          Crypto-native brand.
          <br />
          Real-world impact.
        </h2>
        <div className="w-12 md:w-24 h-0.5 md:h-1 bg-gold mx-auto rounded-full mt-2 md:mt-6" />
      </div>
    </div>
  );
}

// Proof Points - minimal horizontal legend bar
function ProofPoints() {
  const proofPoints = [
    {
      value: "PRO ATHLETES",
      label: "SPONSORED",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      value: "5 GLOBAL EVENTS",
      label: "WORLDWIDE",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      value: "REAL PRODUCTS",
      label: "SHIPPED GLOBAL",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    },
    {
      value: "10K+ COMMUNITY",
      label: "MEMBERS",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      value: "10K NFT",
      label: "COLLECTION",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <div className="pt-2 md:pt-6 pb-2 md:pb-8">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-5 gap-1 md:gap-6">
          {proofPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="text-gold/60 mb-1 md:mb-2 flex justify-center">
                {point.icon}
              </div>
              <div className="text-[10px] md:text-sm font-bold text-white mb-0.5 leading-tight">{point.value}</div>
              <div className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wider">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Proof Wall - two horizontal filmstrips scrolling opposite directions
function ProofWall() {
  // Width variations: wide (420-500px landscape), medium (280-350px), narrow (180-220px portrait)
  const row1Items = [
    { src: "/images/proof/_MG_0183 (2).jpg", type: "image", width: 420 },
    { src: "/images/proof/1611327537241636868-U6rnHdTGrJPXpe5shM2R6ojFcCufqxohEgzNRzkzGTw.mp4", type: "video", width: 200 },
    { src: "/images/proof/_MG_1018.jpg", type: "image", width: 480 },
    { src: "/images/proof/1641149414776373250-2ToS-meZg5rR9VdS.mp4", type: "video", width: 320 },
    { src: "/images/proof/_MG_1067.jpg", type: "image", width: 190 },
    { src: "/images/proof/1708240584148754589-BhvRdZC51Gxor6S9.mp4", type: "video", width: 450 },
    { src: "/images/proof/_MG_1265 (1).jpg", type: "image", width: 210 },
    { src: "/images/proof/1712463085934653463-VrG1X2pSxZ5slxd7GmHyworWlzhbANlxBCzw33fmz3w.mp4", type: "video", width: 280 },
    { src: "/images/proof/_MG_4306 (1).jpg", type: "image", width: 500 },
    { src: "/images/proof/1725276657982885949-gra06Vh0ysekI4Ah.mp4", type: "video", width: 180 },
    { src: "/images/proof/_MG_5004.jpg", type: "image", width: 380 },
    { src: "/images/proof/IMG_1623.jpg", type: "image", width: 220 },
  ];

  const row2Items = [
    { src: "/images/proof/_MG_5212.jpg", type: "image", width: 200 },
    { src: "/images/proof/1734709145104683200-cppDiErdSCPOfvo1.mp4", type: "video", width: 460 },
    { src: "/images/proof/_MG_9674.jpg", type: "image", width: 190 },
    { src: "/images/proof/1743413695005532444-QZnaZDb5Q0TH8yl8HnUTzdj8lg_Y-HjnSRvj4SjfMR4.mp4", type: "video", width: 350 },
    { src: "/images/proof/_MG_9724.jpg", type: "image", width: 480 },
    { src: "/images/proof/1744720327232589910-3FKepbeVRu9SSZsr.mp4", type: "video", width: 210 },
    { src: "/images/proof/_MG_9824.jpg", type: "image", width: 300 },
    { src: "/images/proof/1754601529829654610-AOQ26mDU6JvDEn63dlEmD3zHDSapn4ZQVhhgVWejQRk.mp4", type: "video", width: 440 },
    { src: "/images/proof/_MG_9847.jpg", type: "image", width: 180 },
    { src: "/images/proof/1761020231353262113-Tq7rUshMIXKBML_Z.mp4", type: "video", width: 380 },
    { src: "/images/proof/_MG_9862.jpg", type: "image", width: 220 },
    { src: "/images/proof/G9gBoeMWUAAXy51.jpeg", type: "image", width: 500 },
  ];

  return (
    <div className="overflow-hidden py-1 md:py-6">
      {/* Row 1 - scrolls left */}
      <div className="overflow-hidden">
        <div className="flex gap-2 md:gap-4 animate-scroll-left">
          {[...row1Items, ...row1Items].map((item, i) => {
            const mobileWidth = Math.round(item.width * 0.7);
            return (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 h-[32vh] md:h-[280px] rounded-lg md:rounded-xl overflow-hidden bg-purple-darker w-[var(--mobile-w)] md:w-[var(--desktop-w)]"
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
      <div className="h-3 md:h-4" />

      {/* Row 2 - scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-2 md:gap-4 animate-scroll-right">
          {[...row2Items, ...row2Items].map((item, i) => {
            const mobileWidth = Math.round(item.width * 0.7);
            return (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 h-[32vh] md:h-[280px] rounded-lg md:rounded-xl overflow-hidden bg-purple-darker w-[var(--mobile-w)] md:w-[var(--desktop-w)]"
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
      desc: "rare traits hit different",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
    },
    {
      title: "Collectible",
      desc: "trade, collect, complete sets",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
    },
    {
      title: "Utility",
      desc: "10% off products, token-gated access",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
    },
  ];

  return (
    <section id="meet-sassy" className="scroll-snap-section bg-purple-darker flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Two-column layout: 45% left, 55% right */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">

          {/* Mobile Sassy thumbnail - shows above content on mobile */}
          <div className="lg:hidden flex justify-center pt-20 pb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/15 rounded-2xl blur-[40px] scale-110" />
              <Image
                src="/images/sassy the sasquatch.png"
                alt="Sassy the Sasquatch"
                width={200}
                height={250}
                className="relative z-10 h-[25vh] w-auto object-contain"
              />
            </div>
          </div>

          {/* LEFT COLUMN - 45% width, content spread vertically */}
          <div className="lg:w-[45%] flex-shrink-0 flex flex-col justify-center lg:py-0">
            {/* Label */}
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 lg:mb-6">Meet Sassy</p>

            {/* Headline */}
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-8">
              The Wild Side of Humanity
            </h2>

            {/* Body paragraphs - condensed on mobile */}
            <div className="space-y-3 md:space-y-6 text-white/70 leading-relaxed text-sm md:text-lg mb-6 md:mb-12">
              <p>
                Sassy is a Sasquatch. The part of you that wants to tell your boss to fuck off
                and disappear into the mountains.
              </p>
              <p className="hidden md:block">
                Legend has it Sassy&apos;s been riding these mountains since before humans had a
                word for it. First tracks, every time.
              </p>
              <p>
                6,200 unique Sasquatches living onchain - each with their own traits, rarity, and personality. All of them shred.
              </p>
            </div>

            {/* 4 trait points - spread across full width */}
            <div className="grid grid-cols-2 md:flex md:justify-between gap-4 md:gap-4 mb-6 md:mb-12">
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
              className="inline-block bg-gold text-purple-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all text-sm self-start"
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
    { label: "BASEAPP", href: "https://www.base.org/name/shaka" },
  ];

  return (
    <section id="shaka" className="scroll-snap-section bg-purple-darker flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left side - Content (45%) */}
          <div className="lg:w-[45%] flex-shrink-0 text-center lg:text-left">
            {/* Label */}
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-6">$SHAKA</p>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              The brand coin.
            </h2>

            {/* Body - 3 paragraphs */}
            <div className="space-y-6 text-white/60 leading-relaxed text-lg mb-12">
              <p>
                The old model is broken. You buy the product, tell your friends, watch it blow up - and get nothing. The people who build the hype never share in the upside.
              </p>
              <p>
                SHAKA flips that. When the brand wins, holders win. No gatekeeping, no barriers - just pure alignment with where this is going.
              </p>
              <p>
                10% of all brand revenue flows into SHAKA buybacks. The more we grow, the more aligned we get.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex justify-between mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex-1">
                  <div className="text-2xl md:text-3xl font-black text-gold mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buy Links - 4 buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {buyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-gold/60 text-gold font-bold px-6 py-3 rounded-full hover:bg-gold hover:text-purple-dark transition-all text-sm"
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

          {/* Right side - Shaka Hand Visual (55%) */}
          <div className="lg:w-[55%] flex-shrink-0 flex items-center justify-center">
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
    <section id="products" ref={sectionRef} className="scroll-snap-section bg-purple-dark flex items-center">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-12 py-16">
        {/* Top section - Intro text */}
        <div className="text-center mb-16">
          {/* Label */}
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">Products</p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
            Real products. Real customers.
          </h2>

          {/* Body - 2 value props */}
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-16">
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
        <div className="text-center mt-8">
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
      subhead: "Identity and scarcity.",
      body: "NFTs are the cultural core - identity, status, and long-term belonging. Every secondary sale has a 4.2% royalty. Every royalty buys back and burns. 6,200 started. Burning to 4,200.",
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
      body: "SHAKA is how you back Shredding Sassy. When the brand grows, holders grow with it.",
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
      body: "Hats, pins, and gear worn by pro athletes and shipped worldwide. This is how Shredding Sassy reaches people who've never touched crypto - and 10% of every sale flows back into SHAKA.",
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
    <section id="the-model" className="scroll-snap-section bg-purple-dark flex items-start pt-32">
      <div className="max-w-5xl mx-auto px-8 text-center w-full">
        {/* Label - Fixed */}
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Alignment</p>

        {/* Headline - Fixed */}
        <h2 className="text-xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
          The people who help build a brand should share in its upside.
        </h2>

        {/* Toggle Pills */}
        <div className="flex justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all ${
                activeTab === tab.key
                  ? 'bg-gold text-purple-dark'
                  : 'border border-gold/60 text-gold hover:border-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content - fixed height to prevent layout shift */}
        <div className="min-h-[320px] flex flex-col justify-center">
          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/70 mb-6 transition-opacity duration-300">
            {current.subhead}
          </p>

          {/* Body */}
          <p className="text-white/60 text-lg leading-relaxed max-w-[840px] mx-auto mb-12 transition-opacity duration-300">
            {current.body}
          </p>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mb-12">
            {current.stats.map((stat) => (
              <div key={stat.label} className="text-center min-w-[140px]">
                <div className="text-3xl md:text-4xl font-black text-gold mb-2 transition-all duration-300">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.15em]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Flywheel Image */}
          <div className="mt-8">
            <Image
              src="/images/Gemini_Generated_Image_p1i8gyp1i8gyp1i8.png"
              alt="Alignment Flywheel"
              width={500}
              height={500}
              className="mx-auto max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// IP Gallery Section
function IPGallery() {
  // Images from /public/images/ip/ with varied sizes and rotations
  const row1Images = [
    { src: "/images/ip/Apollo(4).jpg", width: 320, height: 320, rotation: -2 },
    { src: "/images/ip/Back to the future  (1).jpg", width: 400, height: 280, rotation: 1 },
    { src: "/images/ip/Fly(2).jpg", width: 280, height: 350, rotation: -1 },
    { src: "/images/ip/Forest.jpg", width: 360, height: 300, rotation: 2 },
    { src: "/images/ip/G (4).jpg", width: 300, height: 300, rotation: -3 },
    { src: "/images/ip/Ghost (2).jpg", width: 350, height: 280, rotation: 1 },
    { src: "/images/ip/Gym (2).jpg", width: 280, height: 320, rotation: -2 },
    { src: "/images/ip/Hakashaka__ (4).jpg", width: 340, height: 300, rotation: 3 },
    { src: "/images/ip/Handeee (4).jpg", width: 300, height: 340, rotation: -1 },
    { src: "/images/ip/Hat_Beer_Can (1).png", width: 320, height: 320, rotation: 2 },
    { src: "/images/ip/Hhhhh (5).jpg", width: 380, height: 280, rotation: -2 },
    { src: "/images/ip/Hold_gun (3).jpg", width: 280, height: 350, rotation: 1 },
    { src: "/images/ip/IMG_20240828_203340 (5).jpg", width: 360, height: 300, rotation: -3 },
    { src: "/images/ip/Jump(5).jpg", width: 300, height: 380, rotation: 2 },
    { src: "/images/ip/Lionardo(4).png", width: 340, height: 340, rotation: -1 },
    { src: "/images/ip/Meme_04(2).jpg", width: 320, height: 280, rotation: 3 },
    { src: "/images/ip/Meme_6 (3).jpg", width: 280, height: 340, rotation: -2 },
    { src: "/images/ip/Meme_7(2).jpg", width: 380, height: 300, rotation: 1 },
    { src: "/images/ip/Meme_side_eye_ (3).jpg", width: 300, height: 300, rotation: -1 },
  ];

  const row2Images = [
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
    { src: "/images/ip/Under » (4).jpg", width: 320, height: 320, rotation: 1 },
    { src: "/images/ip/Uno(2).jpg", width: 280, height: 340, rotation: -3 },
    { src: "/images/ip/Up (4).jpg", width: 360, height: 280, rotation: 2 },
    { src: "/images/ip/Yyy.jpg", width: 300, height: 320, rotation: -1 },
  ];

  return (
    <section className="py-16 bg-purple-dark overflow-hidden w-full">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">The Art</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">From the vault.</h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
          Stickers, artwork, and IP from the Shredding Sassy universe.
        </p>
      </div>

      {/* Row 1 - scrolling left */}
      <div className="mb-5 overflow-hidden">
        <div className="flex gap-5 animate-scroll-left">
          {[...row1Images, ...row1Images].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-purple-darker"
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
              className="flex-shrink-0 rounded-2xl overflow-hidden bg-purple-darker"
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
    <section className="py-16 bg-purple-dark w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
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
        <div className="flex justify-center gap-2 md:gap-6 mb-12 md:mb-16">
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
        <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto mb-12">
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
    { platform: "X (Twitter)", handle: "@ShreddingSassy", stat: "13K", link: "https://x.com/ShreddingSassy" },
    { platform: "Instagram", handle: "@shreddingsassy", stat: "10K", link: "https://instagram.com/shreddingsassy" },
    { platform: "Discord", handle: "Sassy HQ", stat: "2K", link: "https://discord.gg/sassy" },
    { platform: "NFTs / SHAKA", handle: "Buy on OpenSea", stat: "BUY", link: "https://opensea.io/collection/shredding-sassy-base" },
  ];

  return (
    <section id="community" className="py-16 bg-purple-darker w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">The Community</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Join the Mob</h2>
          <p className="text-white/60 text-lg md:text-xl">Be a part of something truly special, born from web3, set to take over the world.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-dark border border-gold/20 rounded-2xl p-6 md:p-8 text-center hover:border-gold/40 hover:bg-purple-dark/80 transition-all group"
            >
              <div className="text-3xl md:text-4xl font-black text-gold mb-2">{social.stat}</div>
              <div className="text-white font-bold mb-1 text-sm md:text-base">{social.platform}</div>
              <div className="text-white/50 text-xs md:text-sm">{social.handle}</div>
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
    <footer className="bg-purple-darker border-t border-gold/20 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
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

        {/* 2. Proof */}
        <section className="scroll-snap-section bg-purple-dark flex flex-col justify-center">
          <div>
            <StatsHeadline />
            <ProofWall />
            <ProofPoints />
          </div>
        </section>

        {/* 3. Meet Sassy */}
        <MeetSassy />

        {/* 4. SHAKA */}
        <ShakaSection />

        {/* 5. Products */}
        <ProductsShowcase />

        {/* 6. The Model */}
        <TheModel />

        {/* 7. Winter Games 2026 (Paralympics countdown) */}
        <section id="athletes" className="scroll-snap-section bg-purple-dark flex items-center">
          <AthletesSection />
        </section>

        {/* 9. IP Gallery */}
        <section className="scroll-snap-section bg-purple-dark flex items-center">
          <IPGallery />
        </section>

        {/* 10. Join the Mob / Social CTA */}
        <section className="scroll-snap-section bg-purple-darker flex flex-col justify-center">
          <CommunitySection />
          <Footer />
        </section>
      </div>
    </>
  );
}
