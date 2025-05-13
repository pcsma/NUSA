import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Home from './components/Home';
import Publication from './components/Publication';
import People from './components/People';
import Footer from './components/Footer';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Policy from './components/Policy';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectContent from './components/FeaturedProjectContent';
import { client, urlFor } from "./client";
import defaultBg from "./assets/bg2.jpg"; // ✅ Default background image
import ProjectArticles from './components/ProjectArticles';
import ProjectArticleDetail from './components/ProjectArticledetail';
import ResearchTeam from './components/ResearchTeam';
import PublicationDetail from './components/PublicationDetail';
import PersonOverview from './components/PersonOverview';

function App() {
  const location = useLocation(); 
  const [heroData, setHeroData] = useState({
    bgImage: defaultBg, 
    title: 'Philippine Center for Social Media Analytics',
    description: '', // ✅ Added description state
  });

  useEffect(() => {
    const path = location.pathname;
    
  
    // Match for article detail page
    const articleMatch = path.match(/^\/project\/[^/]+\/articles\/([^/]+)$/);
    const projectMatch = path.match(/^\/project\/([^/]+)/);
    const publicationMatch = path.match(/^\/publications\/([^/]+)$/);
    const personMatch = path.match(/^\/people\/([^/]+)$/);

    if (publicationMatch) {
      const publicationSlug = decodeURIComponent(publicationMatch[1]);
      const query = `*[_type == "publication" && slug.current == $slug][0]{
        publicationName,
        "bgImage": image.asset->url,
        publicationDescription
      }`;
    
      client.fetch(query, { slug: publicationSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: data.bgImage || defaultBg,
              title: data.publicationName || "Publication",
              // description: data.publicationDescription || "",
            });
          }
        })
        .catch(console.error);
    }
  
    else if (articleMatch) {
      // Handle article hero
      const articleSlug = decodeURIComponent(articleMatch[1]);
      const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        "bgImage": image.asset->url,
        "description": excerpt
      }`;
  
      client.fetch(query, { slug: articleSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: data.bgImage || defaultBg,
              title: data.title || "Article",
              description: data.description || "",
            });
          }
        })
        .catch(console.error);
    } 
    else if (personMatch) {
      const personSlug = decodeURIComponent(personMatch[1]);
      const query = `*[_type == "researchTeamLab" && slug.current == $slug][0]{
        name,
        role,
        image,
      }`;
    
      client
        .fetch(query, { slug: personSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: defaultBg,
              person: {
                name: data.name,
                role: data.role,
                image: urlFor(data.image).width(300).height(300).fit("crop").url() 
              }
            });                   
          }
        })
        .catch(console.error);
    }    
    else if (projectMatch) {
      // Handle project hero
      const projectSlug = projectMatch[1];
      const query = `*[_type == "featuredProject" && slug.current == $slug][0]{
        title, 
        description, 
        "bgImage": image.asset->url
      }`;
  
      client.fetch(query, { slug: projectSlug })
        .then((data) => {
          if (data) {
            setHeroData({
              bgImage: data.bgImage || defaultBg,
              title: data.title || "Philippine Center for Social Media Analytics",
              description: data.description || "",
            });
          }
        })
        .catch(console.error);
  
    } else {
      // Default hero
      setHeroData({
        bgImage: defaultBg,
        title: "Philippine Center for Social Media Analytics",
        description: "",
      });
    }
  }, [location]);
  

  return (
    <>
      <NavBar />
      <Hero bgImage={heroData.bgImage} title={heroData.title} description={heroData.description} person={heroData.person}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publication' element={<Publication />} />
        <Route path='/people' element={<People />} />
        <Route path="/people/:slug" element={<PersonOverview />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/featured-projects' element={<FeaturedProjects />} />
        <Route path="/project/:id" element={<Navigate to="about" replace />} />
        <Route path="/project/:id/about" element={<ProjectContent />} />
        <Route path="/project/:id/articles" element={<ProjectArticles />} />
        <Route path="/project/:id/articles/:articleId" element={<ProjectArticleDetail />} />
        <Route path="/project/:id/researchTeam" element={<ResearchTeam />} />
        <Route path="/publications/:publicationId" element={<PublicationDetail />} />
        <Route path="*" element={<h1 className="text-center p-6">404 - Page Not Found</h1>} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
