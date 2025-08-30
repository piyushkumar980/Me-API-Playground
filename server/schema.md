# MongoDB Schema - `Profile` Collection

This collection stores a single document representing the candidate's profile.

## Document Structure:

- **name** (String, required): Full name of the candidate.
- **email** (String, required, unique): Contact email.
- **education** (String): A summary of the candidate's highest degree.
- **skills** (Array of Strings): A list of skills (e.g., "JavaScript", "React", "Node.js").
- **projects** (Array of Objects):
  - **title** (String): Project name.
  - **description** (String): Short project description.
  - **links** (Object):
    - **github** (String): Link to the GitHub repository.
    - **live** (String): Link to the live demo.
- **work** (Array of Objects):
  - **company** (String): Company name.
  - **role** (String): Job title.
  - **startDate** (String): Start date of employment.
  - **endDate** (String): End date of employment, or "Present".
  - **description** (String): Summary of responsibilities.
- **links** (Object):
  - **github** (String): Personal GitHub profile URL.
  - **linkedin** (String): LinkedIn profile URL.
  - **portfolio** (String): Personal portfolio website URL.
- **resume** (String): Link to the candidate's resume.

## Indexes:

- `skills`: A compound text index on the `skills` field for efficient searching.
- `projects.title`, `projects.description`: Text indexes for full-text search.
- A unique index on `email` to prevent duplicate profiles.