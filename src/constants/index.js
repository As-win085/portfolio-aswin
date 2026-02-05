const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Internships",
    link: "/internships",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1hplroFtrA15dv7YzYOO_73am13nNMUEV/view?usp=sharing",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const expCards = [
  {
    review: "Druv360° is a Kochi-based, comprehensive startup incubator and business consultancy, with a branch in Vytila, Kerala, specializing in nurturing MSMEs and startups through services like business planning, legal compliance, and digital marketing. They focus on transforming ideas into reality by providing mentorship, and technical support to enhance business growth and digital presence. ",
    imgPath: "/images/druvImg.png",
    name: "Druv360°",
    logoPath: "/images/druv.png",
    title: "Python Full Stack Developer",
    date: "October 2025 - Present",
    responsibilities: [
      "Working as a Python Developer Intern on real-time client projects.",
      "Gaining hands-on experience in full-stack development and project execution.",
      "Develop, test, and maintain full-stack applications using Python and Node.js to meet client requirements.",
      "Exposure to industry practices and end-to-end software development lifecycle (SDLC).",
    ],
  },
  {
    review: "Quest Innovative Solutions is an ISO-certified IT company founded in 2000 and based in Cochin, India, specializing in custom software development, embedded systems, and IT training. They provide services in web/mobile app development, cyber security, and cloud consulting for international clients. The firm is known for developing operational software to minimize human intervention. ",
    imgPath: "/images/quest.png",
    logoPath: "/images/quest.png",
    name: "Quest Innovative Solutions",
    title: "Data Science Intern",
    date: "March 2025 - May 2025",
    responsibilities: [
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets using Python.",
      "Built and evaluated supervised and unsupervised machine learning models to solve business-oriented problems.",
      "Created visualizations using Matplotlib and Seaborn to communicate insights and model results.",
      "Collaborated with the team to translate problem statements into data-driven solutions and documented findings.",
    ],
  },
  {
    review: "Verzeo is a Bengaluru-based, AI-driven EdTech platform founded in 2018 that provides multi-disciplinary training, internships, and project-based learning to students. It offers mentor-led, online courses in fields like AI and technology, aiming to bridge the industry-academia gap with accessible, live, and interactive education. ",
    imgPath: "/images/verzeoImg.png",
    logoPath: "/images/verzeo.png",
    name: "Verzeo",
    title: "Cloud Computing Intern",
    date: "December 2023 - February 2025",
    responsibilities: [
      "Worked with Microsoft Azure services to deploy and manage cloud resources such as virtual machines, storage, and networking components.",
      "Assisted in configuring cloud environments, monitoring resources, and understanding cost management and security basics in Azure.",
      "Gained hands-on experience with Azure Portal, resource groups, and basic cloud architecture concepts.",
      "Collaborated with the team to support cloud-based solutions and documented configurations and learnings.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
];

const techStackImgs = [
  {
    name: "Express.js",
    imgPath: "/images/logos/ex.png",
  },
  {
    name: "Django",
    imgPath: "/images/logos/dj.png",
  },
  {
    name: "Java",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/SQL.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/Mongo.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const softwareProjects = [
  {
    name: "Smart Expense and Budget Management System",
    img: "/images/slider3.png",
    description: [
      "A Smart Expense & Budget Management System helps users track income and expenses in a structured and organized way.",
      "Enables category-wise expense recording and budget creation to control monthly spending.",
      "Provides visual reports and analytics to understand spending patterns and trends.",
      "Sends alerts or notifications when users approach or exceed budget limits.",
      "Ensures secure access and data management with a user-friendly, responsive interface."
    ],
    gitRepo: "https://github.com/As-win085/smart-expense-and-budget-management-system",
    techStack: ["React.js", "Python", "Django", "mySQL","Celery"],
    background: "from-orange-500/20 via-red-500/10 to-black",
  },
  {
    name: "Recruitment API",
    img: "/images/slider3.png",
    description: [
      "A Recruitment API provides a set of endpoints for managing job listings, candidate applications, and recruitment workflows.",
      "Supports CRUD operations for job postings, candidate profiles, and application tracking.",
      "Includes authentication and authorization mechanisms to secure sensitive data.",
      "Integrates with external systems like email services and ATS platforms.",
      "Designed to be scalable and maintainable for enterprise-level recruitment needs.",
    ],
    gitRepo: "https://github.com/As-win085/recruitment-api",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    background: "linear-gradient(135deg, #2c0a0a, #ff6600)",
  },
  {
    name: "Twitter Clone API",
    img: "/images/slider3.png",
    description: [
      "A Twitter Clone API provides a set of endpoints for managing tweets, user profiles, and social interactions.",
      "Supports CRUD operations for tweets, user profiles, and follower relationships.",
      "Includes authentication and authorization mechanisms to secure sensitive data.",
    ],
    gitRepo: "https://github.com/As-win085/Software-Development/tree/main/Node.js%26Express/twitter-clone-backend",
    techStack: ["Node.js", "Express.js", "MySQL"],
    background: "linear-gradient(135deg, #2c0a0a, #ff6600)",
  },
   {
    name: "Weather Forecasting",
    img: "/images/slider3.png",
    description: [
      "A Smart Expense & Budget Management System helps users track income and expenses in a structured and organized way.",
      "Enables category-wise expense recording and budget creation to control monthly spending.",
      "Provides visual reports and analytics to understand spending patterns and trends.",
      "Sends alerts or notifications when users approach or exceed budget limits.",
      "Ensures secure access and data management with a user-friendly, responsive interface."
    ],
    gitRepo: "https://weathercast33.ccbp.tech/",
    techStack: ["HTML", "CSS", "JavaScript"],
    background: "from-blue-500/20 via-purple-500/10 to-black",
  },

  
] 


const dataScienceProjects = [
  {
    name: "Digi Net",
    img: "/images/slider3.png",
    description: [
      "Deep Learning Framework: The model is built using TensorFlow and Keras, leveraging a Convolutional Neural Network (CNN) specifically optimized for spatial hierarchy in 2D images.Preprocessing Pipeline: To ensure faster convergence, the $28 \times 28$ grayscale images are normalized to a $[0, 1]$ range, and the labels are converted via one-hot encoding for categorical classification.",
      "Hierarchical Architecture: The network utilizes multiple Convolutional layers for feature extraction (edges, curves, and loops) and Max-Pooling layers for spatial downsampling to reduce computational load.",
      "Regularization & Optimization: To prevent overfitting, the architecture incorporates Dropout layers, which randomly deactivate neurons during training, ensuring the model generalizes well to new, unseen handwriting.",
      "Performance Analytics: The project moves beyond simple accuracy by utilizing a Confusion Matrix to identify specific digit misclassifications (e.g., distinguishing a '4' from a '9') and visualizing loss/accuracy curves."
    ],
    gitRepo: "https://github.com/As-win085/Data-Science-Projects/tree/main/Deep-Learning/DigiNet%3A%20(Handwritten-Digit-Recognition)",
    techStack: ["Python", "TensorFlow", "Keras", "Matplotlib","Seaborn","Numpy","Pandas"],
    background: "from-blue-500/20 via-purple-500/10 to-black",
  },
  {
    name: "Fashon Image Classifier",
    img: "/images/slider3.png",
    description: [
      "Hierarchical Feature Extraction: The model utilizes multiple Convolutional layers to detect low-level features (edges of a sleeve) and high-level features (the silhouette of a sneaker), providing a deeper understanding of garment structure.",
      "Advanced Regularization: To combat the complexity of fashion textures, the architecture integrates Dropout and Batch Normalization, ensuring the model doesn't overfit to specific patterns in the training set and remains stable during learning.",
      "Data Transformation: Input images are normalized to a scale of 0 to 1, and class labels are processed via One-Hot Encoding, enabling the final Softmax layer to output clear probability distributions across 10 categories.",
      "Comprehensive Evaluation: Performance is measured using a Confusion Matrix, which is particularly useful for this dataset to identify 'class confusion' (e.g., when the model misidentifies a 'Shirt' as a 'T-shirt')."
    ],
    gitRepo: "https://github.com/As-win085/Data-Science-Projects/tree/main/Deep-Learning/Fashion-Image-Classifier",
    techStack: ["Python", "TensorFlow", "Keras", "Matplotlib","Seaborn","Numpy","Pandas"],
    background: "from-blue-500/20 via-purple-500/10 to-black",
  },
  {
    name: "Aqua Check: Safe Water Potability Classifier",
    img: "/images/slider3.png",
    description: [
      "Implemented and tuned an SVM classifier, achieving strong performance in classifying water potability.",
      "Applied techniques such as feature scaling (StandardScaler/MinMaxScaler) and data visualization for deeper insights.",
      "Evaluated model using confusion matrix, accuracy, precision, and recall metrics.",
      "Gained practical experience in building classifiers for real-world environmental safety data."
    ],
    gitRepo: "https://github.com/As-win085/Data-Science-Projects/tree/main/supervised/Aqua-Check-Safe-Water-Portability-Classifier",
    techStack: ["Python", "Matplotlib","Seaborn","Numpy","Pandas"],
    background: "from-blue-500/20 via-purple-500/10 to-black",
  },
  {
    name: "Gluco-Track: Blood Glucose Level Prediction System",
    img: "/images/slider3.png",
    description: [
      "Multimodal Data Integration: The system synthesizes diverse non-invasive data streams—including heart rate (BPM), skin temperature, and macronutrient intake—to identify complex patterns that influence glycemic variability.",
      "Regression-Based Forecasting: Unlike simple classifiers, this project utilizes advanced Regression algorithms (such as Random Forest Regressor or Gradient Boosting) to predict continuous numerical values for blood glucose levels ($mg/dL$).",
      "Temporal Feature Engineering: The model accounts for the \"lag effect\" in metabolic processes, processing time-series data to understand how a specific meal or physical activity affects glucose levels hours later.",
      "Precision Healthcare Analytics: The project evaluates performance using metrics like Mean Absolute Error (MAE) and Root Mean Square Error (RMSE), ensuring the predictions stay within clinically safe margins for patient monitoring."
    ],
    gitRepo: "https://github.com/As-win085/Data-Science-Projects/tree/main/supervised/Gluco-Track",
    techStack: ["Python", "Matplotlib","Seaborn","Numpy","Pandas"],
    background: "from-blue-500/20 via-purple-500/10 to-black",
  },
]


export { words, navLinks,expCards, expLogos, techStackIcons, techStackImgs,softwareProjects,dataScienceProjects };
