import React from "react";

// 🧩 Import icons from react-icons
import {
  FaAws, FaDocker, FaGitlab, FaGithub, FaJenkins, FaPython, FaNodeJs,
  FaReact, FaSlack, FaJira, FaTrello, FaGit, FaCloud, FaCodeBranch, FaLock,
  FaDev,
  FaCode
} from "react-icons/fa";
import { SiAnsible, SiTerraform, SiMicrosoftazure, SiDocker, SiLoadbalancer, SiAmazonaws, SiHelm, SiVault, SiArgocd, SiAzuredevops, SiGnubash, SiYaml, SiJson, SiKubernetes, SiPostman, SiVisualstudiocode, SiGrafana, SiPrometheus, SiElastic, SiOpentelemetry, SiSonarqube, SiOpenstack, SiDrawio, SiGooglecloud, SiAral, SiArangodb } from "react-icons/si";
import IconTitle from "./resumePage/IconTitle";

const skillGroups = [
  {
    title: "DevOps & Automation",
    groupIcon: FaCodeBranch,
    skills: [
      { name: "CI/CD Pipelines", level: "Expert", value: 95, icon: FaCodeBranch },
      { name: "Jenkins", level: "Advanced", value: 90, icon: FaJenkins },
      { name: "GitLab CI", level: "Advanced", value: 85, icon: FaGitlab },
      { name: "GitHub Actions", level: "Advanced", value: 85, icon: FaGithub },
      { name: "Ansible", level: "Advanced", value: 90, icon: SiAnsible },
      { name: "Terraform", level: "Advanced", value: 85, icon: SiTerraform },
      { name: "Helm", level: "Intermediate", value: 70, icon: SiHelm },
      { name: "Vault", level: "Intermediate", value: 60, icon: SiVault },
      { name: "ArgoCD", level: "Intermediate", value: 75, icon: SiArgocd },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    groupIcon: SiAmazonaws,
    skills: [
      { name: "AWS", level: "Expert", value: 95, icon: SiAmazonaws },
      { name: "Azure", level: "Advanced", value: 85, icon: SiMicrosoftazure },
      { name: "GCP", level: "Intermediate", value: 70, icon: SiGooglecloud },
      { name: "Docker", level: "Expert", value: 95, icon: SiDocker },
      { name: "Kubernetes", level: "Advanced", value: 85, icon: SiKubernetes },
      { name: "OpenStack", level: "Advanced", value: 85, icon: SiOpenstack },
      { name: "Load Balancers", level: "Advanced", value: 85, icon: SiLoadbalancer },
    ],
  },
  {
    title: "Development & Scripting",
    groupIcon: FaCode,
    skills: [
      { name: "Python", level: "Advanced", value: 90, icon: FaPython },
      { name: "Bash", level: "Advanced", value: 85, icon: SiGnubash },
      { name: "JavaScript", level: "Intermediate", value: 70, icon: FaReact },
      { name: "Node.js", level: "Intermediate", value: 70, icon: FaNodeJs },
      { name: "React.js", level: "Intermediate", value: 75, icon: FaReact },
      { name: "YAML", level: "Advanced", value: 90, icon: SiYaml },
      { name: "JSON", level: "Advanced", value: 85, icon: SiJson },
      { name: "Git", level: "Expert", value: 95, icon: FaGit },
    ],
  },
  {
    title: "Monitoring & Observability",
    groupIcon: SiGrafana,
    skills: [
      { name: "Prometheus", level: "Advanced", value: 85, icon: SiPrometheus },
      { name: "Grafana", level: "Advanced", value: 85, icon: SiGrafana },
      { name: "ELK Stack", level: "Intermediate", value: 75, icon: SiElastic },
      { name: "OpenTelemetry", level: "Intermediate", value: 70, icon: SiOpentelemetry },
      { name: "CloudWatch", level: "Advanced", value: 80, icon: FaCloud },
      { name: "Nagios", level: "Intermediate", value: 65, icon: FaLock },
    ],
  },
  {
    title: "Security & Compliance",
    groupIcon: FaLock,
    skills: [
      { name: "IAM Policies", level: "Advanced", value: 85, icon: FaLock },
      { name: "Secrets Management", level: "Advanced", value: 80, icon: SiVault },
      { name: "SonarQube", level: "Advanced", value: 80, icon: SiSonarqube },
      { name: "POD Security", level: "Advanced", value: 85, icon: FaLock },
      { name: "Trevy", level: "Advanced", value: 85, icon: FaLock },
      { name: "Falco", level: "Advanced", value: 80, icon: FaLock },
    ],
  },
  {
    title: "Tools & Collaboration",
    groupIcon: FaSlack,
    skills: [
      { name: "VS Code", level: "Expert", value: 95, icon: SiVisualstudiocode },
      { name: "Postman", level: "Advanced", value: 85, icon: SiPostman },
      { name: "Slack", level: "Expert", value: 90, icon: FaSlack },
      { name: "Jira", level: "Advanced", value: 85, icon: FaJira },
      { name: "Trello", level: "Intermediate", value: 70, icon: FaTrello },
      { name: "Draw.io", level: "Intermediate", value: 75, icon: SiDrawio },
    ],
  },
];

export default function TechnicalSkills() {
  // Group skillGroups into pairs of two
  const groupPairs = [];
  for (let i = 0; i < skillGroups.length; i += 2) {
    groupPairs.push(skillGroups.slice(i, i + 2));
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-0 space-y-6">
      {groupPairs.map((pair, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* First column */}
          <div className="p-6 space-y-4">
            <IconTitle
  title={pair[0].title}
  Icon={pair[0].groupIcon || FaReact}
/>

            {pair[0].skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between text-base font-medium text-white mb-1">
                  <div className="flex items-center space-x-2 text-xl text-gray-300">
                    {skill.icon && <skill.icon className="text-yellow-400" />}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-xl text-gray-300">{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${skill.value}%`,
                      backgroundColor: "#f59e0b",
                      opacity: 0.9,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full bg-gradient-to-b from-gray-800 via-gray-800 to-transparent z-10 transform -translate-x-1/2"
            style={{ width: "1px" }}
          />

          {/* Second column */}
          {pair[1] && (
            <div className="p-6 space-y-4">
              <IconTitle
  title={pair[1].title}
  Icon={pair[1].groupIcon || FaReact}
/>

              {pair[1].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-base font-medium text-white mb-1">
                    <div className="flex items-center space-x-2 text-xl text-gray-300">
                      {skill.icon && <skill.icon className="text-yellow-400" />}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-xl text-gray-300">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.value}%`,
                        backgroundColor: "#f59e0b",
                        opacity: 0.9,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}