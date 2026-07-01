import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import axios from "axios";
import {
  TerminalSquare,
  MessagesSquare,
  Search,
  Filter,
  Atom,
  Server,
  Database,
  LayoutGrid,
  Loader2,
  Inbox,
} from "lucide-react";

const TAGS = [
  { key: "all", label: "Tous", icon: LayoutGrid, dot: "#94A3B8" },
  { key: "React", label: "React", icon: Atom, dot: "#61DAFB" },
  { key: "Node", label: "Node", icon: Server, dot: "#3C873A" },
  { key: "MongoDB", label: "MongoDB", icon: Database, dot: "#47A248" },
];

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/question");
        setQuestions(res.data.questions || []);
      } catch (error) {
        console.error("Erreur récupération questions :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleDeleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/question/${id}`);
      setQuestions((prev) => prev.filter((question) => question._id !== id));
    } catch (error) {
      console.error("Erreur suppression :", error);
      alert("Erreur lors de la suppression");
    }
  };

  const filteredQuestions =
    selectedTag === "all"
      ? questions
      : questions.filter(
          (q) =>
            q.tags &&
            q.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
        );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-400 font-mono text-sm">
          <Loader2 className="w-5 h-5 animate-spin" />
          chargement des questions...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Bandeau "terminal" — élément signature de la page */}
        <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl shadow-black/30 mb-10">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2.5 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-amber-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-slate-500 font-mono">forum.sh</span>
          </div>

          <div className="bg-slate-900/60 px-6 py-8">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-sm mb-2">
              <TerminalSquare className="w-4 h-4" />
              <span>guru@forum:~$ questions --tag={selectedTag}</span>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
                Questions de la communauté
              </h1>

              <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/60 border border-slate-700 rounded-full px-4 py-1.5">
                <MessagesSquare className="w-4 h-4 text-violet-400" />
                <span>
                  <span className="text-slate-100 font-semibold">
                    {filteredQuestions.length}
                  </span>{" "}
                  résultat{filteredQuestions.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres par tag */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5" />
            filtrer
          </div>

          {TAGS.map(({ key, label, icon: Icon, dot }) => {
            const active = selectedTag === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedTag(key)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  active
                    ? "bg-violet-500/15 border-violet-500/60 text-violet-300"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: dot }}
                />
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Liste des questions */}
        <div className="grid gap-5">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <QuestionCard
                key={question._id}
                question={question}
                onDelete={handleDeleteQuestion}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 text-center py-16 border border-dashed border-slate-800 rounded-xl bg-slate-900/40">
              <Inbox className="w-8 h-8 text-slate-600" />
              <div>
                <p className="text-slate-300 font-medium">Aucune question trouvée</p>
                <p className="text-slate-500 text-sm mt-1">
                  Essayez un autre filtre ou revenez à "Tous".
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;