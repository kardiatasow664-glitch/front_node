import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [search, setSearch] = useState("");

  const deconnexion = () => {
    localStorage.removeItem("token");
    alert("Déconnexion réussie");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <nav className="w-full h-[10vh] bg-slate-800 flex items-center justify-between px-10">

      {/* Logo */}
      <NavLink
        to="/"
        className="text-2xl font-bold text-white"
      >
        Mini<span className="text-blue-400">Stack</span>
      </NavLink>

      {/* Barre de recherche */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center bg-slate-700 rounded-lg overflow-hidden w-[350px]"
      >
        <input
          type="text"
          placeholder="Rechercher une question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          🔍
        </button>
      </form>

      {/* Menu */}
      <div className="flex items-center gap-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : "text-white"
          }
        >
          Accueil
        </NavLink>

        {token && (
          <>
            <NavLink
              to="/profil"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "text-white"
              }
            >
              Profil
            </NavLink>

            <button
              onClick={deconnexion}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Déconnexion
            </button>
          </>
        )}

        {!token && (
          <div className="flex items-center gap-2">
            <NavLink
              to="/connexion"
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Connexion
            </NavLink>

            <NavLink
              to="/inscription"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Inscription
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;