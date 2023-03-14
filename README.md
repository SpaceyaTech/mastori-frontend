<!-- # blog-frontend
A frontend development for the SpaceYaTech Mastori blog application. This is a community-driven open-source project that aims to let users to quickly publish content and share it with ease to their audience.  -->

<!-- ![image](https://user-images.githubusercontent.com/23496280/223451465-437d25a1-248b-4c37-be9a-d2ecd22a6625.png)
![Screenshot from 2023-03-07 17-25-21](https://user-images.githubusercontent.com/23496280/223452167-1c2786fd-9a45-4cf4-a1b9-617ba50b8936.png)
![Screenshot from 2023-03-07 17-25-05](https://user-images.githubusercontent.com/23496280/223452178-7580634a-b247-48cb-a32e-8e106dbcaef4.png) -->

# Space Ya Tech Blog Frontend

This repository contains the frontend code for the Space Ya Tech blog application. The blog frontend is built using React and Vite, and communicates with the backend API to display and manage blog content.

## Getting Started

To get started with contributing to the blog frontend, follow these steps:

1. Clone this repository to your local machine: https://github.com/SpaceyaTech/blog-frontend.git

2. Install dependencies: npm install or yarn install

3. Start the development server: npm run dev

The blog frontend will now be available at `http://localhost:3000`.

### Run app with Docker

To install Docker:

###### Docker for windows

[install docker on windows](https://medium.com/devops-with-valentine/how-to-install-docker-on-windows-10-11-step-by-step-83074a80e6f9)

###### Docker for linux (Ubuntu)

[docker on ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

To run the app using docker:-

#### Docker in Development

Run:

```
npm run docker:dev
```

Then go to http://localhost:3000

Alternatively:

- Run the project locally using docker-compose `docker-compose up`
- The application should be running on http://localhost:3000

#### Docker in production '\*\* still working on this'

Run:

```
npm run docker:prod
```

- Then go to [localhost:3000](http://localhost:3000) or the production domain

## Contributing

To contribute to the blog frontend, follow these steps:

1. Find an open issue on the [issues](https://github.com/SpaceyaTech/blog-frontend/issues) page that you would like to work on.

2. Assign the issue to yourself and create a new branch: git checkout -b <branch-name>

3. Work on the issue by making changes to the codebase. Make sure to commit your changes frequently: git commit -m "<commit-message>"

4. Once you have finished working on the issue, push your changes to the remote repository: git push origin <branch-name>

5. Create a new pull request for your changes to be reviewed and merged into the main branch.

6. Make sure to comment on your pull request with any relevant information about your changes.

## Adding Comments to Your Work

To add comments to your work on an issue, follow these steps:

1. When working on an issue, make sure to add relevant comments to your code to explain what you are doing.

2. After committing your changes, include a comment in the commit message to explain what changes you made and why.

3. When creating a pull request, make sure to include a summary of your changes and any relevant comments in the description.

4. If your changes address a specific issue, make sure to reference the issue in your pull request description.

5. Once your changes have been reviewed and merged, make sure to close the relevant issue and add a comment to explain how your changes resolved the issue.

**Team**

- https://github.com/orgs/SpaceyaTech/people

## Conclusion

By following these guidelines, you can contribute to the Space Ya Tech blog frontend and help improve the overall user experience of the blog application. Remember to communicate frequently with the other developers in the community and to ask for help or feedback whenever you need it. Together, we can create an amazing blog frontend for the Space Ya Tech community.
