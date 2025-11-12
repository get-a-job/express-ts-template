pipeline {
    agent any

    stages {
        stage('Install & Build') {
            steps {
                echo "Installing dependencies and building the app"
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests"
                sh 'npm test'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    sh 'git config --global --add safe.directory $PWD'

                    def app_name = 'express-ts-template'
                    def branch = env.BRANCH_NAME ?: 'local'
                    def commit_hash = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    echo "Building Docker image for branch: ${branch}, commit: ${commit_hash}"

                    if (branch == 'main') {
                        sh """
                            docker buildx build -t ${app_name}:${commit_hash} -t ${app_name}:latest .
                            docker tag ${app_name}:${commit_hash} ${DOCKER_REGISTRY}/${app_name}:${commit_hash}
                            docker tag ${app_name}:latest ${DOCKER_REGISTRY}/${app_name}:latest
                            docker push ${DOCKER_REGISTRY}/${app_name}:${commit_hash}
                            docker push ${DOCKER_REGISTRY}/${app_name}:latest
                        """
                    } else {
                        sh """
                            docker buildx build -t ${app_name}:${branch} .
                            docker tag ${app_name}:${branch} ${DOCKER_REGISTRY}/${app_name}:${branch}
                            docker push ${DOCKER_REGISTRY}/${app_name}:${branch}
                        """
                    }
                }
            }
        }
    }
}
