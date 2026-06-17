import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { NavLink } from "react-router-dom";

const Questions = () => {
  const [search, setSearch] = useState("");

  const questions = [
    {
      id: 1,
      titre: "Comment utiliser useEffect dans React pour récupérer des données ?",
      description:
        "Je débute avec React et je souhaite récupérer des données depuis une API avec useEffect.",
      heure: "09:15",
      auteur: "Aminata Ndiaye",
      categorie: "React",
    },
    {
      id: 2,
      titre: "Pourquoi mon serveur Express retourne une erreur 404 ?",
      description:
        "J'ai créé une route GET /users mais lorsque je fais une requête depuis Postman, je reçois une erreur 404.",
      heure: "10:30",
      auteur: "Mamadou Diallo",
      categorie: "Node.js",
    },
    {
      id: 3,
      titre: "Comment connecter Spring Boot à une base de données MySQL ?",
      description:
        "Mon application Spring Boot ne parvient pas à se connecter à MySQL.",
      heure: "11:45",
      auteur: "Fatou Sow",
      categorie: "Java",
    },
    {
      id: 4,
      titre: "Quelle est la différence entre let, const et var en JavaScript ?",
      description:
        "Je vois souvent ces trois mots-clés dans les exemples JavaScript.",
      heure: "14:20",
      auteur: "Cheikh Ba",
      categorie: "JavaScript",
    },
    {
      id: 5,
      titre: "Comment créer une authentification JWT avec Node.js ?",
      description:
        "Je développe une API avec Express et je souhaite sécuriser mes routes avec JWT.",
      heure: "16:05",
      auteur: "Khadija Fall",
      categorie: "Sécurité",
    },
  ];

  const filteredQuestions = questions.filter(
    (question) =>
      question.titre.toLowerCase().includes(search.toLowerCase()) ||
      question.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Questions & Réponses
            </h1>
            <p className="text-gray-500 mt-1">
              {filteredQuestions.length} question(s) disponible(s)
            </p>
          </div>

          
        </div>

        
        {/* Liste */}
        <div className="space-y-5">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
              />
            ))
          ) : (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-600">
                Aucune question trouvée 😕
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;