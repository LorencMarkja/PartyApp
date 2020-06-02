pipeline {
    agent any

    stages {
        stage('NPM INSTALL') {
            steps {
                bat 'npm install'
            }
        }
        stage('e2e testing') {
            steps {
                bat 'npm run e2e'
            }
        }
    }
}
