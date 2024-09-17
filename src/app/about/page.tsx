export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Welcome to My Game Store Showcase</h2>
        <p>
          This website is a project I built to showcase my full-stack development skills using{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. It
          demonstrates my ability to create a fully functional e-commerce platform, including key features
          like game listings, a wishlist, and dynamic navigation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Purpose</h2>
        <p>
          The goal of this project is to highlight my expertise in:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Frontend development</strong> with responsive design and clean user interfaces.</li>
          <li><strong>Backend integration</strong> for handling dynamic content like game listings and user interactions.</li>
          <li><strong>State management</strong> for handling actions like adding games to the wishlist.</li>
        </ul>
        <p className="mt-4">
          This website serves as a portfolio piece to demonstrate my technical skills and the ability to develop modern, scalable web applications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc ml-6">
          <li><strong>Next.js</strong> for server-side rendering and static site generation.</li>
          <li><strong>TypeScript</strong> for type safety and better developer experience.</li>
          <li><strong>Tailwind CSS</strong> for fast and responsive styling.</li>
          <li><strong>React</strong> for building reusable components and managing the UI.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What&apos;s Included?</h2>
        <ul className="list-disc ml-6">
          <li><strong>Home Page</strong>: Displays a grid of games with the option to add them to a wishlist.</li>
          <li><strong>Wishlist</strong>: A separate section to showcase the games users have added to their wishlist.</li>
          <li><strong>Game Details</strong>: Each game has its own page with more detailed information.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Why I Built This</h2>
        <p>
          As a passionate developer, I wanted to create a polished, professional project that demonstrates both frontend and backend development. This e-commerce-style game store is designed to be part of my portfolio, showcasing my ability to build full-stack applications with real-world functionality.
        </p>
      </section>
    </div>
  );
}
