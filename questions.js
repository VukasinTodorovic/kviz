const questions = [
    {
      question: "Koji je najpopularniji programski jezik za web development?",
      options: ["Java", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "Koja tvrtka razvija operativni sustav Android?",
      options: ["Apple", "Microsoft", "Google"],
      answer: "Google"
    },
    {
      question: "Koji je najpoznatiji version control sustav za praćenje izmjena u programskom kodu?",
      options: ["Git", "SVN", "Mercurial"],
      answer: "Git"
    },
    {
      question: "Koja je najveća društvena mreža na svijetu?",
      options: ["Instagram", "Facebook", "Twitter"],
      answer: "Facebook"
    },
    {
      question: "Koji je najpoznatiji računalni festival na svijetu?",
      options: ["CES", "E3", "DEF CON"],
      answer: "DEF CON"
    },
    {
      question: "Koji je najpoznatiji programski jezik za analizu podataka?",
      options: ["R", "C#", "Ruby"],
      answer: "R"
    },
    {
      question: "Koji je najpoznatiji operacijski sustav za mobilne uređaje?",
      options: ["iOS", "Windows", "Linux"],
      answer: "iOS"
    },
    {
      question: "Koja je najveća online platforma za programiranje i dijeljenje projekata?",
      options: ["GitHub", "Bitbucket", "GitLab"],
      answer: "GitHub"
    },
    {
      question: "Koji je najpoznatiji jezik za razvoj mobilnih aplikacija?",
      options: ["Swift", "Java", "C#"],
      answer: "Swift"
    },
    {
      question: "Koja je najpoznatija tehnologija za izradu single-page web aplikacija?",
      options: ["React", "Angular", "Vue.js"],
      answer: "Angular"
    },
    {
      question: "Koji je najpoznatiji CMS (Content Management System) za izradu web stranica?",
      options: ["WordPress", "Drupal", "Joomla"],
      answer: "WordPress"
    },
    {
      question: "Koji je najpoznatiji programski jezik za analizu podataka u statistici?",
      options: ["Python", "R", "Matlab"],
      answer: "R"
    },
    {
      question: "Koji je najpoznatiji programski jezik za razvoj video igara?",
      options: ["C++", "Python", "Ruby"],
      answer: "C++"
    },
    {
      question: "Koja je najpopularnija baza podataka?",
      options: ["MySQL", "MongoDB", "Oracle"],
      answer: "MySQL"
    },
    {
      question: "Koji je najpoznatiji alat za upravljanje projektima?",
      options: ["Jira", "Trello", "Asana"],
      answer: "Jira"
    },
    {
      question: "Koji je najpoznatiji jezik za izradu web stranica?",
      options: ["HTML", "CSS", "JavaScript"],
      answer: "HTML"
    },
    {
      question: "Koji je najpoznatiji programski jezik za statističku analizu podataka?",
      options: ["Python", "R", "Java"],
      answer: "R"
    },
    {
      question: "Koja je najpoznatija tehnologija za razvoj mobilnih aplikacija na platformi iOS?",
      options: ["React Native", "Swift", "Java"],
      answer: "Swift"
    },
    {
      question: "Koji je najpoznatiji framework za razvoj web aplikacija u jeziku Python?",
      options: ["Flask", "Django", "Bottle"],
      answer: "Django"
    },
    {
      question: "Koja je najpoznatija tehnologija za izradu desktop aplikacija?",
      options: ["Electron", "JavaFX", "Swift"],
      answer: "Electron"
    },
    {
      question: "Koji je najpoznatiji algoritam za pretraživanje na webu?",
      options: ["PageRank", "Dijkstra", "A*"],
      answer: "PageRank"
    },
    {
      question: "Koja je najpoznatija tehnologija za razvoj server-side web aplikacija u JavaScriptu?",
      options: ["Node.js", "Angular", "Express.js"],
      answer: "Node.js"
    },
    {
      question: "Koji je najpoznatiji operacijski sustav za serversko okruženje?",
      options: ["Windows Server", "Linux", "macOS"],
      answer: "Linux"
    },
    {
      question: "Koji je najpoznatiji format za razmjenu podataka na webu?",
      options: ["JSON", "XML", "CSV"],
      answer: "JSON"
    },
    {
      question: "Koja je najpoznatija platforma za izradu online trgovina?",
      options: ["Shopify", "WooCommerce", "Magento"],
      answer: "Shopify"
    },
    {
      question: "Koji je najpoznatiji jezik za izradu chatbotova?",
      options: ["Python", "JavaScript", "Ruby"],
      answer: "JavaScript"
    },
    {
      question: "Koja je najpoznatija platforma za izradu mobilnih igara?",
      options: ["Unity", "Unreal Engine", "Godot"],
      answer: "Unity"
    },
    {
      question: "Koji je najpoznatiji framework za razvoj Android aplikacija?",
      options: ["React Native", "Flutter", "Android Studio"],
      answer: "Android Studio"
    },
    {
      question: "Koji je najpoznatiji algoritam za strojno učenje?",
      options: ["K-means", "SVM", "Random Forest"],
      answer: "Random Forest"
    },
    {
      question: "Koja je najpoznatija platforma za izradu 3D modela?",
      options: ["Blender", "Maya", "AutoCAD"],
      answer: "Maya"
    },
    {
      question: "Koji je najpoznatiji algoritam za sortiranje?",
      options: ["Bubble sort", "Merge sort", "Quick sort"],
      answer: "Quick sort"
    },
    {
      question: "Koja je najpoznatija platforma za izradu API-ja?",
      options: ["REST", "SOAP", "GraphQL"],
      answer: "REST"
    },
    {
      question: "Koji je najpoznatiji operacijski sustav za Apple računalima?",
      options: ["macOS", "Windows", "Linux"],
      answer: "macOS"
    },
    {
      question: "Koja je najpoznatija platforma za izradu 2D animacija?",
      options: ["Adobe Animate", "Toon Boom Harmony", "Spine"],
      answer: "Toon Boom Harmony"
    },
    {
      question: "Koji je najpoznatiji framework za razvoj web aplikacija u jeziku JavaScript?",
      options: ["Angular", "React", "Vue.js"],
      answer: "React"
    },
    {
      question: "Koja je najpoznatija tehnologija za izradu nativnih mobilnih aplikacija?",
      options: ["React Native", "Flutter", "Xamarin"],
      answer: "React Native"
    },
    {
      question: "Koji je najpoznatiji algoritam za pretraživanje niza podataka?",
      options: ["Linear search", "Binary search", "Hashing"],
      answer: "Binary search"
    },
    {
      question: "Koja je najpoznatija platforma za izradu virtualne stvarnosti?",
      options: ["Oculus Rift", "HTC Vive", "PlayStation VR"],
      answer: "HTC Vive"
    },
    {
      question: "Koji je najpoznatiji algoritam za rješavanje problema putujućeg trgovca?",
      options: ["Dijkstra", "A*", "Genetski algoritam"],
      answer: "Genetski algoritam"
    },
    {
      question: "Koja je najpoznatija platforma za izradu interaktivnih vizualizacija podataka?",
      options: ["Tableau", "Power BI", "Google Data Studio"],
      answer: "Tableau"
    },
    {
      question: "Koji je najpoznatiji algoritam za kompresiju podataka?",
      options: ["Gzip", "LZ77", "Huffman"],
      answer: "Huffman"
    },
    {
      question: "Koja je najpoznatija platforma za izradu e-learning sadržaja?",
      options: ["Moodle", "Blackboard", "Canvas"],
      answer: "Moodle"
    },
    {
      question: "Koji je najpoznatiji algoritam za detekciju objekata u slikama?",
      options: ["Haar cascade", "YOLO", "SIFT"],
      answer: "YOLO"
    },
    {
      question: "Koja je najpoznatija platforma za izradu chatbotova bez kodiranja?",
      options: ["Dialogflow", "Chatfuel", "ManyChat"],
      answer: "Dialogflow"
    },
    {
      question: "Koji je najpoznatiji algoritam za klasifikaciju podataka?",
      options: ["Naive Bayes", "K-nearest neighbors", "Decision tree"],
      answer: "Decision tree"
    },
    {
      question: "Koja je najpoznatija platforma za izradu backend-a za web aplikacije?",
      options: ["Node.js", "Ruby on Rails", "ASP.NET"],
      answer: "Node.js"
    },
    {
      question: "Koji je najpoznatiji algoritam za izračun najkraćeg puta u grafu?",
      options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall"],
      answer: "Dijkstra"
    },
    {
      question: "Koja je najpoznatija platforma za izradu igara bez kodiranja?",
      options: ["Unity", "Construct", "GameMaker"],
      answer: "Construct"
    },
    {
      question: "Koji je najpoznatiji algoritam za strojno učenje u području obrade prirodnog jezika?",
      options: ["Naive Bayes", "Support Vector Machines", "Recurrent Neural Networks"],
      answer: "Recurrent Neural Networks"
    },
    {
      question: "Koja je najpoznatija platforma za izradu web scrapera?",
      options: ["Scrapy", "Beautiful Soup", "Puppeteer"],
      answer: "Scrapy"
    },
    {
      question: "Koji je najpoznatiji algoritam za sortiranje s vremenskom složenošću O(n log n)?",
      options: ["Quick sort", "Bubble sort", "Insertion sort"],
      answer: "Quick sort"
    },
    {
      question: "Koja je najpoznatija platforma za izradu AR (Augmented Reality) iskustava?",
      options: ["ARKit", "ARCore", "Vuforia"],
      answer: "ARKit"
    },
    {
      question: "Koji je najpoznatiji algoritam za grupiranje podataka?",
      options: ["K-means", "DBSCAN", "Hierarchical clustering"],
      answer: "K-means"
    },
    {
      question: "Koja je najpoznatija platforma za izradu interaktivnih web mapa?",
      options: ["Google Maps API", "Leaflet", "Mapbox"],
      answer: "Mapbox"
    } 
];
  
function getRandomQuestions() {
  const randomQuestions = [];
  const totalQuestions = questions.length;
  
  while (randomQuestions.length < 10) {
    const randomIndex = Math.floor(Math.random() * totalQuestions);
    const randomQuestion = questions[randomIndex];
  
  if (!randomQuestions.includes(randomQuestion)) {
    randomQuestions.push(randomQuestion);
  }
}
  
  return randomQuestions;
}
  