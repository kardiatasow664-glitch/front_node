import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reponse, setReponse] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/question/${id}`
        );

        setQuestion(res.data.question);
      } catch (error) {
        console.error("Erreur récupération question :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reponse.trim()) return;

    try {
      await axios.post(
        `http://localhost:3000/api/question/${id}/reponse`,
        {
          contenu: reponse,
        }
      );

      setReponse("");
      alert("Réponse publiée avec succès");
    } catch (error) {
      console.error("Erreur ajout réponse :", error);
      alert("Erreur lors de l'ajout de la réponse");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        Chargement...
      </div>
    );
  }

  if (!question) {
    return (
      <div className="text-center mt-10 text-red-500">
        Question introuvable.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {question.titre}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="font-medium text-gray-700">
            👤 {question.auteur}
          </span>

          <span className="text-gray-500 text-sm">
            📅{" "}
            {question.createdAt
              ? new Date(question.createdAt).toLocaleDateString()
              : ""}
          </span>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {question.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {question.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Formulaire réponse */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Ajouter une réponse
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={reponse}
            onChange={(e) => setReponse(e.target.value)}
            rows="5"
            placeholder="Écrivez votre réponse..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Publier
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detail;