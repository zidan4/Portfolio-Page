import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-4 mt-4">
            <h2 className="text-xl">{project.title}</h2>
            <p>{project.description}</p>
            {project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
            {project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
