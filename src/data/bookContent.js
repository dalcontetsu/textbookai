export const bookContent = [
    {
      id: 1,
      title: "Welcome to TextbookAI",
      description: "Revolutionizing textbook learning through AI-powered comprehension tools and personalized study experiences.",
      image: "/images/welcome.jpg",
      type: "intro"
    },
    {
      id: 2,
      title: "All-In-One Solution",
      description: "Unlike fragmented solutions that combine ChatGPT with legacy tools, TextbookAI provides a unified, purpose-built platform for textbook learning. Our integrated approach means everything you need is in one place.",
      image: "/images/all-in-one.jpg",
      type: "feature"
    },
    {
      id: 3,
      title: "Focus on Understanding",
      description: "We prioritize deep comprehension over quick answers, helping students master their course material rather than just completing assignments. Our AI-powered system ensures you grasp core concepts thoroughly.",
      image: "/images/understanding.jpg",
      type: "feature"
    },
    {
      id: 4,
      title: "Adaptive Learning",
      description: "Our sophisticated AI engine personalizes the learning experience, adjusting to each student's pace and learning style. The more you use TextbookAI, the better it understands how you learn best.",
      image: "/images/adaptive.jpg",
      type: "feature"
    },
    {
      id: 5,
      title: "Smart Technology",
      description: "Powered by advanced NLP and machine learning, our platform offers intelligent summaries, interactive quizzes, and real-time study assistance. Experience the future of educational technology.",
      image: "/images/smart-tech.jpg",
      type: "feature"
    },
    {
      id: 6,
      title: "Our Technology Stack",
      description: "TextbookAI leverages cutting-edge artificial intelligence including advanced text processing, vector-based semantic search, and adaptive learning algorithms that evolve with your progress.",
      image: "/images/tech-stack.jpg",
      type: "technology"
    },
    {
      id: 7,
      title: "Vision for the Future",
      description: "We're creating a future where every student has access to intelligent, personalized learning tools that make education more effective and engaging. Join us in transforming how students learn.",
      image: "/images/vision.jpg",
      type: "vision"
    }
  ];
  
  
  export const bookSettings = {
    flipDuration: 1000, // Duration of page flip animation in ms
    pageDisplayTime: 5000, // How long each page is displayed in ms
    autoPlay: true, // Whether book should auto-flip
    startPage: 0, // Initial page to display
  };
  
  export const getNextPage = (currentPage) => {
    return (currentPage + 1) % bookContent.length;
  };
  
  export const getPreviousPage = (currentPage) => {
    return currentPage === 0 ? bookContent.length - 1 : currentPage - 1;
  };
  
  export const getPageType = (page) => {
    return bookContent[page].type;
  };
  
  export const getTotalPages = () => {
    return bookContent.length;
  };
  