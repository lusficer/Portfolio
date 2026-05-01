'use client'

import Image from "next/image";
import { useState, useEffect, useRef, type ReactNode, type RefObject } from "react";
import aqtechInternImage from "@/assets/cards/experience/aqtech-intern.jpg";
import edunetjscInternImage from "@/assets/cards/experience/edunetjsc-inter.jpg";
import microservicesEcommerceImage from "@/assets/cards/projects/microservices-ecommerce.jpg";
import foodDeliveryAppImage from "@/assets/cards/projects/food-delivery-app.jpg";
import profilePortraitImage from "@/assets/profile/profile-portrait.png";

const CV_DOWNLOAD_PATH = "/cv/bach-huy-hoang-cv.pdf";

/* ═══════════════════════════════════════════════════════════════
   BACH HUY HOANG — Portfolio
   Layout: Dark template reference (hero+photo, about, skills 
   donut charts, experience grid, CTA)
   Palette: Elegant warm — deep charcoal + cream + gold accent
   ═══════════════════════════════════════════════════════════════ */

// ─── Google Fonts loader ───
function Fonts() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap"
      rel="stylesheet"
      precedence="default"
    />
  );
}

// ─── Global styles ───
function GlobalStyles() {
  return (
    <style href="portfolio-global-styles" precedence="default">{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      ::selection { background: rgba(196,168,130,0.3); }
      
      :root {
        --bg-primary: #1a1714;
        --bg-secondary: #221f1a;
        --bg-card: #2a2520;
        --bg-card-hover: #332e28;
        --text-primary: #f5f0e8;
        --text-secondary: #b8b0a4;
        --text-muted: #7a7268;
        --accent: #c4a882;
        --accent-light: #d4bc9a;
        --accent-glow: rgba(196,168,130,0.15);
        --border: #3a342c;
        --font-display: 'Cormorant Garamond', Georgia, serif;
        --font-body: 'Outfit', system-ui, sans-serif;
      }

      /* Scrollbar */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: var(--bg-primary); }
      ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

      /* Grain overlay */
      .grain-overlay {
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none; z-index: 9999; opacity: 0.025;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      }

      /* Animations */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes drawCircle {
        from { stroke-dashoffset: var(--circumference); }
        to { stroke-dashoffset: var(--target-offset); }
      }
      @keyframes slideRight {
        from { width: 0%; }
        to { width: var(--target-width); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .reveal { opacity: 0; transform: translateY(40px); transition: all 0.9s cubic-bezier(.22,1,.36,1); }
      .reveal.visible { opacity: 1; transform: translateY(0); }

      /* Nav */
      .nav { 
        position: fixed; top: 0; left: 0; right: 0; z-index: 100;
        padding: 20px 48px; display: flex; justify-content: center; align-items: center;
        transition: all 0.4s; backdrop-filter: blur(0px); background: transparent;
      }
      .nav.scrolled {
        background: rgba(26,23,20,0.92); backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border); padding: 14px 48px;
      }
      .nav-logo {
        font-family: var(--font-display); font-size: 1.4rem; font-weight: 500;
        color: var(--text-primary); text-decoration: none; letter-spacing: 0.02em;
      }
      .nav-links { display: flex; gap: 32px; list-style: none; }
      .nav-links a {
        font-family: var(--font-body); font-size: 0.82rem; font-weight: 400;
        color: var(--text-secondary); text-decoration: none; letter-spacing: 0.06em;
        text-transform: uppercase; transition: color 0.3s; position: relative;
      }
      .nav-links a::after {
        content: ''; position: absolute; bottom: -4px; left: 0; width: 0;
        height: 1px; background: var(--accent); transition: width 0.3s;
      }
      .nav-links a:hover { color: var(--accent); }
      .nav-links a:hover::after { width: 100%; }

      /* Hero */
      .hero {
        min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr;
        align-items: center; padding: 0 64px; gap: 48px;
        background: var(--bg-primary); position: relative; overflow: hidden;
      }
      .hero::before {
        content: ''; position: absolute; top: -50%; right: -20%; width: 80%;
        height: 200%; background: radial-gradient(ellipse, var(--accent-glow), transparent 60%);
        pointer-events: none;
      }
      .hero-content { position: relative; z-index: 2; }
      .hero-label {
        font-family: var(--font-body); font-size: 0.72rem; font-weight: 500;
        letter-spacing: 0.25em; text-transform: uppercase; color: var(--accent);
        margin-bottom: 20px; animation: fadeUp 0.8s ease both 0.2s;
      }
      .hero-name {
        font-family: var(--font-display); font-size: clamp(2.8rem, 5.5vw, 4.5rem);
        font-weight: 600; color: var(--text-primary); line-height: 1.05;
        letter-spacing: -0.01em; margin-bottom: 16px;
        animation: fadeUp 0.8s ease both 0.4s;
      }
      .hero-role {
        font-family: var(--font-body); font-size: 0.88rem; font-weight: 300;
        color: var(--text-secondary); letter-spacing: 0.08em; text-transform: uppercase;
        margin-bottom: 36px; animation: fadeUp 0.8s ease both 0.6s;
      }
      .hero-btn {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 14px 32px; border: 1px solid var(--accent);
        background: transparent; color: var(--accent); font-family: var(--font-body);
        font-size: 0.82rem; font-weight: 500; letter-spacing: 0.1em;
        text-transform: uppercase; cursor: pointer; text-decoration: none;
        transition: all 0.4s; animation: fadeUp 0.8s ease both 0.8s;
      }
      .hero-btn:hover {
        background: var(--accent); color: var(--bg-primary);
        box-shadow: 0 0 30px var(--accent-glow);
      }
      .hero-photo {
        position: relative; z-index: 2; display: flex;
        justify-content: center; align-items: center;
        animation: fadeIn 1.2s ease both 0.5s;
      }
      .hero-photo-frame {
        width: 380px; height: 460px; background: var(--bg-card);
        border: 1px solid var(--border); position: relative; overflow: hidden;
        display: flex; align-items: center; justify-content: center;
      }
      .profile-photo-image {
        object-fit: cover;
      }
      .hero-photo-frame::before {
        content: ''; position: absolute; top: -1px; left: -1px;
        right: -1px; bottom: -1px; border: 1px solid var(--accent);
        opacity: 0; transition: opacity 0.5s;
      }
      .hero-photo-frame:hover::before { opacity: 0.4; }
      .photo-placeholder {
        font-family: var(--font-display); font-size: 3rem;
        color: var(--text-muted); opacity: 0.3;
      }
      .hero-photo-accent {
        position: absolute; top: -12px; right: -12px; width: 100px; height: 100px;
        border: 1px solid var(--accent); opacity: 0.2;
      }

      /* Section */
      .section {
        padding: 100px 64px; background: var(--bg-primary);
        position: relative;
      }
      .section-alt { background: var(--bg-secondary); }
      .section-label {
        font-family: var(--font-body); font-size: 0.7rem; font-weight: 500;
        letter-spacing: 0.25em; text-transform: uppercase; color: var(--accent);
        margin-bottom: 12px;
      }
      .section-title {
        font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.2rem);
        font-weight: 600; color: var(--text-primary); margin-bottom: 48px;
      }

      /* About */
      .about-grid {
        display: grid; grid-template-columns: 1fr 1.2fr;
        gap: 64px; align-items: center;
      }
      .about-photo {
        width: 100%; aspect-ratio: 4/5; background: var(--bg-card);
        border: 1px solid var(--border); position: relative;
        display: flex; align-items: center; justify-content: center;
      }
      .about-photo::after {
        content: ''; position: absolute; bottom: -10px; right: -10px;
        width: 100%; height: 100%; border: 1px solid var(--accent); opacity: 0.15;
        z-index: -1;
      }
      .about-text {
        font-family: var(--font-body); font-size: 1rem; line-height: 1.85;
        color: var(--text-secondary); font-weight: 300;
      }
      .about-stats {
        display: grid; grid-template-columns: repeat(3, 1fr);
        gap: 24px; margin-top: 36px;
      }
      .stat-num {
        font-family: var(--font-display); font-size: 2.2rem; font-weight: 600;
        color: var(--accent);
      }
      .stat-label {
        font-family: var(--font-body); font-size: 0.75rem; color: var(--text-muted);
        text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;
      }

      /* Skills - Primary Languages */
      .primary-langs {
        display: flex; gap: 20px; margin-bottom: 48px; flex-wrap: wrap;
      }
      .primary-lang-card {
        display: flex; align-items: center; gap: 14px;
        padding: 22px 30px; background: var(--bg-card);
        border: 1px solid var(--border); flex: 1; min-width: 160px;
        transition: all 0.4s cubic-bezier(.22,1,.36,1);
      }
      .primary-lang-card:hover {
        border-color: var(--accent);
        box-shadow: 0 4px 20px rgba(196,168,130,0.08);
        transform: translateY(-2px);
      }
      .primary-lang-icon {
        font-size: 1.6rem; width: 48px; height: 48px;
        display: flex; align-items: center; justify-content: center;
        background: var(--accent-glow); border: 1px solid var(--accent);
        font-family: var(--font-body); font-weight: 600; color: var(--accent);
      }
      .primary-lang-name {
        font-family: var(--font-display); font-size: 1.3rem;
        font-weight: 600; color: var(--text-primary);
      }

      /* Skills - Categories */
      .skills-categories {
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 36px; margin-bottom: 56px;
      }
      .skill-cat-title {
        font-family: var(--font-display); font-size: 1.18rem;
        font-weight: 600; color: var(--accent); margin-bottom: 14px;
        font-style: italic;
      }
      .skill-cat-items { display: flex; flex-wrap: wrap; gap: 8px; }
      .skill-pill {
        font-family: var(--font-body); font-size: 0.92rem;
        padding: 8px 16px; border: 1px solid var(--border);
        color: var(--text-secondary); letter-spacing: 0.02em;
        font-weight: 500; transition: all 0.3s;
      }
      .skill-pill:hover {
        border-color: var(--accent); color: var(--accent);
        background: var(--accent-glow);
      }
      .skills-bottom {
        display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
        border-top: 1px solid var(--border); padding-top: 48px;
      }
      .skills-sub-title {
        font-family: var(--font-display); font-size: 1.8rem; font-weight: 600;
        color: var(--text-primary); margin-bottom: 24px;
      }
      .lang-item { margin-bottom: 18px; }
      .lang-header {
        display: flex; justify-content: space-between; align-items: center;
        padding: 16px 18px; background: var(--bg-card); border: 1px solid var(--border);
      }
      .lang-name {
        font-family: var(--font-body); font-size: 1.2rem; color: var(--text-primary); font-weight: 600;
      }
      .lang-level {
        font-family: var(--font-body); font-size: 1rem; color: var(--accent);
        letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500;
        padding: 6px 12px; background: var(--accent-glow); border-radius: 2px;
      }
      .study-item {
        display: flex; gap: 16px; align-items: flex-start;
        margin-bottom: 20px; padding: 16px; background: var(--bg-card);
        border: 1px solid var(--border); transition: border-color 0.3s;
      }
      .study-item:hover { border-color: var(--accent); }
      .study-icon {
        width: 40px; height: 40px; background: var(--accent-glow);
        border: 1px solid var(--accent); display: flex; align-items: center;
        justify-content: center; flex-shrink: 0;
      }
      .study-icon-inner {
        font-family: var(--font-display); font-size: 1.1rem; color: var(--accent);
      }
      .study-school {
        font-family: var(--font-body); font-size: 1.02rem; color: var(--text-primary);
        font-weight: 500;
      }
      .study-detail {
        font-family: var(--font-body); font-size: 0.92rem; color: var(--text-muted);
        margin-top: 2px;
      }

      /* Experience */
      .exp-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
      }
      .exp-card {
        position: relative; background: var(--bg-card);
        border: 1px solid var(--border); overflow: hidden; cursor: default;
        display: flex; flex-direction: column;
      }
      .exp-card-media {
        position: relative; aspect-ratio: 16/9; overflow: hidden;
        border-bottom: 1px solid rgba(196,168,130,0.16);
      }
      .exp-card-bg {
        position: absolute; inset: 0;
        background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-card-hover) 100%);
        transition: transform 0.6s cubic-bezier(.22,1,.36,1);
      }
      .exp-card:hover .exp-card-bg { transform: scale(1.05); }
      .exp-card-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to top, rgba(12,11,10,0.25) 0%, rgba(12,11,10,0.02) 55%);
        z-index: 1;
      }
      .exp-card-content {
        position: relative; z-index: 2; padding: 24px 26px 24px; width: 100%;
        background: var(--bg-card);
      }
      .exp-card-company {
        font-family: var(--font-display); font-size: 1.9rem; font-weight: 700;
        color: #fff; letter-spacing: 0.01em; line-height: 1.08;
      }
      .exp-card-role {
        font-family: var(--font-body); font-size: 1.12rem; color: var(--accent-light);
        margin-top: 8px; font-weight: 600; line-height: 1.35;
      }
      .exp-card-period {
        font-family: var(--font-body); font-size: 0.98rem; color: #d2cbc0;
        margin-top: 7px; font-weight: 500;
      }
      .exp-card-desc {
        font-family: var(--font-body); font-size: 0.98rem; color: #ebe4da;
        margin-top: 11px; line-height: 1.6; font-weight: 400;
        opacity: 1; max-height: none; overflow: visible;
      }

      /* Experience contributions */
      .exp-contributions {
        list-style: none; margin-top: 14px; padding: 0;
        display: flex; flex-direction: column; gap: 8px;
      }
      .exp-contribution-item {
        font-family: var(--font-body); font-size: 0.88rem;
        color: var(--text-secondary); line-height: 1.65;
        font-weight: 300; padding-left: 16px; position: relative;
      }
      .exp-contribution-item::before {
        content: '—'; position: absolute; left: 0; color: var(--accent);
        font-weight: 500;
      }
      .exp-stack {
        display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px;
        padding-top: 14px; border-top: 1px solid var(--border);
      }
      .exp-stack-tag {
        font-family: var(--font-body); font-size: 0.68rem;
        letter-spacing: 0.04em; padding: 3px 10px;
        border: 1px solid var(--border); color: var(--text-muted);
        text-transform: uppercase; font-weight: 500;
      }

      /* Projects */
      .projects-list { display: flex; flex-direction: column; gap: 24px; }
      .project-card {
        display: grid; grid-template-columns: 1fr 1fr; gap: 0;
        border: 1px solid var(--border); background: var(--bg-card);
        transition: all 0.5s cubic-bezier(.22,1,.36,1); overflow: hidden;
      }
      .project-card:hover {
        border-color: var(--accent); transform: translateY(-3px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.3);
      }
      .project-visual {
        aspect-ratio: 16/10; background: var(--bg-secondary);
        display: flex; align-items: center; justify-content: center;
        position: relative; overflow: hidden;
      }
      .project-visual-pattern {
        position: absolute; inset: 0; opacity: 0.06;
      }
      .project-visual-label {
        font-family: var(--font-display); font-size: 2.5rem; font-weight: 700;
        color: var(--text-muted); opacity: 0.12; position: absolute;
      }
      .project-info { padding: 36px; display: flex; flex-direction: column; justify-content: center; }
      .project-name {
        font-family: var(--font-display); font-size: 1.4rem; font-weight: 600;
        color: var(--text-primary);
      }
      .project-desc {
        font-family: var(--font-body); font-size: 0.88rem; color: var(--text-secondary);
        line-height: 1.7; margin-top: 12px; font-weight: 300;
      }
      .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
      .project-tag {
        font-family: var(--font-body); font-size: 0.68rem; letter-spacing: 0.04em;
        padding: 4px 12px; border: 1px solid var(--border); color: var(--text-muted);
        text-transform: uppercase; font-weight: 500;
      }
      .project-links { display: flex; gap: 16px; margin-top: 20px; }
      .project-link {
        font-family: var(--font-body); font-size: 0.78rem; color: var(--accent);
        text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase;
        font-weight: 500; transition: color 0.3s; display: flex; align-items: center; gap: 6px;
      }
      .project-link:hover { color: var(--accent-light); }

      /* CTA */
      .cta {
        padding: 120px 64px; text-align: center; background: var(--bg-secondary);
        position: relative; overflow: hidden;
      }
      .cta::before {
        content: ''; position: absolute; top: 50%; left: 50%;
        transform: translate(-50%, -50%); width: 600px; height: 600px;
        background: radial-gradient(circle, var(--accent-glow), transparent 70%);
        pointer-events: none;
      }
      .cta-title {
        font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.8rem);
        font-weight: 600; color: var(--text-primary); position: relative;
      }
      .cta-sub {
        font-family: var(--font-body); font-size: 0.92rem; color: var(--text-secondary);
        margin-top: 16px; font-weight: 300; position: relative;
      }
      .cta-btn {
        display: inline-flex; align-items: center; gap: 10px; margin-top: 36px;
        padding: 16px 40px; background: var(--accent); color: var(--bg-primary);
        font-family: var(--font-body); font-size: 0.82rem; font-weight: 600;
        letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
        border: none; cursor: pointer; transition: all 0.4s; position: relative;
      }
      .cta-btn:hover {
        background: var(--accent-light);
        box-shadow: 0 0 40px var(--accent-glow);
        transform: translateY(-2px);
      }

      /* Contact Modal */
      .modal-overlay {
        position: fixed; inset: 0; z-index: 200;
        background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        animation: fadeIn 0.3s ease;
      }
      .modal-content {
        background: var(--bg-secondary); border: 1px solid var(--border);
        padding: 48px; max-width: 480px; width: 90%;
        position: relative; animation: fadeUp 0.4s ease;
      }
      .modal-close {
        position: absolute; top: 16px; right: 16px;
        background: none; border: 1px solid var(--border);
        color: var(--text-muted); width: 36px; height: 36px;
        font-size: 1.1rem; cursor: pointer; display: flex;
        align-items: center; justify-content: center;
        font-family: var(--font-body); transition: all 0.3s;
      }
      .modal-close:hover { border-color: var(--accent); color: var(--accent); }
      .modal-title {
        font-family: var(--font-display); font-size: 1.8rem;
        font-weight: 600; color: var(--accent); margin-bottom: 32px;
      }
      .contact-list { display: flex; flex-direction: column; gap: 12px; }
      .contact-item {
        display: flex; align-items: center; gap: 16px;
        justify-content: space-between;
        padding: 14px 18px; border: 1px solid var(--border);
        background: var(--bg-card); text-decoration: none;
        transition: all 0.3s; cursor: pointer;
      }
      .contact-item-info { display: flex; align-items: center; gap: 16px; min-width: 0; }
      .contact-item:hover { border-color: var(--accent); }
      .contact-item-static { cursor: default; }
      .contact-item-static:hover { border-color: var(--border); }
      .contact-item-copy {
        font-family: var(--font-body); font-size: 0.76rem;
        letter-spacing: 0.08em; text-transform: uppercase;
        color: var(--accent); background: transparent;
        border: 1px solid var(--border); padding: 6px 10px;
        cursor: pointer; transition: all 0.3s;
      }
      .contact-item-copy:hover { border-color: var(--accent); }
      .contact-item-copy.is-copied {
        color: var(--text-primary); border-color: var(--accent);
        background: var(--accent-glow);
      }
      .contact-icon {
        width: 40px; height: 40px; display: flex;
        align-items: center; justify-content: center;
        background: var(--accent-glow); border: 1px solid var(--accent);
        font-size: 1rem; flex-shrink: 0;
      }
      .contact-label {
        font-family: var(--font-body); font-size: 0.72rem;
        text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--text-muted); font-weight: 500;
      }
      .contact-value {
        font-family: var(--font-body); font-size: 0.92rem;
        color: var(--text-primary); font-weight: 400; margin-top: 2px;
      }

      /* Footer */
      .footer {
        padding: 32px 64px; background: var(--bg-primary);
        border-top: 1px solid var(--border);
        display: flex; justify-content: center; align-items: center;
      }
      .footer-copy {
        font-family: var(--font-body); font-size: 0.75rem; color: var(--text-muted);
      }

      /* Responsive */
      @media (max-width: 900px) {
        .hero { grid-template-columns: 1fr; padding: 120px 32px 64px; text-align: center; }
        .hero-photo { display: none; }
        .section { padding: 64px 32px; }
        .about-grid { grid-template-columns: 1fr; }
        .about-photo { max-width: 300px; margin: 0 auto; }
        .skills-categories { grid-template-columns: 1fr; }
        .skills-bottom { grid-template-columns: 1fr; }
        .exp-grid { grid-template-columns: 1fr; }
        .project-card { grid-template-columns: 1fr; }
        .nav { padding: 16px 24px; }
        .nav.scrolled { padding: 12px 24px; }
        .nav-links { gap: 20px; }
        .cta { padding: 80px 32px; }
        .footer { padding: 24px 32px; }
        .hero-btn { margin: 0 auto; }
      }
      @media (max-width: 600px) {
        .skills-categories { grid-template-columns: 1fr; }
        .about-stats { grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .nav-links a { font-size: 0.72rem; }
      }
    `}</style>
  );
}

// ─── Scroll Reveal Hook ───
function useReveal(threshold = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

// ─── Language Bar ───
function LangBar({ name, level }: { name: string; level: string }) {
  const [ref] = useReveal(0.3);
  return (
    <div className="lang-item" ref={ref}>
      <div className="lang-header">
        <span className="lang-name">{name}</span>
        <span className="lang-level">{level}</span>
      </div>
    </div>
  );
}

// ─── Data ───
const DATA = {
  name: "Bach Huy\nHoang",
  displayName: "Bach Huy Hoang",
  tagline: "Software Engineer — Backend & Distributed Systems",
  email: "bachhuy410@gmail.com",
  phone: "0795945247",
  location: "Ho Chi Minh City, Vietnam",
  linkedin: "https://linkedin.com/in/bach-huy-hoang",
  github: "https://github.com/bachhuyhoang",
  about: `Aspiring backend engineer with a passion for distributed systems and scalable microservices. Experienced in building production-grade features across the full stack — from integrating AI vision services to architecting independent microservices with strict domain boundaries.\n\nI focus on clean architecture, secure data flows, and system reliability. Currently completing my Bachelor in Information Technology at UWE Bristol, actively seeking backend engineering roles where I can contribute to high-impact systems.`,

  primaryLangs: [
    { name: "Java", icon: "☕" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
  ],

  skillCategories: {
    "Backend": ["Spring Boot", "Node.js / Express", "RESTful APIs", "Microservices Architecture"],
    "Frontend": ["React", "Next.js", "Vue.js 3", "Tailwind CSS"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    "DevOps & Tools": ["Git", "Docker", "n8n Automation", "Swagger"],
  },

  languages: [
    { name: "English", level: "IELTS 7.0" },
    { name: "Vietnamese", level: "Native" },
  ],

  education: [
    { school: "University of the West of England", detail: "Bachelor in Information Technology · Expected May 2026" },
    { school: "IELTS Academic", detail: "Band 7.0 · Aug 2025" },
  ],

 // Tìm và thay đoạn experience trong DATA:

experience: [
  {
    company: "AQTech",
    role: "Full-stack Developer Intern",
    period: "Feb 2025 — Jun 2025",
    contributions: [
      "Built an automated intern attendance tracking app and dynamic employee dashboard using n8n, eliminating manual tracking for Team Lead.",
      "Proactively developed an AI chatbot to automate daily task reporting using OpenAI API.",
      "Contributed to educational web platforms using React, TanStack Query, and MySQL.",
      "Self-taught UI design principles to independently align frontend with product goals.",
    ],
    stack: ["React", "TanStack Query", "MySQL", "n8n", "OpenAI API"],
    icon: "A",
    image: aqtechInternImage,
    imageFit: "contain",
  },
  {
    company: "EdunetJSC",
    role: "Full-stack & AI Intern",
    period: "Jan 2024 — Apr 2024",
    contributions: [
      "Integrated multiple AI vision detectors (AWS Rekognition, DeepStack, Facebox) to meet commercial production standards.",
      "Configured core backend workflows with Node.js/Express and JWT authentication.",
      "Delivered UI components with Vue 3 and real-time communication via Socket.IO.",
      "System was officially approved by PhD. Diep Ho for commercialization and market sales.",
    ],
    stack: ["Vue 3", "Node.js", "Express", "AWS Rekognition", "Socket.IO"],
    icon: "E",
    image: edunetjscInternImage,
    imageFit: "cover",
  },
],

  projects: [
    {
      name: "Microservices E-commerce Platform",
      desc: "Scalable e-commerce system with independent services for catalog, cart, and order management. Transitioning from monolith to microservices ecosystem.",
      stack: ["Next.js", "React 19", "Spring Boot", "MySQL", "TypeScript"],
      github: "#",
      image: microservicesEcommerceImage,
    },
    {
      name: "Home Delivering Food",
      desc: "Full-stack food ordering app with dynamic menu filtering, secure JWT authentication, cart workflows, and automated order confirmation emails.",
      stack: ["Vue.js", "Express.js", "MySQL", "JWT", "PrimeVue"],
      github: "#",
      live: "#",
      image: foodDeliveryAppImage,
    },
  ],
};

// ─── Nav ───
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// ─── Hero ───
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">Welcome</p>
        <h1 className="hero-name">
          I'm {DATA.name.split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className="hero-role">{DATA.tagline}</p>
        <a
          href={CV_DOWNLOAD_PATH}
          download="BachHuyHoang_Software_cv.pdf"
          className="hero-btn"
        >
          Download CV <span style={{ fontSize: "1.1rem" }}>↓</span>
        </a>
      </div>
      <div className="hero-photo">
        <div className="hero-photo-frame">
          <Image
            src={profilePortraitImage}
            alt={`${DATA.displayName} portrait`}
            fill
            className="profile-photo-image"
            sizes="(max-width: 900px) 0px, 380px"
            priority
          />
          <div className="hero-photo-accent" />
        </div>
      </div>
    </section>
  );
}

// ─── About ───
function About() {
  return (
    <section className="section section-alt" id="about">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="section-label">Get to know me</p>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="about-photo">
              <Image
                src={profilePortraitImage}
                alt={`${DATA.displayName} profile photo`}
                fill
                className="profile-photo-image"
                sizes="(max-width: 900px) 300px, 420px"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.15}>
              <h2 className="section-title" style={{ marginBottom: 24 }}>About</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-text">
                {DATA.about.split("\n\n").map((para, i) => (
                  <span key={i}>{para}{i === 0 && <><br /><br /></>}</span>
                ))}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-stats">
                <div>
                  <div className="stat-num">2</div>
                  <div className="stat-label">Internships</div>
                </div>
                <div>
                  <div className="stat-num">4+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div>
                  <div className="stat-num">7.0</div>
                  <div className="stat-label">IELTS</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───
function Skills() {
  return (
    <section className="section" id="skills">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">My Skills</h2>
        </Reveal>

        {/* Primary Languages */}
        <Reveal delay={0.1}>
          <div className="primary-langs">
            {DATA.primaryLangs.map((lang) => (
              <div className="primary-lang-card" key={lang.name}>
                <span className="primary-lang-icon">{lang.icon}</span>
                <span className="primary-lang-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Categorized Skills */}
        <Reveal delay={0.2}>
          <div className="skills-categories">
            {Object.entries(DATA.skillCategories).map(([cat, items]) => (
              <div className="skill-cat" key={cat}>
                <h4 className="skill-cat-title">{cat}</h4>
                <div className="skill-cat-items">
                  {items.map((item) => (
                    <span className="skill-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Language & Studies bottom */}
        <div className="skills-bottom">
          <Reveal delay={0.3}>
            <div>
              <h3 className="skills-sub-title">Language</h3>
              {DATA.languages.map((l) => (
                <LangBar key={l.name} {...l} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div>
              <h3 className="skills-sub-title">Studies</h3>
              {DATA.education.map((e, i) => (
                <div className="study-item" key={i}>
                  <div className="study-icon">
                    <span className="study-icon-inner">{i === 0 ? "🎓" : "📜"}</span>
                  </div>
                  <div>
                    <p className="study-school">{e.school}</p>
                    <p className="study-detail">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Grid ───
function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">My Work Experience</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="exp-grid">
            {DATA.experience.map((exp, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-card-media">
                  <div
                    className="exp-card-bg"
                    style={{
                      backgroundImage: `url(${exp.image.src})`,
                      backgroundSize: exp.imageFit,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  />
                  <div className="exp-card-overlay" />
                </div>
                <div className="exp-card-content">
                  <h3 className="exp-card-company">{exp.company}</h3>
                  <p className="exp-card-role">{exp.role}</p>
                  <p className="exp-card-period">{exp.period}</p>
                  <ul className="exp-contributions">
                    {exp.contributions.map((item, j) => (
                      <li key={j} className="exp-contribution-item">{item}</li>
                    ))}
                  </ul>
                  <div className="exp-stack">
                    {exp.stack.map((t) => (
                      <span className="exp-stack-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Projects ───
function Projects() {
  return (
    <section className="section" id="projects">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Selected Projects</h2>
        </Reveal>
        <div className="projects-list">
          {DATA.projects.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div className="project-card">
                <div
                  className="project-visual"
                  style={{
                    backgroundImage: `url(${p.image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="project-visual-label">{String(i + 1).padStart(2, "0")}</span>
                  <svg className="project-visual-pattern" width="100%" height="100%">
                    <defs>
                      <pattern id={`grid-${i}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--accent)" strokeWidth="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                  </svg>
                </div>
                <div className="project-info">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.stack.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} className="project-link" target="_blank" rel="noreferrer">
                        Github →
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} className="project-link" target="_blank" rel="noreferrer">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  if (!isOpen) return null;

  const copyText = async (field: "email" | "phone", value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    window.setTimeout(() => setCopiedField((prev) => (prev === field ? null : prev)), 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close contact modal">
          ×
        </button>
        <h3 className="modal-title">Get In Touch</h3>
        <div className="contact-list">
          <div className="contact-item contact-item-static">
            <div className="contact-item-info">
              <span className="contact-icon">✉</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{DATA.email}</p>
              </div>
            </div>
            <button
              className={`contact-item-copy ${copiedField === "email" ? "is-copied" : ""}`}
              type="button"
              onClick={() => copyText("email", DATA.email)}
            >
              {copiedField === "email" ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="contact-item contact-item-static">
            <div className="contact-item-info">
              <span className="contact-icon">☎</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">{DATA.phone}</p>
              </div>
            </div>
            <button
              className={`contact-item-copy ${copiedField === "phone" ? "is-copied" : ""}`}
              type="button"
              onClick={() => copyText("phone", DATA.phone)}
            >
              {copiedField === "phone" ? "Copied" : "Copy"}
            </button>
          </div>
          <a className="contact-item" href={DATA.linkedin} target="_blank" rel="noreferrer">
            <div className="contact-item-info">
              <span className="contact-icon">in</span>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/bach-huy-hoang</p>
              </div>
            </div>
          </a>
          <a className="contact-item" href={DATA.github} target="_blank" rel="noreferrer">
            <div className="contact-item-info">
              <span className="contact-icon">⌥</span>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com/bachhuyhoang</p>
              </div>
            </div>
          </a>
          <div className="contact-item contact-item-static">
            <div className="contact-item-info">
              <span className="contact-icon">⌖</span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">{DATA.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="cta" id="contact">
      <Reveal>
        <h2 className="cta-title">Interested In My Work?</h2>
        <p className="cta-sub">Let's build something meaningful together. Open to backend engineering opportunities.</p>
        <button type="button" className="cta-btn" onClick={() => setModalOpen(true)}>
          Get In Touch <span>→</span>
        </button>
      </Reveal>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

// ─── Footer ───
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2025 Bach Huy Hoang — Designed with intention.</p>
    </footer>
  );
}

// ─── Main ───
export default function Portfolio() {
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
        <div className="grain-overlay" />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
