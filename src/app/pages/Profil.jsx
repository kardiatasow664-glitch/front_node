import React from "react";
import { NavLink } from "react-router-dom";
import {
  User,
  Mail,
  MessageSquare,
  HelpCircle,
  ThumbsUp,
  Edit,
} from "lucide-react";

const Profil = () => {
  const utilisateur = {
    pseudo: "Coumba",
    email: "coumba@gmail.com",
    questions: 12,
    reponses: 34,
    votes: 120,
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Carte Profil */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Bannière */}
          <div className="h-40 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

          {/* Informations utilisateur */}
          <div className="px-8 pb-8">

            <div className="flex flex-col md:flex-row justify-between items-center -mt-14">

              <div className="flex flex-col md:flex-row items-center gap-5">
                <img
                  src={`https://ui-avatars.com/api/?name=${utilisateur.pseudo}&background=7c3aed&color=fff&size=200`}
                  alt="avatar"
                  className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
                />

                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {utilisateur.pseudo}
                  </h1>

                  <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                    <Mail size={16} />
                    {utilisateur.email}
                  </p>
                </div>
              </div>

              <NavLink
                to="/modifier-profil"
                className="mt-4 md:mt-0 flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                <Edit size={18} />
                Modifier le profil
              </NavLink>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

              <NavLink
                to="/mes-questions"
                className="bg-purple-50 p-6 rounded-2xl text-center hover:shadow-md transition"
              >
                <HelpCircle
                  size={32}
                  className="mx-auto text-purple-600 mb-2"
                />
                <h2 className="text-3xl font-bold text-purple-700">
                  {utilisateur.questions}
                </h2>
                <p className="text-gray-600">Questions</p>
              </NavLink>

              <NavLink
                to="/mes-reponses"
                className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-md transition"
              >
                <MessageSquare
                  size={32}
                  className="mx-auto text-blue-600 mb-2"
                />
                <h2 className="text-3xl font-bold text-blue-700">
                  {utilisateur.reponses}
                </h2>
                <p className="text-gray-600">Réponses</p>
              </NavLink>

              <NavLink
                to="/mes-votes"
                className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-md transition"
              >
                <ThumbsUp
                  size={32}
                  className="mx-auto text-green-600 mb-2"
                />
                <h2 className="text-3xl font-bold text-green-700">
                  {utilisateur.votes}
                </h2>
                <p className="text-gray-600">Votes reçus</p>
              </NavLink>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-10">

              <NavLink
                to="/ajouter_question"
                className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
              >
                ➕ Poser une question
              </NavLink>

              <NavLink
                to="/mes-questions"
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
              >
                📚 Mes questions
              </NavLink>

              <NavLink
                to="/mes-reponses"
                className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
              >
                💬 Mes réponses
              </NavLink>

            </div>

            {/* Activité récente */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Activité récente
              </h2>

              <div className="space-y-4">

                <div className="bg-slate-50 p-4 rounded-xl border hover:bg-slate-100 transition">
                  Question : Comment utiliser JWT avec React ?
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border hover:bg-slate-100 transition">
                  Réponse ajoutée sur : Gestion des Hooks React
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border hover:bg-slate-100 transition">
                  Vote reçu sur une réponse
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;