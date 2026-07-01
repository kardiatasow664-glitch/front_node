import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, CalendarDays, Trash2, ArrowUpRight } from "lucide-react";

const TAG_COLORS = {
  react: "#61DAFB",
  node: "#3C873A",
  mongodb: "#47A248",
};

const QuestionCard = ({ question, onDelete }) => {
  const navigate = useNavigate();

  const auteur = question.auteur;

  const heure = question.createdAt
    ? new Date(question.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "--:--";

  const date = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString()
    : "";

  const handleDelete = (e) => {
    e.stopPropagation();

    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cette question ?"
    );

    if (confirmation) {
      onDelete(question._id);
    }
  };

  return (
    <div
      onClick={() => navigate(`/question/${question._id}`)}
      className="group relative bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-sm hover:border-violet-500/50 hover:bg-slate-900 transition duration-300 cursor-pointer"
    >
      {/* Titre */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-100 group-hover:text-violet-300 transition">
          {question.titre}
        </h2>
        <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-violet-400 shrink-0 mt-1.5 transition" />
      </div>

      <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1">
          <CalendarDays className="w-3.5 h-3.5" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {heure}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 mt-3 line-clamp-2 leading-relaxed">
        {question.description}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {question.tags?.map((tag, i) => {
          const dot = TAG_COLORS[tag.toLowerCase()] || "#94A3B8";
          return (
            <span
              key={i}
              className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 px-2.5 py-1 text-xs rounded-full font-mono"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: dot }}
              />
              {tag}
            </span>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-800">
        {/* Auteur */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
            {(auteur || "coumba").charAt(0).toUpperCase()}
          </div>
          <span className="text-sm text-slate-300">{auteur || "coumba"}</span>
        </div>

        {/* Actions */}
        <button
          onClick={handleDelete}
          className="flex items-center gap-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 px-2.5 py-1.5 rounded-lg text-sm transition"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;