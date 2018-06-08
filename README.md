# prime-number-calculator
Kubernetes Presentation

clean up..
kubectl delete hpa prime-number-calculator-deployment
kubectl delete deployment prime-number-calculator-deployment
kubectl delete service prime-number-service
delete old docker images of darthshana/prime-number-calculator
ensure Kubernetes dashboard is working

1. Introduce prime number calculator
1.1 java / spring boot
1.2 calculates prime numbers between 0 and provided number
1.3 show unit test bdd
1.4 show service running http://localhost:8080/primeNumbers/?num=8888

2. Create docker image
2.1 increment release version
2.2 show maven plugin show start image alpine-oraclejdk8 -> then add my app
2.3 build app ->  mvn clean install
2.4 build image -> mvn docker:build
2.5 show images -> docker images
2.5 push to registry -> docker push darthshana/prime-number-calculator:1.4-SNAPSHOT
SO now we have an image which can be deployed anywhere and is immutable

3. now on to Kubernetes
run service on Kubernetes -> kubectl run prime-number-calculator-deployment --image=darthshana/prime-number-calculator:[tag name here] --port=8080
show pods -> kubectl get pods
show deployment -> kubectl get deployments
show dashboard
show micro service not running
port forward ->  kubectl port-forward [pod name here] 8080
show micro service running again -> can be used for local development

4. Expose the service
expose the service -> kubectl expose deployment prime-number-calculator-deployment --type "LoadBalancer"
show ->  kubectl get services
show dashboard
check microservice on phone
Kubernetes 101 done!

5. Easy to maintain
talk about run running commands
infrastructure as code -> maintainable / testable / repeatable
kubectl delete deployment prime-number-calculator-deployment
kubectl delete service [prime-number-calculator-deployment]
cd src/deployment
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

6. Make it scale
add HPA -> kubectl autoscale deployment prime-number-calculator-deployment --cpu-percent=50 --min=1 --max=3
show dashboard with single pod
change ip address to new service ip
cd to root
run load test -> mvn gatling:test
talk about gatling load test
show dashboard with mulitple pods now running

7. blue/green deployment
change the image tab in yml file
apply change
show dashboard new pods starting then old pods being killed
we have done a live upgrade in the middle of autoscaling
re-iterate tools that use declarative language

8. Show gatling results
