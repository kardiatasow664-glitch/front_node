import React, { useState } from "react";
import { HelpCircle, Send } from "lucide-react";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    titre: "",
    categorie: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Question envoyée avec succès !");

    setFormData({
      titre: "",
      categorie: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <HelpCircle size={40} className="text-white" />
          </div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Poser une Question
          </h1>

          <p className="text-slate-500 mt-2">
            Décrivez votre problème afin que la communauté puisse vous aider.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Titre */}
          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Titre de la question
            </label>

            <input
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              placeholder="Ex : Comment utiliser React Router ?"
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              required
            />
          </div>

          {/* Catégorie */}
          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Catégorie
            </label>

            <select
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              required
            >
              <option value="">Choisir une catégorie</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="NodeJS">NodeJS</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Description détaillée
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="7"
              placeholder="Décrivez votre problème ou votre question..."
              className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none resize-none transition-all"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <Send size={20} />
            Envoyer la question
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;