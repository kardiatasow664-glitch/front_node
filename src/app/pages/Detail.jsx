import React from "react";

const Detail = () => {
  const question = {
    titre: "Comment utiliser React Router ?",
    description:
      "Je débute avec React et je souhaite comprendre comment naviguer entre plusieurs pages avec React Router.",
    auteur: "Mamadou Diallo",
    date: "15 Juin 2026",
    categorie: "React",
    reponses: [
      {
        id: 1,
        auteur: "Fatou",
        contenu:
          "Tu dois installer react-router-dom puis utiliser BrowserRouter, Routes et Route.",
      },
      {
        id: 2,
        auteur: "Alioune",
        contenu:
          "N'oublie pas d'utiliser NavLink ou Link pour naviguer entre les pages.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Question */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {question.categorie}
          </span>

          <h1 className="text-3xl font-bold mt-4 mb-3">
            {question.titre}
          </h1>

          <div className="flex gap-4 text-gray-500 text-sm mb-4">
            <span>👤 {question.auteur}</span>
            <span>📅 {question.date}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {question.description}
          </p>
        </div>

        {/* Formulaire réponse */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">
            Ajouter une réponse
          </h2>

          <form>
            <textarea
              rows="4"
              placeholder="Écrivez votre réponse..."
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Publier
            </button>
          </form>
        </div>

        {/* Liste des réponses */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-5">
            Réponses ({question.reponses.length})
          </h2>

          <div className="space-y-4">
            {question.reponses.map((reponse) => (
              <div
                key={reponse.id}
                className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded"
              >
                <h3 className="font-semibold mb-2">
                  {reponse.auteur}
                </h3>

                <p className="text-gray-700">
                  {reponse.contenu}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;