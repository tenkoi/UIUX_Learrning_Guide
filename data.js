/* ============================================================
   CURRICULUM DATA — v2

   LINK POLICY:
   - `ch`     : YouTube channel/playlist URL. Channel URLs are stable.
   - `q`      : exact search phrase, pre-scoped to that creator.
   - `direct` : a specific video URL that appeared in a real search
                result and was verified during research.
   We do NOT invent /watch?v= IDs. An unverified ID is a 404.

   `why` explains what each creator is actually good at, drawn from
   independent roundups rather than invented.
   ============================================================ */

const CHANNELS = {
  nng:      { n:"Nielsen Norman Group", u:"https://www.youtube.com/@NNgroup",
              w:"Evidence-based UX research. Short, dense, method-focused. The reference standard." },
  ajsmart:  { n:"AJ&Smart", u:"https://www.youtube.com/@AJSmart",
              w:"Design sprints, facilitation, stakeholder alignment. Widely called the most useful channel for cross-functional work." },
  figma:    { n:"Figma", u:"https://www.youtube.com/@Figma",
              w:"Official. Stays close to how design teams actually work — product updates, workflow, conference sessions." },
  mizko:    { n:"Mizko", u:"https://www.youtube.com/@Mizko",
              w:"Project-based Figma and UI. Real-world application over theory." },
  jesse:    { n:"Jesse Showalter", u:"https://www.youtube.com/@JesseShowalter",
              w:"UX process alongside frontend. Strong on usability testing structure, research synthesis, stakeholder communication." },
  cf:       { n:"CareerFoundry", u:"https://www.youtube.com/@careerfoundry",
              w:"UX methodology with more depth and structure than most. Process videos stay useful well past beginner." },
  dcourse:  { n:"DesignCourse", u:"https://www.youtube.com/@DesignCourse",
              w:"UI and UX content that stays close to real interfaces. Sits on both sides of the design/dev line." },
  futur:    { n:"The Futur", u:"https://www.youtube.com/@thefutur",
              w:"Client communication, pricing, presenting work, the business of design." },
  femke:    { n:"Femke.design", u:"https://www.youtube.com/@femkesvs",
              w:"Product design career and craft. Calm, specific, low on hype." },
  swd:      { n:"Storytelling with Data", u:"https://www.youtube.com/@storytellingwithdata",
              w:"Cole Nussbaumer Knaflic's channel. The practical companion to the book — same clarity, applied to makeovers." },
  dvs:      { n:"Data Visualization Society", u:"https://www.youtube.com/@DataVisualizationSociety",
              w:"Community talks. Deeper theory and critique than tool tutorials reach." },
  cube:     { n:"Guy in a Cube", u:"https://www.youtube.com/@GuyInACube",
              w:"Power BI dashboards, DAX, enterprise analytics. Microsoft insiders." },
  kriebel:  { n:"Andy Kriebel", u:"https://www.youtube.com/@AndyKriebel",
              w:"Tableau, chart mechanics, and makeover critiques. The critiques are the real value." },
  smoak:    { n:"Anthony B. Smoak", u:"https://www.youtube.com/@AnthonyBSmoak",
              w:"Long-form dashboard builds you can follow step by step and replicate." },
  a11y:     { n:"Web Accessibility Education", u:"https://www.youtube.com/@WebAccessibility",
              w:"WCAG criteria in plain English with real examples. Human-captioned, deliberately slow-paced." },
  kevin:    { n:"Kevin Powell", u:"https://www.youtube.com/@KevinPowell",
              w:"CSS, layout, container queries. The clearest explanations of responsive mechanics anywhere." },
  chrome:   { n:"Chrome for Developers", u:"https://www.youtube.com/@ChromeDevs",
              w:"Platform features, container queries, performance. Straight from the source." }
};

const VERIFIED = {
  wcagCourse:   { t:"WCAG Training Course — full playlist", u:"https://www.youtube.com/playlist?list=PLqQI0lmiVs1jhQQNAprIPCjFUYVBB7tY8", s:"Accessible Web" },
  a11yTesting:  { t:"Web Accessibility Testing — full playlist", u:"https://www.youtube.com/playlist?list=PLHUC7aTUnujuwwcBPV9MjT9OaOL83OG9y", s:"Playlist" },
  srNonNative:  { t:"Screen Reader Testing: A Guide for Non-Native Users", u:"https://www.youtube.com/watch?v=ugodCFnbE94", s:"Accessible Web · Nov 2025" },
  srExperience: { t:"How a screen reader user experiences an accessible vs inaccessible site", u:"https://www.youtube.com/watch?v=XPoHIrLOb7w", s:"TPGi" },
  srDev:        { t:"Website accessibility testing using a screen reader", u:"https://www.youtube.com/watch?v=Aku9j7qADBA", s:"Developer walkthrough" },
  dash12:       { t:"12 dashboard design tips for better data visualization", u:"https://www.youtube.com/watch?v=t3cAUt7sOQg", s:"Tool-agnostic principles" },
  a11yChannel:  { t:"Web Accessibility Education — full channel", u:"https://www.youtube.com/@WebAccessibility", s:"Plain-English WCAG lectures" }
};

const CURRICULUM = [
{
  id:"m1", phase:1, weeks:"Weeks 1–3", title:"UX Fundamentals", kicker:"Foundations", hours:"30–40 hrs",
  blurb:"Enterprise users are assigned, not acquired. There is no delight metric — there is time-on-task, error rate, and whether someone can go home on time.",
  outcomes:[
    "Run a user interview that surfaces workarounds, not opinions",
    "Turn observation into a task flow with error and edge states",
    "Explain why a business process exists before proposing to change it"
  ],
  learn:[
    "Double Diamond, Design Thinking, Lean UX — and when each is theatre",
    "Research methods: interviews, contextual inquiry, surveys, diary studies",
    "Personas vs. Jobs-to-be-Done (JTBD wins in enterprise)",
    "Task flows, user flows, journey maps, service blueprints",
    "Heuristic evaluation against Nielsen's 10"
  ],
  enterprise:[
    "Interview by role, not demographic — Warehouse Clerk, AR Accountant, Ward Nurse",
    "Stakeholders often block access to real users. Learn to negotiate for 30 minutes.",
    "Efficiency is the north star. Nobody churns from an ERP.",
    "Shadow someone for a full shift. You will find three workarounds nobody documented."
  ],
  practice:"Find someone who uses software daily at work — a receptionist, a bookkeeper, a nurse. Ask to watch them for 45 minutes and say nothing except 'what are you doing now?'. Write down every time they leave the system to do something in Excel, on paper, or by asking a colleague.",
  deliverable:"Research report + 2 role profiles + 1 annotated task flow with error and edge states.",
  videos:[
    { t:"UX research methods and when to use each", ch:CHANNELS.nng, q:"NNgroup user research methods", why:"NN/g's research explainers are the closest thing to a shared vocabulary the field has. Start here so your terms match everyone else's." },
    { t:"Jobs-to-be-Done and interviewing for the job", ch:CHANNELS.cf, q:"jobs to be done framework interview UX", why:"CareerFoundry's methodology videos go deeper than the beginner framing suggests — good on turning interviews into structure." },
    { t:"Journey mapping and workshop facilitation", ch:CHANNELS.ajsmart, q:"AJ&Smart journey mapping workshop facilitation", why:"AJ&Smart is strongest exactly where enterprise research gets hard: running the session with stakeholders in the room." }
  ],
  articles:[
    { t:"User research topic hub", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/user-research/" },
    { t:"Journey mapping articles", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/journey-mapping/" },
    { t:"Usability guidance", s:"Digital.gov", u:"https://digital.gov/topics/usability/" }
  ],
  quiz:[
    { q:"Your client says users are too busy to be interviewed. What is the strongest next move?", a:["Skip research and design from the requirements doc","Negotiate to shadow one user for a single shift instead","Send a 40-question survey to everyone","Build personas from the sales team's descriptions"], correct:1, why:"Shadowing costs the user nothing extra — they keep working. It also surfaces undocumented workarounds that interviews miss entirely." },
    { q:"Why does JTBD usually beat personas in enterprise work?", a:["It is faster to produce","Stakeholders prefer the format","The job is stable across companies while demographics are noise","It removes the need for interviews"], correct:2, why:"'Reconcile a payment batch' is the same job at every company. 'Sarah, 34, likes hiking' tells you nothing about her approval workflow." },
    { q:"Which metric matters least when evaluating an internal tool?", a:["Time on task","Error rate","Net Promoter Score","Training time for new hires"], correct:2, why:"NPS measures willingness to recommend. Nobody recommends the payroll system they were assigned on day one." },
    { q:"A user keeps a spreadsheet alongside the official system. This is:", a:["Irrelevant to your design","A training problem for HR","The single most valuable research artifact you will find","Evidence the user is inefficient"], correct:2, why:"Shadow spreadsheets are a map of everything the system fails to do. Ask to see it in every session." }
  ]
},
{
  id:"m2", phase:1, weeks:"Weeks 4–5", title:"Information Architecture", kicker:"Foundations", hours:"20–25 hrs",
  blurb:"200 screens, 40 roles, and a menu written by whoever built the database. IA in enterprise is archaeology before it is design.",
  outcomes:[
    "Run an open and a closed card sort and read the results correctly",
    "Tree-test a proposed structure and diagnose why a task failed",
    "Design navigation that changes by role without breaking shared mental models"
  ],
  learn:[
    "Taxonomy, ontology, choreography",
    "Navigation models: global, local, contextual, utility",
    "Card sorting (open and closed) and tree testing",
    "Labeling systems, progressive disclosure, hierarchy depth limits"
  ],
  enterprise:[
    "Role-based navigation and permission-driven IA",
    "The module → record → field mental model every ERP inherits",
    "Surviving deep nesting across hundreds of screens",
    "Global search as the real primary navigation for power users"
  ],
  practice:"Open your university's or employer's internal system. Screenshot the main menu. Run an open card sort on its labels with five people who do not work in IT. Count how many labels nobody could place.",
  deliverable:"Sitemap + navigation spec + tree test results with success rates per role.",
  videos:[
    { t:"Information architecture fundamentals", ch:CHANNELS.nng, q:"NNgroup information architecture", why:"NN/g separates IA from navigation cleanly — a distinction most tutorials blur, and the one that matters when you have 40 roles." },
    { t:"Card sorting and tree testing in practice", ch:CHANNELS.cf, q:"card sorting tree testing tutorial UX research", why:"You need mechanics: how many participants, open vs closed, how to read a dendrogram. Methodology channels cover this better than design channels." },
    { t:"Navigation patterns for complex applications", ch:CHANNELS.jesse, q:"Jesse Showalter navigation UX web app", why:"Covers navigation with frontend constraints attached — what you need when the sidebar has to collapse four different ways." }
  ],
  articles:[
    { t:"Information architecture topic hub", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/information-architecture/" },
    { t:"Tree testing and card sorting tools", s:"Optimal Workshop", u:"https://www.optimalworkshop.com/" },
    { t:"Information architecture — overview", s:"Wikipedia", u:"https://en.wikipedia.org/wiki/Information_architecture" }
  ],
  quiz:[
    { q:"Closed card sorting is the right tool when you want to:", a:["Discover how users group items naturally","Validate a structure you have already proposed","Test whether users can find a specific item","Generate label ideas from scratch"], correct:1, why:"Open sorting discovers structure. Closed sorting validates one. Tree testing tests findability. Three different questions." },
    { q:"In a permission-heavy system, a menu item the user cannot access should usually be:", a:["Hidden entirely","Shown but disabled with no explanation","Shown, disabled, with a reason and a request-access path","Shown and clickable, failing on the next screen"], correct:2, why:"Hiding creates 'the system is broken' tickets. Silent disabling creates 'why can't I' tickets. Explaining creates a self-service path." },
    { q:"Your tree test shows 40% success on a core task. The most likely cause is:", a:["Users need more training","The labels do not match users' vocabulary","The visual design is too plain","The test had too few participants"], correct:1, why:"Tree testing strips away visuals deliberately. What is left is structure and words — and words fail first." },
    { q:"Global search matters more in enterprise than consumer because:", a:["Enterprise users are lazier","The item count and nesting depth make browsing impractical","Search is cheaper to build than navigation","It improves SEO"], correct:1, why:"When a record lives six levels deep among 200,000 siblings, search is not a shortcut — it is the primary path." }
  ]
},
{
  id:"m3", phase:1, weeks:"Weeks 6–8", title:"Low-Fidelity Wireframing", kicker:"Foundations", hours:"30–35 hrs",
  blurb:"Lorem ipsum hides every problem you are being paid to find. Use real data — the long name, the null value, the 47-character SKU.",
  outcomes:[
    "Wireframe a full module including every state, not just the happy path",
    "Design a list → detail → edit flow that handles bulk operations",
    "Choose a density level and justify it against the user's task"
  ],
  learn:[
    "Paper → grayscale → Balsamiq or Whimsical",
    "Layout grids, scanning patterns, hierarchy without colour",
    "Content-first wireframing with real records",
    "Density modes: comfortable, compact, condensed"
  ],
  enterprise:[
    "The list → detail → edit triad, backbone of every business application",
    "Master–detail and split-view layouts",
    "Bulk actions, multi-select, batch editing, and undo",
    "Empty, loading, error, partial, permission-denied, and overloaded states"
  ],
  practice:"Take one screen you already designed. List every state it can be in. If you get fewer than six, you have missed some — check partial data, no permission, too many results, stale cache, and failed save.",
  deliverable:"15–20 wireframes covering one complete module, including every state.",
  videos:[
    { t:"Wireframing complex applications", ch:CHANNELS.mizko, q:"Mizko wireframing UI design process", why:"Mizko works project-first rather than principle-first, the right mode for wireframing — you watch decisions get made under constraint." },
    { t:"Designing empty, error, and loading states", ch:CHANNELS.dcourse, q:"empty state error state UI design tutorial", why:"State design is where most tutorials stop. Search this specifically — general 'UI design' videos skip it entirely." },
    { t:"Layout, grids, and visual hierarchy", ch:CHANNELS.figma, q:"Figma layout grids visual hierarchy", why:"Get grid mechanics from the tool's own channel, then apply them in grayscale before colour tempts you." }
  ],
  articles:[
    { t:"Interaction design articles", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/interaction-design/" },
    { t:"UI pattern catalogue", s:"UI Patterns", u:"https://ui-patterns.com/" },
    { t:"Spacing and density guidance", s:"Carbon Design System", u:"https://carbondesignsystem.com/" }
  ],
  quiz:[
    { q:"Why is lorem ipsum actively harmful in enterprise wireframing?", a:["It looks unprofessional to clients","It hides truncation, wrapping, and null-value problems","It slows down the design process","Stakeholders cannot read Latin"], correct:1, why:"Real data breaks layouts. Placeholder text is uniformly polite and tells you nothing about the 90-character legal entity name." },
    { q:"Which state do designers most often forget to wireframe?", a:["Default","Loading","Partial data — some fields populated, some null","Hover"], correct:2, why:"Empty and loading get remembered. Partial — where half the record synced and half did not — is where real systems live and real designs fail." },
    { q:"The list → detail → edit triad is fundamental because:", a:["It is easy to build","Almost every business object needs browsing, inspecting, and modifying","It is required by accessibility guidelines","It works well on mobile"], correct:1, why:"Invoices, employees, tickets, patients, orders — every one needs those three views. Master the triad and you have 70% of any enterprise app." },
    { q:"Bulk actions require which companion feature above all others?", a:["Keyboard shortcuts","Undo","Export to CSV","Animation"], correct:1, why:"Selecting 400 rows and hitting the wrong action is a career-defining moment. Undo turns a catastrophe into an inconvenience." }
  ]
},
{
  id:"m4", phase:2, weeks:"Weeks 9–10", title:"Figma Fundamentals", kicker:"Tool mastery", hours:"20–25 hrs",
  blurb:"The tool is not the skill, but fluency removes friction between thinking and seeing. Learn the shortcuts until your hands stop deciding.",
  outcomes:[
    "Navigate and structure a file without reaching for the menu",
    "Set up a type scale and grid a second designer could inherit",
    "Rebuild an existing product interface accurately from screenshots"
  ],
  learn:[
    "Frames vs. groups, sections, pages, file organisation",
    "Constraints, layout grids, alignment and distribution",
    "Fills, strokes, effects, blend modes",
    "Type scales, line height, truncation behaviour",
    "SVG import/export, icon workflows, branching"
  ],
  enterprise:[
    "File architecture for a 400-screen product",
    "Naming conventions that survive three designers and two years",
    "Plugins worth installing: Iconify, Content Reel, Similayer, Design Lint, Autoflow"
  ],
  practice:"Pick Linear, Stripe, or Notion. Screenshot one screen. Rebuild it in Figma without measuring — then overlay your version on the screenshot at 50% opacity and fix every discrepancy. Three hours here beats ten tutorials.",
  deliverable:"Rebuild a real dashboard to pixel accuracy, with a documented type scale and spacing system.",
  videos:[
    { t:"Figma fundamentals — official course", ch:CHANNELS.figma, q:"Figma beginners tutorial official course", why:"Start with the source. Figma's channel updates as the tool changes, so it will not teach you a deprecated workflow." },
    { t:"Figma from zero — full walkthrough", ch:CHANNELS.mizko, q:"Mizko Figma full course beginners", why:"Project-based, so you finish with an artifact rather than just knowledge. Better retention than feature tours." },
    { t:"File organisation and naming at scale", ch:CHANNELS.figma, q:"Figma file organization best practices teams", why:"The part nobody teaches until they have suffered. Learning it early saves an entire painful year." }
  ],
  articles:[
    { t:"Figma Help Center", s:"Figma", u:"https://help.figma.com/" },
    { t:"Figma best practices", s:"Figma", u:"https://www.figma.com/best-practices/" },
    { t:"Refactoring UI", s:"Wathan & Schoger", u:"https://www.refactoringui.com/" }
  ],
  quiz:[
    { q:"A frame differs from a group primarily because a frame:", a:["Can be renamed","Can clip content, hold layout grids, and apply Auto Layout","Renders faster","Can contain images"], correct:1, why:"Groups are a selection convenience. Frames are containers with behaviour — clipping, grids, constraints, Auto Layout." },
    { q:"You rebuild a real product pixel-for-pixel mainly to learn:", a:["How to copy designs","Spacing systems, type scales, and component decisions made by strong teams","Which colours are trendy","How to work quickly"], correct:1, why:"Rebuilding forces you to notice every 4px decision. You absorb the system, not the surface." },
    { q:"Constraints control what happens when:", a:["A component variant changes","The parent frame is resized","A user hovers an element","Auto Layout direction flips"], correct:1, why:"Constraints are resize behaviour for absolutely positioned children. Auto Layout replaces them for children in flow." }
  ]
},
{
  id:"m5", phase:2, weeks:"Weeks 11–13", title:"Auto Layout & Components", kicker:"Tool mastery", hours:"35–45 hrs",
  blurb:"If your data table breaks when you drag its edge, you have not built a component. You have built a picture of one.",
  outcomes:[
    "Build a data table that survives any width without manual fixing",
    "Design a component API a colleague can use without asking questions",
    "Use variables and modes to theme without duplicating components"
  ],
  learn:[
    "Auto Layout: direction, spacing, padding, alignment, hug / fill / fixed",
    "Nested Auto Layout — tables need three to four levels",
    "Absolute position inside Auto Layout for badges and overlays",
    "Component properties: boolean, instance swap, text, variant",
    "Variants and multi-dimensional matrices",
    "Variables and modes: colour, spacing, string"
  ],
  enterprise:[
    "Build a data table that resizes correctly — the ultimate Auto Layout exam",
    "Column pinning, resizing, sorting, filtering, and their combined states",
    "Component API design: fewer properties, better names",
    "Slot and wrapper patterns for layout components"
  ],
  practice:"Build one table row component: checkbox, status badge, three text columns of different widths, actions menu. Now drag the parent frame from 1920px to 700px. Everything that breaks is a lesson.",
  deliverable:"A 30-component library where nothing breaks at any width.",
  videos:[
    { t:"Auto Layout in depth", ch:CHANNELS.figma, q:"Figma auto layout advanced tutorial", why:"Auto Layout changes often enough that dated tutorials teach wrong habits. The official channel tracks current behaviour." },
    { t:"Component properties, variants, and variables", ch:CHANNELS.figma, q:"Figma component properties variants variables", why:"Properties and variants solve different problems and are constantly confused. Get the distinction from the source." },
    { t:"Building a real data table component", ch:CHANNELS.mizko, q:"Figma data table component build tutorial", why:"Search for a build-along, not an explainer. The table is where Auto Layout theory either holds or collapses." }
  ],
  articles:[
    { t:"Auto Layout guide", s:"Figma Help", u:"https://help.figma.com/" },
    { t:"Data table pattern", s:"Carbon Design System", u:"https://carbondesignsystem.com/" },
    { t:"Table component API", s:"Ant Design", u:"https://ant.design/" }
  ],
  quiz:[
    { q:"A table cell should typically be set to:", a:["Fixed width, hug height","Fill width, hug height","Hug width, fill height","Fixed width, fixed height"], correct:1, why:"Fill lets the column system control width; hug lets content control row height. That combination survives resizing and long values." },
    { q:"The best sign of a well-designed component API is:", a:["Many properties covering every case","Few properties with names a new designer understands immediately","Deep variant matrices","Heavy use of instance swap"], correct:1, why:"Every property is a decision you force on the next person. Fewer, clearer properties beat exhaustive coverage." },
    { q:"A notification badge overlapping an avatar corner should use:", a:["A separate group outside Auto Layout","Absolute position inside the Auto Layout frame","Negative padding","A component variant per position"], correct:1, why:"Absolute position keeps it inside the component while removing it from the flow. Purpose-built for exactly this." },
    { q:"Variable modes are most useful in enterprise for:", a:["Animation timing","Light/dark plus density plus multi-brand theming from one component set","Renaming layers in bulk","Prototyping logic"], correct:1, why:"One button, four modes: light comfortable, light compact, dark comfortable, dark compact. No duplicated components." }
  ]
},
{
  id:"m6", phase:2, weeks:"Weeks 14–16", title:"Design Systems", kicker:"Tool mastery", hours:"40–50 hrs",
  blurb:"A design system is a product whose users are designers and developers. It needs versioning, documentation, and someone who owns it.",
  outcomes:[
    "Structure tokens in three tiers and explain why each exists",
    "Write component documentation someone can use without asking you",
    "Define a contribution and deprecation process"
  ],
  learn:[
    "Atomic Design: atoms → molecules → organisms → templates → pages",
    "Token tiers: primitive → semantic → component",
    "Naming conventions such as color.bg.surface.raised and space.400",
    "Theming: light/dark, density modes, brand modes",
    "Documentation, governance, contribution model, versioning"
  ],
  enterprise:[
    "Carbon (IBM) — the strongest enterprise and data system to study",
    "Atlassian — complex workflow patterns",
    "Salesforce Lightning — CRM at scale",
    "Ant Design — the densest table and form patterns anywhere",
    "Deprecation notices and migration paths matter more than new components"
  ],
  practice:"Take a colour you use. Write it three ways: primitive (blue-600), semantic (color.action.primary), component (button.bg.default). Now change the brand colour and trace which layer you actually edit. That is the argument for three tiers, in one exercise.",
  deliverable:"A tokenized, documented, versioned mini design system with a changelog.",
  videos:[
    { t:"Introduction to design systems", ch:CHANNELS.figma, q:"Figma introduction to design systems playlist", why:"Figma maintains a dedicated design systems playlist — structured, sequential, and matched to the current variable system." },
    { t:"Design tokens end to end", ch:CHANNELS.figma, q:"design tokens Figma variables tutorial", why:"Tokens are what let a system survive a rebrand. Learn the three-tier structure before you build components." },
    { t:"Governance, contribution, and scaling", ch:CHANNELS.femke, q:"design system governance contribution scaling team", why:"The part that decides whether a system lives or dies. Almost never covered in build tutorials — search for it deliberately." }
  ],
  articles:[
    { t:"Carbon Design System", s:"IBM", u:"https://carbondesignsystem.com/" },
    { t:"Atlassian Design System", s:"Atlassian", u:"https://atlassian.design/" },
    { t:"Ant Design", s:"Ant Group", u:"https://ant.design/" },
    { t:"Polaris", s:"Shopify", u:"https://polaris.shopify.com/" },
    { t:"Awesome Design Tokens — curated list", s:"GitHub", u:"https://github.com/sturobson/Awesome-Design-Tokens" }
  ],
  quiz:[
    { q:"Which token is correctly semantic rather than primitive?", a:["blue-500","color.bg.danger.subtle","#D42B2B","brandBlue"], correct:1, why:"Semantic tokens describe purpose, not appearance. They let you retheme without renaming anything." },
    { q:"The primary reason for a three-tier token structure is:", a:["It looks more professional","You can change a brand colour once and have it propagate correctly by meaning","Developers require it","It reduces file size"], correct:1, why:"Primitive holds the value, semantic holds the meaning, component holds the application. Change one layer without breaking the others." },
    { q:"The most-neglected part of design system work is usually:", a:["Building components","Choosing colours","Governance and contribution process","Icon design"], correct:2, why:"Systems die from unmanaged growth, not from missing components. Who approves, who maintains, how you deprecate — that is the real work." },
    { q:"Which system is the best reference for dense data tables?", a:["Material 3","Ant Design","Bootstrap","Tailwind UI"], correct:1, why:"Ant Design emerged from Chinese enterprise software where density expectations are highest. Its table API is the most complete in public documentation." }
  ]
},
{
  id:"m7", phase:3, weeks:"Weeks 17–19", title:"Dashboard UI Patterns", kicker:"Specialisation", hours:"40–50 hrs",
  blurb:"Four dashboard types exist and they are not interchangeable. Designing an operational dashboard like a strategic one gets people hurt.",
  outcomes:[
    "Identify which of the four dashboard types a brief actually needs",
    "Design a filter system with saved views a daily user would keep",
    "Apply a written rule for modal vs drawer vs inline vs page"
  ],
  learn:[
    "Strategic: KPI overview for executives, daily or weekly refresh",
    "Analytical: explore and compare, refreshed on demand",
    "Operational: monitor and act now, real-time — NOC, dispatch, ward",
    "Tactical: progress against plan, hourly or daily"
  ],
  enterprise:[
    "KPI cards with trend, delta, sparkline, and comparison period",
    "Data tables: sort, filter, group, pin, expand, inline edit, virtual scroll",
    "Filter systems: global bar, faceted filters, saved views, filter chips",
    "Forms: multi-step, conditional logic, inline validation, autosave, dirty-state warnings",
    "Modal vs. drawer vs. inline vs. new page — a decision framework, not a preference",
    "Command palette, global search, typeahead, advanced query builder",
    "Permissions: hide vs. disable vs. explain"
  ],
  practice:"Find a public dashboard — a government health page, a city open-data portal. Classify it: strategic, analytical, operational, or tactical? Now list every element belonging to a different type. That mismatch is the most common dashboard failure in existence.",
  deliverable:"Pattern library with a written usage rule and anti-pattern for each entry.",
  videos:[
    { t:"12 dashboard design tips", ch:CHANNELS.cube, direct:VERIFIED.dash12, why:"Tool-agnostic principles that apply whether you are in Figma, Power BI, or Tableau. A good calibration piece before you design anything." },
    { t:"Dashboard layout and information hierarchy", ch:CHANNELS.smoak, q:"dashboard design layout hierarchy build tutorial", why:"Smoak's long-form builds let you watch layout decisions accumulate — more instructive than a finished screenshot." },
    { t:"Complex forms and filter UX", ch:CHANNELS.nng, q:"NNgroup form design complex applications", why:"Forms are half of enterprise UX and chronically under-taught. NN/g's research-backed guidance is the most reliable." }
  ],
  articles:[
    { t:"Data visualization articles", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/data-visualization/" },
    { t:"Data table usage guidance", s:"Carbon Design System", u:"https://carbondesignsystem.com/" },
    { t:"Form and checkout UX research", s:"Baymard Institute", u:"https://baymard.com/" },
    { t:"Application design patterns", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/application-design/" }
  ],
  quiz:[
    { q:"A hospital ward display showing live patient vitals is which dashboard type?", a:["Strategic","Analytical","Operational","Tactical"], correct:2, why:"Operational dashboards demand immediate action and real-time data. They optimise for glanceability and alerting, not exploration." },
    { q:"A KPI card showing '£1.2M' with no comparison is:", a:["Clean and focused","Meaningless — a number without a reference point cannot be judged","Ideal for executives","Correct if the label is clear"], correct:1, why:"Is £1.2M good? Against last month, against target, against last year? Without comparison the number is decoration." },
    { q:"Use a modal rather than a drawer or page when:", a:["The content is long","The user must resolve one focused decision before continuing","You want to save screen space","The form has more than five fields"], correct:1, why:"Modals interrupt deliberately. Justified for a blocking decision, hostile for anything needing reference to other data." },
    { q:"Saved views matter in enterprise because:", a:["They look advanced","Users repeat the same filtered query daily and rebuilding it is pure waste","They reduce server load","They are required for accessibility"], correct:1, why:"The AR clerk filters to 'overdue, my region, over £5,000' every morning. Making her rebuild it daily is a design failure." },
    { q:"For an action a user lacks permission to perform, the best default is:", a:["Hide it silently","Disable it with an explanation of what access is needed","Show it and error on click","Remove the entire section"], correct:1, why:"Hiding breaks shared mental models between colleagues — 'just click Approve' / 'I don't have that button'. Explain instead." }
  ]
},
{
  id:"m8", phase:3, weeks:"Weeks 20–21", title:"Data Visualization", kicker:"Specialisation", hours:"25–30 hrs",
  blurb:"Position beats length beats angle beats area beats colour. Every chart choice you make is a claim about what the reader should compare.",
  outcomes:[
    "Choose a chart type from the question being asked, not from habit",
    "Detect and avoid misleading encodings in your own work",
    "Provide an accessible equivalent for every chart you ship"
  ],
  learn:[
    "Chart selection by intent: comparison, composition, distribution, relationship, trend",
    "Encoding hierarchy — position, length, angle, area, colour",
    "Axis truncation ethics, dual-axis traps, the limits of pie charts",
    "Colour: sequential, diverging, categorical, colourblind-safe palettes",
    "Annotation, benchmarks, targets, thresholds, confidence bands",
    "Interactivity: hover, brush, zoom, drill-down, cross-filter"
  ],
  enterprise:[
    "Chart states: empty, loading, no data, single data point, too much data",
    "When a table beats a chart — precision reading and export needs",
    "Accessible charts require a data-table alternative, not just alt text",
    "Real-time charts need stable axes or the motion becomes unreadable"
  ],
  practice:"Take any chart from a news site. Write the one sentence it is trying to make you believe. Then ask whether the encoding supports that sentence or does something the data does not justify. Do this ten times and your eye changes permanently.",
  deliverable:"Redesign a bad public dashboard and document every encoding decision.",
  videos:[
    { t:"Choosing and defending a chart type", ch:CHANNELS.swd, q:"storytelling with data choosing chart type", why:"Knaflic's channel is the practical companion to the book — same clarity, applied to real makeovers rather than theory." },
    { t:"Chart critique and makeovers", ch:CHANNELS.kriebel, q:"Andy Kriebel makeover chart critique", why:"Watching someone diagnose a bad chart out loud teaches judgment faster than any principles list. The critiques are the value." },
    { t:"Colour, accessibility, and encoding", ch:CHANNELS.dvs, q:"data visualization color accessibility encoding talk", why:"DVS talks go deeper into theory than tool tutorials, which is where colourblind-safe and encoding decisions actually get argued." }
  ],
  articles:[
    { t:"From Data to Viz — chart chooser", s:"data-to-viz.com", u:"https://www.data-to-viz.com/" },
    { t:"FT Visual Vocabulary", s:"Financial Times", u:"https://github.com/Financial-Times/chart-doctor" },
    { t:"ColorBrewer palettes", s:"Cynthia Brewer", u:"https://colorbrewer2.org/" },
    { t:"Data visualization articles", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/data-visualization/" }
  ],
  quiz:[
    { q:"Ranked by descending accuracy of human perception, the correct order is:", a:["Colour → area → angle → length → position","Position → length → angle → area → colour","Length → position → colour → area → angle","Area → position → length → colour → angle"], correct:1, why:"Cleveland and McGill's ranking. It is why bar charts beat pie charts and why colour should carry categories, not quantities." },
    { q:"Truncating a bar chart's y-axis is:", a:["Fine if labelled","Misleading, because bar length is the encoding and truncation distorts it","Recommended to show detail","Only a problem in print"], correct:1, why:"Bars encode magnitude through length from zero. Line charts encode change and may start elsewhere — bars may not." },
    { q:"A pie chart is defensible when:", a:["There are two or three parts and the point is 'roughly half'","You have seven categories","The data is time-series","You need precise value comparison"], correct:0, why:"Angle judgment is weak. Two or three slices making a coarse point survives; anything requiring precision does not." },
    { q:"For an accessible chart, the essential companion is:", a:["A longer alt text","An equivalent data table","Higher contrast only","Animation on load"], correct:1, why:"No alt text conveys 36 monthly values. A linked or toggleable data table gives full access to the underlying numbers." }
  ]
},
{
  id:"m9", phase:3, weeks:"Weeks 22–23", title:"Responsive & Adaptive Design", kicker:"Specialisation", hours:"20–25 hrs",
  blurb:"Desktop-first is correct here, and that is the opposite of everything consumer UX taught you. Mobile enterprise is a task subset, not parity.",
  outcomes:[
    "Define breakpoints from content behaviour rather than device names",
    "Apply a documented column-priority rule to a wide table",
    "Decide which tasks belong on mobile and defend the exclusions"
  ],
  learn:[
    "Breakpoints, fluid type and space, container queries",
    "Responsive tables: horizontal scroll, priority columns, card collapse, stacked rows",
    "Navigation collapse: sidebar → rail → drawer → bottom bar",
    "Touch targets, thumb zones, hover-free interaction"
  ],
  enterprise:[
    "Support 1280px minimum, design at 1440px, test at 1920px and above",
    "Ultrawide needs max-width containers, not infinite stretch",
    "Mobile enterprise = approve, view, scan, log — not full CRUD",
    "Column priority logic must be documented, not improvised per screen"
  ],
  practice:"List your table's columns. Rank them 1–n by how often someone needs them to make a decision. That ranking is your responsive rule — columns drop from the bottom up. Write it down once and every screen becomes consistent.",
  deliverable:"One module at four breakpoints with documented column-priority rules.",
  videos:[
    { t:"Container queries and modern responsive CSS", ch:CHANNELS.kevin, q:"Kevin Powell container queries responsive", why:"Powell explains responsive mechanics more clearly than anyone on the platform. Worth the time even if you never write CSS." },
    { t:"Responsive layout patterns in practice", ch:CHANNELS.chrome, q:"Chrome Developers container queries responsive layout", why:"Straight from the platform team. Useful for knowing what is actually supported versus what is aspirational." },
    { t:"Responsive tables and data-heavy layouts", ch:CHANNELS.dcourse, q:"responsive data table design pattern tutorial", why:"Tables are the hardest responsive problem in enterprise. Search this specifically — general tutorials always use cards." }
  ],
  articles:[
    { t:"Container queries", s:"MDN Web Docs", u:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries" },
    { t:"Responsive data tables", s:"CSS-Tricks", u:"https://css-tricks.com/responsive-data-tables/" },
    { t:"Grid and breakpoints", s:"Carbon Design System", u:"https://carbondesignsystem.com/" }
  ],
  quiz:[
    { q:"Enterprise dashboards are usually designed desktop-first because:", a:["Desktop is easier to design","The primary work happens at a desk on large screens for hours","Mobile browsers cannot render tables","Developers prefer it"], correct:1, why:"The AP clerk processes 200 invoices at a 27-inch monitor. Mobile-first would optimise for the 3% case." },
    { q:"The best mobile strategy for a 14-column table is:", a:["Horizontal scroll with everything","Shrink font size until it fits","Collapse into cards showing 3–4 highest-priority fields with a detail view","Hide the table on mobile"], correct:2, why:"Priority columns plus a detail drill-down respects the small screen. Scrolling 14 columns sideways is not use, it is endurance." },
    { q:"On ultrawide monitors, content should:", a:["Stretch to fill the full width","Sit in max-width containers, possibly with a second column of context","Scale font sizes up proportionally","Add more whitespace at the edges only"], correct:1, why:"Line lengths beyond ~75 characters destroy readability. Use the space for a second pane, not longer lines." }
  ]
},
{
  id:"m10", phase:3, weeks:"Weeks 24–25", title:"Accessibility", kicker:"Specialisation", hours:"30–35 hrs",
  blurb:"In government, healthcare, and finance this is not a nice-to-have. It is a contract requirement and a procurement gate.",
  outcomes:[
    "Audit a complex module against WCAG 2.2 AA and write up findings",
    "Navigate your own design using only a keyboard and a screen reader",
    "Provide accessible equivalents for tables and charts"
  ],
  learn:[
    "WCAG 2.2 AA: 4.5:1 text contrast, 3:1 for UI and graphics",
    "Keyboard: tab order, visible focus, focus trap, skip links, shortcuts",
    "ARIA: roles, live regions, labels, aria-sort for tables",
    "Screen readers: NVDA on Windows, VoiceOver on macOS and iOS",
    "Motion preferences, 200% zoom, 24px minimum target size"
  ],
  enterprise:[
    "Section 508 (US) and EN 301 549 (EU) gate public-sector contracts",
    "Accessible complex tables need proper headers, scope, and sort announcements",
    "Charts need data-table equivalents",
    "Power-user keyboard efficiency and accessibility are the same investment"
  ],
  practice:"Unplug your mouse for one full working hour. Use only the keyboard. Every place you get stuck is a place a keyboard-only user is permanently stuck. This single exercise changes more designs than any checklist.",
  deliverable:"Full audit of one module, a remediated version, and a VPAT-style summary.",
  videos:[
    { t:"WCAG criteria in plain English", ch:CHANNELS.a11y, direct:VERIFIED.a11yChannel, why:"Deliberately slow-paced, human-captioned, explains each success criterion with real examples. The single best free WCAG resource on YouTube." },
    { t:"WCAG training course — structured playlist", ch:CHANNELS.a11y, direct:VERIFIED.wcagCourse, why:"A sequence rather than scattered videos. Work through it in order alongside your own audit." },
    { t:"Screen reader testing for non-native users", ch:CHANNELS.a11y, direct:VERIFIED.srNonNative, why:"Testing with a screen reader you do not use daily is its own skill. Most guides assume fluency — this one does not." }
  ],
  extra:[ VERIFIED.srExperience, VERIFIED.srDev, VERIFIED.a11yTesting ],
  articles:[
    { t:"WCAG 2.2 quick reference", s:"W3C", u:"https://www.w3.org/WAI/WCAG22/quickref/" },
    { t:"ARIA Authoring Practices Guide", s:"W3C", u:"https://www.w3.org/WAI/ARIA/apg/" },
    { t:"Contrast checker", s:"WebAIM", u:"https://webaim.org/resources/contrastchecker/" },
    { t:"Screen reader testing guide", s:"WebAIM", u:"https://webaim.org/articles/screenreader_testing/" },
    { t:"Section 508 standards", s:"US Access Board", u:"https://www.access-board.gov/ict/" }
  ],
  quiz:[
    { q:"Minimum contrast ratio for normal body text under WCAG AA is:", a:["3:1","4.5:1","7:1","2:1"], correct:1, why:"4.5:1 for normal text, 3:1 for large text and for non-text UI components and graphical objects." },
    { q:"A sortable table column needs which ARIA attribute to announce state?", a:["aria-label","aria-sort","aria-live","role=grid alone"], correct:1, why:"aria-sort on the column header communicates ascending, descending, or none to assistive technology." },
    { q:"Designing strong keyboard navigation primarily benefits:", a:["Only screen reader users","Screen reader users and high-volume power users equally","Mobile users","Developers during testing"], correct:1, why:"The clerk processing 200 records and the blind user both need to never touch the mouse. Same solution, two audiences." },
    { q:"In enterprise procurement, accessibility failure most often means:", a:["A bad review","Disqualification from public-sector bids","Slower page loads","A minor rework cost"], correct:1, why:"Section 508 and EN 301 549 are gates. No VPAT, no bid — regardless of how good the product is." }
  ]
},
{
  id:"m11", phase:3, weeks:"Weeks 26–28", title:"Prototyping & Usability Testing", kicker:"Specialisation", hours:"35–40 hrs",
  blurb:"Test with domain experts, not generic users. A UX student cannot tell you whether your three-way match screen is wrong.",
  outcomes:[
    "Build a prototype with conditional logic and realistic data",
    "Run a moderated session without leading the participant",
    "Turn findings into severity-rated, prioritised recommendations"
  ],
  learn:[
    "Fidelity levels and when each is appropriate",
    "Figma: smart animate, interactive components, variables, conditional logic, expressions",
    "Realistic data prototypes via sheet-sync plugins",
    "Protocols: task-based, think-aloud, moderated vs. unmoderated",
    "Metrics: task success, time-on-task, error rate, SUS, SEQ"
  ],
  enterprise:[
    "Five users per role, not five users total",
    "Benchmark against the legacy system you are replacing — that is your baseline",
    "Measure efficiency, not delight",
    "Severity ratings turn findings into a prioritised backlog stakeholders can act on"
  ],
  practice:"Record yourself running a test session. Watch it back and count how many times you explained something, finished the participant's sentence, or said 'so what you would do is…'. That number is your leading-question habit. Halve it next session.",
  deliverable:"Working prototype + test plan + 5 sessions + findings report with severity ratings.",
  videos:[
    { t:"Advanced prototyping with variables and conditionals", ch:CHANNELS.figma, q:"Figma prototyping variables conditional logic", why:"Conditional prototyping lets you test real workflow logic without a developer. Get it from the source — the feature set moves fast." },
    { t:"Running a usability test properly", ch:CHANNELS.nng, q:"NNgroup usability testing how to moderate", why:"NN/g's protocol guidance is the field standard. Moderation technique is where most self-taught researchers go wrong." },
    { t:"Research synthesis and presenting findings", ch:CHANNELS.jesse, q:"Jesse Showalter usability testing research synthesis", why:"Specifically strong on the part after the sessions — turning raw notes into something a team will act on." }
  ],
  articles:[
    { t:"Usability testing articles", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/usability-testing/" },
    { t:"System Usability Scale", s:"MeasuringU", u:"https://measuringu.com/sus/" },
    { t:"Prototyping in Figma", s:"Figma Help", u:"https://help.figma.com/" }
  ],
  quiz:[
    { q:"Why is 'five users' misleading in enterprise research?", a:["Five is too many","Roles have different workflows — you need five per role","Enterprise users are all identical","It only applies to mobile"], correct:1, why:"The approver, the requester, and the auditor use the same screen for different reasons. Five of each, not five in total." },
    { q:"Your baseline for measuring improvement should be:", a:["Industry averages","The legacy system the users currently work in","A competitor's product","Your first prototype"], correct:1, why:"'23% faster than the system you use today' is a business case. 'Users liked it' is not." },
    { q:"Severity ratings exist mainly to:", a:["Make the report longer","Let stakeholders prioritise fixes against limited engineering time","Rank the designers","Satisfy accessibility requirements"], correct:1, why:"A list of 40 findings is noise. A list ranked by frequency, impact, and persistence is a roadmap." }
  ]
},
{
  id:"m12", phase:4, weeks:"Weeks 29–30", title:"Developer Handoff", kicker:"Professional practice", hours:"20–25 hrs",
  blurb:"The goal is a package a developer can build from without asking a single question. Redline what matters — spacing, states, responsive rules — not pixel positions.",
  outcomes:[
    "Annotate a design so behaviour is unambiguous without conversation",
    "Explain a token pipeline from Figma variable to CSS variable",
    "Anticipate technical cost before proposing a design"
  ],
  learn:[
    "Figma Dev Mode: ready-for-dev, annotations, measurements, code snippets",
    "Tokens Studio → JSON → Style Dictionary → CSS, Tailwind, iOS, Android",
    "Component specs: anatomy, props, states, behaviour, do and don't",
    "Version control, changelogs, deprecation notices"
  ],
  enterprise:[
    "Technical fluency: HTML semantics, CSS Flexbox and Grid, tokens as CSS variables",
    "Component-based thinking — the React mental model",
    "REST and GraphQL basics, so you know why some data loads slowly",
    "Tailwind scale, Storybook, Git basics",
    "Say 'I know this is expensive' before the developer has to"
  ],
  practice:"Hand a design to a developer with no verbal explanation. Log every question they ask. Each question is a missing annotation. Fix them, then repeat with the next design — the question count should fall each time.",
  deliverable:"A handoff package a developer builds from with zero clarifying questions.",
  videos:[
    { t:"Dev Mode and annotations", ch:CHANNELS.figma, q:"Figma dev mode annotations handoff", why:"Dev Mode changed handoff substantially. Learn the current feature set rather than the old inspect-panel workflow." },
    { t:"Design tokens to production code", ch:CHANNELS.figma, q:"design tokens style dictionary pipeline tutorial", why:"Seeing the JSON come out the other end is what makes tokens click. Search for a full pipeline walkthrough, not a concept video." },
    { t:"Designer–developer collaboration in practice", ch:CHANNELS.dcourse, q:"designer developer handoff collaboration workflow", why:"DesignCourse sits on both sides of the line, which is exactly the perspective this module needs." }
  ],
  articles:[
    { t:"Figma Dev Mode", s:"Figma Help", u:"https://help.figma.com/" },
    { t:"Style Dictionary", s:"Amazon", u:"https://styledictionary.com/" },
    { t:"Tokens Studio", s:"Tokens Studio", u:"https://tokens.studio/" },
    { t:"Storybook", s:"Storybook", u:"https://storybook.js.org/" }
  ],
  quiz:[
    { q:"In a handoff, the most valuable annotation is usually:", a:["Exact x/y pixel coordinates","Responsive behaviour, states, and interaction rules","Font file names","Layer names"], correct:1, why:"Developers can measure. They cannot guess what happens at 1024px, on error, or when the field is disabled." },
    { q:"Style Dictionary's job is to:", a:["Design colour palettes","Transform one token source into platform-specific outputs","Replace Figma","Generate documentation sites"], correct:1, why:"One JSON source becomes CSS variables, Tailwind config, Swift, and XML. Single source of truth across platforms." },
    { q:"Basic API literacy helps a designer mainly by:", a:["Letting them write backend code","Explaining why some data cannot appear together on one screen without a slow load","Improving Figma performance","Replacing developer conversations"], correct:1, why:"Knowing your 'simple' combined view needs four calls changes the design before it wastes a sprint." }
  ]
},
{
  id:"m13", phase:4, weeks:"Weeks 31–34", title:"Enterprise Domain Knowledge", kicker:"Professional practice", hours:"50–60 hrs",
  blurb:"Pick two domains and go deep. Learning the workflow always precedes designing the interface — you cannot simplify what you do not understand.",
  outcomes:[
    "Explain a full document lifecycle in your chosen domain from memory",
    "Use the domain's vocabulary correctly in a stakeholder meeting",
    "Identify where regulatory constraints sit before designing"
  ],
  learn:[
    "ERP — GL, AP, AR, inventory, procurement, manufacturing, HR",
    "CRM — Lead, Contact, Account, Opportunity, Activity, Case",
    "HRM/HCM — ATS, onboarding, core HR, time and attendance, payroll, performance",
    "LMS — course structure, SCORM/xAPI, paths, prerequisites, competencies, cohorts",
    "Healthcare — EHR/EMR, HL7/FHIR, ICD/CPT, HIPAA, triage, CPOE",
    "Finance — KYC/AML, double-entry, reconciliation, settlement, risk exposure"
  ],
  enterprise:[
    "Document lifecycle: draft → submitted → approved → posted → reversed",
    "Approval chains, audit trails, multi-currency, multi-company",
    "In healthcare, error prevention is safety-critical — alert fatigue kills",
    "Study the real products: SAP Fiori, Odoo, Salesforce, Workday, Canvas, Epic, Bloomberg"
  ],
  practice:"Sign up for a free Odoo or HubSpot trial. Complete one full business process end to end — raise a purchase order and receive it, or take a lead through to a closed deal. Note every point you got stuck. That confusion is your users' daily experience.",
  deliverable:"Per domain: workflow map + glossary + one redesigned module.",
  videos:[
    { t:"ERP concepts for non-accountants", ch:null, q:"ERP fundamentals explained modules finance inventory", why:"Search business-education channels rather than design channels. You need the domain — the interface is your job, not theirs." },
    { t:"CRM pipeline and sales process", ch:null, q:"CRM sales pipeline stages explained tutorial", why:"Vendor channels (HubSpot Academy, Salesforce) teach their own product, but the underlying object model is industry-standard." },
    { t:"EHR and clinical workflow overview", ch:null, q:"EHR clinical workflow overview health IT", why:"Health IT channels explain triage, orders, and charting. Understand alert fatigue before designing a single clinical alert." }
  ],
  articles:[
    { t:"SAP Fiori design guidelines", s:"SAP", u:"https://experience.sap.com/fiori-design-web/" },
    { t:"Salesforce Lightning Design System", s:"Salesforce", u:"https://www.lightningdesignsystem.com/" },
    { t:"Odoo — explore a real ERP", s:"Odoo", u:"https://www.odoo.com/" },
    { t:"HL7 FHIR", s:"HL7", u:"https://www.hl7.org/fhir/" },
    { t:"Workday design", s:"Workday", u:"https://design.workday.com/" }
  ],
  quiz:[
    { q:"A three-way match in procurement compares:", a:["Three approvers' signatures","Purchase order, goods receipt, and supplier invoice","Budget, actual, and forecast","Three quotes from vendors"], correct:1, why:"PO says what you ordered, receipt says what arrived, invoice says what you are billed. Mismatch means investigate before paying." },
    { q:"In CRM, the difference between a Lead and a Contact is that a Lead:", a:["Is a company, not a person","Is unqualified and not yet linked to an Account","Has already purchased","Belongs to marketing only, permanently"], correct:1, why:"Leads convert. On conversion they typically become Contact + Account + Opportunity. Designing that moment badly is a classic CRM failure." },
    { q:"In healthcare interfaces, alert fatigue means:", a:["Clinicians are tired at night","Too many low-value warnings train users to dismiss all warnings, including critical ones","The system alerts too slowly","Alerts are visually inconsistent"], correct:1, why:"A documented patient-safety hazard. Every alert you add reduces the power of every other alert." },
    { q:"'Posted' in an accounting document lifecycle means the record is:", a:["Sent by email","Committed to the ledger and no longer freely editable","Published to a portal","Awaiting approval"], correct:1, why:"After posting you correct by reversal, not by editing. Designing an edit button on a posted document is an audit failure." }
  ]
},
{
  id:"m14", phase:4, weeks:"Weeks 35–36", title:"Stakeholder & Business Skills", kicker:"Professional practice", hours:"20–25 hrs",
  blurb:"Design rationale in business terms: hours saved, errors reduced, training cost avoided. 'It's cleaner' has never won a budget argument.",
  outcomes:[
    "Present a design decision as a quantified business case",
    "Facilitate a requirements workshop with conflicting stakeholders",
    "Negotiate scope and phasing without losing the core workflow"
  ],
  learn:[
    "Requirement gathering, workshop facilitation, stakeholder mapping",
    "Presenting rationale as time saved, errors reduced, training cost avoided",
    "Handling legacy-feature demands and 'the client wants it this way'",
    "Scoping, phasing, MVP negotiation, technical constraint navigation",
    "Design QA after implementation",
    "Measuring impact: completion time, ticket volume, error rates, adoption"
  ],
  enterprise:[
    "The person who signs off is rarely the person who uses it — plan for both",
    "Legacy features exist because of an incident. Ask which one.",
    "Phasing protects you: ship the workflow that hurts most, first",
    "Design QA is where 30% of your decisions quietly disappear if you skip it"
  ],
  practice:"Take one design decision you have made. Write the business case in three sentences: what it costs today, what it costs after, and the annual difference. If you cannot find the numbers, that is the exercise — go and ask for them.",
  deliverable:"Stakeholder presentation framing the redesign as a business case with projected numbers.",
  videos:[
    { t:"Presenting and defending design work", ch:CHANNELS.futur, q:"The Futur presenting design work to clients", why:"The Futur is built around exactly this — talking about design with people who control budgets. Uncomfortable and useful." },
    { t:"Workshop facilitation and alignment", ch:CHANNELS.ajsmart, q:"AJ&Smart workshop facilitation stakeholder alignment", why:"Facilitation is a learnable skill and AJ&Smart teaches it better than anyone. Directly applicable to requirements gathering." },
    { t:"Measuring UX impact and ROI", ch:CHANNELS.nng, q:"NNgroup UX ROI business value metrics", why:"You need defensible numbers, not vibes. NN/g publishes actual research on UX return on investment." }
  ],
  articles:[
    { t:"Articulating Design Decisions", s:"Tom Greever", u:"https://articulatingdesign.com/" },
    { t:"Design process and ROI", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/design-process/" },
    { t:"Managing UX teams and stakeholders", s:"Nielsen Norman Group", u:"https://www.nngroup.com/topic/managing-ux-teams/" }
  ],
  quiz:[
    { q:"The strongest way to defend a design decision to a CFO is:", a:["Show competitor screenshots","Cite best practice from a design system","Quantify time saved per transaction × volume × loaded cost","Explain the visual hierarchy"], correct:2, why:"Twelve seconds saved on 4,000 daily transactions is 13 hours a day. That is a number a CFO can act on." },
    { q:"A stakeholder insists on keeping a confusing legacy feature. Your first question should be:", a:["Can we remove it in phase two?","What incident or requirement caused this to be built?","Do users actually use it?","Can we hide it behind an advanced menu?"], correct:1, why:"Legacy features are usually scar tissue from a real failure or a regulator. Understand the wound before removing the bandage." },
    { q:"Design QA after implementation matters because:", a:["Developers make mistakes deliberately","Spacing, states, and edge cases drift under delivery pressure and nobody notices but you","It is required by WCAG","It shortens the sprint"], correct:1, why:"The design that ships is the only design that exists. Everything not verified in the build is a proposal." }
  ]
}
];

const PORTFOLIO = [
  { n:"01", t:"End-to-end enterprise redesign", s:"Full process, research through handoff. Pick one domain and commit.", shows:"Process depth" },
  { n:"02", t:"Design system + component library", s:"Tokens, variants, documentation, changelog, contribution guide.", shows:"Systems thinking" },
  { n:"03", t:"Data-heavy operational dashboard", s:"Density, encoding decisions, real-time states, accessible chart alternatives.", shows:"Data fluency" },
  { n:"04", t:"Complex workflow — multi-step approval", s:"Conditional logic, permissions, audit trail, error recovery.", shows:"Simplifying complexity" }
];

const CASESTUDY = [
  "Context and business problem",
  "Constraints — technical, regulatory, political",
  "Research and what surprised you",
  "IA and flow decisions",
  "Exploration, plus rejected options and why",
  "System and components",
  "Accessibility and responsive handling",
  "Handoff artifacts",
  "Outcome and metrics",
  "What you would change"
];

const BOOKS = [
  { t:"Designing Interfaces", a:"Jenifer Tidwell", w:"The pattern encyclopedia. Keep it open while wireframing." },
  { t:"Information Dashboard Design", a:"Stephen Few", w:"Still the definitive text on dashboard encoding." },
  { t:"Design Systems", a:"Alla Kholmatova", w:"Culture and governance, not just components." },
  { t:"Refactoring UI", a:"Wathan & Schoger", w:"Fastest visual-quality improvement per page read." },
  { t:"About Face", a:"Alan Cooper", w:"Where goal-directed design and the sovereign application idea come from." },
  { t:"Articulating Design Decisions", a:"Tom Greever", w:"How to survive the stakeholder meeting." },
  { t:"Storytelling with Data", a:"Cole Nussbaumer Knaflic", w:"Chart clarity, practical and immediately usable." }
];

const MILESTONES = [
  "Run a stakeholder and user interview, then produce an annotated task flow",
  "Card sort and tree test an IA of 100+ screens",
  "Build a Figma data table that never breaks at any width",
  "Build a tokenized system with light/dark and density modes",
  "Choose the right chart and defend the encoding",
  "Pass a WCAG 2.2 AA audit on a complex module",
  "Prototype conditional logic without writing code",
  "Hand off with zero developer questions",
  "Explain an ERP approval workflow from memory",
  "Present design decisions in business and ROI language"
];

const TEACHING = [
  { w:"1–4",   f:"UX fundamentals and IA", d:"Interviews with real staff. Card sort the university's own systems." },
  { w:"5–8",   f:"Figma, Auto Layout, components", d:"Pixel rebuild of a real product. Graded on structure, not looks." },
  { w:"9–12",  f:"Design system build", d:"Group project. Each student owns 3 components against one shared token spec." },
  { w:"13–16", f:"Dashboard patterns and data viz", d:"Redesign a bad public dashboard with documented encoding rationale." },
  { w:"17–20", f:"Domain project", d:"Assign a real messy spreadsheet a local business uses. Replace it." },
  { w:"21–24", f:"Prototype, test, hand off, present", d:"Test with domain experts. Present as a business case." }
];

const ASSIGNMENTS = [
  "Give students a real messy spreadsheet a business actually uses. Design the system that replaces it.",
  "Redesign the university's own registration or LMS. They are the domain experts already.",
  "Pair students as designer and stakeholder with deliberately conflicting written goals.",
  "Component-library relay: each student builds 3 components to one shared token spec, then they must compose.",
  "Time-on-task competition: whose design completes the workflow in fewest clicks without losing clarity."
];

const GLOSSARY = [
  { t:"Three-way match", d:"Comparing purchase order, goods receipt, and supplier invoice before payment. A mismatch triggers investigation.", tag:"ERP" },
  { t:"GL / AP / AR", d:"General Ledger, Accounts Payable, Accounts Receivable. The three core finance modules of any ERP.", tag:"ERP" },
  { t:"Posted", d:"A document committed to the ledger. No longer editable — corrections happen by reversal.", tag:"ERP" },
  { t:"BOM", d:"Bill of Materials. The component list and quantities required to manufacture one unit.", tag:"ERP" },
  { t:"MRP", d:"Material Requirements Planning. Calculates what to buy or make, and when, from demand and stock.", tag:"ERP" },
  { t:"Lead vs Contact", d:"A Lead is unqualified and unlinked. On conversion it becomes Contact + Account + Opportunity.", tag:"CRM" },
  { t:"MQL / SQL", d:"Marketing Qualified Lead / Sales Qualified Lead. The handoff point between the two teams.", tag:"CRM" },
  { t:"Pipeline stage", d:"Where an Opportunity sits in the sales process. Drives forecasting and probability weighting.", tag:"CRM" },
  { t:"ATS", d:"Applicant Tracking System. Manages candidates from application through offer.", tag:"HRM" },
  { t:"Leave accrual", d:"How paid leave accumulates over time. Rules vary by tenure, contract, and jurisdiction.", tag:"HRM" },
  { t:"SCORM / xAPI", d:"Standards for packaging e-learning content and reporting learner activity back to an LMS.", tag:"LMS" },
  { t:"EHR / EMR", d:"Electronic Health Record (shared across providers) / Electronic Medical Record (single practice).", tag:"Health" },
  { t:"HL7 / FHIR", d:"Healthcare data exchange standards. FHIR is the modern, API-friendly successor.", tag:"Health" },
  { t:"CPOE", d:"Computerized Physician Order Entry. Clinicians enter orders directly — a major patient-safety surface.", tag:"Health" },
  { t:"Alert fatigue", d:"Too many low-value warnings train users to dismiss all warnings, including critical ones. A documented safety hazard.", tag:"Health" },
  { t:"KYC / AML", d:"Know Your Customer / Anti-Money Laundering. Identity and monitoring obligations in finance.", tag:"Finance" },
  { t:"Reconciliation", d:"Matching internal records against an external source (bank, exchange) and resolving differences.", tag:"Finance" },
  { t:"Audit trail", d:"An immutable record of who changed what and when. Legally required in most regulated domains.", tag:"Cross-domain" },
  { t:"Design token", d:"A named design decision stored as data. Primitive holds the value, semantic the meaning, component the application.", tag:"Design" },
  { t:"VPAT", d:"Voluntary Product Accessibility Template. The document procurement asks for to prove accessibility conformance.", tag:"Design" }
];

const PITFALLS = [
  { t:"Designing the happy path only", d:"Six states minimum per screen: default, empty, loading, error, partial, no-permission. Most portfolios show one.", m:"m3" },
  { t:"Using placeholder text", d:"Lorem ipsum is uniformly polite. Real data has 90-character legal names and null values that break your layout.", m:"m3" },
  { t:"KPI cards with no comparison", d:"A number without a reference point cannot be judged. Against what — last month, target, last year?", m:"m7" },
  { t:"Hiding what users lack permission for", d:"Breaks shared mental models between colleagues. Disable and explain instead.", m:"m2" },
  { t:"Components that break on resize", d:"If your table needs manual fixing at 1280px, it is a picture of a component, not a component.", m:"m5" },
  { t:"Truncating bar chart axes", d:"Bars encode magnitude by length from zero. Truncation misrepresents the data even when labelled.", m:"m8" },
  { t:"Testing with generic users", d:"A UX student cannot tell you whether your three-way match screen is wrong. Test with domain experts.", m:"m11" },
  { t:"Aesthetic design rationale", d:"'It's cleaner' loses to 'this saves 13 hours a day'. Learn to quantify.", m:"m14" },
  { t:"Skipping design QA", d:"The design that ships is the only design that exists. Unverified decisions quietly disappear.", m:"m14" },
  { t:"Deleting legacy features blindly", d:"They usually exist because of an incident or a regulator. Find out which before deleting.", m:"m14" }
];

/* ============================================================
   SUPPLIED VIDEO LINKS — provided by the instructor.
   Key format: moduleId-slotIndex. These render as direct links
   and take precedence over channel/search fallbacks.
   ============================================================ */
const SUPPLIED = {
  "m1-0": { id:"xkXaPOb9Qxo", t:"User Research Full Course 2026", s:"Simplilearn" },
  "m1-1": { id:"fTCbT4rN0bY", t:"Beginner's Guide to UI/UX Design 2025", s:"" },
  "m1-2": { id:"X27Uq08A8OU", t:"The BEST UX Research Methods for 2025", s:"" },
  "m2-0": { id:"d-haqmRlV04", t:"Card Sorting & Tree Testing Workshop", s:"Lyssna" },
  "m2-1": { id:"B0IT9gJWpnw", t:"Card Sorting: Why & When", s:"" },
  "m2-2": { id:"P0WDO76300Q", t:"Tree Testing to Evaluate IA Categories", s:"" },
  "m3-0": { id:"kJKipaIiJUI", t:"Low-Fi Wireframes in Miro and Sketch", s:"" },
  "m3-1": { id:"ZV2WJs1uYkY", t:"Low-Fi Wireframes in 5 Minutes", s:"2025" },
  "m3-2": { id:"Y7ixIl9Ve5s", t:"Low Fidelity Wireframes in UX Explained", s:"" },
  "m4-0": { id:"DGgG2mRg9iA", t:"How To Use Figma For Beginners", s:"2025" },
  "m4-1": { id:"QIFNMJFO50w", t:"Learn Figma in Under 7 Minutes", s:"2025" },
  "m4-2": { id:"HoKD1qIcchQ", t:"Figma Complete Course 2025", s:"" },
  "m5-0": { id:"acgDvDFwvSM", t:"Components, Variants & Auto Layout — 1-Hour Guide", s:"2025" },
  "m5-1": { id:"WxSYc5afjDY", t:"Figma Auto Layout Tutorial for Beginners", s:"" },
  "m5-2": { id:"bi7f84OFqVM", t:"Figma Auto Layout — All You Need in 2025", s:"" },
  "m6-0": { id:"lwSdmc96vm4", t:"Radius & Stroke Tokens in Figma", s:"2025" },
  "m6-1": { id:"m7kUGmNkPoc", t:"Design System 2025: Colour Tokens", s:"" },
  "m6-2": { id:"mcMnx4r22FQ", t:"Work with Design Systems in 2025", s:"" },
  "m7-0": { id:"B7k5rOgmOGY", t:"Build a Dashboard UI in 8 Minutes", s:"" },
  "m7-1": { id:"1xyPHgrNa5U", t:"Figma Dashboard Design Tutorial 2025", s:"" },
  "m7-2": { id:"0jzOZFHXHIk", t:"Let's Build a Design System: Data Tables", s:"" },
  "m8-0": { id:"viY9gvV0nBQ", t:"Professional Dashboards for Data Analytics", s:"" },
  "m8-1": { id:"t3cAUt7sOQg", t:"12 Dashboard Design Tips", s:"" },
  "m8-2": { id:"HuZiJ44_71M", t:"Effective Data Visualization Dashboard", s:"" },
  "m9-0": { id:"m9uXR4xt95w", t:"Figma Crash Course 2025: Responsive Design", s:"" },
  "m9-1": { id:"Hb4htjUajkU", t:"Responsive Design in Figma 2025", s:"Simplilearn" },
  "m9-2": { id:"xNk3QnuowKE", t:"Responsive Breakpoints with Variables + Modes", s:"" },
  "m10-0": { id:"uw7urTHvQ9A", t:"WCAG Digital Accessibility Training", s:"" },
  "m10-1": { id:"s8KsEv3KSWM", t:"WCAG Crash Course for Designers", s:"8 mins" },
  "m10-2": { id:"WzfYsuCIFpo", t:"No BS Guide to Web Accessibility — WCAG 2.1 & 508", s:"" },
  "m11-0": { id:"NONqdcQQXkE", t:"UserTesting for Figma Plugin", s:"2026" },
  "m11-1": { id:"wZveSL6dQUc", t:"Config 2025: Fast Feedback with UserTesting & Figma", s:"" },
  "m11-2": { id:"R4_nCHCl7Bc", t:"Remote Usability Test: Figma + Maze", s:"" },
  "m12-0": { id:"XEgGOgWCfF0", t:"Intro to Dev Mode", s:"Figma" },
  "m12-1": { id:"ALkqhXv0GPk", t:"Design to Developer Handoff — Full Tutorial", s:"" },
  "m12-2": { id:"YkOi7bd-2Jo", t:"Master Figma Dev Mode Handoff Process", s:"" },
  "m13-0": { id:"Oug_mN8lgH4", t:"Top CRM UI/UX Design Patterns for Enterprise", s:"" },
  "m13-1": { id:"Pljb-jy3rQM", t:"UX Design for the Enterprise", s:"" },
  "m13-2": { id:"BH4PWNNYiUM", t:"Enterprise UX: Making a Difference from the Inside", s:"" },
  "m14-0": { id:"gCQIyH6i8YQ", t:"Articulating Design Decisions", s:"Tom Greever" },
  "m14-1": { id:"4tE5fNUt6vc", t:"Master Stakeholder Mapping", s:"" },
  "m14-2": { id:"l-fg-rJmsGI", t:"Mastering Design Communication", s:"" },
};
