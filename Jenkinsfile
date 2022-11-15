pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        echo 'Test'
        sh 'npm run test:unit'
      }
    }
    stage('Deploy') {
      steps {
        
      }
    }
  }
}