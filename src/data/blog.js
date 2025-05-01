// Import logo from assets
import logo from "../assets/logo";

/**
 * Blog data configuration
 * Contains metadata and content for the blog
 */
const blogData = {
  // Blog identity
  name: "Underreacted",
  image: logo,
  about: "A personal journey through React development. Exploring components, state management, and modern frontend techniques.",
  author: "Jamie Smith",
  social: {
    twitter: "@underreacted",
    github: "github.com/jamie-react",
    linkedin: "linkedin.com/in/jamie-react"
  },
  
  // Blog posts
  posts: [
    {
      id: 1,
      title: "Components 101: Building Blocks of React",
      date: "December 15, 2020",
      preview: "Understanding how components work is fundamental to mastering React. This post breaks down the component architecture and shows you how to create reusable UI elements.",
      minutes: 5,
      categories: ["beginner", "components"],
      featured: true,
      content: `
        When I first started learning React, the concept of components was revolutionary to me.
        Instead of writing monolithic pages, I could now break my UI into small, manageable pieces...
      `
    },
    {
      id: 2,
      title: "React Data Flow: Understanding Props and State",
      date: "December 11, 2020",
      preview: "Passing props is never passé. Learn how data flows through your React application and how to avoid common pitfalls when sharing data between components.",
      minutes: 15,
      categories: ["intermediate", "state-management"],
      featured: false,
      content: `
        One of the most important concepts in React is understanding how data flows between components.
        Unlike two-way binding frameworks, React uses a one-way data flow that makes applications more predictable...
      `
    },
    {
      id: 3,
      title: "Function vs Class Components: The Complete Guide",
      date: "December 3, 2020",
      preview: "React meets OOJS. A deep dive into the differences between function and class components, and when to use each approach in your projects.",
      minutes: 47,
      categories: ["advanced", "components"],
      featured: true,
      content: `
        With the introduction of Hooks in React 16.8, function components can now do everything 
        class components can do, and sometimes more. But that doesn't mean class components are obsolete...
      `
    },
    {
      id: 4,
      title: "Mastering React Hooks: useState and useEffect",
      date: "November 28, 2020",
      preview: "Hooks have revolutionized how we build React components. Learn how to leverage useState and useEffect for powerful, concise component logic.",
      minutes: 23,
      categories: ["intermediate", "hooks"],
      featured: false,
      content: `
        React Hooks were introduced in React 16.8 as a way to use state and other React features 
        without writing a class. The two most fundamental hooks are useState and useEffect...
      `
    },
    {
      id: 5,
      title: "Optimizing Performance in React Applications",
      date: "November 15, 2020",
      preview: "Is your React app feeling sluggish? Discover techniques to identify performance bottlenecks and optimize rendering for a smooth user experience.",
      minutes: 32,
      categories: ["advanced", "performance"],
      featured: true,
      content: `
        As your React application grows in complexity, you might start noticing performance issues.
        React is generally fast, but understanding its rendering behavior is key to optimization...
      `
    }
  ],
  
  // Featured content section
  featured: {
    title: "Editor's Picks",
    description: "Hand-picked articles that showcase fundamental React concepts"
  },
  
  // Newsletter subscription
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest React tips and tricks delivered to your inbox",
    frequency: "Weekly"
  }
};

export default blogData;