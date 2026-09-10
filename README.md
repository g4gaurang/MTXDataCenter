# MTX Data Center Solutions

Interactive product landing-page prototype for MTX Data Center Solutions. The experience helps technology buyers compare infrastructure models, explore workload requirements, assess an initial infrastructure fit, and examine how enterprise infrastructure may evolve toward AI and high-performance workloads.

## Technical stack

* React
* TypeScript
* Vite
* Lucide React
* Recharts
* Responsive CSS
* GitHub Actions and GitHub Pages

The application is static. It does not require a backend, database, account, API key, or live infrastructure connection.

## Local setup

Use Node.js 22 and npm 10 or later.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The production output is written to `dist`. Vite uses a relative asset base so the site can load from a GitHub repository subdirectory.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the application, uploads `dist`, and deploys it to GitHub Pages after a push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Content and illustrative data

Operations dashboard values, planning bands, charts, capacity signals, recommendations, and architecture diagrams are fictional product-prototype content. Each relevant view is marked as illustrative or conceptual. They do not describe a deployed MTX facility or customer environment.

## Content-claims disclaimer

The repository initially contained no approved evidence for facility locations, certifications, service levels, capacity, available GPU inventory, carrier neutrality, remote-hands support, liquid cooling, or facility ownership and operations. The prototype therefore:

* Uses conditional language for configuration-dependent capabilities.
* Marks physical AI infrastructure and related capacity as **Planned or developing**.
* Marks carrier neutrality and remote-hands support for MTX validation.
* Avoids facility, certification, performance, availability, recovery, savings, and sustainability claims.

MTX business, legal, security, and delivery owners should validate service availability and public claims before release.

## Updating service availability

Capability and maturity content is held in `src/data.ts` and the offering and maturity sections in `src/App.tsx`. Before changing an item to **Available**, retain approved evidence and confirm the applicable facility, service model, capacity, contract constraints, and publication wording. Update dependent labels and disclaimers at the same time.

## Updating workload and capability content

Local content objects are organized in `src/data.ts`, including:

* Buyer challenges
* Infrastructure models and comparison dimensions
* Workload profiles
* AI-readiness dimensions
* Architecture layers
* Deployment phases
* Security controls
* Responsibility assignments
* Operating measures

Interactive behavior and page sections are in `src/App.tsx`. Visual tokens, layout, focus states, reduced-motion behavior, and responsive breakpoints are in `src/styles.css`.

## Replacing the contact action

The consultation form currently validates fields in the browser and displays a local confirmation. It does not transmit or retain information. To connect it to an approved contact workflow:

1. Replace the local submit handler in the `Contact` component in `src/App.tsx`.
2. Add approved privacy, consent, retention, error, and security handling.
3. Keep server credentials outside the client application.
4. Test keyboard, validation, success, and failure states before release.
