pipeline {
  agent any
  tools { nodejs "node-16" }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh('tar -cvf dist.tar.gz dist ')
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test:unit'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
