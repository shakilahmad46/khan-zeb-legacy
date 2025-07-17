import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-16 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="memorial-card">
              <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
              <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The page you're looking for doesn't exist. You may have mistyped the address 
                or the page has been moved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="cta-button">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </a>
                <button 
                  onClick={() => window.history.back()} 
                  className="cta-button-secondary"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
