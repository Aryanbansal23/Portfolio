import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },

  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: FaGithub, color: "#8B5CF6" },
      { name: "OOP", icon: FaGithub, color: "#3B82F6" },
      { name: "DBMS", icon: FaGithub, color: "#06B6D4" },
      { name: "OS", icon: FaGithub, color: "#10B981" },
      { name: "CN", icon: FaGithub, color: "#F59E0B" },
    ],
  },
];

export default skills;