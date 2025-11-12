pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root:root -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Install & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    def branch = env.BRANCH_NAME ?: 'local'
                    def commit_hash = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    if (branch == 'main') {
                        sh """
                            docker buildx build -t ${APP_NAME}:${commit_hash} -t ${APP_NAME}:latest .
                            docker tag ${APP_NAME}:${commit_hash} ${DOCKER_REGISTRY}/${APP_NAME}:${commit_hash}
                            docker tag ${APP_NAME}:latest ${DOCKER_REGISTRY}/${APP_NAME}:latest
                            docker push ${DOCKER_REGISTRY}/${APP_NAME}:${commit_hash}
                            docker push ${DOCKER_REGISTRY}/${APP_NAME}:latest
                        """
                    } else {
                        sh """
                            docker buildx build -t ${APP_NAME}:${branch} .
                            docker tag ${APP_NAME}:${branch} ${DOCKER_REGISTRY}/${APP_NAME}:${branch}
                            docker push ${DOCKER_REGISTRY}/${APP_NAME}:${branch}
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up dangling containers and build cache"
            sh '''
            docker container prune -f || true
            docker builder prune -f || true
            '''
        }
    }
}
