export const bookContent = [
  {
    id: "cover",
    type: "content",
    content: "Book Cover"
  },
  {
    id: "img-1",
    type: "image",
    content: "/images/welcome.jpg"
  },
  // Content
  {
    id: "content-1",
    type: "content",
    title: "Welcome to TextbookAI",
    description: "Revolutionizing textbook learning through AI-powered comprehension tools and personalized study experiences."
  },
  // Images
  {
    id: "img-2",
    type: "image",
    content: "/images/all-in-one.jpg"
  },
  // Content
  {
    id: "content-2",
    type: "content",
    title: "All-In-One Solution",
    description: "Unlike fragmented solutions that combine ChatGPT with legacy tools, TextbookAI provides a unified, purpose-built platform for textbook learning. Our integrated approach means everything you need is in one place."
  },
  {
    id: "img-3",
    type: "image",
    content: "/images/understanding.jpg"
  },
  {
    id: "content-3",
    type: "content",
    title: "Focus on Understanding",
    description: "We prioritize deep comprehension over quick answers, helping students master their course material rather than just completing assignments. Our AI-powered system ensures you grasp core concepts thoroughly."
  },
  {
    id: "img-4",
    type: "image",
    content: "/images/adaptive.jpg"
  },
  {
    id: "content-4",
    type: "content",
    title: "Adaptive Learning",
    description: "Our sophisticated AI engine personalizes the learning experience, adjusting to each student's pace and learning style. The more you use TextbookAI, the better it understands how you learn best."
  },
  {
    id: "img-5",
    type: "image",
    content: "/images/smart-tech.jpg"
  },
  {
    id: "content-5",
    type: "content",
    title: "Smart Technology",
    description: "Powered by advanced NLP and machine learning, our platform offers intelligent summaries, interactive quizzes, and real-time study assistance. Experience the future of educational technology."
  },
  {
    id: "img-6",
    type: "image",
    content: "/images/tech-stack.jpg"
  },
  {
    id: "content-6",
    type: "content",
    title: "Our Technology Stack",
    description: "TextbookAI leverages cutting-edge artificial intelligence including advanced text processing, vector-based semantic search, and adaptive learning algorithms that evolve with your progress."
  },
  {
    id: "img-7",
    type: "image",
    content: "/images/vision.jpg"
  },
  {
    id: "content-7",
    type: "content",
    title: "Vision for the Future",
    description: "We're creating a future where every student has access to intelligent, personalized learning tools that make education more effective and engaging. Join us in transforming how students learn."
  }
];

export const bookSettings = {
  flipDuration: 1000,
  pageDisplayTime: 5000,
  autoPlay: true,
  startPage: 0,
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