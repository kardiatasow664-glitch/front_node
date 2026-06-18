import React from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const questions = [
    {
      id: 1,
      titre: "Comment utiliser useEffect dans React ?",
      description: "Je débute avec React et je souhaite récupérer des données.",
      heure: "09:15",
      auteur: "Aminata Ndiaye",
      categorie: "React",
    },
    {
      id: 2,
      titre: "Pourquoi mon serveur Express retourne une erreur 404 ?",
      description: "J'ai créé une route GET /users.",
      heure: "10:30",
      auteur: "Mamadou Diallo",
      categorie: "Node.js",
    },
    {
      id: 3,
      titre: "Comment connecter Spring Boot à MySQL ?",
      description: "Mon application ne se connecte pas.",
      heure: "11:45",
      auteur: "Fatou Sow",
      categorie: "Java",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* Header */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Forum de Questions
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Partagez vos connaissances et trouvez des réponses à vos problèmes.
          </p>

        </div>
      </div>

      {/* Catégories */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-3 mb-8">

          <span className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow">
            Toutes
          </span>

          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full">
            React
          </span>

          <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full">
            Node.js
          </span>

          <span className="px-5 py-2 bg-orange-100 text-orange-700 rounded-full">
            Java
          </span>

          <span className="px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full">
            JavaScript
          </span>

        </div>

        {/* Informations */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-medium text-indigo-700">
            📚 {questions.length} questions disponibles
          </p>

          <select className="border border-indigo-200 rounded-xl px-4 py-2 bg-white">
            <option>Plus récentes</option>
            <option>Plus populaires</option>
            <option>Sans réponse</option>
          </select>
        </div>

        {/* Liste */}
        <div className="space-y-5 pb-10">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Questions;