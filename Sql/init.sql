CREATE DATABASE IF NOT EXISTS db_link;
USE db_link;

CREATE TABLE IF NOT EXISTS links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    link VARCHAR(255)
);

INSERT INTO links (name, link) VALUES (
                                       ('Minikube git', 'https://github.com/charroux/kubernetes-minikube'),
                                       ('Minikube git', 'https://github.com/charroux/kubernetes-minikube'),
                                       ('Service mesh git','https://github.com/charroux/servicemesh'),
                                       ('Service mesh Kubernetes git', 'https://github.com/charroux/servicemesh-kubernetes')
                                      );
