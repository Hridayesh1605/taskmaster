import { useEffect } from "react";

const student = [
    {
        "studentId": "S001",
        "email": "student1@example.com",
        "password":"123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Math Assignment",
                "taskDescription": "Complete the calculus assignment covering integration and differentiation.",
                "taskDate": "2024-11-15",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Physics Quiz Preparation",
                "taskDescription": "Review chapters 4-6 in preparation for the upcoming physics quiz.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "History Project",
                "taskDescription": "Research and draft the initial section of the history project on ancient civilizations.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Chemistry Exam Study",
                "taskDescription": "Study the periodic table and chemical reactions for the chemistry exam.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "English Literature Essay",
                "taskDescription": "Complete and submit the essay on Shakespearean tragedies.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "studentId": "S002",
        "email": "student2@example.com",
        "password":"123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Lab Report",
                "taskDescription": "Write and submit the lab report on cellular respiration.",
                "taskDate": "2024-11-15",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Math Exam Review",
                "taskDescription": "Review algebra and geometry topics for the upcoming math exam.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "History Essay",
                "taskDescription": "Research and begin writing the essay on World War II.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Physics Lab Preparation",
                "taskDescription": "Prepare for the physics lab on momentum and energy.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Literature Analysis",
                "taskDescription": "Complete the analysis of a short story for literature class.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "studentId": "S003",
        "email": "student3@example.com",
        "password":"123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Chemistry Assignment",
                "taskDescription": "Complete the assignment on acids, bases, and pH levels.",
                "taskDate": "2024-11-16",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Math Study Session",
                "taskDescription": "Attend the study session on advanced calculus.",
                "taskDate": "2024-11-13",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "English Literature Reading",
                "taskDescription": "Read and summarize Act III of 'Macbeth' for class discussion.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Exam Preparation",
                "taskDescription": "Study cell structures and their functions for the biology exam.",
                "taskDate": "2024-11-19",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "World History Research",
                "taskDescription": "Complete research for the paper on ancient Egypt.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "studentId": "S004",
        "email": "student4@example.com",
        "password":"123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Physics Assignment",
                "taskDescription": "Complete problems on Newton's laws of motion.",
                "taskDate": "2024-11-16",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Chemistry Study Group",
                "taskDescription": "Participate in the study group on organic chemistry.",
                "taskDate": "2024-11-14",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Philosophy Essay",
                "taskDescription": "Start drafting the essay on existentialism.",
                "taskDate": "2024-11-10",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Math Test Preparation",
                "taskDescription": "Prepare for the trigonometry test.",
                "taskDate": "2024-11-18",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "History Assignment",
                "taskDescription": "Write an outline for the project on the Roman Empire.",
                "taskDate": "2024-11-12",
                "category": "Assignment"
            }
        ]
    },
    {
        "studentId": "S005",
        "email": "student5@example.com",
        "password":"123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Biology Assignment",
                "taskDescription": "Write up the findings from the plant growth experiment.",
                "taskDate": "2024-11-17",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Physics Exam Study",
                "taskDescription": "Review the physics formulas for the upcoming exam.",
                "taskDate": "2024-11-14",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Chemistry Lab Report",
                "taskDescription": "Complete and submit the lab report on chemical bonding.",
                "taskDate": "2024-11-11",
                "category": "Assignment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "English Literature Exam Prep",
                "taskDescription": "Study the key themes in modernist literature.",
                "taskDate": "2024-11-19",
                "category": "Study"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Geography Assignment",
                "taskDescription": "Create a presentation on climate zones.",
                "taskDate": "2024-11-13",
                "category": "Assignment"
            }
        ]
    }
];


const admin = [
    {
        "id":1,
        "email":"admin@123",
        "password":"123",
    }
];


export const setLocalStorage=()=>{
    localStorage.setItem('student',JSON.stringify(student))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage=()=>{
    
    const studentdata = JSON.parse(localStorage.getItem('student'))
    const admindata = JSON.parse(localStorage.getItem('admin'))
    
    console.log(studentdata,admindata)
    return {studentdata,admindata}
    
}