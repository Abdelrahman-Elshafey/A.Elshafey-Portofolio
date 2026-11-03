import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import { LANGUAGES, localizePath } from './lib/locale.js';

// One page per language ("/", "/de", "/fr", "/it") with all sections on it, plus a
// case-study page per project. The old "/projects" address scrolls to the projects section.
export default function App() {
  return (
    <Routes>
      {LANGUAGES.map((lang) => {
        const home = localizePath('/', lang);
        return (
          <Route key={lang} path={home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Navigate to={localizePath('/#projects', lang)} replace />} />
            <Route path="projects/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Navigate to={home} replace />} />
          </Route>
        );
      })}
    </Routes>
  );
}
