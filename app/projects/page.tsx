import fs from 'fs';
import path from 'path';
import ProjectsClient from './ProjectsClient';

interface Project {
  id: string;
  title: string;
  image: string;
  categories: string[];
  year: string;
  location: string;
}

export default function ProjectsPage() {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  let projects: Project[] = [];

  try {
    if (fs.existsSync(projectsDir)) {
      const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      projects = projectFolders.map((folder, index) => {
        const folderPath = path.join(projectsDir, folder);
        const files = fs.readdirSync(folderPath);
        const images = files.filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file));
        
        // Dynamic categories based on folder name
        let categories = ["Branding", "Print Design"];
        if (folder.toLowerCase().includes('optics')) categories = ["Retail", "Signage"];
        if (folder.toLowerCase().includes('mobile')) categories = ["Commercial", "Identity"];
        if (folder.toLowerCase().includes('samer')) categories = ["Corporate", "Branding"];

        return {
          id: (index + 1).toString().padStart(2, '0'),
          title: folder,
          // Encode spaces for URL
          image: images.length > 0 ? `/projects/${encodeURIComponent(folder)}/${encodeURIComponent(images[0])}` : '/hero.png',
          categories: categories,
          year: "2026",
          location: "Pakistan"
        };
      });
    }
  } catch (error) {
    console.error("Error loading projects:", error);
  }

  return <ProjectsClient projects={projects} />;
}
