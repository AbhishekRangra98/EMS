const employees = [
  {
    id: 1,
    firstname: "Abhishek",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile the monthly sales report and submit it to management.",
        date: "2025-02-15",
        category: "Reports",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Client Database",
        description: "Ensure all client records are up to date in the CRM system.",
        date: "2025-02-16",
        category: "Database",
        active: false,
        new_task: true,
        completed: false,
        failed: false
      }
    ],
    task_numbers: {
      active: 1,
      new_task: 1,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 2,
    firstname: "Rohit",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Support Training",
        description: "Attend a training session on handling customer complaints.",
        date: "2025-02-17",
        category: "Training",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Follow-up on Invoices",
        description: "Contact clients regarding pending invoices for January.",
        date: "2025-02-18",
        category: "Finance",
        active: false,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "System Maintenance",
        description: "Schedule and oversee IT system updates.",
        date: "2025-02-19",
        category: "IT",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ],
    task_numbers: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0
    }
  },

  {
    id: 3,
    firstname: "Hemant",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing Campaign Review",
        description: "Analyze the performance of the latest marketing campaign.",
        date: "2025-02-20",
        category: "Marketing",
        active: false,
        new_task: false,
        completed: false,
        failed: true
      },
      {
        title: "Social Media Content Creation",
        description: "Design new posts for social media channels.",
        date: "2025-02-21",
        category: "Social Media",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      },
      {
        title: "Schedule Team Meeting",
        description: "Organize a meeting for project updates.",
        date: "2025-02-22",
        category: "Meetings",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ],
    task_numbers: {
      active: 2,
      new_task: 1,
      completed: 0,
      failed: 1
    }
  },

  {
    id: 4,
    firstname: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Presentation",
        description: "Prepare and deliver a presentation for a new client.",
        date: "2025-02-23",
        category: "Sales",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Budget Planning",
        description: "Work on next quarter's budget allocation.",
        date: "2025-02-24",
        category: "Finance",
        active: true,
        new_task: true,
        completed: false,
        failed: false
      }
    ],
    task_numbers: {
      active: 2,
      new_task: 1,
      completed: 0,
      failed: 0
    }
  },

  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review the latest code commits for bugs and improvements.",
        date: "2025-02-25",
        category: "Development",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Update technical documentation for the API.",
        date: "2025-02-26",
        category: "Documentation",
        active: false,
        new_task: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Collaboration",
        description: "Assist team members with debugging issues.",
        date: "2025-02-27",
        category: "Support",
        active: true,
        new_task: false,
        completed: false,
        failed: false
      }
    ],
    task_numbers: {
      active: 2,
      new_task: 0,
      completed: 1,
      failed: 0
    }
  }
];

const admin = {
  id: 1,
  firstName: "admin",
  email: "admin@example.com",
  password: "123"
};

export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
