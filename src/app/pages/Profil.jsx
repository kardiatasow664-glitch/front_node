import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Edit } from "lucide-react";

const Profil = () => {
  const utilisateur = {
    pseudo: "Coumba",
    email: "coumba@gmail.com",
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Bannière */}
          <div className="h-40 bg-blue-600"></div>

          {/* Informations utilisateur */}
          <div className="px-8 pb-10">

            <div className="flex flex-col md:flex-row justify-between items-center -mt-14">

              <div className="flex flex-col md:flex-row items-center gap-5">
                <img
                  src={`https://ui-avatars.com/api/?name=${utilisateur.pseudo}&background=2563eb&color=fff&size=200`}
                  alt="avatar"
                  className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
                />

                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-slate-800">
                    {utilisateur.pseudo}
                  </h1>

                  <p className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mt-2">
                    <Mail size={16} />
                    {utilisateur.email}
                  </p>
                </div>
              </div>

              <NavLink
                to="/modifier-profil"
                className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                <Edit size={18} />
                Modifier le profil
              </NavLink>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <NavLink
                to="/ajouter_question"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-medium"
              >
                ➕ Poser une question
              </NavLink>

              <NavLink
                to="/mes-questions"
                className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition font-medium"
              >
                📚 Mes questions
              </NavLink>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profil;