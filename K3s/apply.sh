kubectl apply -f mysql-deployment.yaml
kubectl apply -f mysql-service.yaml
kubectl apply -f website-deployment.yaml
kubectl apply -f website-service.yaml
kubectl apply -f ingress.yaml