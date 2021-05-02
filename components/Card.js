import { useEffect } from "react";

export default function Card({
  type,
  icon,
  color,
  heading,
  children,
  extraclasses,
}) {
  const description = children;
  const idval =
    heading?.replace(/\s/g, "")?.replace(/'/g, "")?.toLowerCase() + icon ?? ``;
  useEffect(() => {
    const colors = {
      red: "#E94957",
      orange: "#FF7E47",
      yellow: "#FFFD85",
      green: "#10B981",
      blue: "#69709F",
      turquoise: "#2CDAC5",
    };
    const heading = document.querySelector(`#cardfour${idval ?? ``}`);
    if (heading != null) heading.style.color = colors[color];
    document
      .querySelectorAll(`.cardfour`)
      .forEach((card) => (card.style.paddingBottom = "0.5rem"));
  });
  switch (type) {
    case 2:
      return (
        <div className="font-ibm bg-black bg-opacity-5 p-8 rounded-xl">
          {renderIcon(icon, color, 4)}
          <h3 className="mt-2 font-bold text-2xl">{heading}</h3>
          <div className={`text-lg w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 3:
      return (
        <div className="mb-28 font-ibm">
          {renderIcon(icon, color, 6)}
          <h3 className="mt-2 mb-4 font-bold text-5xl">{heading}</h3>
          <div className={`text-2xl w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 4:
      return (
        <div className="bg-black bg-opacity-5 p-8 rounded-xl">
          {renderIcon(icon, color, 4)}
          <h3
            id={`cardfour${idval ?? ``}`}
            className={`cardfour m${
              icon ? `y` : `b`
            }-2 font-black text-3xl lg:text-5xl text-${color ?? "black"}`}
          >
            {heading}
          </h3>
          <div className={`text-xl w-11/12 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
    case 5:
      return (
        <div className="font-ibm bg-black bg-opacity-5 rounded-xl">
          {children}
        </div>
      );
      break;
    default:
      return (
        <div className="font-ibm">
          {renderIcon(icon, color)}
          <h3 className="mt-2 font-bold text-2xl">{heading}</h3>
          <div className={`text-lg w-11/12 opacity-70 ${extraclasses ?? ``}`}>
            {description}
          </div>
        </div>
      );
      break;
  }
}

const colors = {
  red: "E94957",
  orange: "FF7E47",
  yellow: "FFFD85",
  green: "10B981",
  blue: "69709F",
  turquoise: "2CDAC5",
  purple: "F1BEFE",
};

function renderIcon(icon, color, size) {
  color = `#${colors[color] ?? "000000"}`;
  switch (icon) {
    case "lightbulb":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
      break;
    case "sparkles":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      );
      break;
    case "fire":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      );
      break;
    case "home":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
      break;
    case "landscape":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
      break;
    case "sun":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
      break;
    case "trendingup":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
      break;
    case "trendingdown":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      );
      break;
    case "calendar":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
      break;
    case "pin":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
      break;
    case "star":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
      break;
    case "info":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
      break;
    case "moon":
      return (
        <svg
          width={`${size ?? "3"}rem`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
      break;
    default:
      break;
  }
}
