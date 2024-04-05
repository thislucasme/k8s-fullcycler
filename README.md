**Descrição do Kubernetes:**

Kubernetes, frequentemente abreviado como K8s, é uma plataforma de código aberto usada para automatizar a implantação, o dimensionamento e a gestão de aplicativos em contêineres. Desenvolvido pelo Google e agora mantido pela Cloud Native Computing Foundation (CNCF), o Kubernetes oferece um ambiente robusto para orquestração de contêineres, permitindo que equipes de desenvolvimento e operações gerenciem aplicativos de forma eficiente e escalável.

Com o Kubernetes, os desenvolvedores podem empacotar seus aplicativos e todas as suas dependências em contêineres, o que proporciona portabilidade e consistência em diferentes ambientes. O Kubernetes gerencia esses contêineres em clusters, automatizando tarefas como provisionamento de recursos, distribuição de carga, recuperação de falhas e escalonamento automático.

**Readme:**

# Guia de Uso do Kubernetes

Este é um guia básico para começar a trabalhar com Kubernetes. Abaixo estão alguns comandos comuns e práticas recomendadas para iniciar e gerenciar clusters Kubernetes e aplicativos.

## Comandos Básicos

- **kind create cluster**: Cria um cluster Kubernetes.
- **kubectl cluster-info --context kind-kind**: Exibe informações sobre o cluster atual.
- **kubectl get nodes**: Obtém uma lista de todos os nós no cluster.
- **kind get clusters**: Lista todos os clusters existentes.
- **kind delete clusters kind**: Exclui o cluster com o nome "kind".

## Uso do Cluster

- **kind create cluster --config=kind.yaml --name=fullcycler**: Cria um cluster com configurações específicas e um nome personalizado.
- **kubectl config get-clusters**: Obtém uma lista de todos os clusters configurados localmente.
- **kubectl config use-context nome-do-context**: Define o contexto para o cluster especificado.
  
## Gerenciamento de Aplicativos

- **kubectl apply -f k8/pod.yaml**: Aplica a configuração de um pod.
- **kubectl get pods**: Obtém uma lista de todos os pods no cluster.
- **kubectl delete pod nodeserver**: Exclui o pod chamado "nodeserver".
- **kubectl get replicaset**: Obtém informações sobre replicaset.
- **kubectl get replicasets**: Obtém informações sobre todos os replicaset.
- **kubectl delete replicaset nodeserver**: Exclui o replicaset chamado "nodeserver".
- **kubectl rollout history deployment nodeserver**: Exibe o histórico de rollout do deployment chamado "nodeserver".
- **kubectl rollout undo deployment nodeserver**: Desfaz uma atualização do deployment chamado "nodeserver".

## Networking e Acesso

- **kubectl port-forward service/nodeserver-server 4545:4545**: Encaminha a porta 4545 do serviço "nodeserver-server" para a porta 4545 local.
- **kubectl proxy --port=8080**: Inicia um proxy local para acessar o dashboard do Kubernetes em http://localhost:8080/ui.

Este guia fornece apenas uma introdução básica ao Kubernetes. Consulte a documentação oficial do Kubernetes para aprender mais sobre suas capacidades e recursos avançados.
