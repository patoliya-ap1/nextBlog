import AboutImageGrid from "../components/AboutImageGrid";

const About = () => {
  return (
    <div className="mb-20">
      <h1>About</h1>
      <div>
        <AboutImageGrid />
      </div>
      <p>
        About NextBlog Welcome to NextBlog — a modern blogging platform built
        with performance, simplicity, and developer experience in mind. NextBlog
        is more than just a blogging application. It is a demonstration of how
        modern web technologies can come together to create a fast, scalable,
        and user-friendly content platform. Built using the latest features of
        Next.js, this project showcases real-world implementation patterns
        including API routes, server and client-side rendering, authentication
        handling, and responsive UI design with Tailwind CSS. 🚀 Our Mission The
        mission of NextBlog is simple: Deliver lightning-fast content delivery.
        Provide a clean and distraction-free reading experience. Demonstrate
        modern full-stack development practices. Serve as a learning resource
        for developers exploring Next.js. In today’s web ecosystem, performance
        and usability are not optional — they are expected. NextBlog is built
        with that philosophy at its core. ⚡ Built with Next.js NextBlog is
        powered by Next.js, a React framework that enables: Hybrid rendering
        (Static + Server-Side Rendering) API routes for backend logic Optimized
        routing system Built-in performance enhancements Edge-ready deployment
        Using Next.js allows this platform to deliver content quickly while
        maintaining flexibility for future scalability. We leverage: App Router
        / Pages Router (depending on project structure) Dynamic routing for blog
        posts API routes for handling comments and authentication Client-side
        fetching for interactive components Middleware for route protection and
        validation 🎨 Clean and Responsive Design The user interface is designed
        using Tailwind CSS, ensuring: Mobile-first responsiveness Utility-first
        styling Fast development workflow Consistent design system Every
        component is designed with readability and accessibility in mind.
        Whether youre reading on a desktop, tablet, or smartphone, the
        experience remains smooth and consistent. Typography, spacing, and
        layout hierarchy are carefully structured to make content the hero of
        the platform. 🔐 Simple Authentication System NextBlog includes a
        lightweight mock authentication system to simulate real-world login
        flows. While it does not connect to a production backend, it
        demonstrates: Form validation Middleware-based route protection Cookie
        handling Login state management This approach allows developers to
        understand authentication patterns without the complexity of integrating
        a full authentication provider. 🧠 What You’ll Find Here NextBlog
        contains articles covering: Web development fundamentals JavaScript deep
        dives React patterns Next.js architecture Frontend best practices
        Backend integration concepts Performance optimization strategies
        Interview preparation topics Each article is structured to provide
        clarity, practical examples, and real-world relevance.
      </p>
    </div>
  );
};
export default About;
