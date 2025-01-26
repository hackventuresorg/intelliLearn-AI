# IntelliLearn-AI

**IntelliLearn-AI** is an AI-powered goal planner designed to help users break down their objectives into actionable steps. Whether you're aiming to complete a course, learn a skill, or accomplish a personal milestone, IntelliLearn-AI generates a personalized roadmap with tailored steps, resources, and motivational content to keep you on track.

---

## 🚀 Features

- **Personalized Goal Planning**: Define your goal and let IntelliLearn-AI generate step-by-step guidance.
- **Actionable Steps**: Each step comes with resources, tips, and motivational content.
- **Dynamic Content**: Get relevant links, fun facts, and tips for every step.
- **Duolingo-Inspired Design**: A user-friendly interface with progress tracking and step visualization.

---

## 💡 How It Works

1. **Set a Goal**: Enter a title, description, and deadline for your goal.
2. **Generate Steps**: IntelliLearn-AI breaks down your goal into manageable steps with timestamps.
3. **Stay Motivated**: Explore curated resources, quotes, and fun facts for each step.
4. **Track Progress**: Mark steps as complete and stay on track toward your goal.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for a dynamic, SEO-friendly user interface.
- **Backend**: Prisma with a MongoDB database for efficient data handling.
- **AI Integration**: OpenAI API to generate steps and resources.
- **Styling**: Tailwind CSS for modern and responsive design.

---

## 🌟 Challenges

- Structuring AI prompts for relevant step generation.
- Designing a user-friendly interface inspired by Duolingo.

---

## 🔮 What's Next

- Add progress tracking visuals to enhance the user experience.
- Introduce collaborative goal planning for teams or groups.
- Expand AI capabilities to include progress analysis and suggestions.
- Mobile app development for on-the-go goal planning.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/IntelliLearn-AI.git
   cd IntelliLearn-AI
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up your environment variables:
   Create a .env file with the following:

   ```bash
   DATABASE_URL="mongodb://localhost:27017/intelli-ai"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY =
   CLERK_SIGNING_SECRET=
   OPENAI_API_KEY=
   ```

4. Generate prisma client
   ```bash
   pnpm db:generate
   ```
