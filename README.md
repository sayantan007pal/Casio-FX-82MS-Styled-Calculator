# Casio-FX-82MS-Styled-Calculator
A simple, visually appealing web-based calculator styled to resemble the Casio FX-82MS. This project includes HTML, CSS, and JavaScript for the front end, Docker for containerization, and Kubernetes for deployment using Cyclops UI.

# Youtube sample link
    https://youtu.be/2n9V7qm__bs?si=kvQwOTWMV3CBeZZ0
# Blogpost link
    https://dev.to/sayantan007pal/building-a-stylish-calculator-with-cyclops-ui-quira-quest-15-3i84

# Table of Contents
1. Prerequisites
2. Project Structure
3. Setup Instructions
4. Building and Running Locally
5. Deploying with Kubernetes
6. Accessing the Application
7. Troubleshooting
8. License
   
# Prerequisites

Before you start, ensure you have the following installed on your local machine:

Docker: Installation Guide
Kubernetes (Minikube): Installation Guide
kubectl: Installation Guide
Docker Hub Account: Create an Account

# Project Structure

casio-fx82ms-calculator/
│
├── Dockerfile
├── deployment.yaml
├── index.html
├── script.js
├── service.yaml
└── styles.css

1. Dockerfile: Defines the Docker image for the application.
2. deployment.yaml: Kubernetes Deployment configuration.
3. service.yaml: Kubernetes Service configuration.
4. index.html: HTML structure of the calculator.
5. script.js: JavaScript functionality for the calculator.
6. styles.css: CSS styles for the calculator.

# Setup Instructions
1. Clone the Repository:
   
       git clone https://github.com/sayantan007pal/casio-fx82ms-calculator.git
       cd calculator

2. Create a Docker Image:
Build the Docker image:

       docker build -t your-dockerhub-username/calculator:latest 

Log in to Docker Hub (if not already logged in)

        docker login

Push the Docker image to Docker Hub

        docker push your-dockerhub-username/calculator:latest

# Building and Running Locally

1. Start Minikube:

       minikube start

2. Deploy the Application:
  Apply the Deployment configuration

       kubectl apply -f deployment.yaml

3. Apply the Service configuration:

       kubectl apply -f service.yaml

4. Port-Forward to Access the Application:
   Forward the service port to your local machine:

       kubectl port-forward svc/calculator 8881:80

   
# Accessing the Application

Open Your Browser:
Navigate to http://localhost:8881 to use the calculator.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

