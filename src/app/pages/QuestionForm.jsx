import { useState } from "react";
import axios from "axios";

export default function QuestionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [auteur, setAuteur] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/question", {
        titre: title,
        description,
        tags: tags.split(",").map(tag => tag.trim()),
        auteur: auteur,
      });

      alert("Question ajoutée ! 🎉");
      setTitle("");
      setDescription("");
      setTags("");
      setAuteur("");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-red-50 via-rose-50 to-orange-50 px-4 py-10">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl border border-rose-100/80 transition-all"
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Poser une question
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Partage ton problème avec la communauté.
          </p>
        </div>

        

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Titre de la question</label>
          <input
            type="text"
            placeholder="Sois précis et concis..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Décris ton problème..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-gray-700 h-36 resize-y"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Tags</label>
          <input
            type="text"
            placeholder="react, node, javascript"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-gray-700"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <p className="text-xs text-gray-400 mt-1">Séparez les tags par des virgules.</p>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className={`w-full font-semibold text-white py-3 rounded-lg shadow-md transition-all duration-200 transform active:scale-[0.98] ${
            loading 
              ? "bg-red-400 cursor-not-allowed" 
              : "bg-red-600 hover:bg-red-700 hover:shadow-lg"
          }`}
        >
          {loading ? "Publication en cours..." : "Publier la question"}
        </button>
      </form>
    </div>
  );
}