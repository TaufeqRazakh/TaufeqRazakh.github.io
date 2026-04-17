// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "evaluations and webpages for classes I was a teaching assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "courses-csci-596-scientific-computing-and-visualization-evals-recitation-phys-135al-physics-for-the-life-sciences",
          title: 'CSCI 596: Scientific Computing and Visualization evals recitation PHYS 135aL: Physics for the...',
          description: "",
          section: "Courses",},{id: "courses-phys-135al-physics-for-the-life-sciences",
          title: 'PHYS 135aL: Physics for the Life Sciences',
          description: "",
          section: "Courses",},{id: "courses-phys-135al-physics-for-the-life-sciences",
          title: 'PHYS 135aL: Physics for the Life Sciences',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems",
          title: 'CSCI 350: Introduction to Operating Systems',
          description: "",
          section: "Courses",},{id: "courses-csci-596-scientific-computing-and-visualization",
          title: 'CSCI 596: Scientific Computing and Visualization',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems",
          title: 'CSCI 350: Introduction to Operating Systems',
          description: "",
          section: "Courses",},{id: "courses-csci-596-scientific-computing-and-visualization-evals",
          title: 'CSCI 596: Scientific Computing and Visualization evals',
          description: "",
          section: "Courses",},{id: "courses-csci-350-introduction-to-operating-systems-evals",
          title: 'CSCI 350: Introduction to Operating Systems evals',
          description: "",
          section: "Courses",},{id: "courses-csci-201-principles-of-software-development",
          title: 'CSCI 201: Principles of Software Development',
          description: "",
          section: "Courses",},{id: "courses-phys-135al-physics-for-the-life-sciences",
          title: 'PHYS 135aL: Physics for the Life Sciences',
          description: "",
          section: "Courses",},{id: "news-passed-both-the-written-and-oral-parts-of-the-qualifying-examination-sparkles",
          title: 'Passed both the written and oral parts of the qualifying examination! :sparkles:',
          description: "",
          section: "News",},{id: "news-abstract-accepted-for-a-presentation-at-aps-global-physics-summit-2025",
          title: 'Abstract accepted for a presentation at APS Global Physics Summit 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-selected-as-a-finalist-for-the-2025-gordon-bell-prize-presentation-with-the-team-to-be-held-at-sc-25-atlanta-ga",
          title: 'Selected as a finalist for the 2025 Gordon Bell Prize. Presentation with the...',
          description: "",
          section: "News",},{id: "news-gave-a-candidate-seminar-at-nersc-berkeley-ca-thank-you-for-hosting-me-dr-deslippe",
          title: 'Gave a candidate seminar at NERSC, Berkeley, CA. Thank you for hosting me...',
          description: "",
          section: "News",},{id: "news-aps-global-physics-summit-2026-in-devner",
          title: 'APS Global Physics Summit 2026 in Devner',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-speaking-at-li-research-group-s-workshop-on-computational-materials-science-amp-amp-high-performance-computing-with-colleagues-from-usc-and-alcf",
          title: 'Speaking at Li Research Group’s workshop on computational materials science &amp;amp;amp; high-performance computing...',
          description: "",
          section: "News",},{id: "news-pushing-the-boundary-of-simulation-on-modern-ai-hardware-my-work-on-leveraging-bf16-precision-for-time-evolution-of-electronic-hamiltonian-has-been-selected-for-the-acm-student-research-competition-src-pasc26-heading-to-bern-switzerland-this-june",
          title: 'Pushing the boundary of simulation on modern AI hardware. My work on leveraging...',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},];
