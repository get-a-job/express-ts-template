pipeline {
    agent any

    stages {
        stage('Install & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    def app_name = 'express-ts-template'
                    def branch = BRANCH_NAME
                    def commit_hash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()

                    // Tagging logic
                    if (branch == 'main') {
                        // For 'main' branch: use both commit hash and 'latest' tag
                        sh "docker buildx build -t ${app_name}:${commit_hash} -t ${app_name}:latest ."
                        sh "docker tag ${app_name}:${commit_hash} ${DOCKER_REGISTRY}/${app_name}:${commit_hash}"
                        sh "docker tag ${app_name}:latest ${DOCKER_REGISTRY}/${app_name}:latest"
                        sh "docker push ${DOCKER_REGISTRY}/${app_name}:${commit_hash}"
                        sh "docker push ${DOCKER_REGISTRY}/${app_name}:latest"
                    } else {
                        // For other branches: use the branch name as the tag
                        sh "docker buildx build -t ${app_name}:${branch} ."
                        sh "docker tag ${app_name}:${branch} ${DOCKER_REGISTRY}/${app_name}:${branch}"
                        sh "docker push ${DOCKER_REGISTRY}/${app_name}:${branch}"
                    }
                }
            }
        }
    }
}