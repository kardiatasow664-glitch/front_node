import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [reponse, setReponse] = useState("");
  const [submitting, setSubmitting] = useState(false); 

  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/question/${id}`
        );
        
        setQuestion(res.data.question);
        // Récupération sécurisée des réponses si elles sont liées à l'objet question
        setAnswers(res.data.question?.reponses || []); 
      } catch (error) {
        console.error("Erreur récupération question :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reponse.trim()) return;

    setSubmitting(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/api/answer/${id}`,
        { contenu: reponse }
      );

      // Adaptation flexible selon ce que renvoie votre backend :
      // 1. res.data.answer ou 2. res.data directement, sinon un objet fallback structuré
      const newAnswer = res.data?.answer || (res.data?.contenu ? res.data : { 
        id: Date.now(), 
        contenu: reponse, 
        createdAt: new Date().toISOString() 
      });

      // Ajout instantané de la nouvelle réponse à l'écran
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
      setReponse(""); // Vide le textarea
    } catch (error) {
      console.error("Erreur ajout réponse :", error);
      const errorMsg = error.response?.data?.message || "Erreur lors de l'ajout de la réponse";
      alert(errorMsg);
    } finally {
      // S'exécute quoi qu'il arrive (succès ou échec) pour débloquer le bouton
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600 font-medium">
        Chargement...
      </div>
    );
  }

  if (!question) {
    return (
      <div className="text-center mt-10 text-red-500 font-medium">
        Question introuvable.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Carte principale de la Question */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {question.titre}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="font-medium text-gray-700">
            👤 {question.auteur || "Anonyme"}
          </span>

          <span className="text-gray-500 text-sm">
            📅{" "}
            {question.createdAt
              ? new Date(question.createdAt).toLocaleDateString()
              : ""}
          </span>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
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

      {/* Section des Réponses existantes */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Réponses ({answers.length})
        </h2>
        
        {answers.length === 0 ? (
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-xl border border-dashed">
            Aucune réponse pour le moment. Soyez le premier à répondre !
          </p>
        ) : (
          <div className="space-y-4">
            {answers.map((ans) => (
              <div key={ans.id || ans._id || Math.random()} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <p className="text-gray-700 whitespace-pre-line">{ans.contenu}</p>
                {ans.createdAt && (
                  <div className="text-xs text-gray-400 mt-3">
                    Posté le {new Date(ans.createdAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Formulaire d'ajout de réponse */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Ajouter une réponse
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={reponse}
            onChange={(e) => setReponse(e.target.value)}
            rows="5"
            placeholder="Écrivez votre réponse..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={submitting}
          />

          <button
            type="submit"
            disabled={submitting || !reponse.trim()}
            className={`mt-4 text-white px-5 py-2 rounded-lg transition-colors ${
              submitting || !reponse.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? "Publication..." : "Publier"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detail;