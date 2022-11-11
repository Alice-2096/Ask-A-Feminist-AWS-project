# Ask-a-Feminist :woman:

## What is this website all about?

Ask-a-Feminist (AaF) is a public web platform for discussing everything related to feminism! Everyone is welcome to submit questions through the 'Ask a Question' tab located on the homepage. Your questions will be promptly addressed by a group of scholars who work on feminist issues, including philosophers, political theorists, historians, sociologists, cultural theorists and so on.

## Implementation

AaF is a fullstack web-based application using AWS services (Amplify for hosting web resources, Cognito for authentication, API Gateway and Lambda for backend, and DynamoDB for data storage)

## Workflow

- [x] frontend -- Homepage, registration page, Sign in page; deployed on AWS Amplify
![image](./demo/homepage.png)
- [ ] Created a userpool on AWS Cognito; 
- [ ] AWS Lambda -- define request handlers
- [ ] API Gateway -- connect url requests with lambda functions