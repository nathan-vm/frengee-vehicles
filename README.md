# Frengee Vehicles

## Project Overview

Frengee Vehicles is a robust API designed to manage vehicle data efficiently, providing a reliable backend service for automotive applications. This project leverages modern containerization technologies with Docker to ensure seamless deployment and scalability, making it easy to run, develop, and test across various environments.

The Frengee Vehicles API allows for comprehensive management of vehicle records, supporting operations such as listing, adding, updating, and deleting vehicles. It adheres to RESTful principles and is built to handle both small-scale and large-scale automotive datasets.

The API includes the following core functionalities:

    GET: Retrieve a list of all vehicles or a specific vehicle by ID.
    POST: Add new vehicles to the database.
    PUT: Update existing vehicle details.
    DELETE: Remove vehicles from the database.

This project is suitable for developers who need a reliable vehicle data management system as part of larger applications such as fleet management, car rental services, or automotive inventory systems.

## Dependencies to Run the Project

To get Frengee Vehicles up and running, the following dependencies are required:

- **[Docker Engine](https://docs.docker.com/engine/install/):** Docker is used to containerize the application, making it easy to deploy and manage in different environments.
- **[Node.js 20](https://nodejs.org/en/download/package-manager) (Optional):** While Docker is sufficient for running the application, having Node.js installed is recommended for development purposes. It ensures access to features like code autocompletion and linting, which are crucial for a smooth development process.

> **Note:**: While Docker is sufficient for running the application, installing Node.js 20.x is recommended if you intend to develop or modify the codebase, as it enhances the development experience.

## Running the Project

To start the application, follow these steps:

1. Copy the `.env.example` file to `.env` and fill as you prefer. 
2. **(Optional)** Install all dependencies with `npm install`. This step is only necessary for development purposes, enabling you to use Node.js features.
3. Run the application using Docker Compose:
   - Execute `docker compose up` in the root folder to start the application.
   - To limit logs to only the application and exclude MongoDB logs, run `docker compose up --attach app`.

## Testing the Project

To ensure everything is working correctly, you can run the project's tests using the following command:

```bash
npm run test
```

## API Routes

Frengee Vehicles exposes a RESTful API with the following endpoints:

- **[GET] /api/v1/vehicles:** Retrieve a list of all vehicles.
- **[POST] /api/v1/vehicles:** Add a new vehicle to the system.
- **[PUT] /api/v1/vehicles/{id}:** Update an existing vehicle's information by its ID.
- **[DELETE] /api/v1/vehicles/{id}:** Remove a vehicle from the system by its ID.

## Swagger Documentation

The API is documented using Swagger, providing a detailed overview of available endpoints, request/response formats, and data models.

#### Swagger Overview

    Title: Frengee Vehicles API
    Version: 0.1.1
    License: MIT
    Base URL: http://localhost:3000/api/v1

#### Example Endpoints

    GET /vehicles: Lists all vehicles in the database.
    POST /vehicles: Adds a new vehicle with the required parameters.
    PUT /vehicles/{id}: Updates vehicle details by ID.
    DELETE /vehicles/{id}: Deletes a vehicle by its ID.