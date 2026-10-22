export const profile = {
  name: "Kavya Goel",
  email: "kavyagoell10@gmail.com",
  uniEmail: "kg8604@srmist.edu.in",
  phone: "9560707146",
  // Add real URLs when available — left empty on purpose.
  linkedin: "https://www.linkedin.com/in/kavya-goel-276a9330b?trk=contact-info",
  github: "",
  resume: "", // e.g. "/downloads/kavya-goel-resume.pdf"
};

export const skills: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["Python", "SQL", "C", "JavaScript"] },
  { title: "Data & analytics", items: ["Data Science", "Pandas", "NumPy", "Power BI", "Exploratory data analysis", "Dashboarding", "Data visualization"] },
  { title: "Machine learning & AI", items: ["Scikit-learn", "TensorFlow", "Random Forest", "XGBoost", "LightGBM", "LSTM", "SHAP", "Generative AI"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Database design", "Query writing", "Data preprocessing"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs", "JWT authentication", "Role-based access control"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "JavaScript"] },
  { title: "Testing & collaboration", items: ["Functional testing", "Test case design", "Bug identification", "Requirements analysis", "Communication", "Teamwork", "Problem-solving"] },
];

export const projects = [
  {
    no: "01",
    name: "VIGIL",
    subtitle: "AI-Based Disaster Risk Prediction & Management System",
    points: [
      "Predicts floods, cyclones, droughts and heatwaves using weather and NASA POWER data.",
      "Cleaned and preprocessed data; trained and evaluated Random Forest, XGBoost, LightGBM and LSTM models.",
      "Used SHAP to explain model predictions.",
      "Interactive dashboard and automated alerts built with Flask and MongoDB.",
    ],
    tags: ["Python", "Flask", "TensorFlow", "MongoDB", "Machine learning", "SHAP", "OpenWeatherMap API", "NASA POWER API"],
  },
  {
    no: "02",
    name: "TeamPulse",
    subtitle: "MERN Team Collaboration Platform",
    points: [
      "Task management and team communication platform with a modular structure.",
      "REST APIs with JWT authentication and role-based access control.",
      "Responsive dashboards with MongoDB integration.",
      "Functional testing across user roles.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
];

export const focus = [
  "Data analysis and visualization",
  "Predictive modeling and machine learning",
  "AI-driven application development",
  "REST API and full-stack web development",
  "Database design and management",
];
