pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/Sandhana-Krishnan-S/CI-CD-learn.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Merge to main if tests pass') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-credentials',
                                                 usernameVariable: 'GIT_USER',
                                                 passwordVariable: 'GIT_PASS')]) {
                    sh '''
                    git config --global user.email "jenkins@ci-cd.com"
                    git config --global user.name "Jenkins CI"
                    
                    git checkout main
                    git merge dev
                    git push https://$GIT_USER:$GIT_PASS@github.com/Sandhana-Krishnan-S/CI-CD-learn.git main
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ All good! Code merged to main.'
        }
        failure {
            echo '❌ Tests failed. Nothing merged. Check logs.'
        }
    }
}

