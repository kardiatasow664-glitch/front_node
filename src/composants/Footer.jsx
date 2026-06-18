import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-blue-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grille principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold">M</span>
              </div>

              <span className="font-bold text-xl text-slate-900">
                Mini<span className="text-blue-600">Stack</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              La plateforme de questions & réponses pour les développeurs
              francophones.
            </p>

            {/* Réseaux */}
            <div className="flex gap-3">
              {["G", "T", "L"].map((item) => (
                <button
                  key={item}
                  className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-blue-900 font-bold mb-4">
              Navigation
            </h3>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Accueil
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/profil"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Mon profil
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/ajouter_question"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Poser une question
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-blue-900 font-bold mb-4">
              Compte
            </h3>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/connexion"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Se connecter
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/inscription"
                  className="text-slate-600 hover:text-blue-600"
                >
                  S'inscrire
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-blue-900 font-bold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>📧 contact@MiniStack.sn</li>
              <li>📍 Dakar, Sénégal</li>
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-blue-100 pt-6 flex flex-col sm:flex-row justify-between items-center">

          <p className="text-sm text-slate-500">
            © {year}{" "}
            <span className="text-blue-600 font-semibold">
              MiniStack
            </span>{" "}
            - Tous droits réservés.
          </p>

          <p className="text-sm text-slate-500 mt-2 sm:mt-0">
            Fait avec ❤️ au Sénégal
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;