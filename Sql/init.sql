CREATE DATABASE IF NOT EXISTS db_link;
USE db_link;

CREATE USER 'user'@'%' IDENTIFIED BY 'mdp';
GRANT ALL PRIVILEGES ON db_link.* TO 'user'@'%';

CREATE TABLE IF NOT EXISTS links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    link VARCHAR(255)
);

INSERT INTO links (name, link) VALUES ('Présentation des ateliers pratiques Google Cloud', 'https://www.cloudskillsboost.google/focuses/2794?locale=fr&parent=catalog'),
                                      ('Configuring Networks via gcloud', 'https://www.cloudskillsboost.google/focuses/7140?locale=fr&parent=catalog'),
                                      ('Infrastructure as Code avec Terraform', 'https://www.cloudskillsboost.google/focuses/15842?locale=fr&parent=catalog'),
                                      ('Déploiement, scaling et mise à jour de votre site Web sur Google Kubernetes Engine', 'https://www.cloudskillsboost.google/focuses/10470?locale=fr&parent=catalog'),
                                      ('Installation d\'Anthos Service Mesh sur Google Kubernetes Engine', 'https://www.cloudskillsboost.google/focuses/8459?locale=fr&parent=catalog'),
                                      ('Minikube git', 'https://github.com/charroux/kubernetes-minikube'),
                                      ('Service mesh git','https://github.com/charroux/servicemesh'),
                                      ('Service mesh Kubernetes git', 'https://github.com/charroux/servicemesh-kubernetes');
