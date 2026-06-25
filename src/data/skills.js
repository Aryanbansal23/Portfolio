import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
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
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },

  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
    ],
  },

  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "AI",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "OpenAI API", icon: FaCode, color: "#10A37F" },
      { name: "Prompt Engineering", icon: FaCode, color: "#06B6D4" },
    ],
  },

  {
    title: "Tools",
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },

  {
    title: "Core CS",
    color: "from-indigo-500 to-cyan-500",
    skills: [
      { name: "DSA", icon: FaCode, color: "#38BDF8" },
      { name: "OOP", icon: FaCode, color: "#8B5CF6" },
      { name: "DBMS", icon: FaCode, color: "#F59E0B" },
      { name: "Operating System", icon: FaCode, color: "#10B981" },
      { name: "Computer Networks", icon: FaCode, color: "#EF4444" },
    ],
  },
];

export default skills;