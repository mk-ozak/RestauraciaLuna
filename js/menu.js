import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./constant.js";

const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

// zatvorený deň: skryje celý zoznam jedál (vrátane trvalej ponuky) a zobrazí len text zo Supabase
function denZatvoreny(tabNum, text) {
  const pane = document.getElementById("tab_first" + tabNum);
  if (!pane) return;
  const row = pane.querySelector(".row");
  if (row) row.style.display = "none";
  let note = pane.querySelector(".den-zatvorene");
  if (!note) {
    note = document.createElement("div");
    note.className = "den-zatvorene alt-font text-dark-gray text-center";
    pane.appendChild(note);
  }
  note.innerHTML = text;
  note.style.display = "";
}

// otvorený deň: zoznam jedál viditeľný, prípadný text zatvorenia skrytý
function denOtvoreny(tabNum) {
  const pane = document.getElementById("tab_first" + tabNum);
  if (!pane) return;
  const row = pane.querySelector(".row");
  if (row) row.style.display = "";
  const note = pane.querySelector(".den-zatvorene");
  if (note) note.style.display = "none";
}
const fmtCena = (v) => (v == null ? "" : Number(v).toFixed(2).replace(".", ",") + " €");
const fmtDatum = (iso) => { const d = new Date(iso + "T00:00:00"); return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`; };
const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; // lokálne, bez UTC posunu

function mondayOfThisWeek() {
  const d = new Date();
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); // 0 = pondelok
  d.setHours(0, 0, 0, 0);
  return d;
}

// aktívna záložka podľa dňa (pondelok je default v HTML)
const denTab = { 2: 2, 3: 3, 4: 4, 5: 5 }; // utorok–piatok
const dnes = new Date().getDay();
if (denTab[dnes]) {
  document.getElementById("tab_1")?.classList.remove("active");
  document.getElementById("tab_first1")?.classList.remove("active", "show");
  document.getElementById("tab_" + denTab[dnes])?.classList.add("active");
  document.getElementById("tab_first" + denTab[dnes])?.classList.add("active", "show");
}

const headers = { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` };
const monday = mondayOfThisWeek();
const friday = new Date(monday); friday.setDate(friday.getDate() + 4);

// riadenie stavu sekcie: loader → menu / technická porucha
function zobrazMenu() {
  const status = document.getElementById("menu-status");
  if (status) status.style.display = "none";
  const tabs = document.getElementById("menu-tabs");
  if (tabs) tabs.style.display = "";
}
function zobrazChybu() {
  const tabs = document.getElementById("menu-tabs");
  if (tabs) tabs.style.display = "none";
  const status = document.getElementById("menu-status");
  if (status) status.style.display = "";
  const box = status?.querySelector(".menu-status");
  if (box) box.classList.add("menu-status-error");
  const spinner = document.getElementById("menu-status-spinner");
  if (spinner) spinner.style.display = "none";
  set("menu-status-text",
    "Denné menu sa nám teraz nepodarilo načítať. " +
    "Ide o dočasnú technickú poruchu pri načítaní. Skúste, prosím, obnoviť stránku.");
  const actions = document.getElementById("menu-status-actions");
  if (actions) actions.style.display = "";
}

// fetch s timeoutom a opakovaním (mobilné siete / krátke výpadky Supabase)
async function fetchJSON(url, pokusy = 3) {
  for (let pokus = 1; ; pokus++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 8000);
    try {
      const r = await fetch(url, { headers, signal: ctrl.signal, cache: "no-store" });
      clearTimeout(t);
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      if (!Array.isArray(data)) throw new Error("neočakávaná odpoveď");
      return data;
    } catch (err) {
      clearTimeout(t);
      if (pokus >= pokusy) throw err;
      await new Promise((res) => setTimeout(res, 700 * pokus)); // postupné zdržanie
    }
  }
}

Promise.all([
  fetchJSON(`${SUPABASE_URL}/rest/v1/daily_menus?menu_date=gte.${toISO(monday)}&menu_date=lte.${toISO(friday)}&order=menu_date.asc`),
  fetchJSON(`${SUPABASE_URL}/rest/v1/permanent_menu?order=position.asc`),
])
  .then(([dni, trvale]) => {
    const prefix = ["po", "ut", "st", "sv", "pi"]; // pozor: štvrtok = "sv"
    for (let i = 0; i < 5; i++) {
      const dd = new Date(monday); dd.setDate(dd.getDate() + i);
      const d = dni.find((x) => x.menu_date === toISO(dd));
      const p = prefix[i];
      set("den" + (i + 1), fmtDatum(toISO(dd)));

      if (!d || d.status !== "open") { // sviatok / zatvorené → skry jedlá, zobraz len text
        denZatvoreny(i + 1, (d && d.note) ? d.note : "Zatvorené");
        continue;
      }
      denOtvoreny(i + 1);
      set(p + "01", d.soup1_name || "");
      set(p + "02", d.soup1_name ? "0,33 l, Al: " + (d.soup1_allergens || "") : "");
      set(p + "03", d.soup2_name || "");
      set(p + "04", d.soup2_name ? "0,33 l, Al: " + (d.soup2_allergens || "") : "");
      set(p + "05", d.main1_name || "");
      set(p + "06", fmtCena(d.main1_price));
      set(p + "07", (d.main1_portion || "") + ", Al: " + (d.main1_allergens || ""));
      set(p + "08", d.main2_name || "");
      set(p + "09", fmtCena(d.main2_price));
      set(p + "10", (d.main2_portion || "") + ", Al: " + (d.main2_allergens || ""));
    }
    for (let i = 1; i <= 6; i++) {
      const it = trvale.find((x) => x.position === i);
      document.querySelectorAll(".trvala-nazov-" + i).forEach((el) => (el.innerHTML = it?.name || ""));
      document.querySelectorAll(".trvala-cena-" + i).forEach((el) => (el.innerHTML = fmtCena(it?.price)));
      document.querySelectorAll(".trvala-popis-" + i).forEach((el) => (el.innerHTML = it ? (it.portion || "") + ", Al: " + (it.allergens || "") : ""));
    }
    zobrazMenu();
  })
  .catch((err) => {
    console.error("Chyba pri načítaní menu:", err);
    zobrazChybu();
  });
