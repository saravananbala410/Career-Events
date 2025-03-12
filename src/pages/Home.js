import { Link } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Connecting people of all faiths through events and community support.</p>
      <Link to="/events" className="cta-button">Explore Events</Link>
    </motion.div>
  );
}

export default Home;

