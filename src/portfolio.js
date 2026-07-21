/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tran Anh Tuan",
  title: "Hi all, I'm Tuan",
  subTitle: emoji(
    "Unity Game Developer passionate about creating fun and technically polished 2D/3D games, with expertise in gameplay systems, performance optimization, clean OOP architecture, and cross-platform development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  avatarImage: require("./assets/images/avatar.png"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/andrew228211",
  linkedin:
    "https://www.linkedin.com/in/anh-tu%E1%BA%A5n-tr%E1%BA%A7n-58a366366/",
  gmail: "anhvu2282911@gmail.com",
  facebook: "https://www.facebook.com/tuan.tran.680051/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Posts and Telecommunications Institute of Technology",
      logo: require("./assets/images/ptit.jpg"),
      subHeader: "Information Technology",
      duration: "2020-2025"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      skills: "C#, OOP, SOLID, Design Patterns, DSA"
    },
    {
      Stack: "Unity",
      skills:
        "Addressable(basic), Odin Inspector, Obi Soft Body, DOTween, Profiling, optimization, Scriptable Object,..."
    },
    {
      Stack: "Graphic & Effect",
      skills:
        "Understanding of Mesh Procedural and Shader Graph, Particle System, Trail, UIEffect."
    },
    {
      Stack: "Other",
      skills:
        "Git, Tortoise SVN, Fork, Source Tree, AI-assisted Development ( ChatGPT Plus, Claude, Augment, Antigravity AI,...)"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Unity Developer",
      company: "BonBonGame",
      companylogo: require("./assets/images/bonbon.png"),
      date: "3/2025 – Present",
      desc: "",
      descBullets: [
        "Developed gameplay systems using Unity and C# for mobile games.",
        "Implemented player mechanics, enemy AI, and game UI.",
        "Optimized performance.",
        "Collaborated with designers and artists to implement gameplay features.",
        "Developed and maintained clean, scalable code using OOP, SOLID principles, Design Patterns, and the MVC architecture.",
        "Used Git to manage source code in a team environment."
      ]
    },
    {
      role: "Unity Developer Intership",
      company: "ABI Game Studio",
      companylogo: require("./assets/images/abi.png"),
      date: "6/2024 – 8/2024",
      desc: "Participated in basic game design tasks."
    },
    {
      role: "Unity Developer Part-time",
      company: "Vicenter Game Studio",
      companylogo: require("./assets/images/vicenter.png"),
      date: "7/2023 – 4/2024",
      desc: "Worked on mobile game development using Unity C#. Focused on gameplay programming, UI flow, bug fixing."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects developed at BonBonGame",
  projects: [
    {
      id: "monopoly",
      image: require("./assets/images/monopolyCard.png"),
      projectName: "Monopoly: Casual Board Game",
      projectDesc:
        "Monopoly is a turn-based property trading board game inspired by classic tabletop games.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/monopoly"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "Monopoly is a turn-based property trading board game inspired by classic tabletop games. The player rolls dice, moves around the board, buys properties, pays rent, manages money, and competes against other players or AI opponents.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~2 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all gameplay systems.",
          "Multi-Mode Game Management: Engineered the central Game Manager to seamlessly support various gameplay modes, including Local 2-Player, 4-Player, and AI-driven matches.",
          "UI/UX & Juice: Built responsive UI systems, property management overlays, and dynamic HUDs; integrated smooth transitions, dice-rolling effects, and synchronized audio profiles to elevate the overall player experience."
        ],
        techStack: [
          "Unity C#",
          "Spine",
          "DOTween (Path and rotation sequences for throwing animations)",
          "Mix 2D and 3D",
          "ScriptableObject",
          "Architectural Patterns: MVC (Model-View-Controller) mixed with Component-Based Architecture to separate game data, visual feedback, and core mechanics.",
          "Behavioral & Structural Patterns: Singleton, State, and Observer / Event-Driven Architecture"
        ],
        videos: [
          "https://www.youtube.com/embed/VdkMhy_XGV4",
          "https://www.youtube.com/embed/URknMJUJzMs"
        ],
        screenshots: [
          require("./assets/images/monopoly_screenshot1.png"),
          require("./assets/images/monopoly_screenshot2.png"),
          require("./assets/images/monopoly_screenshot3.png"),
          require("./assets/images/monopoly_screenshot4.png"),
          require("./assets/images/monopoly_screenshot5.png"),
          require("./assets/images/monopoly_screenshot6.png"),
          require("./assets/images/monopoly_screenshot7.png")
        ]
      }
    },
    {
      id: "word-to-win",
      image: require("./assets/images/wordToWinCard.png"),
      projectName: "Words To Win",
      projectDesc:
        "Words To Win is a hybrid-casual mobile game where players race against AI opponents by solving word puzzles.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/word-to-win"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.relaxing.challenge.girls&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/gh/app/mini-games-relax-challenge/id6762329748"
          }
        ],
        overview:
          "Words To Win is a hybrid-casual mobile game. The core game loop revolves around a competitive race against AI opponents. Player must quickly solve word puzzles or input valid characters based on game prompts.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~2 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Developed the main word-answer gameplay loop with question display, answer validation, block creation, water pressure, and win/lose flow.",
          "Implemented three game modes: Single Player, Multiplayer, and PK Player.",
          "Created major UI flows: Home, Gameplay, Win/Lose, Shop, Spin, Flags, and upgrade popup.",
          "Developed player, bot, character skin, animation, flag, and block systems."
        ],
        techStack: [
          "Unity C#",
          "Spine",
          "DOTween",
          "ScriptableObject",
          "Architectural Patterns: MVC-inspired structure mixed with Component-Based Architecture to separate game data, UI/visual feedback, and core gameplay mechanics.",
          "Behavioral & Structural Patterns: Applied Singleton, State, Observer/Event-Driven Architecture, Factory/Strategy, and Object Pooling to manage game flow, communication, bot progression, and reusable objects."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "draw-joust",
      image: require("./assets/images/drawJoustCard.png"),
      projectName: "DrawJoust",
      projectDesc:
        "DrawJoust is a physics-driven drawing action minigame where players build custom carriages to joust.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/draw-joust"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "DrawJoust is a physics-driven, drawing action minigame where players draw custom carriage frames, equip wheels and weapons, and battle opponents in arena-style jousting matches. Developed in Unity C# utilizing 2D physics constraints, skeletal animations, and custom AI navigation, the game supports Solo, Local Split-Screen 2-Player, and Cooperative gameplay modes.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~1 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all core gameplay systems, including gesture-based chassis drawing, joint-based vehicle assembly, and physical jousting mechanics.",
          "Multi-Mode Game Management: Engineered the central Game Manager to seamlessly support Single-Player vs. AI, Local split-screen 2-Player, coordinating distinct input boundaries and independent camera follow systems.",
          "Procedural Drawing & Physics Assembly: Developed the dynamic line controller that maps screen drawing gestures into world-space coordinates. Built a procedural assembly system that spawns interconnected chassis nodes, binding them in real-time using spring-dampened FixedJoint2D joints.",
          "Destructible Carriages & Combat Rules: Implemented the structural damage pipeline where individual chassis nodes track health, breaking joint connections dynamically upon impact to collapse carriage segments. Programmed instant-kill weapon-to-driver impalement rules and procedural body part disassembly on round defeat."
        ],
        techStack: [
          "Unity C#",
          "Spine (Skeletal Animation & Weapon triggers)",
          "2D Physics & Joint Constraints (FixedJoint2D, Rigidbody2D)",
          "Object Pooling (Circle Nodes, bullet queues, and impact particles)",
          "Architectural Patterns: Component-Based Architecture mixed with Event-Driven Programming (EventDispatcher) to decouple combat results (Win/Lose events) from direct UI callbacks.",
          "Behavioral & Structural Patterns: Applied Singleton (Managers), Observer (Event System), Joint-based structural linking, and State Pattern (Game States)."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "words-of-wonders",
      image: require("./assets/images/wordsOfWondersCard.png"),
      projectName: "Words Of Wonders",
      projectDesc:
        "Words of Wonders is a hybrid-casual mobile game combining word-connect puzzle challenges with an island-building meta-game.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/words-of-wonders"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.relaxing.challenge.girls&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/gh/app/mini-games-relax-challenge/id6762329748"
          }
        ],
        overview:
          "Words of wonders is is a hybrid-casual mobile game. The core game loop revolves around a word-connect puzzle challenge combined with an island-building meta-game. Players must connect provided letters to form valid words that fit into a crossword grid to earn rewards and decorate their wonder islands.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~1 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all gameplay systems.",
          "Word Puzzle System: Built the main word-connection mechanic where players drag through letter nodes to form words, validate answers against level data, reveal crossword cells, handle wrong submissions, extra words, shuffle, hint, and hammer boosters.",
          "Level & Data Pipeline: Engineered a JSON-driven level system with editor tooling to generate crossword layouts, validate word sets, export DataWord structures, and support extra-word generation for scalable content production.",
          "UI/UX & Juice: Implemented responsive crossword cells, animated letter reveal, line drawing during swipe input, wrong-answer feedback, celebration flow, win FX, lucky bonus popup integration, butterfly gift interactions, and dynamic HUD updates."
        ],
        techStack: [
          "Unity C#",
          "Spine, DOTween",
          "Architecture Patterns: Singleton managers, event dispatcher, observer pattern, runtime controller/service classes",
          "Inspector Tooling: Odin Inspector",
          "Gameplay Modules: crossword grid system, letter swipe input, hint/hammer boosters, extra-word system, collection map, daily tasks, tutorial flow"
        ],
        videos: [],
        screenshots: [
          require("./assets/images/wow_editor1.png"),
          require("./assets/images/wow_editor2.png")
        ]
      }
    },
    {
      id: "arsenal-2d",
      image: require("./assets/images/arsenal2DCard.png"),
      projectName: "Arsenal 2D",
      projectDesc:
        "Arsenal 2D is a fast-paced 2D platform shooter game with jetpack mechanics and weapon-collection meta-game.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/arsenal-2d"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "Arsenal 2D is an action-casual mobile game. The core game loop revolves around a fast-paced 2D platform shooter challenge combined with a weapon-collection meta-game. Players must navigate treacherous terrain, pick up random firearms on the map, and eliminate opponents within a strict 1-minute-30-second time limit to achieve the highest kill count and win the match.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~1 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all core gameplay systems, including weapon tier progression, projectile physics, and jetpack mechanics.",
          "Multi-Mode Game Management & AI Pathfinding: Engineered the central Game and Level Managers to seamlessly support Local Split-Screen 2-Player, Solo, and Cooperative play. Integrated A* Pathfinding with custom Bot AI profiles (Easy, Medium, Hard) to automate complex targeting, path-following, item acquisition, and trajectory-based grenade throws.",
          "Weapon & Physics Mechanics: Programmed a diverse weapon registry featuring standard firearms, projectile launchers, lasers, and flamethrowers; implemented realistic gun recoils via Spine skeletal offset manipulation, custom melee damage area overlaps, and poison danger zones.",
          "UI/UX & Juice: Built responsive split-screen HUDs, off-screen indicator systems, and real-time kill leaderboards."
        ],
        techStack: [
          "Unity C#",
          "Spine (Skeletal Animation)",
          "A* Pathfinding Project (Path generation & AI navigation)",
          "DOTween (Tweening engine for UI & camera transitions)",
          "ScriptableObject (Data containers for weapons, armor, and throwables configuration)",
          "Architectural Patterns: Component-Based Architecture mixed with State-Driven Workflow (FSM) to separate entity behaviors (movement, aiming, flying) from core physics and data structures.",
          "Behavioral & Structural Patterns: Singleton (Managers), Finite State Machine (States), Object Pooling (Projectiles/VFX/Items), and Observer / Event-Driven Architecture."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "blob-opera",
      image: require("./assets/images/blobOperaCard.png"),
      projectName: "Blob Opera",
      projectDesc:
        "Blob Opera is an interactive singing-blob minigame featuring Obi Softbody physics simulation.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/blob-opera"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.fidget.antistress.asmr&hl=vi"
          }
        ],
        overview:
          "Blob Opera is an interactive singing-blob minigame. The player drags a blob vertically/horizontally to control pitch and vowel, which then drives sound playback, lip shapes, eye behavior, softbody deformation, UI indicators, and sequential blob progression.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~3 weeks",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Developed a complete interactive “singing softbody character” system.",
          "Multi-Mode Game Management: Engineered the central Game and Level Managers to seamlessly support Local Split-Screen 2-Player, Solo, and Cooperative play.",
          "Softbody & Blendshape Integration: Programmed softbody physics simulation with Obi Solver to handle squash and stretch states. Combined with SkinnedMeshRenderer blendshapes to sync mouth and eyelid shapes with vocal inputs.",
          "UI/UX & Juice: Built interactive split-screen HUDs, off-screen indicator warnings, and real-time game leaderboards."
        ],
        techStack: [
          "Unity C#",
          "Obi Softbody / Obi Solver for softbody simulation",
          "DOTween",
          "SkinnedMeshRenderer blendshapes for mouth and eyelids",
          "Architectural Patterns: Modularity where each blob is split into focused Unity components such as BlobOpera, BlobInput, BlobUI, BlobSound, BlobLip, BlobEye, BlobBreath, and BlobTouge.",
          "Behavioral & Structural Patterns: Singleton (Managers), Observer / Event-Driven Architecture."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "sausage-fork",
      image: require("./assets/images/sausageForkCard.png"),
      projectName: "Sausage & Fork",
      projectDesc:
        "Sausage and Fork is a physics-based, swipe-to-shoot puzzle minigame using skeletal-ragdoll sausage physics.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/sausage-fork"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "Sausage and Fork is a physics-based, swipe-to-shoot puzzle minigame where players launch a flexible, skeletal-ragdoll sausage through a hazard-filled kitchen environment to stick it onto a target fork. Developed in Unity C# utilizing 2D skeletal ragdoll physics, custom Spine-driven animations, and chain-reactive traps, the game supports Solo and Local Split-Screen 2-Player modes.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~1 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all core gameplay systems.",
          "Skeletal Ragdoll Mechanics: Engineered the modular sausage controller using a chain of physics-enabled 2D Rigidbodies and Colliders, implementing shape-restoration algorithms (RestoreShape) and procedural eye-tracking targeting.",
          "Dual-Player Split-Screen: Coordinated split-screen screen-divided inputs and individual camera tracking systems to handle concurrent 2-Player local versus matches."
        ],
        techStack: [
          "Unity C#",
          "Spine (Skeletal Animation for Fork, Toaster, and bomb triggers)",
          "2D Ragdoll Physics (Rigidbody2D chains connected via HingeJoint2D, and Physics2D overlap queries)",
          "DOTween (Tweening paths for portal transitions, obstacle movement, and UI animations)",
          "Architectural Patterns: Component-Based Architecture combined with Finite State Management to decouple character ragdoll constraints from trap-triggered launch overrides.",
          "Behavioral & Structural Patterns: Singleton, Object Pooling, and State Pattern."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "car-drift",
      image: require("./assets/images/carDriftCard.png"),
      projectName: "Car Drift",
      projectDesc:
        "Car Drift is a fast-paced single-button drifting game with custom orbital physics.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/car-drift"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "Car Drift is a fast-paced, physics-simulated single-button drifting game where players navigate cars along winding tracks by tethering onto corner anchors. Built in Unity C# employing custom orbital physics, smooth angular damping solvers, and local screen splitting, the game supports Solo and Local Split-Screen 2-Player modes where drivers race to reach the finish line without crashing into walls.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "~2 months",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented the core orbital physics system, input event bridges, and heading recovery algorithms.",
          "Orbital Drift Mechanics: Programmed the custom swing mechanics using trigonometry to move rigidbodies in a circular orbit based on angular speed formulas without using rigid joint overhead.",
          "Aiming Line & Particle Feedback: Integrated dynamic line rendering connectives between cars and nearby pivots; programmed visual skidding trails and emission-controlled tire smoke particles during drifts."
        ],
        techStack: [
          "Unity C#",
          "Spine",
          "2D Rigidbodies (Kinematic motion mapping, manual perpendicular velocity calculations)",
          "DOTween",
          "Architectural Patterns: Component-Based Architecture combined with Event-Driven Programming where UI touches are dispatched via actions to control independent rotation components.",
          "Behavioral & Structural Patterns: Singleton, State Pattern."
        ],
        videos: [],
        screenshots: []
      }
    },
    {
      id: "carrom",
      image: require("./assets/images/carromCard.jpg"),
      projectName: "Carrom",
      projectDesc:
        "Carrom is a physics-based tabletop sports minigame modeled after classic billiard-style board games.",
      footerLink: [
        {
          name: "View Details",
          url: "#/project/carrom"
        }
      ],
      details: {
        links: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.bonbongame.two.player.games.with.friends&hl=vi"
          },
          {
            name: "App Store",
            url: "https://apps.apple.com/vn/app/2-player-games-mini-games/id1522877055"
          }
        ],
        overview:
          "Carrom is a physics-based tabletop sports minigame modeled after the classic billiard-style board game. Built in Unity 2D with realistic rigid-body friction, elastic collisions, and dynamic board boundary bounces, the game supports 1P vs. AI (with three selectable difficulty tiers) and Local 2-Player modes.",
        team: [
          "1 Unity Developer",
          "1 Artist",
          "1 Game Designer",
          "1 Animator"
        ],
        role: {
          title: "Game Programmer",
          duration: "2 weeks",
          company: "BonBonGame",
          platform: "Mobile Android/IOS",
          engine: "Unity"
        },
        contributions: [
          "Designed and implemented all gameplay components, including 2D physics interaction, turn-based round rules, and a trajectory-solving AI bot.",
          "Friction & Elastic Physics Board: Configured realistic puck slide friction, rigid-body elastic coefficients, and corner-pocket suction mechanics via programmatic speed-dampening pull vectors.",
          "Trajectory-Solving Bot AI: Wrote custom geometry solvers for the bot AI to compute direct shots and wall-reflection bank shots via raycast reflections, selecting optimal shooting setups based on dot product calculations.",
          "Extensible Power-Up System: Designed an interface-driven Item system (IPowerUpItem) spawned via an ItemFactory, implementing laser guides, extra-turn tokens, double-force boosts, and slider-locking freeze traps.",
          "Round State Controllers: Coded turn validation state machines that verify that all board rigidbodies have stopped moving before shifting turns, checking for score pocket triggers or foul penalties."
        ],
        techStack: [
          "Unity C#",
          "2D Physics (Rigidbody2D elastic collisions, circle cast reflections, and pocket trigger zones)",
          "DOTween (Smooth slide transitions for striker repositioning and AI aiming sequences)",
          "Architectural Patterns: Component-Based Architecture combined with MVC (Model-View-Controller) separating table physics calculations, and Striker/AI controllers.",
          "Behavioral & Structural Patterns: Singleton, Factory Method, State, and Interface Segregation."
        ],
        videos: [],
        screenshots: []
      }
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-0337383962",
  email_address: "anhvu2282911@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
