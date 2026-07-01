import React from "react";
import { NavLink } from "react-router-dom";
import {
  TerminalSquare,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 mt-auto overflow-hidden">

      {/* décoration background */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Logo + description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-950/50">
                <TerminalSquare className="w-5 h-5 text-white" />
              </div>

              <span className="font-extrabold text-2xl text-slate-100 tracking-tight">
                Mini<span className="text-violet-400">Stack</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              La plateforme de questions & réponses pour les développeurs
              francophones. Partagez, apprenez et progressez ensemble.
            </p>

            {/* réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { label: "GitHub", icon: Github },
                { label: "Twitter", icon: Twitter },
                { label: "LinkedIn", icon: Linkedin },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shadow-sm hover:text-violet-300 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-5 font-mono text-sm tracking-wide">
              Navigation
            </h3>

            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/profil", label: "Mon profil" },
                { to: "/ajouter_question", label: "Poser une question" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-slate-400 hover:text-violet-300 transition hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-5 font-mono text-sm tracking-wide">
              Compte
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/connexion"
                  className="text-slate-400 hover:text-violet-300 transition hover:translate-x-1 inline-block"
                >
                  Se connecter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inscription"
                  className="text-slate-400 hover:text-violet-300 transition hover:translate-x-1 inline-block"
                >
                  S'inscrire
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-5 font-mono text-sm tracking-wide">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                contact@ministack.sn
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                Dakar, Sénégal
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-violet-400 shrink-0" />
                Support 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">

          <p className="text-sm text-slate-500">
            © {year}{" "}
            <span className="text-violet-400 font-semibold">
              MiniStack
            </span>{" "}
            - Tous droits réservés.
          </p>

          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Fait avec <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> au Sénégal
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;