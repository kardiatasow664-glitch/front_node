import React, { useState } from "react";

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
    <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Poser une question
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Titre */}
          <div>
            <label className="block mb-2 font-semibold">
              Titre de la question
            </label>
            <input
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              placeholder="Ex : Comment utiliser React Router ?"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Catégorie */}
          <div>
            <label className="block mb-2 font-semibold">
              Catégorie
            </label>

            <select
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
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
            <label className="block mb-2 font-semibold">
              Description détaillée
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              placeholder="Décrivez votre problème ou votre question..."
              className="w-full border border-gray-300 rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Envoyer la question
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;