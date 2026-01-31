import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Skills } from "@/app/pages/Skills";
import { Projects } from "@/app/pages/Projects";
import { ProjectDetail } from "@/app/pages/ProjectDetail";
import { Experience } from "@/app/pages/Experience";
import { Resume } from "@/app/pages/Resume";
import { Certifications } from "@/app/pages/Certifications";
import { Contact } from "@/app/pages/Contact";
import { NotFound } from "@/app/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "experience", Component: Experience },
      { path: "resume", Component: Resume },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
