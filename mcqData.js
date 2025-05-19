const mcqData = [
    {
        question: "Which of the following is the primary focus of software engineering?",
        options: ["Hardware design", "Code compilation", "Systematic software development", "Network configuration"],
        correct: 2
    },
    {
        question: "What is the key advantage of using software engineering principles?",
        options: ["Reduces hardware cost", "Ensures random development", "Enhances software quality and maintainability", "Encourages ad-hoc coding"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a characteristic of good software?",
        options: ["Maintainability", "Efficiency", "Complexity", "Usability"],
        correct: 2
    },
    {
        question: "What does SDLC stand for in software engineering?",
        options: ["Software Design Life Cycle", "System Development Logic Course", "Software Development Life Cycle", "Systematic Data Logical Cycle"],
        correct: 2
    },
    {
        question: "In which phase of SDLC is the system actually built?",
        options: ["Planning", "Analysis", "Implementation", "Maintenance"],
        correct: 2
    },
    {
        question: "Which document defines what the software system should do?",
        options: ["Source code", "Requirements specification", "Design diagram", "Deployment plan"],
        correct: 1
    },
    {
        question: "Software that operates in real-time and cannot fail is categorized as:",
        options: ["Desktop software", "Critical system", "Web application", "Entertainment software"],
        correct: 1
    },
    {
        question: "Which one of the following is an example of a non-functional requirement?",
        options: ["The user can log in with a username and password", "The system response time should be under 1 second", "The system prints a report", "The user can edit profile details"],
        correct: 1
    },
    {
        question: "Which model is the best choice for small and short-term projects with clear requirements?",
        options: ["Spiral model", "Agile model", "Waterfall model", "RAD model"],
        correct: 2
    },
    {
        question: "The process of checking if the software meets user needs is called:",
        options: ["Verification", "Debugging", "Validation", "Compilation"],
        correct: 2
    },
    {
        question: "Which agile methodology is based on iterations and user stories?",
        options: ["V-Model", "Extreme Programming (XP)", "Scrum", "Waterfall"],
        correct: 2
    },
    {
        question: "In agile, who is responsible for maintaining the product backlog?",
        options: ["Scrum Master", "Product Owner", "Project Manager", "Developer"],
        correct: 1
    },
    {
        question: "What is the time-boxed period in Scrum called?",
        options: ["Cycle", "Iteration", "Sprint", "Loop"],
        correct: 2
    },
    {
        question: "Which document helps define scope, time, and cost in a project?",
        options: ["Design diagram", "Project charter", "Product backlog", "Sprint log"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a benefit of Agile?",
        options: ["Early delivery of value", "Continuous improvement", "Rigid scope", "Customer collaboration"],
        correct: 2
    },
    {
        question: "Risk management in a project should be performed:",
        options: ["Only at the start", "After deployment", "Continuously throughout the project", "Only during testing"],
        correct: 2
    },
    {
        question: "A Gantt chart is mainly used for:",
        options: ["Source control", "UI design", "Project scheduling", "Test case writing"],
        correct: 2
    },
    {
        question: "Which role in Scrum ensures the team follows agile practices?",
        options: ["Tester", "Scrum Master", "Product Owner", "Business Analyst"],
        correct: 1
    },
    {
        question: "Which of the following is an example of a project constraint?",
        options: ["A skilled development team", "A flexible deadline", "A fixed budget", "Customer feedback"],
        correct: 2
    },
    {
        question: "Which activity is NOT typically part of the Agile process?",
        options: ["Stand-up meetings", "Sprint planning", "Sequential task completion", "Retrospective"],
        correct: 2
    },
    {
        question: "What type of testing ensures each part of the software functions on its own?",
        options: ["System testing", "Integration testing", "Unit testing", "Acceptance testing"],
        correct: 2
    },
    {
        question: "Which testing type checks the complete system as a whole?",
        options: ["Unit testing", "System testing", "Alpha testing", "Beta testing"],
        correct: 1
    },
    {
        question: "Which is an example of black-box testing?",
        options: ["Code walkthrough", "White-box testing", "Functional testing", "Unit testing"],
        correct: 2
    },
    {
        question: "When does regression testing occur?",
        options: ["Before development", "During requirement gathering", "After bug fixes or changes", "During deployment only"],
        correct: 2
    },
    {
        question: "Validation ensures that:",
        options: ["The software runs faster", "The software is installed correctly", "The software meets user expectations", "The code is optimized"],
        correct: 2
    },
    {
        question: "Which type of testing is performed by end users before final release?",
        options: ["System testing", "Unit testing", "Alpha testing", "Beta testing"],
        correct: 3
    },
    {
        question: "What is the main goal of software testing?",
        options: ["Speeding up the application", "Reducing memory usage", "Finding defects", "Optimizing hardware"],
        correct: 2
    },
    {
        question: "Which of these is a functional testing method?",
        options: ["Performance testing", "Usability testing", "Smoke testing", "Load testing"],
        correct: 2
    },
    {
        question: "Which testing ensures the system meets its performance criteria?",
        options: ["Unit testing", "Performance testing", "Sanity testing", "Regression testing"],
        correct: 1
    },
    {
        question: "What type of defect causes the system to crash under certain conditions?",
        options: ["Cosmetic", "Functional", "Critical", "Minor"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a type of critical system?",
        options: ["Mission-critical", "Business-critical", "Entertainment-critical", "Safety-critical"],
        correct: 2
    },
    {
        question: "What is the main concern of a safety-critical system?",
        options: ["Budget control", "Quick deployment", "Preventing harm to people or environment", "Increasing graphics quality"],
        correct: 2
    },
    {
        question: "Dependability includes all of the following EXCEPT:",
        options: ["Availability", "Reliability", "Usability", "Maintainability"],
        correct: 2
    },
    {
        question: "Which of the following is a primary goal of fault tolerance?",
        options: ["To avoid testing", "To prevent future projects", "To ensure the system continues working even if faults occur", "To ignore software failures"],
        correct: 2
    },
    {
        question: "What is backward error recovery?",
        options: ["Correcting inputs during execution", "Skipping faulty code", "Reverting the system to a safe state", "Rewriting the system"],
        correct: 2
    },
    {
        question: "A system that combines multiple systems into one is called a:",
        options: ["Stand-alone application", "Embedded system", "System of systems", "Batch processing system"],
        correct: 2
    },
    {
        question: "Which term refers to updating and modifying software to reflect changing needs?",
        options: ["Validation", "Testing", "Evolution", "Compilation"],
        correct: 2
    },
    {
        question: "The ability of a system to recover from errors without failure is called:",
        options: ["Fault prediction", "Fault injection", "Fault tolerance", "Code duplication"],
        correct: 2
    },
    {
        question: "Which is a major concern in business-critical systems?",
        options: ["Aesthetic design", "Cost of failure", "Game performance", "Printer compatibility"],
        correct: 1
    },
    {
        question: "Which is used to document arguments that a system is acceptably safe?",
        options: ["Regression logs", "Dependency injection", "Safety case", "Use case"],
        correct: 2
    },
    {
        question: "What does COCOMO stand for?",
        options: ["Control of Cost Model", "Code Cost Monitoring", "Constructive Cost Model", "Continuous Cost Management"],
        correct: 2
    },
    {
        question: "Which model uses only one key input variable for cost estimation?",
        options: ["Dynamic model", "Static, single variable model", "Hybrid model", "Waterfall model"],
        correct: 1
    },
    {
        question: "Which COCOMO model is most suitable for large and complex systems?",
        options: ["Basic", "Intermediate", "Detailed", "Quick"],
        correct: 2
    },
    {
        question: "The intermediate COCOMO model improves the basic model by adding:",
        options: ["Colors and themes", "Cost drivers", "Network configuration", "Testing features"],
        correct: 1
    },
    {
        question: "Which system type in COCOMO is the simplest and most predictable?",
        options: ["Embedded", "Semidetached", "Organic", "Distributed"],
        correct: 2
    },
    {
        question: "What is the primary output of cost estimation?",
        options: ["Number of lines of code", "Development time", "Product features", "Team names"],
        correct: 1
    },
    {
        question: "Which of these is NOT a typical use of cost estimation in software projects?",
        options: ["Deciding hardware price", "Determining manpower", "Scheduling", "Budget planning"],
        correct: 0
    },
    {
        question: "Which cost estimation model uses multiple interacting variables?",
        options: ["Static, single variable model", "Basic COCOMO", "Static, multivariable model", "Organic-only model"],
        correct: 2
    },
    {
        question: "Productivity index in cost estimation depends on how many variables?",
        options: ["3", "10", "29", "1"],
        correct: 2
    },
    {
        question: "What does MVC stand for in software design?",
        options: ["Model-View-Code", "Main-View-Coding", "Model-View-Controller", "Master-View-Config"],
        correct: 2
    },
    {
        question: "In MVC, which component is responsible for handling user input and updating the model?",
        options: ["View", "Model", "Controller", "GUI"],
        correct: 2
    },
    {
        question: "Which of the following is a PHP framework that follows MVC?",
        options: ["Django", "Flask", "Laravel", "React"],
        correct: 2
    },
    {
        question: "Which of thefollowing is a characteristic of a software framework?",
        options: ["Fixed structure", "No reusability", "Offers generic functionality", "Used only in gaming"],
        correct: 2
    },
    {
        question: "What is the purpose of Selenium in software testing?",
        options: ["Data entry", "Network simulation", "Web automation testing", "Image processing"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a type of automation framework?",
        options: ["Data-driven", "Modular", "Static-driven", "Hybrid"],
        correct: 2
    },
    {
        question: "Which of these is a benefit of using Laravel?",
        options: ["Requires no PHP knowledge", "Only works offline", "Fast and secure web development", "Replaces all other frameworks"],
        correct: 2
    },
    {
        question: "A framework is most useful when you need to:",
        options: ["Play multimedia", "Build an application with reusable code", "Test battery usage", "Create animations"],
        correct: 1
    },
    {
        question: "The component in MVC that contains the core application logic is the:",
        options: ["View", "Model", "Controller", "Template"],
        correct: 1
    },
    {
        question: "Which testing tool allows parallel test execution and supports many browsers?",
        options: ["Excel", "JIRA", "Selenium", "Photoshop"],
        correct: 2
    }
];