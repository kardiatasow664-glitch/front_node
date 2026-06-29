import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Edit2, Loader2, Check, X } from "lucide-react";
import axios from "axios";

const Profil = () => {
  const [utilisateur, setUtilisateur] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // États pour la modification du profil
  const [isEditing, setIsEditing] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Tente de récupérer depuis l'API ou le localStorage
        const localUser = localStorage.getItem("user");
        let userData = { pseudo: "Coumba", email: "coumba@gmail.com" };

        if (localUser) {
          userData = JSON.parse(localUser);
        } else {
          // Exemple d'appel API si disponible :
          // const res = await axios.get("http://localhost:3000/api/user/profile");
          // userData = res.data.user;
        }

        setUtilisateur(userData);
        setPseudo(userData.pseudo);
        setEmail(userData.email);
      } catch (error) {
        console.error("Erreur récupération profil :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Sauvegarde des modifications
  const handleSave = async (e) => {
    e.preventDefault();
    if (!pseudo.trim() || !email.trim()) return;

    setSubmitting(true);
    try {
      // 1. Envoi au backend (Décommentez et ajustez la ligne ci-dessous si votre API est prête)
      // const res = await axios.put("http://localhost:3000/api/user/profile/update", { pseudo, email });
      // const updatedUser = res.data.user;

      // Simulation de mise à jour locale
      const updatedUser = { ...utilisateur, pseudo, email };
      
      // 2. Mise à jour du stockage local et du state
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUtilisateur(updatedUser);
      setIsEditing(false); // Quitte le mode édition
      alert("Profil mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la modification du profil :", error);
      alert("Impossible de modifier le profil.");
    } finally {
      setSubmitting(false);
    }
  };

  // Annuler les modifications en cours
  const handleCancel = () => {
    setPseudo(utilisateur.pseudo);
    setEmail(utilisateur.email);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-slate-600 font-medium">Chargement du profil...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Bannière */}
          <div className="h-40 bg-blue-600"></div>

          {/* Informations utilisateur */}
          <div className="px-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center -mt-14 gap-6">
              
              <div className="flex flex-col md:flex-row items-center gap-5 w-full">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    utilisateur?.pseudo || "User"
                  )}&background=2563eb&color=fff&size=200`}
                  alt="avatar"
                  className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover flex-shrink-0"
                />

                {/* Si MODE ÉDITION ACTIF */}
                {isEditing ? (
                  <form onSubmit={handleSave} className="flex-1 w-full space-y-3 mt-4 md:mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1">Pseudo</label>
                        <input
                          type="text"
                          value={pseudo}
                          onChange={(e) => setPseudo(e.target.value)}
                          className="w-full border rounded-xl px-3 py-2 text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          disabled={submitting}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1">Adresse Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border rounded-xl px-3 py-2 text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          disabled={submitting}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex items-center gap-1.5 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition"
                      >
                        <Check size={16} />
                        {submitting ? "Enregistrement..." : "Enregistrer"}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        disabled={submitting}
                        className="flex items-center gap-1.5 bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-300 transition"
                      >
                        <X size={16} />
                        Annuler
                      </button>
                    </div>
                  </form>
                ) : (
                  /* SI MODE VISUALISATION (DÉFAUT) */
                  <div className="text-center md:text-left mt-4 md:mt-14 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <h1 className="text-3xl font-bold text-slate-800">
                        {utilisateur?.pseudo}
                      </h1>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="mx-auto md:mx-0 flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition"
                      >
                        <Edit2 size={12} /> Modifier
                      </button>
                    </div>

                    <p className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mt-2">
                      <Mail size={16} />
                      {utilisateur?.email}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions globales */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 border-t pt-8 border-slate-100">
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