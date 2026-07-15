// Mapping nom de techno → classe devicon (https://devicon.dev)
// Retourne null si pas d'icône connue : la chip reste en texte seul.

const iconMap: [RegExp, string][] = [
  [/python/i, "devicon-python-plain"],
  [/pandas/i, "devicon-pandas-plain"],
  [/^java$/i, "devicon-java-plain"],
  [/typescript|javascript/i, "devicon-typescript-plain"],
  [/^sql$/i, "devicon-azuresqldatabase-plain"],
  [/postgis|postgres/i, "devicon-postgresql-plain"],
  [/bash/i, "devicon-bash-plain"],
  [/node/i, "devicon-nodejs-plain"],
  [/nestjs/i, "devicon-nestjs-original"],
  [/angular/i, "devicon-angularjs-plain"],
  [/laravel/i, "devicon-laravel-original"],
  [/kafka/i, "devicon-apachekafka-original"],
  [/spark/i, "devicon-apachespark-original"],
  [/docker/i, "devicon-docker-plain"],
  [/^git$/i, "devicon-git-plain"],
  [/github actions/i, "devicon-githubactions-plain"],
  [/github/i, "devicon-github-original"],
  [/airflow/i, "devicon-apacheairflow-plain"],
  [/terraform/i, "devicon-terraform-plain"],
  [/^aws$/i, "devicon-amazonwebservices-plain-wordmark"],
  [/kubernetes/i, "devicon-kubernetes-plain"],
  [/gitlab/i, "devicon-gitlab-plain"],
  [/linux/i, "devicon-linux-plain"],
  [/jira/i, "devicon-jira-plain"],
  [/confluence/i, "devicon-confluence-original"],
  [/notion/i, "devicon-notion-plain"],
  [/vs ?code/i, "devicon-vscode-plain"],
  [/fastapi/i, "devicon-fastapi-plain"],
  [/streamlit/i, "devicon-streamlit-plain"],
  [/php/i, "devicon-php-plain"],
  [/html/i, "devicon-html5-plain"],
  [/scrapy/i, "devicon-python-plain"],
  [/langchain/i, "devicon-python-plain"],
];

export function getTechIcon(name: string): string | null {
  const match = iconMap.find(([re]) => re.test(name.trim()));
  return match ? match[1] : null;
}
