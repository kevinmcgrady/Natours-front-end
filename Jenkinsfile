def taskRunner = "npm run"

pipeline {
  agent any
  stages {
    stage('Check') {
      parallel {
        stage('Lint') {
          steps {
            sh "${taskRunner} lint"
          }
        }
        stage('Test') {
          steps {
            sh "${taskRunner} test"
          }
        }
      }
    }
    stage('Build') {
      parallel {
        stage('Module') {
          steps {
            sh "${taskRunner} build"
          }
        }
      }
    }
  }
  success {
    script {
      if(env.CHANGE_ID) {
        try { pullRequest.removeLabel('Building...') } catch (Exception e) {}
        pullRequest.addLabel('Build Passed')
        pullRequest.comment('This build has passed all the steps')
      }
    }
  }
  failure {
    script {
      if(env.CHANGE_ID) {
        try { pullRequest.removeLabel('Building...') } catch (Exception e) {}
        pullRequest.addLabel('Build Failed')
      }
    }
    
  }
}