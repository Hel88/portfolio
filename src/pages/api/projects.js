import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Déterminer le chemin du fichier JSON
    const filePath = path.join(process.cwd(), "data", "projects.json");

    // Lire et parser le fichier JSON
    const fileData = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(fileData);

    res.status(200).json(projects);
  } catch (error) {
    console.error("Erreur lors du chargement des projets :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
}
