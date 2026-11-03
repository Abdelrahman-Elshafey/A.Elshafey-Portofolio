import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import { LANGUAGES, localizePath } from './lib/locale.js';

// The same pages exist once per language: "/", "/de", "/fr", "/it".
export default function App() {
  return (
    <Routes>
      {LANGUAGES.map((lang) => {
        const home = localizePath('/', lang);
        return (
          <Route key={lang} path={home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Navigate to={home} replace />} />
          </Route>
        );
      })}
    </Routes>
  );
}
