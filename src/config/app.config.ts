import { Kanban, Users } from "lucide-react";

export const appConfig = {
  title: "IT Start Platform",
  description: "IT Start Platform",
  navItems: [
    {
      href: "/match",
      label: "Поиск кандидатов",
      icon: Users,
    },
    {
      href: "/pipeline",
      label: "Воронка",
      icon: Kanban,
    },
  ],
}