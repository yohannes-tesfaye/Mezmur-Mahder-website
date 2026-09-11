import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0B132B] text-white font-sans p-4">
      <div className="flex flex-col items-center justify-center gap-6 px-4 max-w-4xl w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/mezmurapp-logo-bg.jpg"
            alt="Mezmur Mahder Logo"
            width={120}
            height={120}
            priority
            className="rounded-full"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Mezmur Mahder
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 text-center">
            መዝሙር ማህደር
          </p>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 text-center max-w-md">
            A simple, distraction-free reader for 1,000+ EOTC Mezmur lyrics.
          </p>
        </div>

        {/* Center Section - App Mockup & CTA */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src="/mezmurapp-home.jpg"
              alt="Mezmur Mahder App Preview"
              width={800}
              height={560}
              className="rounded-2xl shadow-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[400px] w-auto h-auto"
              priority
            />
          </div>

          <a
            href="https://drive.google.com/uc?export=download&id=1aLMQtSWM6RuujeQgQeC1KhDGmEcbZAJ2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#208AEF] hover:bg-[#1a7ad8] active:bg-[#166bc0] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Download Android APK
          </a>

          <p className="text-xs sm:text-sm text-zinc-400">
            v1.0.0 • Free & Offline • Direct APK Download
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-300">
            <span className="bg-zinc-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="text-[#208AEF] font-bold">1,000+</span> Lyrics
            </span>
            <span className="bg-zinc-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              100% Offline
            </span>
            <span className="bg-zinc-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Dark Mode
            </span>
          </div>
          <p className="text-xs text-zinc-500">2024 Mezmur Mahder</p>
        </div>
      </div>
    </div>
  );
}
