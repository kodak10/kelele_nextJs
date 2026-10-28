"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { roles, roleOrder } from "@/data/kelele-dashboard";
import { useCategories } from "@/components/common/useCategories";

/* ------------------------------------------------------------------ */
/* Stockage local (démo, sans API) : partagé entre les espaces         */
/* d'un même navigateur, pour que l'admin voie ce que soumet le        */
/* prestataire / l'organisateur.                                       */
/* ------------------------------------------------------------------ */
function useStore(key, seed) {
  const [value, setValue] = useState(seed);
  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem(key);
        if (raw) setValue(JSON.parse(raw));
        else localStorage.setItem(key, JSON.stringify(seed));
      } catch (e) {}
    };
    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  const save = (next) => {
    setValue(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch (e) {}
  };
  return [value, save];
}

const SEED_KYC = [
  { id: "seed-1", user: "DJ professionnel", city: "Abidjan", docs: [{ label: "Pièce d'identité", file: "cni-dj.pdf" }, { label: "Justificatif d'activité", file: "registre-dj.pdf" }], date: "02/11/2026", status: "En attente" },
  { id: "seed-2", user: "Traiteur événementiel", city: "Abidjan", docs: [{ label: "Pièce d'identité", file: "passeport-traiteur.pdf" }], date: "30/10/2026", status: "En attente" },
];
const SEED_SERVICES = [
  { id: "s-1", owner: "Prestataire", title: "DJ & sonorisation — mariages et soirées", category: "DJ & Animation", city: "Abidjan", price: "", status: "Publié" },
];
const SEED_EVENTS = [
  { id: "e-1", owner: "Organisateur pro", title: "Soirée Afrobeats", category: "Concert", date: "2026-12-12", time: "20:00", place: "À définir", city: "Abidjan", price: "", seats: 80, status: "Publié" },
  { id: "e-2", owner: "Organisateur pro", title: "Salon du mariage", category: "Salon", date: "2026-12-19", time: "10:00", place: "À définir", city: "Lagos", price: "", seats: 40, status: "Publié" },
];

const CITIES = ["Abidjan", "Lagos", "Dakar", "Accra", "Douala"];
const EVENT_CATEGORIES = ["Mariage", "Concert", "Conférence (MICE)", "Salon", "Anniversaire", "Autre"];

/* ------------------------------------------------------------------ */
/* DataTable : recherche, tri, pagination                              */
/* ------------------------------------------------------------------ */
const TABLE_CSS = `
.kt-card{background:#fff;border:1px solid #ececf1;border-radius:16px;box-shadow:0 2px 10px rgba(19,24,54,.04);overflow:hidden;margin-bottom:24px}
.kt-head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:18px 22px;border-bottom:1px solid #f0f0f4}
.kt-head h6{margin:0}
.kt-search{position:relative}
.kt-search i{position:absolute;left:12px;top:50%;transform:translateY(-50%);opacity:.5;font-size:15px}
.kt-search input{padding:9px 14px 9px 36px;border:1px solid #e5e5ea;border-radius:10px;min-width:230px;background:#fafafc}
.kt-search input:focus{outline:2px solid #f3cdbf;background:#fff}
.kt-scroll{overflow-x:auto}
.kt-table{width:100%;border-collapse:separate;border-spacing:0;min-width:540px}
.kt-table th{padding:13px 22px;text-align:left;font-weight:500;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:#6b6f85;background:#f7f7fa;border-bottom:1px solid #ececf1;white-space:nowrap;user-select:none}
.kt-table th.kt-sortable{cursor:pointer}
.kt-table th.kt-sortable:hover{color:#131836}
.kt-table td{padding:15px 22px;font-size:15px;border-bottom:1px solid #f2f2f6;vertical-align:middle}
.kt-table tbody tr:last-child td{border-bottom:0}
.kt-table tbody tr:hover td{background:#fdf6f3}
.kt-foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:14px 22px;border-top:1px solid #f0f0f4;background:#fcfcfd}
.kt-size select{padding:6px 10px;border:1px solid #e5e5ea;border-radius:8px;background:#fff}
.kt-pager{display:flex;align-items:center;gap:8px}
.kt-empty{padding:34px 22px;text-align:center;color:#8a8ea3}
`;

const BADGE_TONES = {
  success: { background: "#e6f6ec", color: "#16794a" },
  warning: { background: "#fff4dd", color: "#a66a00" },
  danger: { background: "#fdeaea", color: "#c0392b" },
  neutral: { background: "#eef0f6", color: "#3b4160" },
};
function toneOf(text) {
  const t = String(text).toLowerCase();
  if (/(rejet|refus|annul)/.test(t)) return "danger";
  if (/(attente|demand|nouvelle|répondre|retenu|en cours|brouillon|à valider|à examiner|non ouverte)/.test(t)) return "warning";
  if (/(valid|publi|confirm|honor|pay|libér|encaiss|actif|en vente|ouverte|accept|reçu|envoy)/.test(t)) return "success";
  return "neutral";
}
const STATUS_LABELS = ["Statut", "Décision", "Résultat", "Billetterie"];

const Badge = ({ children }) => (
  <span
    className="fs-14 fw-5"
    style={{ padding: "5px 12px", borderRadius: 999, whiteSpace: "nowrap", display: "inline-block", ...BADGE_TONES[toneOf(children)] }}
  >
    {children}
  </span>
);

function DataTable({ title, columns, rows, pageSizeDefault = 5, empty = "Aucune donnée." }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, dir: 1 });
  const [size, setSize] = useState(pageSizeDefault);
  const [page, setPage] = useState(1);

  const text = (r, c) => {
    const v = c.value ? c.value(r) : r[c.key];
    return v == null ? "" : String(v);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = rows;
    if (q) list = rows.filter((r) => columns.some((c) => text(r, c).toLowerCase().includes(q)));
    if (sort.key) {
      const col = columns.find((c) => c.key === sort.key);
      list = [...list].sort((a, b) => text(a, col).localeCompare(text(b, col), "fr", { numeric: true }) * sort.dir);
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, query, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / size));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * size, current * size);

  const renderCell = (r, c) => {
    if (c.render) return c.render(r);
    const v = r[c.key];
    if (STATUS_LABELS.includes(c.label) && v) return <Badge>{v}</Badge>;
    return v;
  };

  return (
    <div className="kt-card">
      <style>{TABLE_CSS}</style>
      <div className="kt-head">
        <h6 className="fw-5 fs-22">{title || "Liste"}</h6>
        <div className="kt-search">
          <i className="icon-search" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Rechercher…"
            aria-label="Rechercher dans le tableau"
          />
        </div>
      </div>
      <div className="kt-scroll">
        <table className="kt-table">
          <thead>
            <tr>
              {columns.map((c) => {
                const sortable = c.sortable !== false;
                return (
                  <th
                    key={c.key}
                    className={sortable ? "kt-sortable" : ""}
                    onClick={() => {
                      if (!sortable) return;
                      setSort((st) => (st.key === c.key ? { key: c.key, dir: -st.dir } : { key: c.key, dir: 1 }));
                    }}
                  >
                    {c.label}
                    {sort.key === c.key ? (sort.dir === 1 ? " ▲" : " ▼") : ""}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {slice.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="kt-empty">
                  {empty}
                </td>
              </tr>
            )}
            {slice.map((r, i) => (
              <tr key={r.id ?? i}>
                {columns.map((c) => (
                  <td key={c.key}>{renderCell(r, c)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="kt-foot">
        <div className="flex items-center gap-10 flex-wrap">
          <span className="fs-14" style={{ color: "#6b6f85" }}>
            {filtered.length
              ? `${(current - 1) * size + 1}–${Math.min(current * size, filtered.length)} sur ${filtered.length}`
              : "0 résultat"}
          </span>
          <label className="kt-size fs-14" style={{ color: "#6b6f85" }}>
            Lignes{" "}
            <select
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
                setPage(1);
              }}
            >
              {[5, 10, 25].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="kt-pager">
          <IconBtn icon="icon-arrow-left" title="Page précédente" variant="neutral" disabled={current <= 1} onClick={() => setPage(current - 1)} />
          <span className="fs-14 fw-5">
            {current} / {pages}
          </span>
          <IconBtn icon="icon-arrow-right" title="Page suivante" variant="neutral" disabled={current >= pages} onClick={() => setPage(current + 1)} />
        </div>
      </div>
    </div>
  );
}

// Actions par table (clé « profil/section ») : changent la valeur de la colonne « Statut ».
const ACTIONS = {
  "client/reservations": [{ icon: "flaticon-close", title: "Annuler la réservation", variant: "danger", status: "Annulée" }],
  "client/devis": [
    { icon: "flaticon-check", title: "Accepter le devis", variant: "success", status: "Devis accepté" },
    { icon: "flaticon-close", title: "Refuser le devis", variant: "danger", status: "Devis refusé" },
  ],
  "prestataire/devis": [
    { icon: "flaticon-send", title: "Envoyer un devis", variant: "success", status: "Devis envoyé" },
    { icon: "flaticon-close", title: "Décliner", variant: "danger", status: "Refusé" },
  ],
  "prestataire/reservations": [
    { icon: "flaticon-check", title: "Confirmer", variant: "success", status: "Confirmée" },
    { icon: "flaticon-medal", title: "Marquer comme honorée", variant: "neutral", status: "Honorée" },
    { icon: "flaticon-close", title: "Annuler", variant: "danger", status: "Annulée" },
  ],
  "organisateur/reservations": [
    { icon: "flaticon-check", title: "Confirmer", variant: "success", status: "Confirmée" },
    { icon: "flaticon-close", title: "Annuler", variant: "danger", status: "Annulée" },
  ],
  "organisateur/prestataires": [
    { icon: "flaticon-check", title: "Confirmer", variant: "success", status: "Confirmée" },
    { icon: "flaticon-close", title: "Annuler", variant: "danger", status: "Annulée" },
  ],
  "admin/utilisateurs": [
    { icon: "flaticon-lock", title: "Suspendre le compte", variant: "danger", status: "Suspendu" },
    { icon: "flaticon-unlock", title: "Réactiver le compte", variant: "success", status: "Actif" },
  ],
  "admin/moderation": [
    { icon: "flaticon-check", title: "Conserver le contenu", variant: "success", status: "Conservé" },
    { icon: "flaticon-close", title: "Retirer le contenu", variant: "danger", status: "Retiré" },
  ],
};

function ActionTable({ table, actions }) {
  const [rows, setRows] = useState(() => rowsFromTable(table));
  const base = colsFromTable(table);
  const statusIdx = table.columns.findIndex((c) => STATUS_LABELS.includes(c));
  const statusKey = `c${statusIdx >= 0 ? statusIdx : table.columns.length - 1}`;
  const columns = actions
    ? [
        ...base,
        {
          key: "actions",
          label: "Actions",
          sortable: false,
          render: (r) => (
            <div className="flex gap-10">
              {actions.map((a) => (
                <IconBtn
                  key={a.title}
                  icon={a.icon}
                  title={a.title}
                  variant={a.variant}
                  onClick={() => {
                    const apply = () => setRows(rows.map((x) => (x.id === r.id ? { ...x, [statusKey]: a.status } : x)));
                    if (a.variant !== "danger") return apply();
                    askReason({
                      title: a.title,
                      subject: [r.c0, r.c1].filter(Boolean).join(" — "),
                      confirmLabel: "Confirmer",
                      onConfirm: apply,
                    });
                  }}
                />
              ))}
            </div>
          ),
        },
      ]
    : base;
  return <DataTable title={table.title} columns={columns} rows={rows} />;
}

function rowsFromTable(table) {
  return table.rows.map((r, i) => {
    const o = { id: i };
    table.columns.forEach((c, j) => (o[`c${j}`] = r[j]));
    return o;
  });
}
function colsFromTable(table) {
  return table.columns.map((label, j) => ({ key: `c${j}`, label }));
}

// Ouvre le modal « motif » : askReason({ title, subject, confirmLabel, onConfirm(reason) })
function askReason(opts) {
  window.dispatchEvent(new CustomEvent("kelele:ask", { detail: opts }));
}

function ReasonHost() {
  const [opts, setOpts] = useState(null);
  const [reason, setReason] = useState("");
  useEffect(() => {
    const onAsk = (e) => {
      setReason("");
      setOpts(e.detail);
    };
    window.addEventListener("kelele:ask", onAsk);
    return () => window.removeEventListener("kelele:ask", onAsk);
  }, []);
  useEffect(() => {
    if (!opts) return;
    const onKey = (e) => e.key === "Escape" && setOpts(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [opts]);
  if (!opts) return null;
  const close = () => setOpts(null);
  const submit = (e) => {
    e.preventDefault();
    const text = reason.trim();
    if (!text) return;
    opts.onConfirm(text);
    close();
  };
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(19,24,54,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        style={{ background: "#fff", borderRadius: 16, padding: 28, width: "100%", maxWidth: 480, boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}
      >
        <h5 className="fw-6 mb-10">{opts.title}</h5>
        {opts.subject && (
          <p className="fs-15 mb-20" style={{ color: "#6b6f85" }}>
            {opts.subject}
          </p>
        )}
        <label className="fs-15 fw-5" style={{ display: "block", marginBottom: 6 }}>
          Motif *
        </label>
        <textarea
          autoFocus
          required
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Indiquez la raison de cette action…"
          style={{ width: "100%", padding: "12px 14px", border: "1px solid #e5e5e5", borderRadius: 10 }}
        />
        <div className="flex justify-end gap-10 mt-20">
          <button type="button" className="tf-btn style-secondary" onClick={close}>
            Annuler
          </button>
          <button type="submit" className="tf-btn" disabled={!reason.trim()} style={{ opacity: reason.trim() ? 1 : 0.6 }}>
            {opts.confirmLabel || "Confirmer"}
          </button>
        </div>
      </form>
    </div>
  );
}

function IconBtn({ icon, title, onClick, variant = "primary", disabled }) {
  const styles = {
    primary: { background: "var(--Primary, #131836)", color: "#fff" },
    success: { background: "#e6f6ec", color: "#16794a" },
    danger: { background: "#fdeaea", color: "#c0392b" },
    neutral: { background: "#f1f1f4", color: "#131836" },
  };
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        border: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...styles[variant],
      }}
    >
      <i className={icon} />
    </button>
  );
}


/* ------------------------------------------------------------------ */
/* Champs de formulaire                                                */
/* ------------------------------------------------------------------ */
function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label className="fs-15 fw-5" style={{ display: "block", marginBottom: 6 }}>
        {label}
      </label>
      {children}
    </div>
  );
}
const inputStyle = { width: "100%", padding: "12px 14px", border: "1px solid #e5e5e5", borderRadius: 10, background: "#fff" };

/* ------------------------------------------------------------------ */
/* Prestataire : services                                              */
/* ------------------------------------------------------------------ */
function ServicesPanel() {
  const [services, setServices] = useStore("kelele:services", SEED_SERVICES);
  const [categories] = useCategories();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", city: CITIES[0], price: "", availability: "", description: "" });
  const [done, setDone] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const blank = { title: "", category: "", city: CITIES[0], price: "", availability: "", description: "" };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  useEffect(() => {
    const openForm = () => {
      setEditingId(null);
      setForm(blank);
      setOpen(true);
      setDone(false);
    };
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("nouveau") === "1") openForm();
    window.addEventListener("kelele:new", openForm);
    return () => window.removeEventListener("kelele:new", openForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startEdit = (r) => {
    setForm({ title: r.title, category: r.category, city: r.city, price: r.price || "", availability: r.availability || "", description: r.description || "" });
    setEditingId(r.id);
    setOpen(true);
    setDone(false);
  };
  const remove = (id) => {
    const item = services.find((x) => x.id === id);
    askReason({
      title: "Supprimer ce service",
      subject: item ? item.title : "",
      confirmLabel: "Supprimer",
      onConfirm: () => setServices(services.filter((x) => x.id !== id)),
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (editingId) {
      setServices(services.map((x) => (x.id === editingId ? { ...x, ...form, status: "En attente de validation" } : x)));
    } else {
      setServices([{ id: `s-${Date.now()}`, owner: "Prestataire", status: "En attente de validation", ...form }, ...services]);
    }
    setForm(blank);
    setEditingId(null);
    setOpen(false);
    setDone(true);
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-10 mb-20">
        <p className="fs-15">Vos fiches de service visibles par les clients après validation par KELELE.</p>
        <button type="button" className="tf-btn" onClick={() => { setOpen(!open); setEditingId(null); setForm(blank); setDone(false); }}>
          {open ? "Fermer" : "Ajouter un service"}
          <i className="icon-arrow-top-right" />
        </button>
      </div>
      {done && <p className="fs-15 fw-5 mb-20">Service ajouté : il est en attente de validation par l&apos;équipe KELELE.</p>}
      {open && (
        <form onSubmit={submit} className="wg-box" style={{ marginBottom: 24 }}>
          <h6 className="fw-5 fs-22 mb-20">{editingId ? "Modifier le service" : "Nouveau service"}</h6>
          <Field label="Titre du service *">
            <input style={inputStyle} required value={form.title} onChange={set("title")} placeholder="Ex. : DJ & sonorisation pour mariages" />
          </Field>
          <div className="row">
            <div className="col-md-6">
              <Field label="Catégorie *">
                <select style={inputStyle} required value={form.category} onChange={set("category")}>
                  <option value="" disabled>
                    Choisir…
                  </option>
                  {categories.map((c) => (
                    <option key={c.id}>{c.title}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Ville *">
                <select style={inputStyle} value={form.city} onChange={set("city")}>
                  {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Tarif indicatif (FCFA)">
                <input style={inputStyle} type="number" min="0" value={form.price} onChange={set("price")} placeholder="Ex. : 150000" />
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Disponibilités">
                <input style={inputStyle} value={form.availability} onChange={set("availability")} placeholder="Ex. : week-ends et jours fériés" />
              </Field>
            </div>
          </div>
          <Field label="Description *">
            <textarea style={inputStyle} rows={4} required value={form.description} onChange={set("description")} />
          </Field>
          <button type="submit" className="tf-btn">
            {editingId ? "Mettre à jour le service" : "Enregistrer le service"}
            <i className="icon-arrow-top-right" />
          </button>
        </form>
      )}
      <DataTable
        title="Mes services"
        columns={[
          { key: "title", label: "Service" },
          { key: "category", label: "Catégorie" },
          { key: "city", label: "Ville" },
          { key: "price", label: "Tarif indicatif", render: (r) => (r.price ? `${Number(r.price).toLocaleString("fr-FR")} FCFA` : "Sur devis") },
          { key: "status", label: "Statut", render: (r) => <Badge>{r.status}</Badge> },
          {
            key: "actions",
            label: "Actions",
            sortable: false,
            render: (r) => (
              <div className="flex gap-10">
                <IconBtn icon="flaticon-edit" title="Modifier" variant="neutral" onClick={() => startEdit(r)} />
                <IconBtn icon="flaticon-close-1" title="Supprimer" variant="danger" onClick={() => remove(r.id)} />
              </div>
            ),
          },
        ]}
        rows={services}
        empty="Aucun service pour le moment."
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Prestataire : dossier KYC                                           */
/* ------------------------------------------------------------------ */
const KYC_DOCS = [
  { key: "identity", label: "Pièce d'identité (CNI, passeport…) *", required: true },
  { key: "activity", label: "Justificatif d'activité (registre, attestation…)", required: false },
  { key: "address", label: "Justificatif de domicile", required: false },
];

function KycPanel() {
  const [dossiers, setDossiers] = useStore("kelele:kyc", SEED_KYC);
  const [files, setFiles] = useState({});
  const [done, setDone] = useState(false);
  const mine = dossiers.find((d) => d.id === "me");

  const submit = (e) => {
    e.preventDefault();
    const docs = KYC_DOCS.filter((d) => files[d.key]).map((d) => ({ label: d.label.replace(" *", ""), file: files[d.key] }));
    const next = {
      id: "me",
      user: "Prestataire (vous)",
      city: "—",
      docs,
      date: new Date().toLocaleDateString("fr-FR"),
      status: "En attente",
    };
    setDossiers([next, ...dossiers.filter((d) => d.id !== "me")]);
    setDone(true);
  };

  return (
    <>
      <div className="wg-box" style={{ marginBottom: 24 }}>
        <h6 className="fw-5 fs-22 mb-10">Statut de votre dossier</h6>
        <p className="fs-15">
          {mine ? (
            <>
              Dossier soumis le {mine.date} : <Badge>{mine.status}</Badge>
              {mine.reason && (
                <>
                  <br />
                  Motif du rejet : <strong>{mine.reason}</strong>
                </>
              )}
            </>
          ) : (
            "Aucun dossier soumis. Envoyez vos documents pour être certifié et recevoir des demandes."
          )}
        </p>
        {mine && (
          <ul className="mt-10">
            {mine.docs.map((d, i) => (
              <li key={i} className="fs-15">
                {d.label} — {d.file}
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={submit} className="wg-box">
        <h6 className="fw-5 fs-22 mb-10">{mine ? "Soumettre à nouveau mes documents" : "Soumettre mon dossier KYC"}</h6>
        <p className="fs-15 mb-20">
          Vos documents sont stockés de façon chiffrée et ne sont consultables que par l&apos;équipe KELELE. Formats acceptés : PDF, JPG, PNG.
        </p>
        {KYC_DOCS.map((d) => (
          <Field key={d.key} label={d.label}>
            <input
              style={inputStyle}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              required={d.required}
              onChange={(e) => setFiles({ ...files, [d.key]: e.target.files[0] ? e.target.files[0].name : "" })}
            />
          </Field>
        ))}
        <div className="checkbox-item mb-20">
          <label>
            <p className="fs-15">Je certifie que ces documents sont authentiques et j&apos;accepte leur traitement par KELELE.</p>
            <input type="checkbox" required />
            <span className="btn-checkbox" />
          </label>
        </div>
        <button type="submit" className="tf-btn">
          Envoyer mon dossier
          <i className="icon-arrow-top-right" />
        </button>
        {done && <p className="fs-15 fw-5 mt-20">Dossier envoyé : l&apos;équipe KELELE va le vérifier.</p>}
      </form>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Organisateur : événements                                           */
/* ------------------------------------------------------------------ */
function EventsPanel() {
  const [events, setEvents] = useStore("kelele:events", SEED_EVENTS);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const blank = { title: "", category: EVENT_CATEGORIES[0], date: "", time: "", place: "", city: CITIES[0], price: "", seats: "", description: "" };
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  useEffect(() => {
    const openForm = () => {
      setEditingId(null);
      setForm(blank);
      setOpen(true);
      setDone(false);
    };
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("nouveau") === "1") openForm();
    window.addEventListener("kelele:new", openForm);
    return () => window.removeEventListener("kelele:new", openForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startEdit = (r) => {
    setForm({ title: r.title, category: r.category, date: r.date, time: r.time || "", place: r.place || "", city: r.city, price: r.price || "", seats: r.seats || "", description: r.description || "" });
    setEditingId(r.id);
    setOpen(true);
    setDone(false);
  };
  const remove = (id) => {
    const item = events.find((x) => x.id === id);
    askReason({
      title: "Supprimer cet événement",
      subject: item ? item.title : "",
      confirmLabel: "Supprimer",
      onConfirm: () => setEvents(events.filter((x) => x.id !== id)),
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (editingId) {
      setEvents(events.map((x) => (x.id === editingId ? { ...x, ...form, status: "En attente de validation" } : x)));
    } else {
      setEvents([{ id: `e-${Date.now()}`, owner: "Organisateur pro", status: "En attente de validation", ...form }, ...events]);
    }
    setForm(blank);
    setEditingId(null);
    setOpen(false);
    setDone(true);
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-10 mb-20">
        <p className="fs-15">Créez vos événements et ouvrez la billetterie après validation.</p>
        <button type="button" className="tf-btn" onClick={() => { setOpen(!open); setEditingId(null); setForm(blank); setDone(false); }}>
          {open ? "Fermer" : "Créer un événement"}
          <i className="icon-arrow-top-right" />
        </button>
      </div>
      {done && <p className="fs-15 fw-5 mb-20">Événement créé : il est en attente de validation par l&apos;équipe KELELE.</p>}
      {open && (
        <form onSubmit={submit} className="wg-box" style={{ marginBottom: 24 }}>
          <h6 className="fw-5 fs-22 mb-20">{editingId ? "Modifier l'événement" : "Nouvel événement"}</h6>
          <Field label="Titre *">
            <input style={inputStyle} required value={form.title} onChange={set("title")} />
          </Field>
          <div className="row">
            <div className="col-md-6">
              <Field label="Catégorie *">
                <select style={inputStyle} value={form.category} onChange={set("category")}>
                  {EVENT_CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Ville *">
                <select style={inputStyle} value={form.city} onChange={set("city")}>
                  {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Date *">
                <input style={inputStyle} type="date" required value={form.date} onChange={set("date")} />
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Heure *">
                <input style={inputStyle} type="time" required value={form.time} onChange={set("time")} />
              </Field>
            </div>
            <div className="col-md-12">
              <Field label="Lieu *">
                <input style={inputStyle} required value={form.place} onChange={set("place")} placeholder="Nom de la salle ou adresse" />
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Prix du billet (FCFA)">
                <input style={inputStyle} type="number" min="0" value={form.price} onChange={set("price")} placeholder="0 = gratuit" />
              </Field>
            </div>
            <div className="col-md-6">
              <Field label="Nombre de places *">
                <input style={inputStyle} type="number" min="1" required value={form.seats} onChange={set("seats")} />
              </Field>
            </div>
          </div>
          <Field label="Description">
            <textarea style={inputStyle} rows={4} value={form.description} onChange={set("description")} />
          </Field>
          <button type="submit" className="tf-btn">
            {editingId ? "Mettre à jour l'événement" : "Enregistrer l'événement"}
            <i className="icon-arrow-top-right" />
          </button>
        </form>
      )}
      <DataTable
        title="Mes événements"
        columns={[
          { key: "title", label: "Événement" },
          { key: "category", label: "Catégorie" },
          { key: "date", label: "Date" },
          { key: "city", label: "Ville" },
          { key: "seats", label: "Places" },
          { key: "status", label: "Statut", render: (r) => <Badge>{r.status}</Badge> },
          {
            key: "actions",
            label: "Actions",
            sortable: false,
            render: (r) => (
              <div className="flex gap-10">
                <IconBtn icon="flaticon-edit" title="Modifier" variant="neutral" onClick={() => startEdit(r)} />
                <IconBtn icon="flaticon-close-1" title="Supprimer" variant="danger" onClick={() => remove(r.id)} />
              </div>
            ),
          },
        ]}
        rows={events}
        empty="Aucun événement pour le moment."
      />
    </>
  );
}

function TicketsPanel() {
  const [events] = useStore("kelele:events", SEED_EVENTS);
  return (
    <DataTable
      title="Billetterie"
      columns={[
        { key: "title", label: "Événement" },
        { key: "seats", label: "Places" },
        { key: "price", label: "Prix du billet", render: (r) => (r.price ? `${Number(r.price).toLocaleString("fr-FR")} FCFA` : "Gratuit / à définir") },
        { key: "sold", label: "Billets émis", value: () => 0, render: () => 0 },
        { key: "status", label: "Statut", render: (r) => <Badge>{r.status === "Publié" ? "En vente" : "Non ouverte"}</Badge> },
      ]}
      rows={events}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Admin                                                               */
/* ------------------------------------------------------------------ */
function AdminKyc() {
  const [dossiers, setDossiers] = useStore("kelele:kyc", SEED_KYC);
  const [selected, setSelected] = useState(null);
  const apply = (id, status, reason) =>
    setDossiers(dossiers.map((d) => (d.id === id ? { ...d, status, reason: reason || "" } : d)));
  const decide = (id, status) => {
    if (status !== "Rejeté") return apply(id, status);
    const d = dossiers.find((x) => x.id === id);
    askReason({
      title: "Rejeter ce dossier KYC",
      subject: d ? d.user : "",
      confirmLabel: "Rejeter",
      onConfirm: (reason) => apply(id, status, reason),
    });
  };
  const sel = dossiers.find((d) => d.id === selected);

  return (
    <>
      <DataTable
        title="Dossiers KYC"
        columns={[
          { key: "user", label: "Prestataire" },
          { key: "date", label: "Soumis le" },
          { key: "docs", label: "Documents", value: (r) => r.docs.length, render: (r) => `${r.docs.length} document(s)` },
          { key: "status", label: "Statut", render: (r) => <Badge>{r.status}</Badge> },
          {
            key: "actions",
            label: "Actions",
            sortable: false,
            render: (r) => (
              <div className="flex gap-10">
                <IconBtn icon="flaticon-eye" title="Voir les documents" variant="neutral" onClick={() => setSelected(r.id)} />
                <IconBtn icon="flaticon-check" title="Valider le dossier" variant="success" onClick={() => decide(r.id, "Validé")} />
                <IconBtn icon="flaticon-close" title="Rejeter le dossier" variant="danger" onClick={() => decide(r.id, "Rejeté")} />
              </div>
            ),
          },
        ]}
        rows={dossiers}
        empty="Aucun dossier soumis."
      />
      {sel && (
        <div className="wg-box">
          <div className="flex justify-between items-center mb-10">
            <h6 className="fw-5 fs-22">Dossier de {sel.user}</h6>
            <IconBtn icon="flaticon-close" title="Fermer" variant="neutral" onClick={() => setSelected(null)} />
          </div>
          <p className="fs-15 mb-10">
            Soumis le {sel.date} — statut : <Badge>{sel.status}</Badge>
          </p>
          {sel.reason && (
            <p className="fs-15 mb-10">
              Motif du rejet : <strong>{sel.reason}</strong>
            </p>
          )}
          <ul>
            {sel.docs.map((d, i) => (
              <li key={i} className="fs-15 mb-10">
                <i className="flaticon-document" /> {d.label} — <strong>{d.file}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function AdminCategories() {
  const [cats, setCats] = useCategories();
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState("");

  const add = (e) => {
    e.preventDefault();
    const title = name.trim();
    if (!title || cats.some((c) => c.title.toLowerCase() === title.toLowerCase())) return;
    const id = Math.max(0, ...cats.map((c) => Number(c.id) || 0)) + 1;
    setCats([...cats, { id, title, subItems: [] }]);
    setName("");
  };
  const saveEdit = (id) => {
    const title = draft.trim();
    if (title) setCats(cats.map((c) => (c.id === id ? { ...c, title } : c)));
    setEditing(null);
  };
  const remove = (id) => {
    const item = cats.find((c) => c.id === id);
    askReason({
      title: "Supprimer cette catégorie",
      subject: item ? item.title : "",
      confirmLabel: "Supprimer",
      onConfirm: () => setCats(cats.filter((c) => c.id !== id)),
    });
  };

  return (
    <>
      <form onSubmit={add} className="wg-box flex items-center gap-10 flex-wrap" style={{ marginBottom: 24 }}>
        <input
          style={{ ...inputStyle, flex: "1 1 240px", width: "auto" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nouvelle catégorie (ex. : Location de matériel)"
        />
        <button type="submit" className="tf-btn">
          Ajouter
          <i className="icon-arrow-top-right" />
        </button>
      </form>
      <DataTable
        title="Catégories de prestataires"
        columns={[
          {
            key: "title",
            label: "Catégorie",
            render: (r) =>
              editing === r.id ? (
                <input
                  autoFocus
                  style={{ ...inputStyle, padding: "8px 10px" }}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(r.id)}
                />
              ) : (
                r.title
              ),
          },
          {
            key: "actions",
            label: "Actions",
            sortable: false,
            render: (r) =>
              editing === r.id ? (
                <div className="flex gap-10">
                  <IconBtn icon="flaticon-check" title="Enregistrer" variant="success" onClick={() => saveEdit(r.id)} />
                  <IconBtn icon="flaticon-close" title="Annuler" variant="neutral" onClick={() => setEditing(null)} />
                </div>
              ) : (
                <div className="flex gap-10">
                  <IconBtn
                    icon="flaticon-edit"
                    title="Renommer"
                    variant="neutral"
                    onClick={() => {
                      setEditing(r.id);
                      setDraft(r.title);
                    }}
                  />
                  <IconBtn icon="flaticon-close-1" title="Supprimer" variant="danger" onClick={() => remove(r.id)} />
                </div>
              ),
          },
        ]}
        rows={cats}
        empty="Aucune catégorie."
      />
      <p className="fs-14" style={{ opacity: 0.7 }}>
        Les catégories apparaissent dans le menu, la recherche d&apos;accueil, l&apos;annuaire et les formulaires de service.
      </p>
    </>
  );
}

function AdminServices() {
  const [services, setServices] = useStore("kelele:services", SEED_SERVICES);
  const apply = (id, status, reason) =>
    setServices(services.map((s) => (s.id === id ? { ...s, status, reason: reason || "" } : s)));
  const decide = (id, status) => {
    if (status !== "Refusé") return apply(id, status);
    const item = services.find((x) => x.id === id);
    askReason({
      title: "Refuser ce service",
      subject: item ? item.title : "",
      confirmLabel: "Refuser",
      onConfirm: (reason) => apply(id, status, reason),
    });
  };
  return (
    <DataTable
      title="Services soumis par les prestataires"
      columns={[
        { key: "title", label: "Service" },
        { key: "category", label: "Catégorie" },
        { key: "city", label: "Ville" },
        { key: "status", label: "Statut", render: (r) => <Badge>{r.status}</Badge> },
        {
          key: "actions",
          label: "Actions",
          sortable: false,
          render: (r) => (
            <div className="flex gap-10">
              <IconBtn icon="flaticon-check" title="Publier" variant="success" onClick={() => decide(r.id, "Publié")} />
              <IconBtn icon="flaticon-close" title="Refuser" variant="danger" onClick={() => decide(r.id, "Refusé")} />
            </div>
          ),
        },
      ]}
      rows={services}
    />
  );
}

function AdminEvents() {
  const [events, setEvents] = useStore("kelele:events", SEED_EVENTS);
  const apply = (id, status, reason) =>
    setEvents(events.map((e) => (e.id === id ? { ...e, status, reason: reason || "" } : e)));
  const decide = (id, status) => {
    if (status !== "Refusé") return apply(id, status);
    const item = events.find((x) => x.id === id);
    askReason({
      title: "Refuser cet événement",
      subject: item ? item.title : "",
      confirmLabel: "Refuser",
      onConfirm: (reason) => apply(id, status, reason),
    });
  };
  return (
    <DataTable
      title="Événements"
      columns={[
        { key: "title", label: "Événement" },
        { key: "owner", label: "Organisateur" },
        { key: "date", label: "Date" },
        { key: "city", label: "Ville" },
        { key: "status", label: "Statut", render: (r) => <Badge>{r.status}</Badge> },
        {
          key: "actions",
          label: "Actions",
          sortable: false,
          render: (r) => (
            <div className="flex gap-10">
              <IconBtn icon="flaticon-check" title="Publier" variant="success" onClick={() => decide(r.id, "Publié")} />
              <IconBtn icon="flaticon-close" title="Refuser" variant="danger" onClick={() => decide(r.id, "Refusé")} />
            </div>
          ),
        },
      ]}
      rows={events}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Profil : l'e-mail n'est pas modifiable                              */
/* ------------------------------------------------------------------ */
function ProfileForm({ fields }) {
  const [saved, setSaved] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
      }}
      className="wg-box"
    >
      {fields.map((f) => (
        <Field key={f.name} label={f.label}>
          <input
            style={{ ...inputStyle, ...(f.readOnly ? { background: "#f4f4f6", cursor: "not-allowed" } : {}) }}
            type={f.type}
            name={f.name}
            readOnly={f.readOnly}
            disabled={f.readOnly}
            onChange={() => setSaved(false)}
          />
          {f.readOnly && <span className="fs-14" style={{ opacity: 0.7 }}>L&apos;adresse e-mail ne peut pas être modifiée.</span>}
        </Field>
      ))}
      <button className="tf-btn" type="submit">
        Enregistrer
        <i className="icon-arrow-top-right" />
      </button>
      {saved && <p className="fs-15 fw-5 mt-20">Modifications enregistrées.</p>}
    </form>
  );
}

function Kpis({ kpis }) {
  return (
    <div
      className="section-icons"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 16,
      }}
    >
      {kpis.map((k, i) => (
        <div
          key={i}
          className="wg-box"
          style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 16px", margin: 0 }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              flexShrink: 0,
              borderRadius: "50%",
              background: "#f7f0da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            <i className={k.icon} />
          </div>
          <div style={{ minWidth: 0 }}>
            <h6 className="fs-15" style={{ margin: 0 }}>
              {k.label}
            </h6>
            <span className="fs-26 fw-5" style={{ color: "var(--Secondary, #c9a84c)" }}>
              {k.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const PANELS = {
  services: ServicesPanel,
  kyc: KycPanel,
  events: EventsPanel,
  tickets: TicketsPanel,
  adminKyc: AdminKyc,
  adminServices: AdminServices,
  adminCategories: AdminCategories,
  adminEvents: AdminEvents,
};

export default function KDashboard({ role, section = "" }) {
  const cfg = roles[role];
  const [open, setOpen] = useState(false);
  const page = cfg.pages[section] || cfg.pages[""];
  const base = `/espace/${role}`;
  const Panel = page.kind ? PANELS[page.kind] : null;

  return (
    <>
      <ReasonHost />
      <div className="page-title style-9" style={{ margin: "24px auto 0", padding: "36px 48px" }}>
        <div className="tf-container">
          <div className="row items-center">
            <div className="col-lg-8">
              <div className="content">
                <div className="author-item">
                  <div className="author-item-img">
                    <Image alt="" src="/images/avatar/review-1.png" width={72} height={72} style={{ width: 72, height: 72, borderWidth: 5 }} />
                  </div>
                </div>
                <div className="title">
                  <h2 className="font-cardo fw-7" style={{ fontSize: 28, lineHeight: 1.25, marginBottom: 6 }}>
                    {cfg.welcome}
                  </h2>
                  <p className="fs-15">{cfg.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <Link
                  className="tf-btn style-secondary"
                  href={cfg.cta.href}
                  onClick={() => window.dispatchEvent(new Event("kelele:new"))}
                >
                  {cfg.cta.label}
                  <i className="icon-arrow-top-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content pt-0">
        <div className="page-inner tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-xl-3 col-lg-12">
                <div className="dashboard_navigationbar">
                  <div className={`dropbtn ${open ? "show" : ""}`} onClick={() => setOpen((o) => !o)}>
                    <i className="icon-home" /> Navigation
                  </div>
                  <div className={`instructors-dashboard ${open ? "show" : ""}`}>
                    <div className="dashboard-title">
                      {cfg.title.toUpperCase()}
                      {cfg.nav.map((item) => (
                        <Link
                          key={item.slug}
                          className={`dashboard-item ${item.slug === section ? "active" : ""}`}
                          href={item.slug ? `${base}/${item.slug}` : base}
                        >
                          <i className={item.icon} />
                          {item.label}
                        </Link>
                      ))}
                      <Link className="dashboard-item" href="/connexion">
                        <i className="flaticon-export" />
                        Déconnexion
                      </Link>
                    </div>
                    <div className="dashboard-title" style={{ marginTop: 16 }}>
                      CHANGER D&apos;ESPACE
                      {roleOrder
                        .filter((r) => r !== role)
                        .map((r) => (
                          <Link key={r} className="dashboard-item" href={`/espace/${r}`}>
                            <i className="flaticon-user" />
                            {roles[r].label}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-12">
                <div className="section-dashboard-right">
                  <h6 className="fw-5 fs-22 mb-20">{page.title}</h6>
                  {page.note && <p className="fs-15 mb-20">{page.note}</p>}
                  {page.kpis && <Kpis kpis={page.kpis} />}
                  {Panel && <Panel />}
                  {page.table && (
                    <ActionTable
                      key={`${role}/${section}`}
                      table={page.table}
                      actions={ACTIONS[`${role}/${section}`]}
                    />
                  )}
                  {page.tickets && (
                    <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                      {page.tickets.map((t, i) => (
                        <div key={i} className="wg-box">
                          <h6 className="fw-5">{t.event}</h6>
                          <p className="fs-15">{t.place}</p>
                          <p className="fs-15">{t.date}</p>
                          <div
                            style={{
                              margin: "12px 0",
                              height: 120,
                              width: 120,
                              border: "2px dashed #999",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 13,
                            }}
                          >
                            QR code
                          </div>
                          <p className="fs-15 fw-5">{t.state}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {page.form && <ProfileForm fields={page.form} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
