import { useEffect } from "react";
import { brand } from "../data/content";
import defaultOgImage from "../assets/kapilesh-brand-card.jpg";

/**
 * Lightweight per-page SEO manager for an SPA:
 * sets title, meta description, canonical, Open Graph tags and JSON-LD.
 */
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  jsonLd,
  image = defaultOgImage,
  noindex = false,
}) {
  useEffect(() => {
    const fullTitle = `${title} | ${brand.name}`;
    const url = `${brand.siteUrl}${path === "/" ? "/" : path}`;
    const imageUrl = `${brand.siteUrl}${image}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow"
    );
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:site_name", brand.name);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:image", imageUrl);
    if (!noindex) upsertCanonical(url);

    // JSON-LD structured data
    const scriptId = "page-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [title, description, path, jsonLd, image, noindex]);

  return null;
}
