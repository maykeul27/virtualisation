# virtualisation
Student Project to improve our understanding of DevOps Techs

# Site
Pour tester l'image avec le site, utilisé les commandes suivantes :  
- `docker build -t <nom_image> .` dans le dossier Website
- `docker run -d -p 8080:80 --name <nom_container> <nom_image>`

Ensuite, il suffit de lancer un navigateur et de rentrer localhost:8080

# K3s