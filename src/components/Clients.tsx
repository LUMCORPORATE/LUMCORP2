import { useEffect, useRef, useState } from "react";
import logoMobilite360 from "@/assets/logo_mobilite_360.png";
import logoKurkuma from "@/assets/logo-kurkuma.png";
import logoNvadt from "@/assets/logo-nvadt.png";
import logoMugler from "@/assets/logo-mugler.png";
import logoKingKong from "@/assets/logo-king-kong.jpg";
import logoMielAmbre from "@/assets/logo-miel-ambre.png";
import logoAtman from "@/assets/logo-atman-therapie.jpg";
import logoTremplin from "@/assets/logo-tremplin-job.jpg";
import logoGeneve from "@/assets/logo-ville-geneve.png";

const logos = [
              { src: logoMobilite360, alt: "Logo client Mobilité 360 - Agence communication LUM" },
  { src: logoKurkuma, alt: "Logo client Kurkuma - Agence communication LUM" },
  { src: logoNvadt, alt: "Logo client NVADT - Agence communication LUM" },
  { src: logoMugler, alt: "Logo client Mugler - Agence communication LUM" },
  { src: logoKingKong, alt: "Logo client King Kong Squad - Agence communication LUM" },
  { src: logoMielAmbre, alt: "Logo client Miel et Ambre - Agence communication LUM" },
  { src: logoAtman, alt: "Logo client Atman Thérapie - Agence communication LUM" },
  { src: logoTremplin, alt: "Logo client Tremplin Job - Agence communication LUM" },
  { src: logoGeneve, alt: "Logo client Ville de Genève - Agence communication LUM" },
];

const logosFirstRow = logos.slice(0, 5);
const logosSecondRow = logos.slice(5);

function LogosGroup({ ariaHidden = false, logos }: { ariaHidden?: boolean; logos: typeof logosFirstRow }) {
  return (
    <ul
      className="marquee__group flex items-center flex-shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo, i) => {
        const shouldEnlarge = [].includes(logo.alt);
        
        const isGeneve = logo.alt === "Ville de Genève";
        const isTremplin = logo.alt === "Tremplin Job";
        const isAtman = logo.alt === "Atman Thérapie";
        const isNvadt = logo.alt === "NVADT";
        const isKingKong = logo.alt === "King Kong Squad";
        const isMobilite = logo.alt === "Mobilité 360";
        const isKurkuma = logo.alt === "Kurkuma";
        
        return (
          <li
            key={logo.alt}
            className="mr-[var(--gap)]"
          >
            <img
              src={logo.src}
              alt={ariaHidden ? "" : logo.alt}
              className={isGeneve ? "h-[450px] w-auto object-contain" : isTremplin ? "h-[280px] w-auto object-contain" : isNvadt ? "h-[260px] w-auto object-contain" : isKingKong ? "h-[260px] w-auto object-contain" : isMobilite ? "h-[200px] w-auto object-contain" : isKurkuma ? "h-[120px] w-auto object-contain" : isAtman ? "h-[260px] w-auto object-contain" : shouldEnlarge ? "h-20 w-auto object-contain" : "h-[var(--marquee-h)] w-auto object-contain"}
              loading="lazy"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function Clients() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wrapRefMobile1 = useRef<HTMLDivElement>(null);
  const wrapRefMobile2 = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [readyMobile1, setReadyMobile1] = useState(false);
  const [readyMobile2, setReadyMobile2] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const firstGroup = wrap.querySelector(".marquee__group") as HTMLUListElement;
    if (!firstGroup) return;

    const setVars = () => {
      const distance = firstGroup.scrollWidth;
      const pxPerSec = 60;
      const duration = distance / pxPerSec;

      wrap.style.setProperty("--marquee-distance", `${distance}px`);
      wrap.style.setProperty("--marquee-duration", `${duration}s`);
      setReady(true);
    };

    setVars();

    const ro = new ResizeObserver(setVars);
    ro.observe(firstGroup);
    window.addEventListener("load", setVars);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", setVars);
    };
  }, []);

  useEffect(() => {
    const wrap1 = wrapRefMobile1.current;
    if (!wrap1) return;

    const firstGroup1 = wrap1.querySelector(".marquee__group") as HTMLUListElement;
    if (!firstGroup1) return;

    const setVars = () => {
      const distance1 = firstGroup1.scrollWidth;
      const pxPerSec = 60;
      const duration1 = distance1 / pxPerSec;

      wrap1.style.setProperty("--marquee-distance", `${distance1}px`);
      wrap1.style.setProperty("--marquee-duration", `${duration1}s`);
      setReadyMobile1(true);
    };

    setTimeout(setVars, 100);

    const ro1 = new ResizeObserver(setVars);
    ro1.observe(firstGroup1);

    return () => {
      ro1.disconnect();
    };
  }, []);

  useEffect(() => {
    const wrap2 = wrapRefMobile2.current;
    if (!wrap2) return;

    const firstGroup2 = wrap2.querySelector(".marquee__group") as HTMLUListElement;
    if (!firstGroup2) return;

    const setVars = () => {
      const distance2 = firstGroup2.scrollWidth;
      const pxPerSec = 60;
      const duration2 = distance2 / pxPerSec;

      wrap2.style.setProperty("--marquee-distance", `${distance2}px`);
      wrap2.style.setProperty("--marquee-duration", `${duration2}s`);
      setReadyMobile2(true);
    };

    setTimeout(setVars, 100);

    const ro2 = new ResizeObserver(setVars);
    ro2.observe(firstGroup2);

    return () => {
      ro2.disconnect();
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-white overflow-hidden" aria-label="Ils nous font confiance">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          <span className="font-medium text-black">Nos</span>{" "}
          <span className="font-display text-gradient-blue">collaborations</span>
        </h2>

        {/* Desktop - Single row */}
        <div className="hidden md:block">
          <div
            ref={wrapRef}
            className="logo-marquee relative w-full h-[120px] flex items-center overflow-visible"
            style={
              {
                "--gap": "4rem",
                "--marquee-h": "64px",
              } as React.CSSProperties
            }
          >
            <div className="marquee flex">
              <div className={`min-w-full ${ready ? "animate-marquee" : ""}`}>
                <LogosGroup logos={logos} />
              </div>
              <div className={`min-w-full ${ready ? "animate-marquee" : ""}`} aria-hidden="true">
                <LogosGroup logos={logos} ariaHidden />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile - Two rows */}
        <div className="md:hidden space-y-8">
          <div
            ref={wrapRefMobile1}
            className="logo-marquee relative w-full h-[120px] flex items-center overflow-visible"
            style={
              {
                "--gap": "4rem",
                "--marquee-h": "64px",
              } as React.CSSProperties
            }
          >
            <div className="marquee flex">
              <div className={`min-w-full ${readyMobile1 ? "animate-marquee" : ""}`}>
                <LogosGroup logos={logosFirstRow} />
              </div>
              <div className={`min-w-full ${readyMobile1 ? "animate-marquee" : ""}`} aria-hidden="true">
                <LogosGroup logos={logosFirstRow} ariaHidden />
              </div>
            </div>
          </div>

          <div
            ref={wrapRefMobile2}
            className="logo-marquee relative w-full h-[120px] flex items-center overflow-visible"
            style={
              {
                "--gap": "4rem",
                "--marquee-h": "64px",
              } as React.CSSProperties
            }
          >
            <div className="marquee flex">
              <div className={`min-w-full ${readyMobile2 ? "animate-marquee" : ""}`}>
                <LogosGroup logos={logosSecondRow} />
              </div>
              <div className={`min-w-full ${readyMobile2 ? "animate-marquee" : ""}`} aria-hidden="true">
                <LogosGroup logos={logosSecondRow} ariaHidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
