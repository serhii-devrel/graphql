pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'installing all needed deps...'
                sh 'npm install'
            }
        }

        stage('unit tests') {
            steps {
                echo 'unit tests are executing...'
                sh 'npm run test:unit'
            }
        }

        stage('e2e tests') {
            steps {
                echo 'e2e tests are executing...'
                sh 'npm run cy:run'
            }
        }

        stage('lint') {
            steps {
                echo 'lint checks are executing...'
                sh 'npm run lint'
            }
        }
    }
}
