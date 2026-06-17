import React from "react";
import { NavLink } from "react-router-dom";

const Profil = () => {
  const utilisateur = {
    pseudo: "Coumba",
    email: "coumba@gmail.com",
    questions: 12,
    reponses: 34,
    votes: 120,
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">

        {/* Header Profil */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src="https://ui-avatars.com/api/?name=Coumba"
              alt="avatar"
              className="w-24 h-24 rounded-full"
            />

            <div>
              <h1 className="text-3xl font-bold">
                {utilisateur.pseudo}
              </h1>

              <p className="text-gray-500">
                {utilisateur.email}
              </p>
            </div>
          </div>

          <NavLink
            to="/modifier-profil"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Modifier
          </NavLink>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NavLink
            to="/mes-questions"
            className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition"
          >
            <h2 className="text-2xl font-bold">
              {utilisateur.questions}
            </h2>
            <p>Questions</p>
          </NavLink>

          <NavLink
            to="/mes-reponses"
            className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition"
          >
            <h2 className="text-2xl font-bold">
              {utilisateur.reponses}
            </h2>
            <p>Réponses</p>
          </NavLink>

          <NavLink
            to="/mes-votes"
            className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition"
          >
            <h2 className="text-2xl font-bold">
              {utilisateur.votes}
            </h2>
            <p>Votes reçus</p>
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-8">
          <NavLink
            to="/ajouter_question"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            ➕ Poser une question
          </NavLink>

          <NavLink
            to="/mes-questions"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            📚 Mes questions
          </NavLink>

          <NavLink
            to="/mes-reponses"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            💬 Mes réponses
          </NavLink>
        </div>

        {/* Activité récente */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Activité récente
          </h2>

          <div className="space-y-3">
            <NavLink
              to="/detail/1"
              className="block border p-3 rounded-lg hover:bg-slate-50"
            >
              Question : Comment utiliser JWT avec React ?
            </NavLink>

            <NavLink
              to="/detail/2"
              className="block border p-3 rounded-lg hover:bg-slate-50"
            >
              Réponse ajoutée sur : Gestion des Hooks React
            </NavLink>

            <NavLink
              to="/detail/3"
              className="block border p-3 rounded-lg hover:bg-slate-50"
            >
              Vote reçu sur une réponse
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profil;