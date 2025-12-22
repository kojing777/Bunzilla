import React from "react";
import bunzillaImg from '../assets/bunzilla.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bunzillaImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <span className="inline-block mb-4 rounded-full bg-yellow-400/90 px-5 py-1 text-sm font-semibold text-black">
          🔥 Fresh • Juicy • Loaded
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Bite Into the <span className="text-yellow-400">Bold</span>
          <br />
          Taste of <span className="text-red-500">Bunzilla</span>
        </h1>

        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-white/90">
          Handcrafted burgers made with premium ingredients, melted cheese, and
          monster flavors. One bite and you’re hooked.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 transition px-8 h-12 rounded-lg font-semibold active:scale-95">
            Order Now 🍔
          </button>

          <button className="border border-white/70 hover:bg-white/10 transition px-8 h-12 rounded-lg font-medium">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
