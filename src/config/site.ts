/**
 * Operator details for the Impressum and the contact page.
 * Replace every value in square brackets before treating the legal notice as complete.
 *
 * Set PUBLIC_WEB3FORMS_ACCESS_KEY to enable the contact form (https://web3forms.com).
 * That access key is designed to be public.
 */
export const site = {
  name: "Jonas Eicher",
  location: "Munich",
  since: 2017,
  url: "https://jonaseicher.github.io",
  linkedin: "https://www.linkedin.com/in/jonas-eicher-8b63b192/",
  description:
    "Independent practice for full-stack engineering, DevOps consulting, product ownership, and Scrum. Munich, since 2017.",
  roles: [
    "Full-Stack Software Engineer",
    "DevOps Consultant",
    "Product Owner",
    "Scrum Master",
  ],
  legal: {
    name: "Jonas Eicher",
    street: "[Street and house number to be added]",
    postalCode: "[Postcode to be added]",
    city: "Munich",
    country: "Germany",
    email: "[Email to be added]",
    phone: "[Phone to be added]",
    vatId: "",
  },
  formAccessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
} as const;

export const nav = [
  { href: "/practice", label: "Practice" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Full-stack engineering",
    summary:
      "Software from the interface through to the services behind it, built to stay changeable after the first release.",
    paragraphs: [
      "Engagements cover application development across the stack. Server-side work is principally in Node.js, Java, and Rust. The interface is shaped for the people who actually use it: an operator, a clinician, a dispatcher, a player, or a customer.",
      "The useful result is a system a team can still understand a year later. That means clear boundaries, a deployable path, and code that does not require its author in the room.",
    ],
  },
  {
    number: "02",
    title: "DevOps consulting",
    summary:
      "Cloud platforms, infrastructure as code, and the operational habits that keep a system recoverable.",
    paragraphs: [
      "Platform work runs on AWS and GCP, described in Terraform, with pipelines and environments a team can operate without heroics. The consulting covers architecture, the path to production, and the day-to-day of keeping a system observable.",
      "The aim is a platform the people who own it can change. Delivery and operations stay in the same conversation, rather than being handed across a wall at the end.",
    ],
  },
  {
    number: "03",
    title: "Product ownership",
    summary:
      "A readable backlog, honest scope, and decisions a delivery team can act on.",
    paragraphs: [
      "Product ownership here means the backlog and the decisions behind it. Scope stays honest, trade-offs stay visible, and the team has a clear next increment.",
      "Stakeholders get a plain account of what is being built and why. The product conversation stays close to the people doing the work, which is where the useful detail lives.",
    ],
  },
  {
    number: "04",
    title: "Scrum",
    summary:
      "A steady delivery rhythm, with agile practice used as a tool rather than a script.",
    paragraphs: [
      "Scrum mastery is stewardship of how a team works: a rhythm people can keep, fewer blocked days, and impediments dealt with in the open.",
      "Agile work is a pragmatic balance of discipline and room to act, of initiative and outside dependency, of enough structure and not too much. It is not a formula. It is a team building one product.",
    ],
  },
] as const;

export const industries = [
  {
    id: "medical",
    title: "Medical",
    summary: "Clinical, practice, and operational software.",
    body: "Work in medicine covers software for clinics and practices, patient-facing flows, and the operational systems around them. Delivery in this field asks for care with data, a clear record of what changed, and a pace that respects the setting.",
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    summary: "Platforms and the systems beside the network.",
    body: "Telecommunications work covers product platforms and the business systems that sit beside network operations: integration, customer-facing services, and the software teams that keep them moving.",
  },
  {
    id: "insurance",
    title: "Insurance",
    summary: "Policy, claims, and long-lived operational systems.",
    body: "Insurance engagements concern policy, claims, and the operational software around them. These systems live a long time. Correctness, a trail of decisions, and changes that can be explained matter as much as the feature itself.",
  },
  {
    id: "automotive",
    title: "Automotive",
    summary: "Vehicle-adjacent products and the organisations that ship them.",
    body: "Automotive work covers software around vehicles and manufacturing-adjacent processes, and the product organisations responsible for shipping it. The practice contributes engineering, delivery structure, and cloud platforms as the programme requires.",
  },
  {
    id: "games",
    title: "Game development",
    summary: "Interactive products, tooling, and shipping pipelines.",
    body: "Game development work covers engineering for interactive products, the tools a studio depends on, and the pipelines that let a team ship. The same delivery discipline applies here as in any other product company.",
  },
  {
    id: "automation",
    title: "Automation",
    summary:
      "Software that takes repetitive operational work off people’s hands.",
    body: "Automation engagements replace repeated manual steps with software: workflow, integration between systems that do not naturally speak, and the operation of what has been automated so it does not become a new kind of toil.",
  },
  {
    id: "process",
    title: "Process engineering",
    summary: "Software that supports and improves industrial processes.",
    body: "Process engineering work is software that models, supports, and improves industrial and operational processes. The value is a closer fit between how the work is actually done and the system people are asked to use.",
  },
  {
    id: "logistics",
    title: "Logistics",
    summary: "Movement, handoff, and visibility across a chain of parties.",
    body: "Logistics work covers systems for movement, handoff, and visibility across several parties. The software has to stay understandable at the point where a shipment, a warehouse, or a schedule actually changes hands.",
  },
  {
    id: "mentoring",
    title: "Startup mentoring",
    summary:
      "Practical guidance on product, engineering, and how a young team works.",
    body: "Mentoring for early teams is practical rather than theatrical: the shape of the product, the engineering choices that will still make sense next year, and a way of working that a small group can keep up. The practice advises, and can build alongside the team.",
  },
  {
    id: "aeronautics",
    title: "Aeronautics",
    summary: "Aviation-related software and disciplined delivery.",
    body: "Aeronautics work is engineering support for aviation-related software. The setting rewards explicit decisions, traceable change, and a delivery rhythm that does not depend on urgency alone.",
  },
] as const;

export const stack = [
  "AWS",
  "GCP",
  "Terraform",
  "Node.js",
  "Java",
  "Rust",
] as const;

export const record = [
  {
    period: "2002–2009",
    title: "Diplom, Physics",
    detail: "Ludwig-Maximilians-Universität München.",
  },
  {
    period: "Earlier practice",
    title: "Product owner and lead developer",
    detail: "PROCON IT AG.",
  },
  {
    period: "Earlier practice",
    title: "Software development consultant, cloud architect",
    detail: "Kite Consult GmbH.",
  },
  {
    period: "Since 2017",
    title: "Independent software engineer",
    detail:
      "Munich. Client work across engineering, cloud, and product delivery.",
  },
  {
    period: "2018",
    title: "Freelance DevOps engineer",
    detail: "Eckert & Partner, Munich.",
  },
  {
    period: "Since 2024",
    title: "Chief technology officer",
    detail:
      "InformMe GmbH, healthcare software, alongside the independent practice.",
  },
] as const;

export const interests = [
  "Full-stack engineering",
  "DevOps and cloud",
  "Product ownership",
  "Scrum",
  "A broader programme",
  "Something else",
] as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[");
}
