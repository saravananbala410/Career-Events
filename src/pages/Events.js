import { useState } from "react";
import "./Events.css";
import { motion } from "framer-motion";

function Events() {
  const events = [
    { title: "Web developer", date: "2025-03-12", location: "Chennai", category: "Interview", image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1741755070~exp=1741758670~hmac=f079c18230363b0d0455429f2f9010a00d2b2c8953c5d46a9af1c64b1d47c3ab&w=900" },
    { title: "Startup India", date: "2025-03-12", location: "Bangalore", category: "Govt Event", image: "https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1226.jpg?t=st=1741755251~exp=1741758851~hmac=70fcc41642e126329d1c0d0211cd0b96e895e2fce827559ab36fd38f7572a301&w=900" },
    { title: "Visit TamilNadu", date: "2025-03-22", location: "Madurai", category: "Tourist", image: "https://img.freepik.com/free-photo/reflection-clouds-lake-angkor-wat-temple-cambodia_181624-27631.jpg?t=st=1741755682~exp=1741759282~hmac=f0a0709b48935253210e1d96e45a95b42d189f12f07058eeb8ca62631252f398&w=1380" },
    { title: "AI Conference", date: "2025-04-05", location: "Coimbatore", category: "Tech Event", image: "https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?t=st=1741755468~exp=1741759068~hmac=da547d735f4649aecfc860a3cab93bf859ad75a6871db5730220b2dab100e53a&w=900" },
    { title: "Music Festival", date: "2025-04-10", location: "Chennai", category: "Entertainment", image: "https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?t=st=1741755817~exp=1741759417~hmac=4191cd5b89363ca59e364f0a5b5254863e6b6ace096bb67222372725241c9728&w=1800" },
    { title: "Food Expo", date: "2025-04-20", location: "Salem", category: "Entertainment", image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?t=st=1741755971~exp=1741759571~hmac=5884f9f4d4b39de7c27891386204dd79b097ffcd4ef66662b8e6b42cc6e1e7da&w=1380" },
    { title: "Tea Factory Ooty", date: "2025-03-22", location: "Madurai", category: "Tourist", image: "https://img.freepik.com/free-vector/isolated-indian-tea-chai-glass_1017-53966.jpg?t=st=1741756023~exp=1741759623~hmac=fbd8531a6c0f6a18d04331f505443648089e72ce584afa02d696564c888d8aeb&w=900" },
    { title: "Disaster Management Control", date: "2025-04-25", location: "Trichy", category: "Govt Event", image: "https://img.freepik.com/free-photo/aerial-view-flooding-natural-devastation_1268-26905.jpg?t=st=1741756063~exp=1741759663~hmac=6ef421c384a0f0c3740583b503bf9ee8dfd2dcba1f6443024c7c20f220e32129&w=1800" },
  ];
  
  const [filter, setFilter] = useState("All");
  
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);
  
  return (
    <div className="events">
      <h1>Events Filtering</h1>
      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Interview</option>
        <option>Govt Event</option>
        <option>Tourist</option>
        <option>Tech Event</option>
        <option>Entertainment</option>
      </select>
      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <motion.div 
            key={index} 
            className="event-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={event.image} alt={event.title} className="event-image"/>
            <h2>{event.title}</h2>
            <p>{event.date} - {event.location}</p>
            <p>Category: {event.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;
