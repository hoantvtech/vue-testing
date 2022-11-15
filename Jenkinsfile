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
      }
    }
    stage('Deploy') {
      steps {
        
      }
    }
  }
}