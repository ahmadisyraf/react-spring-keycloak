# React, Spring & Keycloak

This repository contains an implementation of React, Spring boot and Keycloak.

## What is Keycloak?

Keycloak is an open source Identity and Access Management (IAM). It helps to handle user registration, authentication, and authorization in client and server applications. 

You can check [Keycloak](https://www.keycloak.org) website for more detail.

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/ahmadisyraf/react-spring-keycloak.git
```

### 2. Run Keycloak and Postgres Container

Before configure Keycloak, the required container must be started using docker. A [docker-compose.yml](docker-compose.yml) file already provided to simplify this process.

To start both container, run the following command:
```bash
docker compose up -d
```

Access Keycloak Admin by navigate to 

```
http://localhost:7080
```

NOTE: Admin username and password are "admin"

For detailed guidance on setting up Keycloak, refer to the following articles:

1. [Getting Started with Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)

2. [Keycloak: Realm & Client Configuration](https://medium.com/keycloak/keycloak-realm-client-configuration-dfd7c8583489)

3. [Securing Spring Boot Applications with Keycloak: A Step-by-Step Guide to User Authentication and Session Management](https://medium.com/@Mo72/securing-spring-boot-applications-with-keycloak-a-step-by-step-guide-to-user-authentication-and-fa057b9de929)


### 3. Setup React Application.

This React application integrates with Keycloak for authentication. It requests the login page from Keycloak and receives an access token after login. The token then will be use to access protected resources from resource server.

NOTE: The core dependency used to connect React and Keycloak is [keycloak-js](https://www.npmjs.com/package/keycloak-js).

#### 1. Navigate to Project Directory
```bash
cd product-ui
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3.Run the project
```bash
npm run dev
```

### Setup Spring Boot

For Spring boot I don't think there is a setup. Just import the file in InteliJ IDE then Run.










 
