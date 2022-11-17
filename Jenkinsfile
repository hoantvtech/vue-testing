pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm run build'
        bat 'tar -cvf dist.tar.gz dist'
      }
    }
    stage('Test') {
      steps {
        echo 'Test'
        bat 'npm run test:unit'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }
  }
}