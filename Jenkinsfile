pipeline {
  agent any
  tools { nodejs "node-16" }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
