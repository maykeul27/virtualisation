# virtualisation
Student Project to improve our understanding of DevOps Techs

# Site
Pour tester l'image avec le site, utilisé les commandes suivantes :  
- `docker build -t <nom_image> .` dans le dossier Website
- `docker run -d -p 8080:80 --name <nom_container> <nom_image>`

Ensuite, il suffit de lancer un navigateur et de rentrer localhost:8080

# Sql
Pour créer l'image avec le sql, utilisé la commande suivante :  
- `docker build -t <nom_image> .` dans le dossier Sql

# K3s
Dans le dossier K3s, utilisé les commandes suivantes :
```
kubectl apply -f website-deployment.yaml
kubectl apply -f mysql-deployment.yaml
kubectl apply -f mysql-service.yaml
```