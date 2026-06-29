import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 border-t border-blue-100 mt-auto overflow-hidden">

      {/* décoration background */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Logo + description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>

              <span className="font-extrabold text-2xl text-slate-900 tracking-tight">
                Mini<span className="text-blue-600">Stack</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              La plateforme de questions & réponses pour les développeurs
              francophones. Partagez, apprenez et progressez ensemble.
            </p>

            {/* réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { label: "GH", color: "hover:bg-slate-900" },
                { label: "TW", color: "hover:bg-sky-500" },
                { label: "LI", color: "hover:bg-blue-700" },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-10 h-10 rounded-xl bg-white border border-blue-100 text-slate-600 shadow-sm hover:text-white transition-all duration-300 ${item.color}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5">
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
                    className="text-slate-600 hover:text-blue-600 transition hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5">
              Compte
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/connexion"
                  className="text-slate-600 hover:text-blue-600 transition hover:translate-x-1 inline-block"
                >
                  Se connecter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inscription"
                  className="text-slate-600 hover:text-blue-600 transition hover:translate-x-1 inline-block"
                >
                  S'inscrire
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span>📧</span> contact@ministack.sn
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> Dakar, Sénégal
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span> Support 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-blue-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">

          <p className="text-sm text-slate-500">
            © {year}{" "}
            <span className="text-blue-600 font-semibold">
              MiniStack
            </span>{" "}
            - Tous droits réservés.
          </p>

          <p className="text-sm text-slate-500">
            Fait avec <span className="text-red-500">❤️</span> au Sénégal
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;