# Django and React Integrated Project

This project integrates Django (a Python-based web framework) with React (a JavaScript library for building user interfaces) to create a full-stack web application.

## Prerequisites

- Python 3.x
- Node.js and npm
- Django
- React

## Installation

### Backend (Django)

1. Create a virtual environment:
    ```bash
    python -m venv env
    ```
2. Activate the virtual environment:
    - On Windows:
        ```bash
        .\env\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source env/bin/activate
        ```
3. Install Django:
    ```bash
    pip install django
    ```
4. Create a new Django project:
    ```bash
    django-admin startproject myproject
    ```
5. Navigate to the project directory:
    ```bash
    cd myproject
    ```
6. Create a new Django app:
    ```bash
    python manage.py startapp myapp
    ```

### Frontend (React)

1. Navigate to the Django project directory:
    ```bash
    cd myproject
    ```
2. Create a new React app inside the Django project:
    ```bash
    npx create-react-app frontend
    ```
3. Navigate to the React app directory:
    ```bash
    cd frontend
    ```

## Running the Project

### Backend

1. Ensure the virtual environment is activated.
2. Run the Django development server:
    ```bash
    python manage.py runserver
    ```

### Frontend

1. Navigate to the React app directory:
    ```bash
    cd frontend
    ```
2. Start the React development server:
    ```bash
    npm start
    ```

## Building for Production

1. Build the React app:
    ```bash
    npm run build
    ```
2. Collect static files in Django:
    ```bash
    python manage.py collectstatic
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
