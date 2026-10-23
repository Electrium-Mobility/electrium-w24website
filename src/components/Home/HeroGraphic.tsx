import React from "react";

const line = "stroke-[#14201a] dark:stroke-[#e5ece6]";
const accent = "stroke-green-600 dark:stroke-green-400";
const panel = "fill-white dark:fill-[#141d18]";

export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 130 480 290"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Line drawing of an electric cargo bike"
      className="w-full max-w-xl h-auto"
    >
      <rect x="4" y="140" width="472" height="270" rx="36" className="fill-[#e1eee4] dark:fill-[#1c2a22]" />

      <path d="M24 278 L46 278" strokeWidth="4" className={accent} />
      <path d="M14 302 L44 302" strokeWidth="4" className={accent} />
      <path d="M22 326 L40 326" strokeWidth="4" className={accent} />
      <line x1="20" y1="388" x2="460" y2="388" strokeWidth="3" className={line} />

      <rect x="170" y="222" width="46" height="34" rx="4" strokeWidth="4" className={`${panel} ${accent}`} />
      <circle cx="244" cy="238" r="17" strokeWidth="4" className={`${panel} ${accent}`} />
      <rect x="150" y="248" width="130" height="78" rx="6" strokeWidth="5" className={`${panel} ${line}`} />
      <line x1="152" y1="274" x2="278" y2="274" strokeWidth="2.5" className={line} />
      <line x1="152" y1="300" x2="278" y2="300" strokeWidth="2.5" className={line} />

      <circle cx="88" cy="340" r="48" strokeWidth="5" className={line} />
      <circle cx="392" cy="325" r="63" strokeWidth="5" className={line} />
      <circle cx="392" cy="325" r="16" className="fill-green-600 dark:fill-green-500" />

      <path d="M88 340 L118 236" strokeWidth="5" className={line} />
      <path d="M112 258 L150 330 L318 330" strokeWidth="5" className={line} />
      <path d="M318 330 L300 206" strokeWidth="5" className={line} />
      <path d="M282 200 L322 200" strokeWidth="7" className={line} />
      <path d="M318 330 L392 325" strokeWidth="5" className={line} />
      <path d="M304 232 L392 325" strokeWidth="5" className={line} />
      <path d="M306 252 L272 182" strokeWidth="5" className={line} />
      <path d="M256 180 L288 180" strokeWidth="6" className={line} />
      <circle cx="318" cy="330" r="10" strokeWidth="4" className={`fill-[#f3f6f1] dark:fill-[#141d18] ${line}`} />

      <rect x="320" y="258" width="22" height="50" rx="5" transform="rotate(-8 331 283)" className="fill-green-600 dark:fill-green-500" />
      <path d="M334 268 L326 284 L335 284 L328 300" strokeWidth="2.5" className="stroke-white dark:stroke-[#0f1512]" />
    </svg>
  );
}