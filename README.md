# there are two ways to deploy a react django website
1. Deploying the frontend and backend to different servers
2. Making the backend host the frontend then deploying it to a single server.

# Installing all requied packages
Create a virtual environment
cd into the backend
run pip install -r requirements.txt

DEPLOYING TO DIFFERENT SERVERS
First activate the backend before the frontend

# Activate the backend
To activate the backend
Step 1: run your virtual environment
Step 2: cd to the backend
Step 3: run py manage.py runserver 

# Activate the frontend
To activate the frontend, 
Step 1: cd to the frontend
Step2: npm run dev 