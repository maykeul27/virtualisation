# virtualisation
Student Project to improve our understanding of DevOps Techs

# Site
Pour tester l'image avec le site, utilisé les commandes suivantes dans le dossier Website :  
```docker
docker build -t site .
docker run -d -p 8080:80 --name links site
```

Ensuite, il suffit de lancer un navigateur et de rentrer localhost:8080

# Sql
Pour créer l'image avec le sql, utilisé la commande suivante dans le dossier Sql :  
```docker
docker build -t sql .
```

# K3s
Dans le dossier K3s, utilisé les commandes suivantes :
```sh
./apply.sh
```